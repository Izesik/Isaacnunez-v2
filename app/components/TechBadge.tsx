const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const ICON_MAP: Record<string, { path: string; invertOnDark?: boolean }> = {
  // Frontend
  "React":               { path: "react/react-original.svg" },
  "React.js":            { path: "react/react-original.svg" },
  "React Native":        { path: "react/react-original.svg" },
  "TypeScript":          { path: "typescript/typescript-original.svg" },
  "JavaScript":          { path: "javascript/javascript-original.svg" },
  "HTML":                { path: "html5/html5-original.svg" },
  "CSS":                 { path: "css3/css3-original.svg" },
  "Tailwind CSS":        { path: "tailwindcss/tailwindcss-plain.svg" },
  "Next.js":             { path: "nextjs/nextjs-original.svg", invertOnDark: true },
  // Backend
  "Node.js":             { path: "nodejs/nodejs-original.svg" },
  "Express.js":          { path: "express/express-original.svg", invertOnDark: true },
  "Python":              { path: "python/python-original.svg" },
  "Flask":               { path: "flask/flask-original.svg", invertOnDark: true },
  "Java":                { path: "java/java-original.svg" },
  "C#":                  { path: "csharp/csharp-original.svg" },
  "Kotlin":              { path: "kotlin/kotlin-original.svg" },
  "Kotlin Multiplatform":{ path: "kotlin/kotlin-original.svg" },
  "Ktor":                { path: "kotlin/kotlin-original.svg" },
  // Database
  "MongoDB":             { path: "mongodb/mongodb-original.svg" },
  "Firebase":            { path: "firebase/firebase-plain.svg" },
  "Redis":               { path: "redis/redis-original.svg" },
  "SQLite":              { path: "sqlite/sqlite-original.svg" },
  // DevOps / Cloud
  "AWS EC2":             { path: "amazonwebservices/amazonwebservices-original.svg" },
  "GitHub Actions":      { path: "github/github-original.svg", invertOnDark: true },
  "PowerShell":          { path: "powershell/powershell-original.svg" },
  // Other
  "Discord.js":          { path: "discordjs/discordjs-original.svg" },
  "Unity":               { path: "unity/unity-original.svg", invertOnDark: true },
};

export default function TechBadge({ name }: { name: string }) {
  const entry = ICON_MAP[name];
  return (
    <span className="inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
      {entry && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${BASE}/${entry.path}`}
          alt=""
          width={12}
          height={12}
          className={`shrink-0${entry.invertOnDark ? " dark:invert" : ""}`}
          aria-hidden
        />
      )}
      {name}
    </span>
  );
}
