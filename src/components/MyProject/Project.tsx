import projectData from "../../data/projectData.json";
import type { ProjectEntry } from "../../types/Project";
import ProjectListComponent from "./ProjectListComponent";

const typedData = projectData as ProjectEntry;

export default function Project() {
  return (
    <section className="flex flex-wrap mx-auto">
      <ProjectListComponent projectData={typedData.projectData} />
    </section>
  );
}
