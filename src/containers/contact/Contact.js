
import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Contact() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <section
        className="main contact-margin-top"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="contact-div-main">
          <div className="contact-header">
            <h2 className="heading contact-title" id="contact-title">
              {contactInfo.title}
            </h2>

            <p className="contact-subtitle">
              {contactInfo.subtitle}
            </p>

            <div className="contact-text-div">
              {contactInfo.number && (
                <a
                  className="contact-detail"
                  href={"tel:" + contactInfo.number.replace(/\s+/g, "")}
                >
                  <i className="fas fa-phone" aria-hidden="true"></i>
                  {contactInfo.number}
                </a>
              )}

              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                <i className="fas fa-envelope" aria-hidden="true"></i>
                {contactInfo.email_address}
              </a>

              <SocialMedia className="contact-social-links" />
            </div>
          </div>

          <div className="contact-image-div">
            <img
              src={require("../../assets/images/contact-character.gif")}
              alt="Aditya's animated character waving hello"
            />
          </div>
        </div>
      </section>
    </Fade>
  );
}
