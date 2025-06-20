import projectData from "../../data/projectData.json";
import type { ProjectEntry } from "../../types/Project";
import ProjectListComponent from "./ProjectListComponent";

const typedData = projectData as ProjectEntry;

export default function Project() {
  return (
    <>
      <div className="w-full py-12 md:px-12" data-aos="fade-right">
        <h2 className="py-2 px-6 font-bold text-center md:text-left text-2xl gap-4">
          Projekty
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectListComponent projectData={typedData.projectData} />
        </section>
      </div>
    </>
  );
}
