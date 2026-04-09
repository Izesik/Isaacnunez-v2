import { ViewTransition } from "react";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <ViewTransition>
      <div className="flex flex-col flex-1 items-center justify-center font-sans">
        <main className="flex flex-1 w-full max-w-3xl flex-col gap-16 pt-16 pb-32 px-16 sm:items-start">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <div id="projects" className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Projects
            </h2>
            <ul className="flex flex-col gap-4">
              {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </ul>
          </div>
        </main>
      </div>
    </ViewTransition>
  );
}
