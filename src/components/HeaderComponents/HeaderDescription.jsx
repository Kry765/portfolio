import DecorateHeaderRadius from "./HeaderDecorateRadius";
import HeaderTileText from "./HeaderTitle";
import HeaderBtn from "./HeaderBtn";

export const HeaderDescription = () => {
  return (
    <div className="relative flex justify-center bg-[#d9d9d9] flex-col items-start w-6/12 h-[100vh] p-10 truncate md:w-[100%] md:items-center">
      <DecorateHeaderRadius />
      <HeaderTileText Christopher="Christopher" WebDeveloper="Web-Developer" />
      <HeaderBtn />
    </div>
  );
};
