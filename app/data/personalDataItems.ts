export type personalDataItem = {
  label: string;
  value: string;
  href?: string;
};

export const personalDataItems: personalDataItem[] = [
  {
    label: "Wiek",
    value: "26",
  },
  {
    label: "Email",
    value: "krzysztofkleka91@gmail.com",
    href: "mailto:krzysztofkleka91@gmail.com",
  },
  {
    label: "Phone",
    value: "573-226-219",
    href: "tel:+48573226219",
  },
];
