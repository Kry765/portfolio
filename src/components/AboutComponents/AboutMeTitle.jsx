import AboutTitle from "./About.module.scss";

export const AboutMeTitle = (props) => {
  return (
    <h2 className={`${AboutTitle.AboutFontSize} text-center text-[#019760]`}>
      {props.About}{" "}
      <span className={`${AboutTitle.AboutFontSize} text-white`}>
        {props.Me}
      </span>
    </h2>
  );
};

export default AboutMeTitle;
