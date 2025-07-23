import type { iconMap } from "../shared/IconWrapper";

export type IconName = keyof typeof iconMap;

export type PersonalSocial = {
  key: string;
  icon: IconName;
  link: string;
};

export type PersonalItem = {
  title: string;
  key: string;
  label: string;
  name?: string;
  icon: IconName;
};

export type AddressItem = {
  city: string;
  postcode: string;
  title: string;
  street: string;
  icon: IconName;
};

export type PersonalyData = {
  personaly: PersonalItem[];
  address: AddressItem[];
  social: PersonalSocial[];
  aboutmeDescription: {
    description: string;
  };
  firstName: {
    name: string;
  };
  allRight: {
    footerAllRight: string;
  };
};
