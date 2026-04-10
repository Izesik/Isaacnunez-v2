import type { Experience } from "../data/experience";

export default function ExperienceCard({
  company,
  role,
  period,
  description,
  details,
  tech,
  url,
  expanded = false,
}: Experience & { expanded?: boolean }) {
  return (
    <li className="group border border-zinc-100 dark:border-zinc-800 rounded-lg p-5 flex flex-col gap-3 transition-shadow hover:shadow-md dark:hover:shadow-zinc-900 bg-white/85 dark:bg-black/85">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-black dark:text-zinc-50">
              {role}
            </span>
            <span className="text-zinc-300 dark:text-zinc-600">·</span>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50 transition-colors"
              >
                {company}
              </a>
            ) : (
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {company}
              </span>
            )}
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
        </div>
        <span className="text-xs text-zinc-400 dark:text-zinc-500 shrink-0 pt-0.5">
          {period}
        </span>
      </div>

      {/* Expanded details — always visible when expanded, hover-reveal otherwise */}
      <div className={expanded ? "" : "grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out"}>
        <div className={expanded ? "" : "overflow-hidden"}>
          <ul className="flex flex-col gap-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800">
            {details.map((point, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                {point}
              </li>
            ))}
          </ul>
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
    </li>
  );
}
