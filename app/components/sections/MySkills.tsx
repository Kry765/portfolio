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
      <ul>
        <li>
          <figure>
            <Image src={ReactIcon} alt="ikona react" />
            <figcaption>React.js</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <Image src={ReactIcon} alt="ikona react" />
            <figcaption>TypeScript</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <Image src={ReactIcon} alt="ikona react" />
            <figcaption>Next.js</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <Image src={ReactIcon} alt="ikona react" />
            <figcaption>HTML</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <Image src={ReactIcon} alt="ikona react" />
            <figcaption>CSS</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <Image src={ReactIcon} alt="ikona react" />
            <figcaption>JavaScript</figcaption>
          </figure>
        </li>
      </ul>
    </section>
  );
}
