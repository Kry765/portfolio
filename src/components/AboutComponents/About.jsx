import { RenderAboutDescriptions } from "./RenderAboutDescription";
import { AboutMeTitle } from "./AboutMeTitle";

export default function About() {
  return (
    <section
      className="relative overflow-hidden flex items-center flex-col -z-20"
      id="aboutme"
    >
      <AboutMeTitle About="About" Me="Me" />
      <div className="flex flex-wrap flex-row justify-center">
        <RenderAboutDescriptions />
      </div>
    </section>
  );
}
