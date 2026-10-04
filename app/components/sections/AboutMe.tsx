import PersonalEntry from "../ui/PersonalEntry";
import { personalData } from "@/app/data/personalData";
import { toolsData } from "@/app/data/toolsData";
import EducationEntry from "../ui/EducationEntry";
import { educationData } from "@/app/data/educationData";

export default function AboutMe() {
  return (
    <section id="about-me" className="bg-left min-h-[100vh] text-white">
      <h2>O mnie</h2>
      <div>
        <p>
          Jestem pasjonatem tworzenia oprogramowania, który z entuzjazmem
          podchodzi do projektowania i budowania interaktywnych doświadczeń.
        </p>
      </div>
      <section>
        <h3 className="uppercase">dane osobowe</h3>
        <dl>
          {personalData.map((item) => (
            <PersonalEntry key={item.label} {...item} />
          ))}
        </dl>
      </section>
      <section>
        <h3>Edukacja</h3>
        <dl>
          {educationData.map((item) => (
            <EducationEntry key={item.school} {...item} />
          ))}
        </dl>
      </section>
      <section>
        <h3>Narzędzia</h3>
        <ul>
          {toolsData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
