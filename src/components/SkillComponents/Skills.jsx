import { BsFillLightningChargeFill } from "../Icon";
import GitHubStatus from "../../Assets/github_status.png";
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
  FaPhp,
  FaGithub,
} from "../Icon";

const descriptionText = [
  "I have experience with frontend technologies like HTML, CSS, JS.",
  "At the moment I work with React technologies, as well as tailwind, so I create web applications and websites.",
  "In the meantime, I am developing my expertise with backend languages such as sequelize and MySQL.",
  "He applies the produced applications via a Docker on the server, making them accessible to most users.",
];

const description = [
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
  "PHP",
  "GitHub",
];

const image = [
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
  <FaPhp size={30} />,
  <FaGithub size={30} />,
];

const SkillsTitle = (props) => {
  return (
    <h2 className="text-4xl font-bold mx-8">
      My <span className="text-[#176b87]">{props.Skills}</span>
    </h2>
  );
};

const ImgGitHub = () => {
  return (
    <div>
      <img src={GitHubStatus} alt="progress github" className="m-10" />
    </div>
  );
};

const SkillContent = () => {
  return (
    <div className="flex justify-center items-center w-full h-[100%] md:flex-col">
      <div className="text-xl mx-4 w-1/2">
        {descriptionText.map((descriptions, index) => (
          <div className="flex my-6 mx-1 min-w-[50%]" key={index}>
            <div className="mx-4">
              <BsFillLightningChargeFill />
            </div>
            <p>{descriptions}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center flex-row w-1/2 flex-wrap m-4 p-4">
        {description.map((descriptions, index) => (
          <div
            className="flex items-center flex-col flex-wrap rounded-3xl m-1 border-solid border-black border h-32 w-32"
            key={index}
          >
            <div className="p-5">{image[index]}</div>
            <p>{descriptions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="flex flex-row bg-[#d9d9d9] h-[100%] md:flex-wrap py-14 md:justify-center">
      <div className="flex flex-col min-w-[50%] md:w-full">
        <SkillsTitle Skills="Skills" />
        <SkillContent />
      </div>
    </div>
  );
}
