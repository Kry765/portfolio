import { BsFillLightningChargeFill } from "../Icon";
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
} from "../Icon";

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
  "GitHub",
  "Tailwind",
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
  <FaGithub size={30} />,
  <SiTailwindcss size={30} />,
];

const TitleSkillContent = (props) => {
  return (
    <div
      id="skills"
      className="flex w-3/4 md:w-full flex-col my-5 md:h-[100v] md:items-center md:text-center"
    >
      <h2 className="text-[#176b87] w-3/4 text-4xl mx-auto font-bold">
        {props.My} <span className="text-4xl text-black">{props.Skills}</span>
      </h2>
    </div>
  );
};

const SkillContent = () => {
  return (
    <div className="flex flex-col justify-center my-[24px] items-center md:flex-col">
      <div className="flex flex-col text-xl w-3/4">
        <div className="flex my-6">
          <span>
            <BsFillLightningChargeFill className="m-4" />
          </span>
          <p>
            I have experience with frontend technologies like HTML, CSS, JS.
          </p>
        </div>
        <div className="flex my-6">
          <span>
            <BsFillLightningChargeFill className="m-4" />
          </span>
          <p>
            At the moment I work with React technologies, as well as tailwind,
            so I create web applications and websites.
          </p>
        </div>
        <div className="flex my-6">
          <span>
            <BsFillLightningChargeFill className="m-4" />
          </span>
          <p>
            In the meantime, I am developing my expertise with backend languages
            such as sequelize and MySQL.
          </p>
        </div>
        <div className="flex my-6">
          <span>
            <BsFillLightningChargeFill className="m-4" />
          </span>
          <p>
            He applies the produced applications via a Docker on the server,
            making them accessible to most users.
          </p>
        </div>
      </div>
    </div>
  );
};

const SkillCards = () => {
  return (
    <div className="flex justify-center items-center flex-row flex-wrap py-10">
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
  );
};

export default function Skills() {
  return (
    <div className="flex flex-row bg-[#d9d9d9] h-[100%] pt-8 md:flex-wrap md:justify-center">
      <div>
        <TitleSkillContent My="My" Skills="Skills" />
        <SkillContent />
      </div>
      <div className="w-1/2 md:w-full">
        <SkillCards />
      </div>
    </div>
  );
}
