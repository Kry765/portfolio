import { RenderAboutDescriptions } from "./RenderAboutDescription";
import { AboutMePhoto } from "./AboutMePhoto";
import { DecorateAboutRadius } from "./DecorateRadius";
import { AboutMeTitle } from "./AboutMeTitle";

export default function About() {
  return (
    <section
      className="relative overflow-hidden flex items-center flex-row -z-20"
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
