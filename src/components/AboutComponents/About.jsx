import Myphoto from "../../Assets/myphoto.jpg";
import { BsFillLightningChargeFill } from "../Icon";

function About() {
  const descriptions = [
    "I am currently in my third year of studies at the University of Information Technology and Management, majoring in Web-Developer.",
    "The knowledge I have acquired allows me to create websites which become a business card of every company.",
    "I am open to learning the latest technologies so that I can develop my passion",
  ];

  const renderAboutDescriptions = () => {
    return (
      <ul>
        {descriptions.map((description, index) => (
          <li key={index} className="flex flex-row my-[24px]">
            <span className="my-2 mx-2">
              <BsFillLightningChargeFill />
            </span>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    );
  };

  const RadiusTop = () => {
    return (
      <div className="absolute top-0 right-0 w-96 h-96 -z-10 bg-[#d9d9d9] rounded-full md:hidden"></div>
    );
  };

  const RadiusBottom = () => {
    return (
      <div className="absolute rounded-full bg-[#176b87] bottom-[-25%] left-[5%] -z-10 w-96 h-96 md:hidden"></div>
    );
  };

  const AboutMePhoto = () => {
    return (
      <div className="flex justify-center w-1/2 h-full m-[5rem] md:md:hidden">
        <img src={Myphoto} alt="my photo" className="w-[55%]" />
      </div>
    );
  };

  const AboutMeDescription = (props) => {
    return (
      <div className="flex flex-col md:w-3/4">
        <h2 className="text-[#176b87] text-4xl font-bold md:text-center">
          {props.About} <span className="text-4xl text-black">{props.Me}</span>
        </h2>
        <div>{renderAboutDescriptions()}</div>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden flex justify-center items-center flex-row">
      <RadiusTop />
      <AboutMePhoto />
      <AboutMeDescription About="About" Me="Me" />
      <RadiusBottom />
    </div>
  );
}

export default About;
