import Link from "next/link";
import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

interface ProjectProps {
  name: string;
  description: string;
  image: string;
  techStack: string[];
  websiteLink?: string;
  githubLink?: string;
  timeLine: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  description,
  image,
  techStack,
  websiteLink,
  githubLink,
  timeLine,
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-neutral-300 bg-white shadow-md dark:border-neutral-800 dark:bg-stone-900">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          width={1280}
          height={720}
          className="h-full w-full object-cover transition-opacity duration-300"
          sizes="100%"
          priority
          alt={`${name} image`}
        />
      </div>

      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-white">
          {name}
        </h3>
        <p className="mb-1 text-sm text-neutral-700 dark:text-neutral-300">
          {timeLine}
        </p>

        <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="rounded-[7px] bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex w-full justify-between text-xs font-medium">
          {websiteLink && (
            <Link
              target="_blank"
              href={websiteLink}
              className="flex items-center gap-2 rounded-lg bg-[#5865f2] px-4 py-2 text-white shadow-md transition duration-300 hover:bg-[#4752c4]"
            >
              <IoIosGlobe className="text-lg" />
              <span>WebSite</span>
            </Link>
          )}
          {githubLink && (
            <Link
              target="_blank"
              href={githubLink}
              className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-white shadow-md transition duration-300 hover:bg-gray-700"
            >
              <FaGithub className="text-lg" />
              <span> Source</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
