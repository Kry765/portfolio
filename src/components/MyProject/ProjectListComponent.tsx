import type { Project } from "../../types/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
type Props = {
  projectData: Project[];
};

export default function ProjectListComponent({ projectData }: Props) {
  return projectData.map((data, index) => (
    <div key={index}>
      <h3>{data.titleProject}</h3>
      <p>{data.descriptionProject}</p>

      {data.imageProject.map((item, index) => (
        <div key={index}>
          <img src={item.thumbnail} />
        </div>
      ))}

      {data.stackTechnology.map((item, index) => (
        <div key={index}>
          <p>{item.stack}</p>
        </div>
      ))}
      <div>
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </div>
  ));
}
