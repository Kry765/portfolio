import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  SiJavascript,
  SiMysql,
  SiBem,
  FaDocker,
  SiSequelize,
  FaNode,
  FaGithub,
  SiTailwindcss,
} from "../components/Icon";
import LearnPgAppImage from "../Assets/learnpg_project.jpg.png";

export const AboutDescriptionsText = [
  "I am currently in my third year of studies at the University of Information Technology and Management, majoring in Web Developer.",
  "The knowledge I have acquired allows me to create websites which become a business card of every company.",
  "I am open to learning the latest technologies so that I can develop my passion.",
];

export const SkillContentText = [
  "I have experience with frontend technologies like HTML, CSS, JS.",
  "At the moment I work with React technologies, as well as tailwind, so I create web applications and websites.",
  "In the meantime, I am developing my expertise with backend languages such as sequelize and MySQL.",
  " He applies the produced applications via a Docker on the server, making them accessible to most users.",
];

export const SkillCardDescriptions = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "React",
  "MySQL",
  "BEM",
  "Docker",
  "Sequelize",
  "Node.js",
  "GitHub",
  "Tailwind",
];

export const SkillCardIcons = [
  <FaHtml5 size={30} />,
  <FaCss3Alt size={30} />,
  <FaSass size={30} />,
  <SiJavascript size={30} />,
  <FaReact size={30} />,
  <SiMysql size={30} />,
  <SiBem size={30} />,
  <FaDocker size={30} />,
  <SiSequelize size={30} />,
  <FaNode size={30} />,
  <FaGithub size={30} />,
  <SiTailwindcss size={30} />,
];

export const projects = [
  {
    title: "LearnPgApp",
    stack: "React, Express.js, Docker, Sequelize",
    description:
      "Projects for WSIZ as part of engineering work. The web application includes basic topics in SQL databases, which the student can later test through a quiz. ",
    image: LearnPgAppImage,
    GitHubLink: "https://github.com/Kry765/portfolio",
  },
];

export default SkillContentText;
