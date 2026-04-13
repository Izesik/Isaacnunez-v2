import { ViewTransition } from "react";
import Link from "next/link";
import ProjectsGrid from "../components/ProjectsGrid";
import projects from "../data/projects";

export default function Projects() {
  return (
    <ViewTransition>
      <div className="flex flex-col flex-1 items-center font-sans">
        <main className="flex flex-1 w-full max-w-5xl flex-col gap-12 pt-16 pb-32 px-16">
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

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
              Project Library
            </h1>
            <p className="text-base text-zinc-500 dark:text-zinc-400">
              Everything I&apos;ve built — games, apps, tools, and experiments.{" "}
              <span className="text-zinc-400 dark:text-zinc-600">
                {projects.length} projects total.
              </span>
            </p>
          </div>

          <ProjectsGrid projects={projects} />
        </main>
      </div>
    </ViewTransition>
  );
}
