export type Project = {
  name: string;
  description: string;
  details: string;
  tech: string[];
  // Path relative to /public, e.g. "/projects/gamecache.jpg"
  image?: string;
  url?: string;
  github?: string;
};

const projects: Project[] = [
  {
    name: "GameCache",
    description:
      "Cross-platform mobile app for tracking, reviewing, and organizing personal video game libraries. Launching on the App Store and Google Play in May 2026.",
    details:
      "Co-founded GameCache LLC and secured an official IGDB API partnership, powering a live database of 300,000+ game titles updated automatically via custom enrichment scripts. Implemented Firebase Auth and Firestore for secure session management, user reviews, and real-time play status tracking.",
    tech: ["React Native", "TypeScript", "Express.js", "Firebase", "MongoDB"],
    image: "/projects/GC.png",
    url: "https://gamecache.example.com",
    github: "https://github.com/IsaacN/gamecache",
  },
  {
    name: "Marvel Trackr",
    description:
      "A data-driven web app to visualize a self-curated database of 300+ Marvel comics in a chronological, filterable timeline.",
    details:
      "Independently built an interactive personal reading tracker featuring dynamic filtering and real-time state management to monitor purchase and reading progress across a self-curated Marvel comics database.",
    tech: ["React.js", "Tailwind CSS", "REST APIs", "JSON Serialization"],
    image: "/projects/MT.jpg",
    url: "https://marveltrackr.example.com",
    github: "https://github.com/IsaacN/marveltrackr",
  },
  {
    name: "LunaLog",
    description:
      "A mobile mental wellness app with AI-driven therapy-style responses, built in 24 hours at a hackathon.",
    details:
      "Integrated Gemini AI via a Flask backend to deliver real-time, personalized psychological insights and conversational support based on user input. Absorbed full-stack responsibilities mid-sprint after the team halved from 4 to 2, delivering a complete MVP within the 24-hour window.",
    tech: ["React Native", "Express.js", "SQLite", "Gemini API", "Flask", "Python"],
    image: "/projects/LunaLog.png",
    url: "https://lunalog.example.com",
    github: "https://github.com/IsaacN/lunalog",
  },
  {
    name: "Personal Website V1",
    description:
      "My first personal website built to showcase projects and experience.",
    details:
      "This was the first iteration of my personal website where I showcased my projects, experience, and skills. It was built to experiment with React.js and Tailwind CSS while learning how to structure a portfolio site effectively.",
    tech: ["React.js", "Tailwind CSS"],
    image: "/projects/PWV1.jpg",
    url: "https://v1.isaacnunez.com",
    github: "https://github.com/IsaacN/personalwebsitev1",
  },
  {
    name: "Genshin Codes Discord Bot",
    description:
      "A Discord bot for sharing and redeeming Genshin Impact codes.",
    details:
      "Genshin Codes Discord Bot allows users in a Discord server to share active Genshin Impact redeemable codes and check which codes have already been claimed. It was built to practice working with Discord.js and integrating external APIs for real-time code tracking.",
    tech: ["Node.js", "Discord.js", "MongoDB"],
    image: "/projects/GenshinCodes.jpg",
    url: "https://genshincodes.example.com",
    github: "https://github.com/IsaacN/genshincodes",
  },
];

export default projects;
