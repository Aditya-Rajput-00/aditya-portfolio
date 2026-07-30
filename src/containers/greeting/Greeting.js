import React, { useContext, useState } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import dataAnalystResume from "./data-analyst-resume.pdf";
import aiMlResume from "./ai-ml-resume.pdf";
import { FaChartBar, FaRobot, FaArrowRight } from "react-icons/fa";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const [showResumeModal, setShowResumeModal] = useState(false);

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
                  <Button text="Contact me" href="#contact" />

                  <Button
                    text="My Resume"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowResumeModal(true);
                    }}
                  />

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
          <div className="resume-modal-overlay" onClick={closeResumeModal}>
  <div
    className="resume-modal"
    onClick={(e) => e.stopPropagation()}
  >
    <button className="close-modal" onClick={closeResumeModal}>
      ✕
    </button>

    <div className="resume-header">
      <h2>📄 My Resume</h2>
      <p>Which role are you hiring for?</p>
    </div>

    <a
      href={dataAnalystResume}
      target="_blank"
      rel="noreferrer"
      className="resume-option"
    >
      <span>📊 Data Analyst</span>
      <span className="arrow">→</span>
    </a>

    <a
      href={aiMlResume}
      target="_blank"
      rel="noreferrer"
      className="resume-option"
    >
      <span>🤖 AI / ML</span>
      <span className="arrow">→</span>
    </a>
  </div>
</div>
        )}
      </div>
    </Fade>
  );
}
