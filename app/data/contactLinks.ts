export type ContactLink = {
  href: string;
  icon: string;
  alt: string;
  size: number;
  external?: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    href: "https://www.linkedin.com/feed/",
    icon: "mdi:linkedin",
    alt: "Linkedin icon - link",
    size: 28,
    external: true,
  },
  {
    href: "https://github.com/Kry765",
    icon: "mdi:github",
    alt: "GitHub icon - link",
    size: 28,
    external: true,
  },
  {
    href: "mailto:example@gmail.com",
    icon: "mdi:email-outline",
    alt: "Email icon - link",
    size: 28,
  },
];
