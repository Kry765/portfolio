import aboutData from "../../data/aboutmeData.json";
import type { AboutMeData } from "../../types/Aboutme";
import type { IconName } from "./AboutMeSkills";
import AboutMeSkills from "./AboutMeSkills";
import AboutMeDescription from "./AboutMeDescription";
import AboutMeEducation from "./AboutMeEducation";
import AboutMeLanguage from "./AboutMeLanguage";

const typedData = aboutData as AboutMeData;

export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 my-12 w-full max-w-6xl mx-auto px-4 md:items-start rounded-lg">
      <article className="text-center md:text-left flex flex-col justify-center items-center md:items-start p-4">
        <AboutMeDescription
          title={typedData.title}
          description={typedData.description}
        />
        <AboutMeEducation
          schoolSectionTitle={typedData.schoolSectionTitle}
          schoolData={typedData.schoolData}
        />
      </article>
      <article className="w-full md:w-auto p-8">
        <AboutMeSkills
          title={typedData.skillsSectionTitle}
          skills={typedData.skills as IconName[]}
        />
        <AboutMeLanguage
          title={typedData.langSectionTitle}
          language={typedData.lang}
        />
      </article>
    </section>
  );
}
