export interface HeaderEntry {
  headerDescriptionData: HeaderDescriptionData[];
  headerButtonData: HeaderButtonData[];
  headerIconSocialLink: HeaderIconSocialLink[];
}

export interface HeaderDescriptionData {
  key: string;
  title: string;
  specialization: string;
  description: string;
}

export interface HeaderButtonData {
  key: string;
  buttonLabel: string;
  link: string;
}

export interface HeaderIconSocialLink {
  key: string;
  icon: string;
  link: string;
}
