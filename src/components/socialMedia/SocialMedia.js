import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia({className = ""}) {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className={`social-media-div ${className}`.trim()}>
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          aria-label="GitLab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-gitlab" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          aria-label="Medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          aria-label="Stack Overflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-stack-overflow" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.kaggle ? (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          aria-label="Kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-kaggle" aria-hidden="true"></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
