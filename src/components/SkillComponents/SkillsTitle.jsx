import Skills from "./Skills.module.scss";

export const TitleSkillContent = (props) => {
  return (
    <h2
      className={`${Skills.SkillsFont} flex md:justify-center my-5 text-4xl font-bold "
       `}
      id="skills"
    >
      {props.My}&nbsp;
      <span className={`${Skills.SkillsFont}text-4xl text-[#019760]`}>
        {props.Skills}
      </span>
    </h2>
  );
};
