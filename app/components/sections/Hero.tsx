import Image from "next/image";
import avatar from "@/app/assets/avatar.png";
import { contactLinks } from "@/app/data/contactLinks";
import ContactLinkIcon from "@/app/components/ui/ContactLinkIcon";
import "../styles/globals.css";

export default function Hero() {
  return (
    <section
      id="hero"
      className="md:flex md:items-center md:justify-center w-[100%] h-[100vh] bg-gradient-primary text-header-primary"
    >
      <div className="flex justify-center">
        <div className="bg-red-500 flex justify-center items-center overflow-y-hidden rounded-[50%] m-12 md:min-w-[350px] md:min-h-[350px]">
          <Image
            className="translate-y-4"
            loading="eager"
            src={avatar}
            alt="My avatar"
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-2">
        <div className="flex flex-col gap-2">
          <p className="text-sm">Cześć, jestem</p>
          <h1 className="text-2xl">Krzysztof Klęka</h1>
          <p className="uppercase text-2xl">
            web-<span className="text-header-secondly">developer</span>
          </p>
          <p className="text-text-primary mx-4">
            Jestem programistą frontendowym, który skupia się na tworzeniu
            przejrzystych, responsywnych i przyjaznych dla użytkownika rozwiązań
            internetowych.
          </p>
        </div>
        <ul className="flex justify-center items-center gap-2 my-4">
          {contactLinks.map((link) => (
            <li key={link.href} className="text-text-primary">
              <ContactLinkIcon {...link} />
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-4 mb-8">
          <a
            className="border-btn-accent border-2 px-8 py-2 rounded-md"
            href="#contact"
          >
            Kontakt
          </a>
          <a className="bg-btn-accent px-8 py-2 rounded-md" href="#cv">
            Pokaż CV
          </a>
        </div>
      </div>
    </section>
  );
}
