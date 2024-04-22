import { OpacityImage, Image } from "./HeaderImageComponents";

export const HeaderImage = () => {
  return (
    <div className="w-2/4 h-2/4 md:hidden">
      <OpacityImage />
      <Image />
    </div>
  );
};
