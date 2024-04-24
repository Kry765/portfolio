import AboutTitle from "./About.module.scss";

export const AboutMeTitle = (props) => {
  return (
    <h2 className={`${AboutTitle.AboutFontSize} text-[#176b87] md:text-center`}>
      {props.About}
      <span className={`${AboutTitle.AboutFontSize} text-black`}>
        {props.Me}
      </span>
    </h2>
  );
};

export default AboutMeTitle;
