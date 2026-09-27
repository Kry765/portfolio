import { StaticImageData } from "next/image";
import linkedin from "@/app/assets/icon/linkedin.svg";
import github from "@/app/assets/icon/github.svg";
import email from "@/app/assets/icon/email.svg";

export type ContactLink = {
  href: string;
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  external?: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    href: "https://www.linkedin.com/feed/",
    src: linkedin,
    alt: "Linkedin icon - link",
    width: 30,
    height: 30,
    external: true,
  },
  {
    href: "https://github.com/Kry765",
    src: github,
    alt: "GitHub icon - link",
    width: 22,
    height: 22,
    external: true,
  },
  {
    href: "mailto:example@gmail.com",
    src: email,
    alt: "Email icon - link",
    width: 30,
    height: 30,
  },
];
