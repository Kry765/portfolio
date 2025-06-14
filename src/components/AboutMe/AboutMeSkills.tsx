import IconWrapper from "../../shared/IconWrapper";
import { iconMap } from "../../shared/IconWrapper";

export type IconName = keyof typeof iconMap;

type Props = {
  title: string;
  skills: IconName[];
};

export default function AboutMeSkills({ title, skills }: Props) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full max-w-md mx-auto">
        <h2 className="py-2 font-bold text-2xl w-full text-center md:text-left text-[#0F6D95]">
          {title}
        </h2>
        {skills.map((skill, index) => (
          <IconWrapper key={index} name={skill} size="5x" />
        ))}
      </div>
    </div>
  );
}
