import IconWrapper from "../../shared/IconWrapper";
import { iconMap } from "../../shared/IconWrapper";

export type IconName = keyof typeof iconMap;

type Props = {
  title: string;
  skills: IconName[];
};

export default function AboutMeSkills({ title, skills }: Props) {
  return (
    <div className="flex justify-center md:justify-start flex-wrap gap-4 max-w-md">
      <h2 className="w-full text-center md:text-left py-2 font-bold text-2xl">
        {title}
      </h2>
      {skills.map((skill, index) => (
        <IconWrapper key={index} name={skill} size="5x" />
      ))}
    </div>
  );
}
