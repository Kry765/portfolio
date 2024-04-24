import HeaderClass from "./Header.module.scss";

export const HeaderTileText = (props) => {
  return (
    <>
      <h1
        className={`${HeaderClass.headerTitle} text-5xl md:z-0 text-wrap md:text-center`}
      >
        Hello, My name is
        <span className="text-[#176B87]"> {props.Christopher}</span>
      </h1>
      <h2
        className={`${HeaderClass.headerTitle} text-[#666666] text-4xl p-2 mt-4 mb-4 md:z-0`}
      >
        {props.WebDeveloper}
      </h2>
    </>
  );
};

export default HeaderTileText;
