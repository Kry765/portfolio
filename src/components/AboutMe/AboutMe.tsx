import aboutData from "../../data/aboutmeData.json";
import type { AboutMeData } from "../../types/Aboutme";
import type { IconName } from "./AboutMeSkills";
import AboutMeSkills from "./AboutMeSkills";
import AboutMeDescription from "./AboutMeDescription";
import AboutMeEducation from "./AboutMeEducation";
import AboutMeLanguage from "./AboutMeLanguage";

const typedData = aboutData as AboutMeData;
const styleFlexContainer: string = "flex flex-col justify-center items-center";

export default function AboutMe() {
  return (
    <section
      data-aos="fade-right"
      className={`${styleFlexContainer} md;bg-zinc-950 rounded-lg m-4 p-2 md:border md:shadow-[0_0_10px_2px_rgba(147,51,234,0.5)] md:border-purple-900/50 md:items-start md:flex-row gap-24`}
    >
      <article className={`${styleFlexContainer} text-center md:text-left`}>
        <AboutMeDescription
          title={typedData.title}
          description={typedData.description}
        />
        <AboutMeEducation
          schoolSectionTitle={typedData.schoolSectionTitle}
          schoolData={typedData.schoolData}
        />
      </article>
      <article className="p-8">
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
