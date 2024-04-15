import GitHubStatus from "../../Assets/github_status.png";
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
  FaPhp,
  FaGithub,
} from "../Icon";

const descriptionText = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod ipsum pharetra ante sodales faucibus.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod ipsum pharetra ante sodales faucibus.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod ipsum pharetra ante sodales faucibus.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod ipsum pharetra ante sodales faucibus.",
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
    <h2 className="text-[#176b87] text-4xl font-bold mt-8">{props.Skills}</h2>
  );
};

// const ImgGitHub = () => {
//   return (
//     <div>
//       <img src={GitHubStatus} alt="github" />
//     </div>
//   );
// };

const SkillsDescription = () => {
  return descriptionText.map((descriptions, index) => (
    <div className="flex my-6 mx-1 min-w-[50%]" key={index}>
      <div className="mx-4">
        <BsFillLightningChargeFill />
      </div>
      <p>{descriptions}</p>
    </div>
  ));
};

const SkillsCard = () => {
  return description.map((descriptions, index) => (
    <div
      className="flex justify-center items-center flex-col rounded-3xl m-12 p-7 border-solid border-black border"
      key={index}
    >
      <div className="flex p-5">{image[index]}</div>
      <p>{descriptions}</p>
    </div>
  ));
};

export default function Skills() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <SkillsTitle Skills="Skills" />
        <SkillsDescription />
      </div>
      <div className="flex justify-center items-center flex-row flex-wrap">
        <SkillsCard />
      </div>

      {/* <div className="flex flex-wrap justify-center"> */}
      {/* <ImgGitHub /> */}
      {/* </div> */}
    </>
  );
}
