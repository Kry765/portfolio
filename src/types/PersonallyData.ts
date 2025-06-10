import type { iconMap } from "../hook/iconWrapper";

export type IconName = keyof typeof iconMap;

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
};
