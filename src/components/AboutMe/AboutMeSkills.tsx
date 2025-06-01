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

type Props = {
  title: string;
  skills: string[];
};

export default function AboutMeSkills({ title, skills }: Props) {
  return (
    <div className="max-w-auto ">
      <h2 className="py-2 md:px-6 font-bold text-2xl">{title}</h2>
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
  );
}
