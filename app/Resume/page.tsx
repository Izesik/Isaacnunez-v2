import { ViewTransition } from "react";
import Link from "next/link";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import ProjectCard from "../components/ProjectCard";
import SideNav from "../components/SideNav";
import experience from "../data/experience";
import projects from "../data/projects";

const resumeSections = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

const skills = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "Python", highlight: true },
      { name: "Java", highlight: false },
      { name: "C#", highlight: false },
      { name: "PowerShell", highlight: false },
      { name: "SQL", highlight: true },
      { name: "HTML", highlight: false },
      { name: "CSS", highlight: false },
      { name: "Kotlin", highlight: false },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React.js", highlight: true },
      { name: "React Native", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "Flask", highlight: false },
      { name: "Tailwind CSS", highlight: false },
      { name: "Discord.js", highlight: false },
      { name: "JDA", highlight: false },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Firebase", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "Redis", highlight: false },
      { name: "AWS EC2", highlight: false },
      { name: "GitHub Actions", highlight: false },
      { name: "SQLite", highlight: false },
      { name: "Unity", highlight: false },
      { name: "Logic Apps", highlight: false },
      { name: "Git", highlight: true },
      { name: "Microsoft Teams", highlight: false },
    ],
  },
];

export default function Resume() {
  return (
    <ViewTransition>
      <div className="flex flex-col flex-1 items-center font-sans">
        <SideNav sections={resumeSections} />
        <main className="flex flex-1 w-full max-w-3xl flex-col gap-12 pt-16 pb-32 px-16">
          {/* Back + Download */}
          <div className="flex items-center justify-between">
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
            <a
              href="/files/IN_Resume.pdf"
              download
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </a>
          </div>

          {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
              Isaac Nuñez
            </h1>
            <p className="text-base text-zinc-500 dark:text-zinc-400">
              Software Engineer · Computer Science Student
            </p>
          </div>

          {/* Experience */}
          <div id="experience" className="flex flex-col gap-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Experience
            </h2>
            <ul className="flex flex-col gap-4">
              {experience.map((entry) => (
                <ExperienceCard
                  key={`${entry.company}-${entry.role}`}
                  {...entry}
                  expanded
                />
              ))}
            </ul>
          </div>

          {/* Education */}
          <div id="education" className="flex flex-col gap-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Education
            </h2>
            <EducationCard />
          </div>

          {/* Skills */}
          <div id="skills" className="flex flex-col gap-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Skills
            </h2>
            <div className="flex flex-col gap-4">
              {skills.map(({ category, items }) => (
                <div key={category} className="flex flex-col gap-2">
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                    {category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {items.map(({ name, highlight }) => (
                      <span
                        key={name}
                        className={
                          highlight
                            ? "text-xs px-2 py-0.5 rounded-full font-medium bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900"
                            : "text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                        }
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div id="projects" className="flex flex-col gap-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Projects
            </h2>
            <ul className="flex flex-col gap-4">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.name} {...project} expanded />
              ))}
            </ul>
            <Link
              href="/Projects"
              className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              View Project Library
            </Link>
          </div>
        </main>
      </div>
    </ViewTransition>
  );
}
