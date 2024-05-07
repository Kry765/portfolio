import LearnPgAppImage from "../../Assets/learnpg_project.webp";
import { Icon } from "./ProjectIcon";

export const projects = [
  {
    title: "LearnPgApp",
    stack: "React, Express.js, Docker, Sequelize",
    description:
      "Projects for WSIZ as part of engineering work. The web application includes basic topics in SQL databases, which the student can later test through a quiz. ",
    image: LearnPgAppImage,
    GitHubLink: "https://github.com/Kry765/portfolio",
  },
];

export const ProjectContent = () => {
  return projects.map((project, index) => (
    <div
      className="flex mx-auto my-8 w-4/5 bg-[#282828] p-8 rounded-2xl md:flex-col-reverse md:flex-wrap"
      key={index}
    >
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold" style={{ margin: "10px 0" }}>
          {project.title}
        </h2>
        <h3 className="my-4">{project.stack}</h3>
        <p className="text-xl">{project.description}</p>
        <Icon github={project.GitHubLink} />
      </div>
      <img className="h-60" alt="appearance learnpgapp" src={project.image} />
    </div>
  ));
};

export default ProjectContent;
