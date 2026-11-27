import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (!techStack.viewSkillBars) {
    return null;
  }

  const midpoint = Math.ceil(techStack.experience.length / 2);
  const skillColumns = [
    techStack.experience.slice(0, midpoint),
    techStack.experience.slice(midpoint)
  ];

  return (
    <section className="proficiency-section" aria-labelledby="proficiency-heading">
      <div className="proficiency-layout">
        <Fade left duration={800} distance="16px">
          <div className="proficiency-content">
            <h2 className="proficiency-heading" id="proficiency-heading">
              Proficiency
            </h2>
            <div className="proficiency-panel">
              <div className="proficiency-columns">
                {skillColumns.map((column, columnIndex) => (
                  <ul className="proficiency-column" key={columnIndex}>
                    {column.map(skill => {
                      const percentage = parseFloat(skill.progressPercentage);
                      return (
                        <li className="proficiency-skill" key={skill.Stack}>
                          <div className="proficiency-skill-heading">
                            <span>{skill.Stack}</span>
                            <span className="proficiency-value">
                              {skill.progressPercentage}
                            </span>
                          </div>
                          <div
                            className="proficiency-meter"
                            role="progressbar"
                            aria-label={skill.Stack}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow={percentage}
                            aria-valuetext={skill.progressPercentage}
                          >
                            <span style={{width: skill.progressPercentage}} />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </Fade>
        <Fade right duration={800} distance="16px">
          <div className="proficiency-visual" aria-hidden="true">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img src={require("../../assets/images/skill.svg")} alt="" />
            )}
          </div>
        </Fade>
      </div>
    </section>
  );
}
