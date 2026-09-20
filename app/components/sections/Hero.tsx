import Image from "next/image";
import avatar from "@/app/assets/avatar.png";

export default function Hero() {
  return (
    <header>
      <div className="flex justify-center">
        <div className="bg-red-500 flex justify-center items-center overflow-y-hidden rounded-[50%] min-w-[350px] min-h-[350px]">
          <Image
            className="translate-y-4"
            loading="eager"
            src={avatar}
            alt="My avatar"
            width="250"
            height="250"
          />
        </div>
      </div>
      <p>Cześć, jestem</p>
      <p>Krzysztof Klęka</p>
      <p>WEB-DEVELOPER</p>
      <p>
        Jestem programistą frontendowym, który skupia się na tworzeniu
        przejrzystych, responsywnych i przyjaznych dla użytkownika rozwiązań
        internetowych.
      </p>
      <div>
        <p>icon</p>
        <p>icon</p>
        <p>icon</p>
      </div>
      <div>
        <button>Kontakt</button>
        <button>Pokaż CV</button>
      </div>
    </header>
  );
}
