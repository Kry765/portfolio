export interface HeaderEntry {
  headerData: HeaderData[];
  buttonData: ButtonData[];
  socialLink: SocialLink[];
  socialIconLink: IconLink[];
}

export interface IconLink {
  key: string;
  icon: string;
  link: string;
}

export interface HeaderData {
  key: string;
  title: string;
  specialization: string;
  description: string;
}

export interface ButtonData {
  key: string;
  buttonLabel: string;
}

export interface SocialLink {
  key: string;
  platform: string;
  link: string;
}
