import { SkillCardDescriptions, SkillCardIcons } from "../../data/data";

export const SkillCards = () => {
  return (
    <div className="flex justify-center items-center flex-row flex-wrap py-10">
      {SkillCardDescriptions.map((description, index) => (
        <div
          className="flex items-center flex-col flex-wrap rounded-3xl m-1 border-solid border-white border h-32 w-32"
          key={index}
        >
          <div className="p-5">{SkillCardIcons[index]}</div>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};
