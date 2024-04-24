import AboutStyles from "./About.module.scss";

export const DecorateAboutRadius = () => {
  return (
    <>
      <div
        className={`${AboutStyles.AboutRadiusDecoration} bg-[#d9d9d9] -top-40 right-0 -z-10`}
      ></div>
      <div
        className={`${AboutStyles.AboutRadiusDecoration}  bg-[#176b87]  bottom-[-25%] left-[5%] z-10`}
      ></div>
    </>
  );
};

export default DecorateAboutRadius;
