import { UlListIcon } from "../CommonComponents/UlListIcon";
import { SkillContentText } from "../../data/data";

export const SkillContent = () => {
  return SkillContentText.map((SkillContents, index) => (
    <div key={index} className="flex my-6 text-xl">
      <UlListIcon />
      <p>{SkillContents}</p>
    </div>
  ));
};
