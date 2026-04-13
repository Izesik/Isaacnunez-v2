"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "../data/projects";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<string>("All");

  const statuses = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.status).filter(Boolean))),
  ] as string[];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`text-xs px-3 py-1 rounded-full border transition-colors cursor-pointer ${
              filter === status
                ? "border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 bg-zinc-900/5 dark:bg-zinc-100/10"
                : "border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-500"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {filtered.map((project) => (
          <ProjectCard key={project.name} {...project} expanded />
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="text-sm text-zinc-400 dark:text-zinc-600 text-center py-8">
          No projects match this filter.
        </p>
      )}
    </div>
  );
}
