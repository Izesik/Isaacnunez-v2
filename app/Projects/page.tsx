import SocialLinks from "../components/SocialLinks";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import SideNav from "../components/SideNav";
import projects from "../data/projects";
import experience from "../data/experience";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-16 py-32 px-16 sm:items-start">
        <div id="projects" className="flex flex-col gap-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
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
  );
}
