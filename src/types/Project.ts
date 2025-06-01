export interface ProjectEntry {
  title: string;
  projectData: Project[];
}

export interface Project {
  titleProject: string;
  descriptionProject: string;
  imageProject: Images[];
  stackTechnology: Technology[];
  iconMap: IconLink[];
}

export interface Technology {
  key: string;
  stack: string;
}

export interface IconLink {
  key: string;
  icon: string;
  link: string;
  name: string;
}

export interface Images {
  id: number;
  key: string;
  title: string;
  thumbnail: string;
}
