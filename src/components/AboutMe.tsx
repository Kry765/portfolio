import aboutData from "../data/aboutmeData.json";
import type { AboutMeData } from "../types/Aboutme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPhp,
  faDocker,
  faSass,
  faNode,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const iconMap = {
  faHtml5,
  faCss3Alt,
  faJs,
  faPhp,
  faDocker,
  faSass,
  faNode,
  faGithub,
};

const typedData = aboutData as AboutMeData;

export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row mx-24 my-12">
      <article className="text-center md:text-left md:w-[40%] flex flex-col justify-center">
        <h2 className="py-2 px-6 font-bold text-2xl">{typedData.title}</h2>
        {typedData.description.map((text, i) => (
          <p key={i} className="py-2 md:px-6">
            {text}
          </p>
        ))}

        <h2 className="py-2 px-6 font-bold text-2xl">Edukacja</h2>
        {typedData.schoolData.map((entry, i) => (
          <div key={i}>
            <p className="py-2 md:px-6">{entry.years}</p>
            <p className="py-2 md:px-6">{entry.label}</p>
          </div>
        ))}
      </article>

      <article className="md:w-[60%] flex flex-col items-center">
        <div className="max-w-[50%]">
          <h2 className="py-6 md:px-6 font-bold text-2xl">Umiejętności</h2>
          {typedData.skills.map((iconKey, i) => (
            <FontAwesomeIcon
              key={i}
              icon={iconMap[iconKey as keyof typeof iconMap]}
              size="4x"
              fixedWidth
              className="p-4 hover:pointer"
            />
          ))}
        </div>
      </article>
    </section>
  );
}
