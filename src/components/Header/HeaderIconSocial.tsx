import type { IconLink } from "../../types/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faLinkedin,
  faGithub,
  faEnvelope,
  faDiscord,
};

type Props = {
  className: string;
  socialIconLink: IconLink[];
};

export default function HeaderIconSocial({ className, socialIconLink }: Props) {
  return (
    <div>
      {socialIconLink.map((data, index) => (
        <FontAwesomeIcon
          key={index}
          className={className}
          icon={iconMap[data.icon as keyof typeof iconMap]}
        />
      ))}
    </div>
  );
}
