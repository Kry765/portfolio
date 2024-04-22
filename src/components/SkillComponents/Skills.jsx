import {
  SkillContentText,
  SkillCardDescriptions,
  SkillCardIcons,
} from "../../data/data";
import UlListIcon from "../CommonComponents/UlListIcon";

const TitleSkillContent = (props) => {
  return (
    <div id="skills" className="w-3/4 md:w-full my-5 md:h-[100v]md:text-center">
      <h2 className="text-[#176b87] w-3/4 text-4xl mx-auto font-bold">
        {props.My} <span className="text-4xl text-black">{props.Skills}</span>
      </h2>
    </div>
  );
};

const SkillContent = () => {
  return (
    <div className="flex flex-col md:flex-col">
      {SkillContentText.map((SkillContents, index) => (
        <div key={index} className="flex">
          <UlListIcon />
          <p>{SkillContents}</p>
        </div>
      ))}
    </div>
  );
};

const SkillCards = () => {
  return (
    <div className="flex justify-center items-center flex-row flex-wrap py-10">
      {SkillCardDescriptions.map((description, index) => (
        <div
          className="flex items-center flex-col flex-wrap rounded-3xl m-1 border-solid border-black border h-32 w-32"
          key={index}
        >
          <div className="p-5">{SkillCardIcons[index]}</div>
          <p>{description}</p>
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
