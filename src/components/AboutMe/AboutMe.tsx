import aboutData from "../../data/aboutmeData.json";
import type { AboutMeData } from "../../types/Aboutme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import AboutMeSkills from "./AboutMeSkills";
import AboutMeDescription from "./AboutMeDescription";

const typedData = aboutData as AboutMeData;

export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row mx-24 my-12">
      <article className="text-center md:text-left md:w-[40%] flex flex-col justify-center">
        <AboutMeDescription
          title={typedData.title}
          description={typedData.description}
        />
        <h2 className="py-2 px-6 font-bold text-2xl">
          {typedData.schoolSectionTitle}
        </h2>
        {typedData.schoolData.map((data, index) => (
          <div key={index}>
            <div>
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div>
              <p className="py-2 md:px-6">{data.years}</p>
              <p className="py-2 md:px-6">{data.label}</p>
            </div>
          </div>
        ))}
      </article>

      <article className="md:w-[60%] flex flex-col items-center">
        <AboutMeSkills
          title={typedData.skillsSectionTitle}
          skills={typedData.skills}
        />
      </article>
    </section>
  );
}
