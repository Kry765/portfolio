import projectData from "../../data/projectData.json";
import type { ProjectEntry } from "../../types/Project";
import ProjectListComponent from "./ProjectListComponent";

const typedData = projectData as ProjectEntry;

export default function Project() {
  return (
    <>
      <div className="mx-12 md:mx-24 my-12">
        <h2 className="py-2 px-6 font-bold text-center md:text-left text-2xl text-[#0F6D95] gap-4">
          Projekty
        </h2>
        <section className="flex flex-wrap">
          <ProjectListComponent projectData={typedData.projectData} />
        </section>
      </div>
    </>
  );
}
