import Project from "../(portfolio)/_components/Project";
import { projects } from "@/constants"; // Assuming you have your projects data here

function ProjectsPage() {
  return (
    <section className="mx-auto flex h-full w-full overflow-hidden bg-gray-300 px-5 py-20 text-black dark:bg-[#0A0A0A] dark:text-white md:w-[640px] lg:w-[800px]">
      <div className="flex flex-col gap-10">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-800 dark:text-white">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            A showcase of my work that highlights my passion for building
            things.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              websiteLink={project.websiteLink}
              githubLink={project.githubLink}
              timeLine={project.timeLine}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
