import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import personalyData from "../../data/personalyData.json";
import type { PersonalyData } from "../../types/PersonalyData";

const typeData = personalyData as PersonalyData;

export default function Contact() {
  return (
    <div className="w-[80%] mx-auto bg-white flex flex-col items-start justify-around md:flex-row py-12 px-24">
      <div className="w-full">
        <ContactInfo data={typeData} />
      </div>
      <div className="w-full ">
        <ContactForm />
      </div>
    </div>
  );
}
