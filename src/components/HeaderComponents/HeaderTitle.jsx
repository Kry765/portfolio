import HeaderClass from "./Header.module.scss";

export const HeaderTileText = (props) => {
  return (
    <>
      <h1
        className={`${HeaderClass.headerTitle} text-5xl mx-8 md:z-0 text-wrap md:text-center`}
      >
        Hello, My name is
        <span className="text-[#019760]"> {props.Christopher}</span>
      </h1>
      <h2 className={`${HeaderClass.headerTitle} m-8 text-4xl md:z-0`}>
        {props.WebDeveloper}
      </h2>
    </>
  );
};

export default HeaderTileText;
