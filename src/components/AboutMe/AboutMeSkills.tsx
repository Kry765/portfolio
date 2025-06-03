import IconWrapper from "../../hook/iconWrapper";
import { iconMap } from "../../hook/iconWrapper";

type IconName = keyof typeof iconMap;

type Props = {
  title: string;
  skills: IconName[];
};

export default function AboutMeSkills({ title, skills }: Props) {
  return (
    <div className="md:block flex flex-col md:text-left text-center">
      <h2 className="py-2 md:px-6 font-bold text-2xl">{title}</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-xs sm:max-w-md">
        {skills.map((skill, index) => (
          <IconWrapper key={index} name={skill} size="5x" />
        ))}
      </div>
    </div>
  );
}
