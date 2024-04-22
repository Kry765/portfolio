export const HeaderTileText = (props) => {
  return (
    <>
      <h1 className="font-bold animate-fade-right text-5xl md:z-0 w-full text-wrap md:text-center ">
        Hello, My name is
        <span className="text-[#176B87]"> {props.Christopher}</span>
      </h1>
      <h2 className="font-bold text-[#666666] text-4xl p-2 mt-4 mb-4 animate-fade-right md:z-0">
        {props.WebDeveloper}
      </h2>
    </>
  );
};

export default HeaderTileText;
