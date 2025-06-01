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
    <div key={index} className="md:w-1/2 md:p-6">
      <h3>{data.titleProject}</h3>
      {data.imageProject.map((item, index) => (
        <img key={index} src={item.thumbnail} className="my-4" />
      ))}
      <div className="flex flex-wrap">
        {data.stackTechnology.map((item, index) => (
          <span
            key={index}
            className="rounded bg-gray-500 text-white px-4 py-2 my-2 mr-2 text-sm"
          >
            {item.stack}
          </span>
        ))}
      </div>
      <p className="my-4">{data.descriptionProject}</p>
      <div className="flex justify-between flex-row mt-2">
        <div className="flex flex-wrap"></div>
        <div className="flex flex-row">
          {data.iconMap.map((item, index) => (
            <button
              className="rounded bg-gray-500 text-white px-4 mx-1 py-1 text-sm"
              key={index}
            >
              <FontAwesomeIcon
                icon={iconMap[item.icon as keyof typeof iconMap]}
              />{" "}
              Visit {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  ));
}
