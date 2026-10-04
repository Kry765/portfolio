import PersonalData from "../ui/PersonalData";
import { personalDataItems } from "@/app/data/personalDataItems";
import EducationData from "../ui/EducationData";
import { educationData } from "@/app/data/educationData";
import { toolsData } from "@/app/data/toolsData";

export default function AboutMe() {
  return (
    <section id="about-me">
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
          {personalDataItems.map((link) => (
            <PersonalData {...link} />
          ))}
        </dl>
      </section>
      <section>
        <h3>Edukacja</h3>
        <dl>
          {educationData.map((items) => (
            <EducationData {...items} />
          ))}
        </dl>
      </section>
      <section>
        <h3>Narzędzia</h3>
        <ul>
          {toolsData.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
