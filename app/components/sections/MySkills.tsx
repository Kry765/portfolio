"use client";
import Image from "next/image";
import ReactIcon from "@/app/assets/icon/email.svg";

export default function MySkills() {
  return (
    <section id="my-skills">
      <h2>Moje umiejętności</h2>
      <p>
        Przegląd głównych języków frontendu, frameworków i nowoczesnych
        paradygmatów, w których się specjalizuję.
      </p>
      <figure>
        <Image src={ReactIcon} alt="ikona react" />
        <figcaption>React.js</figcaption>
      </figure>
    </section>
  );
}
