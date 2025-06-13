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
      className="bg-white rounded-lg text-center md:text-left md:p-8"
    >
      <h3 className="font-bold text-[#0F6D95]">{data.titleProject}</h3>
      {data.imageProject.map((item, index) => (
        <img key={index} src={item.thumbnail} className="my-2" />
      ))}
      <div className="flex justify-center md:justify-start flex-wrap">
        {data.stackTechnology.map((item, index) => (
          <span
            key={index}
            className="rounded bg-[#0F6D95] text-white px-4 py-2 my-2 mr-2 text-sm"
          >
            {item.stack}
          </span>
        ))}
      </div>
      <p className="my-4 text-[#1A1A40]">{data.descriptionProject}</p>
      <div className="flex justify-between flex-row mt-2">
        <div className="flex flex-wrap"></div>
        <div className="flex flex-row">
          {data.iconMap.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-[#0F6D95] text-white px-4 mx-1 py-1 text-sm"
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
