import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import personalyData from "../../data/personalyData.json";
import type { PersonalyData } from "../../types/PersonallyData";

const typeData = personalyData as PersonalyData;
export default function Contact() {
  return (
    <div className="flex flex-col items-start justify-around md:flex-row my-12">
      <div className="mt-10 w-full">
        <ContactInfo data={typeData} />
      </div>
      <div className="mt-10 w-full">
        <ContactForm />
      </div>
    </div>
  );
}
