import Image from "next/image";
import avatar from "@/app/assets/avatar.png";
import phone from "@/app/assets/icon/phone.svg";
import email from "@/app/assets/icon/email.svg";
import linkedin from "@/app/assets/icon/linkedin.svg";
import github from "@/app/assets/icon/github.svg";
import ContactLinkIcon from "@/app/components/ui/ContactLinkIcon";

export default function Hero() {
  return (
    <section id="hero" className="md:flex md:items-center md:justify-center">
      <div className="flex justify-center ">
        <div className="bg-red-500 flex justify-center items-center overflow-y-hidden rounded-[50%] min-w-[350px] min-h-[350px]">
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
        <div>
          <p>Cześć, jestem</p>
          <h1>Krzysztof Klęka</h1>
          <p>WEB-DEVELOPER</p>
          <p>
            Jestem programistą frontendowym, który skupia się na tworzeniu
            przejrzystych, responsywnych i przyjaznych dla użytkownika rozwiązań
            internetowych.
          </p>
        </div>
        <ul className="flex justify-center items-center gap-2">
          <li>
            <ContactLinkIcon
              href="https://www.linkedin.com/feed/"
              src={linkedin}
              alt="Linkedin icon - link"
              width={30}
              height={30}
              external
            />
          </li>
          <li>
            <ContactLinkIcon
              href="https://github.com/Kry765"
              src={github}
              alt="GitHub icon - link"
              width={22}
              height={22}
              external
            />
          </li>
          <li>
            <ContactLinkIcon
              href="mailto:example@gmail.com"
              src={email}
              alt="Email icon - link"
              width={30}
              height={30}
            />
          </li>
          <li>
            <ContactLinkIcon
              href="tel:+48123123123"
              src={phone}
              alt="Mobile phone icon - link"
              width={24}
              height={24}
            />
          </li>
        </ul>
        <div className="flex justify-center gap-4">
          <a href="#contact">Kontakt</a>
          <a href="#cv">Pokaż CV</a>
        </div>
      </div>
    </section>
  );
}
