import type { Project } from "../../types/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

type Props = {
  projectData: Project[];
};

const iconMap = {
  faGithub,
  faGlobe,
};

export default function ProjectListComponent({ projectData }: Props) {
  return projectData.map((data, index) => (
    <div
      key={index}
      className="bg-zinc-950 rounded-lg m-4 py-8 text-center md:text-left px-2 md:p-8 border shadow-[0_0_10px_2px_rgba(147,51,234,0.5)] border-purple-900/50"
    >
      <h3 className="font-bold pb-4">{data.titleProject}</h3>
      {data.imageProject.map((item, index) => (
        <img key={index} src={item.thumbnail} className="my-2" />
      ))}
      <div className="flex justify-center md:justify-start flex-wrap">
        {data.stackTechnology.map((item, index) => (
          <span
            key={index}
            className="rounded bg-[#0A192F] text-white px-4 py-2 my-2 mr-2 text-sm"
          >
            {item.stack}
          </span>
        ))}
      </div>
      <p className="my-4">{data.descriptionProject}</p>
      <div className="flex md:justify-between justify-center flex-row mt-2">
        <div className="flex flex-wrap"></div>
        <div className="flex flex-row">
          {data.iconMap.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-purple-900 text-white px-4 mx-1 py-1 text-sm duration-300 transition-bg hover:cursor-pointer hover:bg-purple-500"
              key={index}
            >
              <FontAwesomeIcon
                icon={iconMap[item.icon as keyof typeof iconMap]}
              />{" "}
              Visit {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  ));
}
