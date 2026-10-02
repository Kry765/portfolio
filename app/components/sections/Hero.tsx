import Image from "next/image";
import avatar from "@/app/assets/avatar.png";
import { contactLinks } from "@/app/data/contactLinks";
import ContactLinkIcon from "@/app/components/ui/ContactLinkIcon";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-section"
      className="flex bg-hero items-center justify-center w-full flex-col md:flex-row min-h-screen text-header-primary lg:gap-12"
    >
      <div className="bg-header-secondary flex justify-center items-center rounded-full m-6 md:m-12 size-64 md:min-w-[350px] md:min-h-[350px] overflow-hidden">
        <Image
          className="h-auto w-[190px] translate-y-4 md:w-[260px]"
          priority
          src={avatar}
          alt="Krzysztof Klęka – zdjęcie profilowe"
          sizes="(min-width: 768px) 260px, 190px"
        />
      </div>

      <div className="flex flex-col text-center md:text-left gap-2 px-4">
        <div className="flex flex-col gap-2">
          <p className="text-base">Cześć, jestem</p>
          <h1 className="text-3xl">Krzysztof Klęka</h1>
          <p className="uppercase text-3xl">
            web-<span className="text-header-secondary">developer</span>
          </p>
          <p className="text-text-primary max-w-prose">
            Jestem programistą frontendowym, który skupia się na tworzeniu
            przejrzystych, responsywnych i przyjaznych dla użytkownika rozwiązań
            internetowych.
          </p>
        </div>
        <div className="flex w-full justify-center md:justify-start">
          <ul className="flex gap-2 my-4" aria-label="Linki kontaktowe">
            {contactLinks.map((link) => (
              <li key={link.href} className="text-text-primary">
                <ContactLinkIcon {...link} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center md:justify-start w-full gap-4 mb-8">
          <a
            href="#contact"
            className="rounded-md border-2 border-btn-accent px-8 py-2 transition duration-300
    hover:bg-btn-accent
    active:scale-95
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-header-secondary
    motion-reduce:transition-none"
          >
            Kontakt
          </a>
          <a
            href="#cv"
            className="rounded-md border-2 border-btn-accent bg-btn-accent px-8 py-2 transition duration-300
    hover:border-btn-secondary hover:bg-btn-secondary
    active:scale-95
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-header-secondary
    motion-reduce:transition-none"
          >
            Pokaż CV
          </a>
        </div>
      </div>
    </section>
  );
}
