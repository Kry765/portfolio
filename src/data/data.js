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
  MdEmail,
  SiTailwindcss,
  FaPhone,
  FaLocationDot,
  SiCloudflarepages,
  SiPagespeedinsights,
  MdCastForEducation,
} from "../components/Icon";
import NavStyle from "../components/NavigationComponents/NavigationStyle.module.scss";

export const navigationText = [
  <a href="#home" className={NavStyle.navSpace}>
    Home
  </a>,
  <a href="#aboutme" className={NavStyle.navSpace}>
    About me
  </a>,
  <a href="#skills" className={`${NavStyle.navSpace}`}>
    Skills
  </a>,
  <a href="#project" className={NavStyle.navSpace}>
    Project
  </a>,
  <a href="#contact" className={NavStyle.navSpace}>
    Contact
  </a>,
];

export const AboutMeIcon = [
  <MdCastForEducation size={60} />,
  <SiCloudflarepages size={60} />,
  <SiPagespeedinsights size={60} />,
];

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

export const FooterIconContactMe = [
  <MdEmail />,
  <FaPhone />,
  <FaLocationDot />,
];

export const FooterTextContactMe = [
  "krzysztofkleka91@gmail.com",
  "573-226-219",
  "Żywiec, Poland",
];

export const FooterBottomMenuData = [
  <a
    href="home"
    className="mt-3 transition-colors duration-700 hover:cursor-pointer hover:text-[#019760]"
  >
    Home
  </a>,

  <a
    href="/#aboutme"
    className="mt-3 transition-colors duration-700 hover:cursor-pointer hover:text-[#019760]"
  >
    About Me
  </a>,

  <a
    href="/#skills"
    className="mt-3 transition-colors duration-700 hover:cursor-pointer hover:text-[#019760]"
  >
    Skills
  </a>,
  <a
    href="/#project"
    className="mt-3 transition-colors duration-700 hover:cursor-pointer hover:text-[#019760]"
  >
    Project
  </a>,
  <a
    href="/#contact"
    className="mt-3 transition-colors duration-700 hover:cursor-pointer hover:text-[#64ccc5]"
  >
    Contact
  </a>,
];
