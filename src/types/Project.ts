export interface ProjectEntry {
  title: string;
  projectData: Project[];
}

export interface Project {
  titleProject: string;
  descriptionProject: string;
  imageProject: string;
  stackTechnology: Technology[];
  githubIcon: IconLink;
}

export interface Technology {
  key: string;
  stack: string;
}

export interface IconLink {
  key: string;
  icon: string;
  link: string;
}
