import type { iconMap } from "../shared/IconWrapper";

export type IconName = keyof typeof iconMap;

export type PersonalSocial = {
  key: string;
  icon: IconName;
  link: string;
};

export type PersonalItem = {
  key: string;
  label: string;
  icon: IconName;
};

export type AddressItem = {
  city: string;
  postcode: string;
  street: string;
  icon: IconName;
};

export type PersonalyData = {
  personaly: PersonalItem[];
  address: AddressItem[];
  social: PersonalSocial[];
};
