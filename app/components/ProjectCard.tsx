import Image from "next/image";
import type { Project } from "../data/projects";

function statusStyle(status: string): string {
  if (/launch|upcoming/i.test(status))
    return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400";
  if (/development|progress/i.test(status))
    return "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400";
  if (/cancel/i.test(status))
    return "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400";
  // Completed / default
  return "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400";
}

export default function ProjectCard({
  name,
  description,
  details,
  tech,
  image,
  url,
  github,
  status,
}: Project) {
  return (
    <li className="group relative overflow-hidden border border-zinc-100 dark:border-zinc-800 rounded-lg transition-shadow hover:shadow-md dark:hover:shadow-zinc-900">
      {/* Background image */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover scale-105 blur-sm"
            aria-hidden
          />
          <div className="absolute inset-0 bg-white/85 dark:bg-black/85" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-black dark:text-zinc-50">
                {name}
              </span>
              {status && (
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusStyle(status)}`}>
                  {status}
                </span>
              )}
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {description}
            </p>
          </div>
          <div className="flex gap-3 shrink-0 text-zinc-400">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} GitHub`}
                className="hover:text-black dark:hover:text-zinc-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} live site`}
                className="hover:text-black dark:hover:text-zinc-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Expanded details — revealed on hover */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
          <div className="overflow-hidden">
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-200 dark:border-zinc-700">
              {details}
            </p>
            <div className="flex flex-wrap gap-2 pt-3">
              {tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
