export type PersonalDataItem = {
  label: string;
  value: string;
  href?: string;
};

export const personalData: PersonalDataItem[] = [
  {
    label: "Wiek",
    value: "26",
  },
  {
    label: "Email",
    value: "test@gmail.com",
    href: "mailto:test@gmail.com",
  },
  {
    label: "Phone",
    value: "573-111-219",
    href: "tel:+48573111219",
  },
];
