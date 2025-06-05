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
    <section className="flex flex-col items-start justify-around md:flex-row my-12">
      <article
        className="text-center md:text-left w-auto md:w-auto flex flex-col justify-start"
        // data-aos="fade-right"
        // data-aos-easing="ease-in-sine"
      >
        <AboutMeDescription
          title={typedData.title}
          description={typedData.description}
        />
        <AboutMeEducation
          schoolSectionTitle={typedData.schoolSectionTitle}
          schoolData={typedData.schoolData}
        />
      </article>
      <article
        className="w-full md:w-auto"
        // data-aos="fade-right"
        // data-aos-easing="ease-in-sine"
      >
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
