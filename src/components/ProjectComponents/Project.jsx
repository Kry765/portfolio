import LearnPgAppImage from "../../Assets/learnpg_project.jpg.png";
import { FaGithub } from "../Icon";

const projects = [
  {
    title: "LearnPgApp",
    stack: "React, Express.js, Docker, Sequelize",
    description:
      "Projects for WSIZ as part of engineering work. The web application includes basic topics in SQL databases, which the student can later test through a quiz. ",
    image: LearnPgAppImage,
    github: <FaGithub size={20} style={{ margin: "0 10px" }} />,
  },
  {
    title: "GistGitHubApp",
    stack: "React, Express.js, Docker, Axios",
    description:
      "Projects for WSIZ as part of engineering work. The web application includes basic topics in SQL databases, which the student can later test through a quiz. ",
    image: LearnPgAppImage,
    github: <FaGithub size={20} style={{ margin: "0 10px" }} />,
  },
];

const Icon = ({ github }) => {
  return <div className="flex py-4">View GitHub{github}</div>;
};

const TitleProject = (props) => {
  return (
    <div className="flex w-full mt-12 md:w-full flex-col my-5 justify-end md:h-[100v] md:items-end">
      <h2 className="text-[#176b87] md:items-center mx-24 text-4xl font-bold text-right md:text-center">
        {props.My} <span className="text-4xl text-black">{props.Project}</span>
      </h2>
    </div>
  );
};

export default function Project() {
  return (
    <>
      <TitleProject My="My" Project="Project" />
      {projects.map((project, index) => (
        <div
          className="flex justify-center mx-auto my-10 w-4/5 bg-[#d9d9d9] p-8 rounded-2xl md:flex-col-reverse md:flex-wrap"
          key={index}
        >
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold" style={{ margin: "10px 0" }}>
              {project.title}
            </h2>
            <div className="my-4">{project.stack}</div>
            <p className="text-xl">{project.description}</p>
            <Icon github={project.github} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2 h-auto relative" src={project.image} />
          </div>
        </div>
      ))}
    </>
  );
}
