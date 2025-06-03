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
  faNpm,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const iconMap = {
  html5: faHtml5,
  css3: faCss3Alt,
  js: faJs,
  php: faPhp,
  docker: faDocker,
  sass: faSass,
  node: faNode,
  github: faGithub,
  npm: faNpm,
  linkedin: faLinkedin,
  envelope: faEnvelope,
  discord: faDiscord,
};

type IconWrapperProps = {
  name: keyof typeof iconMap;
  size?: "xs" | "lg" | "sm" | "1x" | "2x" | "3x" | "5x";
  className?: string;
};

export default function IconWrapper({
  name,
  size = "3x",
  className = "",
}: IconWrapperProps) {
  const icon = iconMap[name];
  if (!icon) return null;

  return (
    <FontAwesomeIcon
      icon={icon}
      size={size}
      fixedWidth
      className={`p-4 hover:pointer ${className}`}
    />
  );
}
