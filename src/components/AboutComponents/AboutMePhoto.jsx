import React from "react";
// import foto from "../../Assets/myphoto.jpg";

export const AboutMePhoto = React.memo(() => {
  return (
    <div className="flex justify-center w-1/2 h-full m-[5rem] md:md:hidden z-20">
      <img
        // src={foto}
        loading="lazy"
        alt="This is myself"
        className="flex w-80"
      />
    </div>
  );
});

export default AboutMePhoto;
