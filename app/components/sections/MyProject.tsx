"use client";

import Image from "next/image";
import marbudScreenShot from "@/app/assets/project_ss/marbud.png";
export default function MyProject() {
  return (
    <section id="my-project">
      <h2>Projekty</h2>
      <p>
        Wybór najnowszych projektów zrealizowanych z wykorzystaniem nowoczesnych
        technologii internetowych, charakteryzujących się przejrzystym kodem i
        solidną architekturą interfejsu użytkownika.
      </p>
      <article>
        <Image src={marbudScreenShot} alt="Zrzut ekranu strony MARBUD" />
        <h3>MARBUD — 05.2024</h3>
        <p>STACK: Next.js + Tailwind CSS</p>
        <p>
          Strona Internetowea wykonana na zlecenie Firmy MARBUD zawierającą
          ilustracje sprzedawanych obiektów
        </p>
        <div>
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zobacz na żywo
          </a>
          <a
            href="https://www.github.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kod GitHub
          </a>
        </div>
      </article>
    </section>
  );
}
