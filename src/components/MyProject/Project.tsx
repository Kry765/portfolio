import projectData from "../../data/projectData.json";
import type { ProjectEntry } from "../../types/Project";
import ProjectListComponent from "./ProjectListComponent";

const typedData = projectData as ProjectEntry;

export default function Project() {
  return (
    <>
      <div className="mx-24 my-12">
        <h2 className="py-2 px-6 font-bold text-2xl gap-4">Projekty</h2>
        <section className="flex flex-wrap">
          <ProjectListComponent projectData={typedData.projectData} />
        </section>
      </div>
    </>
  );
}
