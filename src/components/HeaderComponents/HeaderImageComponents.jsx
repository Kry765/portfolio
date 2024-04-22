import React from "react";
import headerPhoto from "../../Assets/hands-820272_640.jpg";

export const Image = React.memo(() => {
  return (
    <img
      src={headerPhoto}
      alt=""
      loading="lazy"
      className="relative w-[100%] h-[100vh] z-2 md:hidden"
    />
  );
});

export const OpacityImage = () => {
  return (
    <div className="absolute bg-[#176b87] opacity-30 z-10 w-2/4 h-full md:hidden"></div>
  );
};
