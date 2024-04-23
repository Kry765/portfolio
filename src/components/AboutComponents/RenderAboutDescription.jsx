import UlListIcon from "../CommonComponents/UlListIcon";
import AboutDescriptionsText from "../../data/data";

export const RenderAboutDescriptions = () => {
  return AboutDescriptionsText.map((AboutDescriptionText, index) => (
    <div className="flex my-6 text-xl" key={index}>
      <UlListIcon />
      <p>{AboutDescriptionText}</p>
    </div>
  ));
};

export default RenderAboutDescriptions;
