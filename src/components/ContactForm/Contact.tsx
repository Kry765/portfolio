import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import personalyData from "../../data/personalyData.json";
import type { PersonalyData } from "../../types/PersonalyData";

const typeData = personalyData as PersonalyData;

export default function Contact() {
  return (
    <section className="md:w-[95%] w-auto rounded-lg mx-auto bg-white flex flex-col items-start justify-around md:flex-row px-4 md:px-24 bg-gray-100">
      <div className="w-full">
        <ContactInfo data={typeData} />
      </div>
      <div className="w-full">
        <ContactForm />
      </div>
    </section>
  );
}
