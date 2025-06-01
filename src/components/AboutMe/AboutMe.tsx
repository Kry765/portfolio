import aboutData from "../../data/aboutmeData.json";
import type { AboutMeData } from "../../types/Aboutme";
import AboutMeSkills from "./AboutMeSkills";
import AboutMeDescription from "./AboutMeDescription";
import AboutMeEducation from "./AboutMeEducation";
import AboutMeLanguage from "./AboutMeLanguage";

const typedData = aboutData as AboutMeData;

export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row mx-24 my-12">
      <article className="text-center md:text-left md:w-1/2 flex flex-col justify-center">
        <AboutMeDescription
          title={typedData.title}
          description={typedData.description}
        />
        <AboutMeEducation
          schoolSectionTitle={typedData.schoolSectionTitle}
          schoolData={typedData.schoolData}
        />
      </article>
      <article className="md:w-1/2 ">
        <AboutMeSkills
          title={typedData.skillsSectionTitle}
          skills={typedData.skills}
        />
        <AboutMeLanguage
          title={typedData.langSectionTitle}
          lang={typedData.lang}
        />
      </article>
    </section>
  );
}
