import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNpm } from "@fortawesome/free-brands-svg-icons";
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
  faNpm,
};

type Props = {
  title: string;
  skills: string[];
};

export default function AboutMeSkills({ title, skills }: Props) {
  return (
    <div className="md:block flex flex-col md:text-left text-center">
      <h2 className="py-2 md:px-6 font-bold text-2xl">{title}</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-xs sm:max-w-md">
        {skills.map((data, index) => (
          <FontAwesomeIcon
            key={index}
            icon={iconMap[data as keyof typeof iconMap]}
            size="5x"
            fixedWidth
            className="p-4 hover:pointer"
          />
        ))}
      </div>
    </div>
  );
}
