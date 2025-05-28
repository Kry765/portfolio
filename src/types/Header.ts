export interface HeaderEntry {
  headerData: HeaderData[];
  buttonData: ButtonData[];
  socialLink: SocialLink[];
}

export interface HeaderData {
  key: string;
  title: string;
  description: string;
}

export interface ButtonData {
  key: string;
  buttonContact: string;
  buttonCV: string;
}

export interface SocialLink {
  key: string;
  platform: string;
  link: string;
}
