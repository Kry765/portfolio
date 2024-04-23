export const TitleSkillContent = (props) => {
  return (
    <h2
      className="text-[#176b87] my-5 w-3/4 text-4xl mx-auto font-bold md:text-center"
      id="skills"
    >
      {props.My} <span className="text-4xl text-black">{props.Skills}</span>
    </h2>
  );
};

export default TitleSkillContent;
