export default function EducationCard() {
  return (
    <div className="group border border-zinc-100 dark:border-zinc-800 rounded-lg p-5 flex flex-col gap-3 bg-white/85 dark:bg-black/85">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-black dark:text-zinc-50">
              B.S. Computer Science
            </span>
            <span className="text-zinc-300 dark:text-zinc-600">·</span>
            <a
              href="https://www.moravian.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50 transition-colors"
            >
              Moravian University
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
            <span>GPA 3.83</span>
            <span className="text-zinc-300 dark:text-zinc-600">·</span>
            <span>Dean&apos;s List</span>
          </div>
        </div>
        <span className="text-xs text-zinc-400 dark:text-zinc-500 shrink-0 pt-0.5">
          Spring 2027
        </span>
      </div>

      <div className="flex flex-wrap gap-2 pt-1 border-t border-zinc-100 dark:border-zinc-800">
        {[
          "Advanced Software Development",
          "DevOps",
          "Data Wrangling",
          "Mobile App Development",
          "Software Engineering",
          "Cloud Computing",
          "Machine Learning",
        ].map((course) => (
          <span
            key={course}
            className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
          >
            {course}
          </span>
        ))}
      </div>
    </div>
  );
}
