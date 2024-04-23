export const TitleProject = (props) => {
  return (
    <div
      id="project"
      className="flex w-full mt-12 md:w-full flex-col my-5 justify-end md:h-[100v] md:items-end"
    >
      <h2 className="text-[#176b87] md:items-center mx-24 text-4xl font-bold text-right md:text-center">
        {props.My} <span className="text-4xl text-black">{props.Project}</span>
      </h2>
    </div>
  );
};

export default TitleProject;
