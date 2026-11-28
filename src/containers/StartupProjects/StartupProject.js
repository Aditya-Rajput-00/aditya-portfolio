
import React, { useEffect, useRef, useState } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";

const SWIPE_THRESHOLD = 85;
const TRANSITION_DURATION = 300;
const INTRO_DURATION = 1200;

export default function StartupProject() {
  const [slideState, setSlideState] = useState({
    activeIndex: 0,
    exitDirection: 0,
    enterDirection: 0
  });

  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Scroll entrance animation state
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [isIntroPlaying, setIsIntroPlaying] = useState(false);

  const { activeIndex, exitDirection, enterDirection } = slideState;

  const sectionRef = useRef(null);
  const pointerRef = useRef(null);
  const transitioningRef = useRef(false);

  const transitionTimerRef = useRef(null);
  const enterTimerRef = useRef(null);
  const introTimerRef = useRef(null);

  const projects = bigProjects.projects;

  // Clean up timers when component unmounts
  useEffect(() => {
    return () => {
      window.clearTimeout(transitionTimerRef.current);
      window.clearTimeout(enterTimerRef.current);
      window.clearTimeout(introTimerRef.current);
    };
  }, []);

  // Play the entrance animation when Projects enters the viewport
  useEffect(() => {
    const section = sectionRef.current;

    if (!section || hasEnteredViewport) {
      return undefined;
    }

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setHasEnteredViewport(true);
      return undefined;
    }

    const startIntroAnimation = () => {
      setHasEnteredViewport(true);
      setIsIntroPlaying(true);

      introTimerRef.current = window.setTimeout(() => {
        setIsIntroPlaying(false);
      }, INTRO_DURATION);
    };

    if (!("IntersectionObserver" in window)) {
      startIntroAnimation();
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          startIntroAnimation();
        }
      },
      {
        threshold: 0.2
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasEnteredViewport]);

  if (!bigProjects.display || projects.length === 0) {
    return null;
  }

  function prefersReducedMotion() {
    return (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function stopIntroAnimation() {
    if (isIntroPlaying) {
      window.clearTimeout(introTimerRef.current);
      setIsIntroPlaying(false);
    }
  }

  // Existing project navigation and swipe transition
  function goToProject(direction) {
    if (transitioningRef.current) {
      return;
    }

    stopIntroAnimation();

    const nextIndex =
      (activeIndex + direction + projects.length) % projects.length;

    if (prefersReducedMotion()) {
      setSlideState({
        activeIndex: nextIndex,
        exitDirection: 0,
        enterDirection: 0
      });
      setDragX(0);
      setIsDragging(false);
      return;
    }

    transitioningRef.current = true;

    setSlideState({
      activeIndex,
      exitDirection: direction,
      enterDirection: 0
    });

    setDragX(0);
    setIsDragging(false);

    transitionTimerRef.current = window.setTimeout(() => {
      setSlideState({
        activeIndex: nextIndex,
        exitDirection: 0,
        enterDirection: direction
      });

      transitioningRef.current = false;

      enterTimerRef.current = window.setTimeout(
        () =>
          setSlideState(current => ({
            ...current,
            enterDirection: 0
          })),
        TRANSITION_DURATION
      );
    }, TRANSITION_DURATION);
  }

  // Existing pointer and swipe handling
  function onPointerDown(event) {
    if (
      transitioningRef.current ||
      event.button !== 0 ||
      event.target.closest("a, button")
    ) {
      return;
    }

    stopIntroAnimation();

    pointerRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      horizontal: false
    };

    if (event.currentTarget.setPointerCapture) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  }

  function onPointerMove(event) {
    const pointer = pointerRef.current;

    if (!pointer || pointer.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - pointer.startX;
    const deltaY = event.clientY - pointer.startY;

    if (
      !pointer.horizontal &&
      Math.abs(deltaY) > 10 &&
      Math.abs(deltaY) > Math.abs(deltaX)
    ) {
      pointerRef.current = null;
      setDragX(0);
      setIsDragging(false);
      return;
    }

    if (Math.abs(deltaX) > 8 && Math.abs(deltaX) > Math.abs(deltaY)) {
      pointer.horizontal = true;
      event.preventDefault();
      setIsDragging(true);
      setDragX(deltaX);
    }
  }

  function onPointerUp(event) {
    const pointer = pointerRef.current;

    if (!pointer || pointer.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - pointer.startX;

    pointerRef.current = null;
    setIsDragging(false);

    if (pointer.horizontal && Math.abs(deltaX) >= SWIPE_THRESHOLD) {
      goToProject(deltaX < 0 ? 1 : -1);
    } else {
      setDragX(0);
    }
  }

  function onPointerCancel() {
    pointerRef.current = null;
    setDragX(0);
    setIsDragging(false);
  }

  // Existing keyboard navigation
  function onKeyDown(event) {
    if (event.target.closest("a, button")) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToProject(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToProject(1);
    }
  }

  const previewDirection = exitDirection || (dragX > 0 ? -1 : 1);

  const previewIndex =
    (activeIndex + previewDirection + projects.length) % projects.length;

  const visibleIndexes = [previewIndex, activeIndex];

  return (
    <section
      ref={sectionRef}
      className="featured-projects-section"
      id="projects"
    >
      <div className="featured-projects-inner">

        <header className="featured-projects-heading">
          <p className="featured-projects-kicker">Selected work</p>

          <h1>{bigProjects.title}</h1>

          <p className="featured-projects-subtitle">
            {bigProjects.subtitle}
          </p>
        </header>

        <div
          className="featured-project-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects"
          tabIndex="0"
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
        >
          <div className="featured-project-stage">

            {visibleIndexes.map(index => {
              const project = projects[index];

              const isActive = index === activeIndex;
              const isLeaving = isActive && exitDirection !== 0;
              const isEntering = isActive && enterDirection !== 0;

              const cardClasses = [
                "featured-project-card",
                `featured-project-card--tone-${index + 1}`,

                isActive ? "is-active" : "is-preview",

                isActive && isDragging ? "is-dragging" : "",

                isLeaving
                  ? exitDirection > 0
                    ? "is-leaving-left"
                    : "is-leaving-right"
                  : "",

                isEntering
                  ? enterDirection > 0
                    ? "is-entering-right"
                    : "is-entering-left"
                  : "",

                isIntroPlaying && !isActive
                  ? "is-scroll-intro-preview"
                  : "",

                isIntroPlaying && isActive
                  ? "is-scroll-intro-active"
                  : ""
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <article
                  key={project.projectName}
                  className={cardClasses}
                  aria-hidden={!isActive}
                  aria-label={`${project.projectName}, project ${index + 1
                    } of ${projects.length}`}
                  style={{
                    "--drag-x": isActive ? `${dragX}px` : "0px",
                    "--drag-rotate": isActive
                      ? `${dragX * 0.025}deg`
                      : "0deg"
                  }}
                >
                  <div className="featured-project-image">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={
                          isActive
                            ? `${project.projectName} preview`
                            : ""
                        }
                        draggable="false"
                      />
                    ) : (
                      <div
                        className="featured-project-image-placeholder"
                        aria-hidden="true"
                      >
                        {project.projectName}
                      </div>
                    )}
                  </div>

                  <div className="featured-project-detail">
                    <p className="featured-project-number">
                      Project {String(index + 1).padStart(2, "0")}
                      <span>
                        {" "}
                        / {String(projects.length).padStart(2, "0")}
                      </span>
                    </p>

                    <h2>{project.projectName}</h2>

                    <p className="featured-project-description">
                      {project.projectDesc}
                    </p>

                    {project.footerLink ? (
                      <div className="featured-project-links">
                        {project.footerLink.map(link => (
                          <a
                            key={link.url}
                            className={
                              /github\.com/i.test(link.url)
                                ? "featured-project-link--github"
                                : "featured-project-link--demo"
                            }
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            tabIndex={isActive ? 0 : -1}
                            aria-label={`${/github\.com/i.test(link.url)
                                ? "GitHub"
                                : "Live Demo"
                              } for ${project.projectName
                              } (opens in a new tab)`}
                          >
                            {/github\.com/i.test(link.url)
                              ? "GitHub"
                              : "Live Demo"}

                            <span aria-hidden="true">&#8599;</span>
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}

          </div>

          <nav
            className="featured-project-controls"
            aria-label="Project navigation"
          >
            <button
              type="button"
              onClick={() => goToProject(-1)}
              aria-label="Previous project"
            >
              <span aria-hidden="true">&#8592;</span>
            </button>

            <p aria-live="polite">
              {String(activeIndex + 1).padStart(2, "0")}

              <span>
                {" "}
                / {String(projects.length).padStart(2, "0")}
              </span>

              <span className="featured-project-sr-only">
                Current project: {projects[activeIndex].projectName}
              </span>
            </p>

            <button
              type="button"
              onClick={() => goToProject(1)}
              aria-label="Next project"
            >
              <span aria-hidden="true">&#8594;</span>
            </button>
          </nav>

          <p className="featured-project-hint">
            Drag or swipe to explore&nbsp;&middot;&nbsp;use arrow keys
          </p>

        </div>
      </div>
    </section>
  );
}
