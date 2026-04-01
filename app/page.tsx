import SocialLinks from "./components/SocialLinks";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import projects from "./data/projects";
import experience from "./data/experience";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-16 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
            Isaac Nuñez
          </h1>
          <p className="text-base text-zinc-500 dark:text-zinc-400">
            Software Engineer
          </p>
          <SocialLinks />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            About
          </h2>
          <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            I started building games in{" "}
            <strong className="text-black dark:text-zinc-50">Unity</strong> in
            2015, which led me into{" "}
            <strong className="text-black dark:text-zinc-50">
              software development
            </strong>
            . Since then, I&apos;ve focused on building applications that are
            both{" "}
            <strong className="text-black dark:text-zinc-50">
              user-facing
            </strong>{" "}
            and technically solid behind the scenes.
          </p>
          <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            As a{" "}
            <strong className="text-black dark:text-zinc-50">
              Computer Science
            </strong>{" "}
            student, I&apos;m especially interested in creating products people
            actually use, from{" "}
            <strong className="text-black dark:text-zinc-50">
              full-stack apps
            </strong>{" "}
            to{" "}
            <strong className="text-black dark:text-zinc-50">
              automation tools
            </strong>
            . Most recently I&apos;ve been working on{" "}
            <strong className="text-black dark:text-zinc-50">GameCache</strong>,
            a platform for tracking and discovering video games, while gaining
            hands-on experience as an{" "}
            <strong className="text-black dark:text-zinc-50">
              IT intern at PNY
            </strong>{" "}
            with automation, cloud systems, and security tools.
          </p>
          <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            Outside of coding, I&apos;m usually trying (and failing) to shoot
            par, watching movies, hanging out with friends, or defending{" "}
            <strong className="text-black dark:text-zinc-50">
              Reach from the Covenant
            </strong>
            .
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Experience
          </h2>
          <ul className="flex flex-col gap-4">
            {experience.map((entry) => (
              <ExperienceCard key={`${entry.company}-${entry.role}`} {...entry} />
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
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
