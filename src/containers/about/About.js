import React from "react";
import { Fade } from "react-reveal";
import "./About.scss";

export default function About() {
  return (
    <Fade bottom duration={850} distance="20px">
      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-panel">
          <h2 id="about-title">About Me</h2>
          <p className="about-copy">
            Hey, I’m Aditya Singh, a BCA Data Science student at Sri Balaji
            University, Pune. I enjoy finding useful insights in data, building
            machine learning models, and creating technology that solves
            real-world problems.
          </p>
          <p className="about-copy">
            I work with Python, SQL, Power BI, Excel, Machine Learning, Deep
            Learning, and NLP. I also build full-stack applications using
            React, Node.js, Express.js, and MongoDB. My projects—including Smart
            City Dashboard, InfluenceGuard-AI, Telegram Restaurant Chatbot, and
            CampusFind—reflect my interests in analytics, AI, automation, and
            application development.
          </p>
          <p className="about-copy">
            I’m always learning and looking for ways to turn ideas into useful
            solutions.
          </p>
          <img
            className="about-hanging-spidey"
            src={require("../../assets/images/hanging-spidey.png")}
            alt=""
            aria-hidden="true"
          />
        </div>
      </section>
    </Fade>
  );
}
