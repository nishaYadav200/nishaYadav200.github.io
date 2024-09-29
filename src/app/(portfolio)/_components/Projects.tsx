import { projects } from "@/constants";
import Project from "./Project";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

function Projects() {
  return (
    <section className="mt-6">
      <h3 className="mb-2 text-center text-3xl font-bold text-neutral-900 dark:text-white">
        My Project
      </h3>
      <p className="mb-10 text-center text-neutral-600 dark:text-neutral-400">
        I love building things. Here are few of them.
      </p>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.slice(0, 4).map((project, index) => (
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

      <Link
        href="/projects"
        className="group relative mx-auto mt-6 flex w-max items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 shadow-sm transition-all duration-300 hover:border-[#6872EA] hover:bg-gray-100 hover:text-[#6872EA] focus:outline-none focus:ring-2 focus:ring-[#6872EA] focus:ring-offset-2"
      >
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          See More
        </span>
        <MdKeyboardArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

        {/* Optional Glowing Effect */}
        <div className="absolute inset-0 rounded-full opacity-0 blur-lg transition-all duration-300 group-hover:bg-[#6872EA]/20 group-hover:opacity-100"></div>
      </Link>
    </section>
  );
}
export default Projects;
