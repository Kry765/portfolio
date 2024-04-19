import Myphoto from "../../Assets/myphoto.jpg";
import { BsFillLightningChargeFill } from "../Icon";

function About() {
  const RenderAboutDescriptions = () => {
    return (
      <div className="flex flex-col my-[24px] text-xl">
        <div className="flex my-6">
          <span>
            <BsFillLightningChargeFill className="m-4" />
          </span>
          <p>
            I am currently in my third year of studies at the University of
            Information Technology and Management, majoring in
            <span className="font-bold text-[#176B87]"> Web Developer.</span>
          </p>
        </div>
        <div className="flex my-6">
          <span>
            <BsFillLightningChargeFill className="m-4" />
          </span>
          <p>
            The knowledge I have acquired allows me to create websites which
            become a business card of every company.
          </p>
        </div>
        <div className="flex my-6">
          <span>
            <BsFillLightningChargeFill className="m-4" />
          </span>
          <p>
            I am open to learning the latest technologies so that I can develop
            my passion.
          </p>
        </div>
      </div>
    );
  };

  const RadiusTop = () => {
    return (
      <div className="absolute -top-40 right-0 -z-10 w-96 h-96 bg-[#d9d9d9] rounded-full md:h-76 md:w-76 md:hidden"></div>
    );
  };

  const RadiusBottom = () => {
    return (
      <div className="absolute rounded-full bg-[#176b87] bottom-[-25%] left-[5%] z-10 w-96 h-96 md:hidden"></div>
    );
  };

  const AboutMePhoto = () => {
    return (
      <div className="flex justify-center w-1/2 h-full m-[5rem] md:md:hidden z-20">
        <img src={Myphoto} alt="my photo" className="w-[55%]" />
      </div>
    );
  };

  const AboutMeDescription = (props) => {
    return (
      <div className="flex flex-col mt-5 md:h-[100v] md:items-center md:text-center">
        <h2 className="text-[#176b87] text-4xl font-bold w-full">
          {props.About} <span className="text-4xl text-black">{props.Me}</span>
        </h2>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden flex justify-center items-center flex-row bg-[#ffffff] -z-20">
      <RadiusTop />
      <AboutMePhoto />
      <div>
        <AboutMeDescription About="About" Me="Me" />
        <RenderAboutDescriptions />
      </div>
      <RadiusBottom />
    </div>
  );
}

export default About;
