import React, {useContext} from "react";
import "./Skills.scss";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "R Programming", "C", "JavaScript"]
  },
  {
    title: "Data Analytics",
    skills: ["Power BI", "Microsoft Excel", "DAX", "Power Query"]
  },
  {
    title: "Data Science and Machine Learning",
    skills: [
      "Pandas",
      "NumPy",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Large Language Models"
    ]
  },
  {
    title: "Full-Stack Development",
    skills: [
      "HTML",
      "CSS",
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "REST API Development"
    ]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Mongoose", "MySQL"]
  },
  {
    title: "Tools and Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "Streamlit",
      "n8n"
    ]
  }
];

const skillIconAliases = {
  "Microsoft Excel": "Excel",
  "Natural Language Processing": "NLP"
};

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }

  const iconsBySkill = skillsSection.softwareSkills.reduce((icons, skill) => {
    icons[skill.skillName] = skill.fontAwesomeClassname;
    return icons;
  }, {});

  return (
    <section
      className={isDark ? "dark-mode main skills-section" : "main skills-section"}
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="skills-main-div">
        <Fade left duration={800} distance="18px">
          <div className="skills-image-div" aria-hidden="true">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt=""
                src={require("../../assets/images/developerActivity.svg")}
              />
            )}
          </div>
        </Fade>
        <Fade right duration={800} distance="18px">
          <div className="skills-text-div">
            <h1 id="skills-heading" className="skills-heading">
              {skillsSection.title}
            </h1>
            <p className="skills-text-subtitle">{skillsSection.subTitle}</p>
            <div className="skill-groups">
              {skillGroups.map((group, groupIndex) => (
                <article className="skill-group" key={group.title}>
                  <h2 id={`skill-group-${groupIndex}`}>{group.title}</h2>
                  <ul className="skill-chip-list" aria-labelledby={`skill-group-${groupIndex}`}>
                    {group.skills.map(skill => {
                      const iconName = skillIconAliases[skill] || skill;
                      const iconClass = iconsBySkill[iconName];
                      return (
                        <li className="skill-chip" key={skill}>
                          {iconClass && (
                            <i className={iconClass} aria-hidden="true" />
                          )}
                          <span>{skill}</span>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
