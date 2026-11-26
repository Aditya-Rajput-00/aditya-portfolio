/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aditya Singh",
  title: "Hi all, I'm Aditya",
  subTitle: emoji(
    "Data Science student focused on Data Analytics, Data Science, AI and Machine Learning, Deep Learning, and Automation. I also build full-stack applications, combining Python, SQL, and Power BI with React, Node.js, and MongoDB."
  ),
  resumeLink:
    "/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Aditya-Rajput-00",
  linkedin: "https://www.linkedin.com/in/adityasingh00-ai/",
  gmail: "adityasinghstudent2002@gmail.com",
  instagram: "https://www.instagram.com/aditya.singh.00/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA ANALYTICS, DATA SCIENCE, AI/ML, AUTOMATION, AND FULL-STACK APPLICATION DEVELOPMENT",
  skills: [
    emoji("\u26A1 Programming Languages: Python, SQL, R, C, JavaScript"),
    emoji("\u26A1 Data Analytics & Business Intelligence: Power BI, Microsoft Excel, DAX, Power Query"),
    emoji("\u26A1 Data Science & Processing: Pandas, NumPy, Exploratory Data Analysis, Feature Engineering"),
    emoji("\u26A1 AI & Machine Learning: Machine Learning, Deep Learning, Natural Language Processing, Scikit-learn, TensorFlow, PyTorch, Large Language Models"),
    emoji("\u26A1 Frontend Development: HTML, CSS, React, Vite"),
    emoji("\u26A1 Backend Development: Node.js, Express.js, REST API Development"),
    emoji("\u26A1 Databases: MongoDB, Mongoose, MySQL"),
    emoji("\u26A1 Tools & Platforms: Git, GitHub, VS Code, Jupyter Notebook, Google Colab, Streamlit, n8n")
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Deep Learning",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "NLP",
      fontAwesomeClassname: "fas fa-comments"
    },
    {
      skillName: "R Programming",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "Express.js",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "n8n",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sri Balaji University",
      subHeader: "Bachelor of Computer Applications (BCA) - Data Science",
      duration: "2023 - 2027",
      desc: "Pursuing BCA with specialization in Data Science, focusing on Python, SQL, Machine Learning, Data Analytics, and AI applications.",
      descBullets: [
        "Building real-world Data Science and AI projects",
        "Learning Machine Learning, Deep Learning, NLP, and Analytics",
        "Developing practical solutions using Python and modern data tools"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL",
      progressPercentage: "70%"
    },
    {
      Stack: "Power BI",
      progressPercentage: "85%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "75%"
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "50%"
    },
    {
      Stack: "NLP",
      progressPercentage: "60%"
    },
    {
      Stack: "R Programming",
      progressPercentage: "65%"
    },
    {
      Stack: "DATA ANALYTICS",
      progressPercentage: "80%"
    },
    {
      Stack: "n8n",
      progressPercentage: "60%"
    },
    {
      Stack: "MongoDB",
      progressPercentage: "50%"
    },
    {
      Stack: "React",
      progressPercentage: "30%"
    },
    {
      Stack: "Node.js",
      progressPercentage: "40%"
    },
    {
      Stack: "Mongoose",
      progressPercentage: "50%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "Real-World Data Science, Analytics & AI Projects",
  projects: [
    {
      image: require("./assets/images/campusFind.png"),
      projectName: "CampusFind",
      projectDesc: "Responsive campus lost-and-found platform for reporting, browsing, and filtering items, submitting claims, tracking matches, receiving notifications, and viewing dashboard statistics. Includes user authentication and authorization; built with React 19, Vite 8, Node.js, Express 5, MongoDB, Mongoose, Axios, REST APIs, and JWT.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Aditya-Rajput-00/CampusFind"
        },
        {
          name: "Live Demo",
          url: "https://campus-find-qx9y.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/smartCityDashboard.png"),
      projectName: "Smart City Dashboard",
      projectDesc: "Interactive Power BI dashboard for smart city analytics including crime, traffic, air quality, and population insights.",
      footerLink: [
        {
          name: "💻 GitHub",
          url: "https://github.com/Aditya-Rajput-00/Smart-City-Dashboard"
        },
        {
          name: "🌐 Live Demo",
          url: "https://app.powerbi.com/view?r=eyJrIjoiZGI1ZjBiZmQtNDExNi00ZDk3LWJkNWMtNDljMDRkNTFjYTA2IiwidCI6IjcwMzY2YzAyLTkwOTUtNDMwOS04MDFhLTQ1MzUyOTUwYzg0MiJ9"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dashboard_home.png"),
      projectName: "InfluenceGuard-AI",
      projectDesc: "AI-powered influencer analytics dashboard using Python, Streamlit, Plotly & Machine Learning for fake influencer detection, trust score analysis, anomaly detection, and brand risk analytics.",
      footerLink: [
        {
          name: "💻 GitHub",
          url: "https://github.com/Aditya-Rajput-00/InfluenceGuard-AI"
        },
        {
          name: "🌐 Live Demo",
          url: "https://influenceguard-ai.streamlit.app/"
        }
      ]
    },
    {
      image: require("./assets/images/Telegram_chart.png"),
      projectName: "Telegram Restaurant Chatbot",
      projectDesc: "Telegram chatbot for restaurant queries, reservations, and automated email notifications using workflow automation.",
      footerLink: [
        {
          name: "💻 GitHub",
          url: "https://github.com/Aditya-Rajput-00/telegram-restaurant-chatbot"
        }]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in Data Science, Analytics, AI, or collaboration? Feel free to reach out.",
  number: "+91 7370032606",
  email_address: "adityasinghstudent2002@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
