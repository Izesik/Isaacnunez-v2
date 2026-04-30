import { ViewTransition } from "react";
import Link from "next/link";
import SocialLinks from "./components/SocialLinks";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import SideNav from "./components/SideNav";
import RotatingHeadline from "./components/RotatingHeadline";
import FadeIn from "./components/FadeIn";
import SkillsSection from "./components/SkillsSection";
import projects from "./data/projects";
import experience from "./data/experience";

export default function Home() {
  return (
    <ViewTransition>
      <div className="flex flex-col flex-1 items-center justify-center font-sans">
        <SideNav />
        <main className="flex flex-1 w-full max-w-3xl flex-col gap-16 py-20 px-5 sm:py-32 sm:px-16 sm:items-start">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
              Isaac Nuñez
            </h1>
            <RotatingHeadline />
            <div className="flex items-center gap-2 text-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-zinc-500 dark:text-zinc-400">
                Building{" "}
                <Link href="/Projects/gamecache" className="font-semibold text-black dark:text-zinc-100 hover:underline underline-offset-2">
                  GameCache
                </Link>
                {" "}— launching May 2026
              </span>
            </div>
            <SocialLinks />
          </div>

          <FadeIn id="about" className="flex flex-col gap-3">
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
              student, I&apos;m especially interested in creating products
              people actually use, from{" "}
              <strong className="text-black dark:text-zinc-50">
                full-stack apps
              </strong>{" "}
              to{" "}
              <strong className="text-black dark:text-zinc-50">
                automation tools
              </strong>
              . Most recently I&apos;ve been working on{" "}
              <strong className="text-black dark:text-zinc-50">
                GameCache
              </strong>
              , a platform for tracking and discovering video games, while
              gaining hands-on experience as an{" "}
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
          </FadeIn>

          <FadeIn id="skills" className="flex flex-col gap-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Skills
            </h2>
            <SkillsSection />
          </FadeIn>

          <FadeIn id="experience" className="flex flex-col gap-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Experience
            </h2>
            <ul className="flex flex-col gap-4">
              {experience.map((entry) => (
                <ExperienceCard
                  key={`${entry.company}-${entry.role}`}
                  {...entry}
                />
              ))}
            </ul>
            <Link
              href="/Resume"
              className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              View Full Resume
            </Link>
          </FadeIn>

          <FadeIn id="projects" className="flex flex-col gap-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Projects
            </h2>
            <ul className="flex flex-col gap-4">
              {projects
                .filter((project) => project.featured)
                .slice(0, 3)
                .map((project) => (
                  <ProjectCard key={project.name} {...project} />
                ))}
            </ul>
            <Link
              href="/Projects"
              className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              View Project Library
            </Link>
          </FadeIn>

          <FadeIn id="contact" className="flex flex-col gap-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Contact
            </h2>
            <div className="flex flex-col gap-3">
              <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                Have a project in mind, want to collaborate, or just want to say
                hi? My inbox is always open.
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                I&apos;ll get back to you as soon as I can — unless I&apos;m on
                the golf course.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="mailto:isaacnunez2002@gmail.com"
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-black dark:bg-zinc-50 text-white dark:text-black text-sm font-semibold transition-all duration-200 hover:bg-zinc-700 dark:hover:bg-zinc-200 hover:gap-3.5"
              >
                Say Hi
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
                  className="transition-transform duration-200 group-hover:rotate-12"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </a>
              <span className="text-sm text-zinc-400 dark:text-zinc-500">
                or{" "}
                <a
                  href="mailto:isaacnunez2002@gmail.com"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50 transition-colors"
                >
                  isaacnunez2002@gmail.com
                </a>
              </span>
            </div>
            <SocialLinks />
          </FadeIn>
        </main>

        <footer className="w-full max-w-3xl mx-auto px-5 sm:px-16 py-8 text-xs font-medium text-zinc-500 dark:text-zinc-600 leading-relaxed">
          Coded in{" "}
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            Visual Studio Code
          </a>{" "}
          by the man himself, me. Built with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            React
          </a>
          , styled with{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            Tailwind CSS
          </a>
          , deployed on{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            Vercel
          </a>
          . All text is set in the{" "}
          <a
            href="https://vercel.com/font/geist"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            Geist
          </a>{" "}
          typeface.
        </footer>
      </div>
    </ViewTransition>
  );
}
