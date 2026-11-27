import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-reveal";
import { FaArrowDown, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import "./Greeting.scss";
import { greeting } from "../../portfolio";

const cvOptions = [
  {
    name: "Data Analyst",
    filename: "data-analyst-resume.pdf",
    file: require("./data-analyst-resume.pdf")
  },
  {
    name: "AI/ML",
    filename: "ai-ml-resume.pdf",
    file: require("./ai-ml-resume.pdf")
  }
];

export default function Greeting() {
  const [isCvChooserOpen, setIsCvChooserOpen] = useState(false);
  const [selectedCv, setSelectedCv] = useState(null);
  const cvTriggerRef = useRef(null);
  const dialogRef = useRef(null);
  const firstChoiceRef = useRef(null);
  const previewBackRef = useRef(null);
  const chooserWasOpenRef = useRef(false);

  useEffect(() => {
    if (!isCvChooserOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTarget = selectedCv ? previewBackRef.current : firstChoiceRef.current;
    if (focusTarget) {
      focusTarget.focus();
    }

    const handleKeyDown = event => {
      if (event.key === "Escape") {
        event.preventDefault();
        if (selectedCv) {
          setSelectedCv(null);
        } else {
          setIsCvChooserOpen(false);
        }
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll(
          'button:not([disabled]), a[href], iframe[tabindex="0"]'
        );
        if (focusableElements.length === 0) {
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCvChooserOpen, selectedCv]);

  useEffect(() => {
    if (isCvChooserOpen) {
      chooserWasOpenRef.current = true;
      return;
    }

    if (chooserWasOpenRef.current && cvTriggerRef.current) {
      cvTriggerRef.current.focus();
    }
    chooserWasOpenRef.current = false;
  }, [isCvChooserOpen]);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="24px">
      <section className="greet-main" id="top" aria-labelledby="greeting-title">
        <div className="greeting-main" id="greeting">
          <div className="greeting-copy">
            <div className="greeting-quote-badge">
              <FaQuoteLeft aria-hidden="true" />
              <span>Data Science · Analytics · AI</span>
            </div>
            <p className="greeting-eyebrow">Hi, I’m</p>
            <h1 id="greeting-title" className="greeting-text">
              Aditya Singh<span className="greeting-period">.</span>
            </h1>
            <p className="greeting-text-p">
              Data Science student focused on analytics, machine learning, and
              automation.
            </p>
            <div className="button-greeting-div">
              <button
                ref={cvTriggerRef}
                type="button"
                className="greeting-action"
                onClick={() => setIsCvChooserOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={isCvChooserOpen}
                aria-controls="cv-dialog"
              >
                Download CV <FaArrowDown aria-hidden="true" />
              </button>
              <a className="greeting-action" href="#projects">
                Explore My Projects <FaArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="greeting-visual-column">
            <article
              className="greeting-profile-card"
              aria-label="Aditya Singh, Data Science"
            >
              <header className="greeting-profile-heading">
                <h2>Aditya Singh</h2>
                <p>Data Science</p>
              </header>
              <div className="greeting-profile-photo-wrap">
                <img
                  src={require("../../assets/images/aditya-profile.png")}
                  alt="Portrait of Aditya Singh"
                  className="greeting-profile-photo"
                />
                <div className="greeting-contact-strip">
                  <div className="greeting-contact-identity">
                    <img
                      src={require("../../assets/images/spidey-logo.png")}
                      alt=""
                      aria-hidden="true"
                      className="greeting-spidey-logo"
                    />
                    <span>Data Science</span>
                  </div>
                  <a className="greeting-contact-link" href="#contact">
                    Contact Me
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
        {isCvChooserOpen && (
          <div
            className="cv-modal-overlay"
            onClick={() => setIsCvChooserOpen(false)}
            role="presentation"
          >
            <section
              ref={dialogRef}
              className={`cv-modal${selectedCv ? " cv-modal-previewing" : ""}`}
              id="cv-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cv-dialog-title"
              aria-describedby="cv-dialog-description"
              onClick={event => event.stopPropagation()}
            >
              <header className="cv-modal-header">
                <div>
                  <p className="cv-modal-eyebrow">Curriculum vitae</p>
                  <h2 id="cv-dialog-title">
                    {selectedCv ? selectedCv.name : "Choose a CV"}
                  </h2>
                  <p className="cv-modal-description" id="cv-dialog-description">
                    {selectedCv
                      ? "Preview your selected CV or download a copy."
                      : "Select the version you’d like to view."}
                  </p>
                </div>
                <button
                  className="cv-modal-close"
                  type="button"
                  onClick={() => setIsCvChooserOpen(false)}
                  aria-label="Close CV chooser"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </header>

              {selectedCv ? (
                <>
                  <div className="cv-preview-toolbar">
                    <button
                      ref={previewBackRef}
                      className="cv-modal-secondary-action"
                      type="button"
                      onClick={() => setSelectedCv(null)}
                    >
                      <FaArrowRight aria-hidden="true" />
                      Back to CV choices
                    </button>
                    <a
                      className="cv-modal-download-action"
                      href={selectedCv.file}
                      download={selectedCv.filename}
                    >
                      <FaArrowDown aria-hidden="true" />
                      Download {selectedCv.name} CV
                    </a>
                  </div>
                  <iframe
                    className="cv-preview-frame"
                    src={selectedCv.file}
                    title={`${selectedCv.name} CV preview`}
                    tabIndex="0"
                  />
                </>
              ) : (
                <div className="cv-choice-list" aria-label="CV options">
                  {cvOptions.map((cv, index) => (
                    <button
                      key={cv.filename}
                      ref={index === 0 ? firstChoiceRef : null}
                      className="cv-choice-option"
                      type="button"
                      onClick={() => setSelectedCv(cv)}
                    >
                      <span className="cv-choice-icon" aria-hidden="true">
                        PDF
                      </span>
                      <span className="cv-choice-copy">
                        <strong>{cv.name}</strong>
                        <span>Open CV preview</span>
                      </span>
                      <FaArrowRight aria-hidden="true" />
                    </button>
                  ))}
                </div>
              )}
            </section>
          </div>
        )}
      </section>
    </Fade>
  );
}
