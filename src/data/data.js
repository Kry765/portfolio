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
} from "../components/Icon";
import { Link } from "react-scroll";

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

export const FooterMenuBottomData = [
  <Link
    to="home"
    smooth={true}
    duration={500}
    className="hover:cursor-pointer hover:text-[#64ccc5]"
  >
    <p className="mt-3 transition-colors duration-700">Home</p>
  </Link>,
  <Link
    to="aboutme"
    smooth={true}
    duration={500}
    className="hover:cursor-pointer hover:text-[#64ccc5]"
  >
    <p className="mt-3 transition-colors duration-700">About Me</p>
  </Link>,
  <Link
    to="skills"
    smooth={true}
    duration={500}
    className="hover:cursor-pointer hover:text-[#64ccc5]"
  >
    <p className="mt-3 transition-colors duration-700">Skills</p>
  </Link>,
  <Link
    to="project"
    smooth={true}
    duration={500}
    className="hover:cursor-pointer hover:text-[#64ccc5]"
  >
    <p className="mt-3 transition-colors duration-700">Project</p>
  </Link>,
  <Link
    to="contact"
    smooth={true}
    duration={500}
    className="hover:cursor-pointer hover:text-[#64ccc5]"
  >
    <p className="mt-3 transition-colors duration-700">Contact</p>
  </Link>,
];

export default SkillContentText;
