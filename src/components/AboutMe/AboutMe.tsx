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
    <section className="flex flex-col md:flex-row mx-24 my-12 animate-fade-right animate-once animate-duration-[800ms] animate-delay-0 animate-ease-linear animate-alternate animate-fill-both">
      <article
        className="text-center md:text-left w-full md:w-1/2 flex flex-col justify-start"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
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
        className="w-full md:w-1/2"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
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
