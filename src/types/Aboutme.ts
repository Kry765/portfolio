export interface TitleItem {
  label: string;
}

export interface DescriptionItem {
  label: string;
}

export interface SchoolDataItem {
  key: string;
  years: string;
  label: string;
}

export interface SchoolEntry {
  years: string;
  label: string;
}

export interface AboutMeData {
  title: string;
  description: string[];
  schoolData: SchoolEntry[];
  skills: string[];
}

export interface AboutData {
  title: TitleItem[];
  description: DescriptionItem[];
  schoolData: SchoolDataItem[];
}
