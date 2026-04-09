export type Project = {
  name: string;
  description: string;
  details: string;
  tech: string[];
  // Path relative to /public, e.g. "/projects/gamecache.jpg"
  image?: string;
  url?: string;
  github?: string;
  status?: string;
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
    status: "Launching May 2026",
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
    status: "In Development",
  },
  {
    name: "LunaLog",
    description:
      "A mobile mental wellness app with AI-driven therapy-style responses, built in 24 hours at a hackathon.",
    details:
      "Integrated Gemini AI via a Flask backend to deliver real-time, personalized psychological insights and conversational support based on user input. Absorbed full-stack responsibilities mid-sprint after the team halved from 4 to 2, delivering a complete MVP within the 24-hour window.",
    tech: [
      "React Native",
      "Express.js",
      "SQLite",
      "Gemini API",
      "Flask",
      "Python",
    ],
    image: "/projects/LunaLog.png",
    url: "https://lunalog.example.com",
    github: "https://github.com/IsaacN/lunalog",
    status: "Completed",
  },
  {
    name: "Personal Website V1",
    description:
      "My first personal website built to showcase projects and experience.",
    details:
      "This was the first iteration of my personal website where I showcased my projects, experience, and skills. It was built to experiment with React.js and Tailwind CSS while learning how to structure a portfolio site effectively.",
    tech: ["React.js", "Tailwind CSS"],
    image: "/projects/PersonalWebsiteCover.webp",
    url: "https://v1.isaacnunez.com",
    github: "https://github.com/IsaacN/personalwebsitev1",
    status: "Completed",
  },
  {
    name: "Genshin Codes Discord Bot",
    description:
      "A Discord bot for sharing and redeeming Genshin Impact codes.",
    details:
      "Genshin Codes Discord Bot allows users in a Discord server to share active Genshin Impact redeemable codes and check which codes have already been claimed. It was built to practice working with Discord.js and integrating external APIs for real-time code tracking.",
    tech: ["Node.js", "Discord.js", "MongoDB"],
    image: "/projects/GenshinCodes.png",
    url: "https://genshincodes.example.com",
    github: "https://github.com/IsaacN/genshincodes",
    status: "Completed",
  },
  {
    name: "C.H.A.I.R.S Demo",
    description:
      "A Unity project demo with the objective to showcase the potential concept of a survival horror experience with a unique twist.",
    details:
      "This project was a deep dive into game design, where I explored new ideas and concepts. I also got to grips with JSON, which expanded my skills and made me a more versatile game developer. This project was a big step in my game development journey, showing me new possibilities and pushing me to be more creative.",
    tech: ["C#", "Unity", "JSON", "UI/UX"],
    image: "/projects/Chairs.png",
    url: "",
    github: "",
    status: "Completed",
  },
  {
    name: "EAHS Guidance Mobile App",
    description:
      "A mobile app designed to provide students with easy access to guidance resources and information.",
    details:
      "A mobile application for my High School senior project that allows students to schedule appointments and contact their guidance counselors at EAHS. I learned a lot about Front-end and Back-end connectivity and design in this project. Unfortunately due to the Pandemic, we never got to complete the project.",
    tech: ["C#", "JavaScript", "HTML", "CSS"],
    image: "/projects/EAHSGuidance.jpg",
    url: "",
    github: "https://github.com/IsaacN/eahsguidance",
    status: "Canceled",
  },
  {
    name: "The Adventures of Jack",
    description:
      "A 2.5D Unity Platformer. This was the first time I had ever touched code and to this day I like to go back and recreate this game and add a little bit more, just to see how much I've improved.",
    details:
      "My very first programming project, a 2.5D platformer built in Unity. Starting from zero knowledge of code, I taught myself C# and Unity fundamentals to bring this game to life. It holds a special place as the project that started it all, and I revisit it periodically to rebuild it from scratch as a personal benchmark of how far I've come.",
    tech: ["C#", "Unity"],
    image: "/projects/TOAJ.png",
    url: "https://gamejolt.com",
    github: "",
    status: "Completed",
  },
];

export default projects;
