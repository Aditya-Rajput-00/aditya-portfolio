
import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import spideyLogo from "../../assets/images/spidey-logo.png";
import {
  greeting,
  skillsSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);

  const viewSkills = skillsSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>

        <input className="menu-btn" type="checkbox" id="menu-btn" />

        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>

        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}

          <li>
            <a href="#education">Education</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          {viewResume && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )}

          <li>
            <a href="#contact">Contact</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        <img
          className="header-spidey-logo"
          src={spideyLogo}
          alt="Spider-Man logo"
        />
      </header>
    </Headroom>
  );
}

export default Header;
