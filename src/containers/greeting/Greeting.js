import React, { useContext, useEffect, useRef, useState } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { FaChartBar, FaRobot, FaArrowRight } from "react-icons/fa";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const resumeTriggerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const resumeModalWasOpenRef = useRef(false);

  useEffect(() => {
    if (!showResumeModal) {
      if (resumeModalWasOpenRef.current && resumeTriggerRef.current) {
        resumeTriggerRef.current.focus();
      }
      resumeModalWasOpenRef.current = false;
      return undefined;
    }

    resumeModalWasOpenRef.current = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = event => {
      if (event.key === "Escape") {
        setShowResumeModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showResumeModal]);

  const closeResumeModal = () => {
    setShowResumeModal(false);
  };

  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div>
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                <div className="greeting-profile-container">
                  <img
                    src={require("../../assets/images/profile.png")}
                    alt="Aditya Singh"
                    className="profile-image-greeting"
                  />
                  <div className="greeting-profile-text">
                    <h5 className="greeting-profile-name">Aditya Singh</h5>
                    <p className="greeting-profile-badge">Data Science Student</p>
                  </div>
                </div>
                <h1
                  className={isDark ? "dark-mode greeting-text" : "greeting-text"}
                >
                  {" "}
                  {greeting.title}{" "}
                  <span className="wave-emoji">{emoji("👋")}</span>
                </h1>
                <p
                  className={
                    isDark
                      ? "dark-mode greeting-text-p"
                      : "greeting-text-p subTitle"
                  }
                >
                  {greeting.subTitle}
                </p>
                <div id="resume" className="empty-div"></div>
                <SocialMedia />
                <div className="button-greeting-div">
                  <Button text="Contact Me" href="#contact" />
                  <div>
                    <a
                      ref={resumeTriggerRef}
                      className="main-button"
                      href={greeting.resumeLink}
                      aria-haspopup="dialog"
                      aria-expanded={showResumeModal}
                      aria-controls="resume-modal-title"
                      onClick={event => {
                        event.preventDefault();
                        setShowResumeModal(true);
                      }}
                    >
                      My Resume
                    </a>
                  </div>

                </div>
              </div>
            </div>
            <div className="greeting-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={landingPerson} />
              ) : (
                <img
                  alt="man sitting on table"
                  src={require("../../assets/images/manOnTable.svg")}
                ></img>
              )}

            </div>
          </div>
        </div>
        {showResumeModal && (
          <div
            className="resume-modal-overlay"
            onClick={closeResumeModal}
            role="presentation"
          >
            <section
              className="resume-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-modal-title"
              onClick={event => event.stopPropagation()}
            >
              <div className="resume-header">
                <div>
                  <h2 id="resume-modal-title">My Resume</h2>
                  <p>Preview or download my resume.</p>
                </div>
                <div className="resume-modal-actions">
                  <a
                    className="resume-download"
                    href={greeting.resumeLink}
                    download="Aditya-Singh-Resume.pdf"
                  >
                    Download PDF
                  </a>
                  <button
                    ref={closeButtonRef}
                    className="close-modal"
                    type="button"
                    onClick={closeResumeModal}
                    aria-label="Close resume preview"
                  >
                    ×
                  </button>
                </div>
              </div>
              <iframe
                className="resume-preview"
                src={greeting.resumeLink + "#view=FitH"}
                title="Aditya Singh resume preview"
              />
            </section>
          </div>
        )}
      </div>
    </Fade>
  );
}
