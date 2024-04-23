export const AboutMeTitle = (props) => {
  return (
    <h2 className="text-[#176b87] text-4xl font-bold w-full md:text-center">
      {props.About} <span className="text-4xl text-black">{props.Me}</span>
    </h2>
  );
};
