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
    <div key={index} className="w-1/2 p-12">
      <h3>{data.titleProject}</h3>
      <p>{data.descriptionProject}</p>

      {data.imageProject.map((item, index) => (
        <div key={index}>
          <img src={item.thumbnail} />
        </div>
      ))}

      <div className="flex justify-between flex-row flex-wrap mt-4">
        <div>
          {data.stackTechnology.map((item, index) => (
            <span
              key={index}
              className="text-white bg-gray-500 px-4 mx-1 py-1 rounded text-sm"
            >
              {item.stack}
            </span>
          ))}
        </div>
        <div>
          {data.iconMap.map((item, index) => (
            <button
              className="rounded-full bg-gray-500 text-white px-4 mr-2 py-2"
              key={index}
            >
              <FontAwesomeIcon
                icon={iconMap[item.icon as keyof typeof iconMap]}
              />
              Visit {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  ));
}
