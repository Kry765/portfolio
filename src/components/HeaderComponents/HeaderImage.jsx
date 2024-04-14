import handsImage from "../../Assets/hands-820272_640.jpg";

const Image = () => {
  return (
    <img
      src={handsImage}
      className="relative w-[100%] h-[100vh] z-2 md:hidden"
    />
  );
};

const OpacityImage = () => {
  return (
    <div className="absolute bg-[#176b87] opacity-30 z-10 w-2/4 h-full md:hidden"></div>
  );
};

export const HeaderImage = () => {
  return (
    <div className="w-2/4 h-2/4 md:hidden">
      <OpacityImage />
      <Image />
    </div>
  );
};
