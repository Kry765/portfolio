import { AboutDescriptionsText, AboutMeIcon } from "../../data/data";

export const RenderAboutDescriptions = () => {
  return AboutDescriptionsText.map((AboutDescriptionText, index) => (
    <div
      className="flex border border-solid w-1/6 border-white p-12 rounded-lg justify-start items-center text-center flex-col m-8 text-xl md:w-1/2"
      key={index}
    >
      <p className="text-[#019760] my-8">{AboutMeIcon[index]}</p>
      <p>{AboutDescriptionText}</p>
    </div>
  ));
};

export default RenderAboutDescriptions;
