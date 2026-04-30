import { ViewTransition } from "react";
import Link from "next/link";
import TechBadge from "../../components/TechBadge";

const TECH = [
  "React Native",
  "TypeScript",
  "Express.js",
  "Firebase",
  "MongoDB",
];

const TIMELINE = [
  {
    phase: "The Idea",
    detail:
      "Dylan and I kept coming back to the same frustration — Letterboxd is perfect for movies, but nothing like it exists for games. We decided to build it ourselves.",
  },
  {
    phase: "IGDB Partnership",
    detail:
      "Applied for and secured an official IGDB API partnership (Twitch / Amazon), granting production-level access to a database of 300,000+ game titles.",
  },
  {
    phase: "Founded GameCache LLC",
    detail:
      "Formalized the company to support the IGDB application and give the project a real foundation.",
  },
  {
    phase: "Backend & Data Pipeline",
    detail:
      "Built the Express.js API and MongoDB schema. Automated enrichment scripts pull from IGDB, normalize game records, and keep the database current. Hosted on Render.com.",
  },
  {
    phase: "Mobile App",
    detail:
      "Built the React Native app with Firebase Auth for secure session management and Firestore for real-time play status and user reviews.",
  },
  {
    phase: "TestFlight Beta",
    detail:
      "Running multiple TestFlight rounds with 50+ users. Collecting feedback, iterating on UX, and fixing edge cases ahead of the full launch.",
  },
  {
    phase: "Launching May 2026",
    detail:
      "App Store and Google Play submissions underway. Final polish on onboarding, notifications, and discovery features.",
  },
];

const CHALLENGES = [
  {
    title: "Securing the IGDB partnership",
    body: "IGDB (owned by Twitch/Amazon) requires a formal application for production API access. Getting approved meant demonstrating a legitimate product with a real use case — which pushed us to formalize GameCache LLC early and commit to the project seriously.",
  },
  {
    title: "Enriching 300,000+ game records",
    body: "Raw IGDB data needs normalization to be useful — cover art at the right resolution, genre tags cleaned up, release dates unified across regions. Custom enrichment scripts now run on a schedule to keep the database current as IGDB adds new titles.",
  },
  {
    title: "Real-time state without over-fetching",
    body: "Firestore's real-time listeners pair naturally with React state, but keeping play status, reviews, and library state in sync across sessions without over-fetching required deliberate data modeling and careful listener management.",
  },
  {
    title: "Two stores, one codebase",
    body: "React Native handles the cross-platform story well, but App Store and Google Play have meaningfully different review guidelines, IAP rules, and screenshot requirements. Submitting to both means treating each platform as its own product at the distribution layer.",
  },
];

