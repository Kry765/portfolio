import RenderAboutDescriptions from "./RenderAboutDescription";
import AboutMePhoto from "./AboutMePhoto";
import { DecorateAboutRadius } from "./DecorateRadius";
import { AboutMeTitle } from "./AboutMeTitle";

function About() {
  return (
    <section
      className="relative overflow-hidden flex items-center flex-row bg-[#ffffff] -z-20"
      id="aboutme"
    >
      <AboutMePhoto />
      <div>
        <AboutMeTitle About="About" Me="Me" />
        <RenderAboutDescriptions />
      </div>
      <DecorateAboutRadius />
    </section>
  );
}

export default About;
