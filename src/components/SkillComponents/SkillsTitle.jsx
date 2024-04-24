import Skills from "./Skills.module.scss";

export const TitleSkillContent = (props) => {
  return (
    <h2
      className={`${Skills.SkillsFont} text-[#176b87] my-5 text-4xl font-bold md:text-center"
       `}
      id="skills"
    >
      {props.My}{" "}
      <span className={`${Skills.SkillsFont}text-4xl text-black`}>
        {props.Skills}
      </span>
    </h2>
  );
};