export default function GameCacheCaseStudy() {
  return (
    <ViewTransition>
      <div className="flex flex-col flex-1 items-center font-sans">
        <main className="flex flex-1 w-full max-w-3xl flex-col gap-16 pt-12 pb-20 px-5 sm:pt-16 sm:pb-32 sm:px-16">
          {/* Back nav */}
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 hover:text-zinc-200 transition-colors w-fit"
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

          {/* Hero */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="relative flex items-center gap-1.5">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
                Launching May 2026
              </span>
              <span className="text-xs text-zinc-400 dark:text-zinc-500">
                2026
              </span>
            </div>
            <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
              GameCache
            </h1>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-xl">
              A cross-platform mobile app for tracking, reviewing, and
              discovering video games — co-founded with{" "}
              <strong className="text-black dark:text-zinc-50">
                Dylan Kupper
              </strong>{" "}
              as GameCache LLC. Currently in TestFlight beta with 50+ users,
              launching on the App Store and Google Play.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {TECH.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-1 items-center">
              <a
                href="https://gamecache.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                gamecache.io
              </a>
            </div>
          </div>

          {/* Team */}
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              The Team
            </h2>
            <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              GameCache is a two-person project built in our free time as
              college students. My best friend{" "}
              <strong className="text-black dark:text-zinc-50">
                Dylan Kupper
              </strong>{" "}
              and I co-founded{" "}
              <strong className="text-black dark:text-zinc-50">
                GameCache LLC
              </strong>{" "}
              together, splitting the work across mobile, backend, and product,
              and pushing the project forward around classes, internships, and
              everything else that comes with being in school.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-100 dark:border-zinc-800" />

          {/* The Problem */}
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              The Problem
            </h2>
            <div className="flex flex-col gap-3 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              <p>
                I&apos;ve been using{" "}
                <strong className="text-black dark:text-zinc-50">
                  Letterboxd
                </strong>{" "}
                for years to track and review movies. It&apos;s clean, social
                without being overwhelming, and makes logging a film feel
                genuinely satisfying. I always wished something like it existed
                for games.
              </p>
              <p>
                The apps that do exist for game tracking are mostly web-only,
                visually dated, or obsessed with completion stats rather than
                the experience of <em>wanting, playing, and remembering</em> a
                game. Nothing felt made for mobile. Nothing felt like it
                belonged in the same decade as the games it was tracking.
              </p>
              <p>
                Dylan and I decided to build what we actually wanted to use.
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              The Solution
            </h2>
            <div className="flex flex-col gap-3 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              <p>
                GameCache is a mobile-first game library app built around three
                actions:
                <strong className="text-black dark:text-zinc-50">
                  {" "}
                  add a game
                </strong>
                ,
                <strong className="text-black dark:text-zinc-50">
                  {" "}
                  track where you are with it
                </strong>
                , and
                <strong className="text-black dark:text-zinc-50">
                  {" "}
                  leave a review when you&apos;re done
                </strong>
                . Discovery is powered by an official IGDB API partnership —
                300,000+ titles, updated automatically.
              </p>
              <p>
                React Native lets a single codebase ship to both iOS and
                Android. Firebase handles auth and real-time sync. The game data
                layer runs on Express.js and MongoDB, hosted on Render.com, with
                nightly enrichment scripts keeping the database fresh.
                TypeScript runs end-to-end.
              </p>
            </div>
          </div>

          {/* Architecture */}
          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Architecture & Key Decisions
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  decision: "React Native over Flutter",
                  rationale:
                    "Both Dylan and I had existing TypeScript/React experience, so React Native had near-zero ramp-up cost. One codebase ships to both stores with native-feeling UI on each platform.",
                },
                {
                  decision: "IGDB as the game data source",
                  rationale:
                    "IGDB is the most comprehensive public game database available — 300,000+ titles across every era and platform. The official partnership unlocked production-rate-limited endpoints and gave the app a legitimate data foundation.",
                },
                {
                  decision: "Firebase Auth + Firestore for user data",
                  rationale:
                    "Firestore's real-time listeners map cleanly to React state — a user's library and play status update live without polling. Firebase Auth handles session security with minimal boilerplate.",
                },
                {
                  decision: "Custom Express/MongoDB backend on Render.com",
                  rationale:
                    "Rather than hitting IGDB on every request, nightly enrichment scripts ingest and normalize game records into MongoDB. Hosting on Render.com keeps the backend simple to deploy and scale without managing infrastructure ourselves.",
                },
              ].map(({ decision, rationale }) => (
                <div
                  key={decision}
                  className="flex flex-col gap-1 pl-4 border-l border-zinc-200 dark:border-zinc-700"
                >
                  <span className="text-sm font-semibold text-black dark:text-zinc-100">
                    {decision}
                  </span>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Key Challenges
            </h2>
            <ul className="flex flex-col gap-5">
              {CHALLENGES.map(({ title, body }) => (
                <li key={title} className="flex flex-col gap-1.5">
                  <span className="text-sm font-semibold text-black dark:text-zinc-100">
                    {title}
                  </span>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Timeline
            </h2>
            <ol className="flex flex-col">
              {TIMELINE.map(({ phase, detail }, i) => (
                <li key={phase} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`h-2.5 w-2.5 rounded-full mt-1 shrink-0 ${i === TIMELINE.length - 1 ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-600"}`}
                    />
                    {i < TIMELINE.length - 1 && (
                      <div className="w-px flex-1 bg-zinc-100 dark:bg-zinc-800 my-1" />
                    )}
                  </div>
                  <div className="flex flex-col gap-0.5 pb-6">
                    <span className="text-sm font-semibold text-black dark:text-zinc-100">
                      {phase}
                    </span>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Current Status */}
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Current Status
            </h2>
            <ul className="flex flex-col gap-2">
              {[
                "Official IGDB API partner (Twitch / Amazon)",
                "300,000+ game titles in live database, updated automatically",
                "Backend live on Render.com — Firebase Auth + Firestore handling real-time session and library state",
                "Multiple TestFlight beta rounds completed with 50+ users",
                "App Store & Google Play submissions in progress — launching May 2026",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </ViewTransition>
  );
}
