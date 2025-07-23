import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import personalyData from "../../data/personalyData.json";
import type { PersonalyData } from "../../types/PersonalyData";

const typeData = personalyData as PersonalyData;

export default function Contact() {
  return (
    <section className="bg-zinc-950 w-auto rounded-lg m-4 flex flex-col items-start justify-around md:flex-row px-4 md:px-24 border shadow-[0_0_10px_2px_rgba(147,51,234,0.5)] border-purple-900/50">
      <div className="w-full">
        <ContactInfo data={typeData} />
      </div>
      <div className="w-full">
        <ContactForm />
      </div>
    </section>
  );
}
