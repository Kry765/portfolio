import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col items-start justify-around md:flex-row my-12">
      <div className="mt-10 w-full">
        <ContactInfo />
      </div>
      <div className="mt-10 w-full">
        <ContactForm />
      </div>
    </div>
  );
}
