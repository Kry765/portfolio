import { SkillContent } from "./SkillsContent";
import { TitleSkillContent } from "./SkillsTitle";
import { SkillCards } from "./SkillsCard";

export default function Skills() {
  return (
    <section className="flex flex-row px-12 h-[100%] pt-8 md:flex-wrap md:justify-center">
      <div>
        <TitleSkillContent My="My" Skills="Skills" />
        <SkillContent />
      </div>
      <div className="w-1/2 md:w-full">
        <SkillCards />
      </div>
    </section>
  );
}
