export type Project = {
  name: string;
  description: string;
  details: string[];
  tech: string[];
  // Path relative to /public, e.g. "/projects/gamecache.jpg"
  image?: string;
  url?: string;
  github?: string;
  status?: string;
  year?: number;
};

const projects: Project[] = [
  {
    name: "GameCache",
    description:
      "Cross-platform mobile app for tracking, reviewing, and organizing personal video game libraries. Launching on the App Store and Google Play in May 2026.",
    details: [
      "Co-founded GameCache LLC and secured an official IGDB API partnership.",
      "Powers a live database of 300,000+ game titles updated automatically via custom enrichment scripts.",
      "Implemented Firebase Auth and Firestore for secure session management, user reviews, and real-time play status tracking.",
    ],
    tech: ["React Native", "TypeScript", "Express.js", "Firebase", "MongoDB"],
    image: "/projects/GC.png",
    url: "https://gamecache.example.com",
    github: "https://github.com/IsaacN/gamecache",
    status: "Launching May 2026",
    year: 2026,
  },
  {
    name: "Marvel Trackr",
    description:
      "A data-driven web app to visualize a self-curated database of 300+ Marvel comics in a chronological, filterable timeline.",
    details: [
      "Independently built an interactive reading tracker with dynamic filtering and real-time state management.",
      "Tracks purchase and reading progress across a self-curated database of 300+ Marvel comics.",
    ],
    tech: ["React.js", "Tailwind CSS", "REST APIs", "JSON Serialization"],
    image: "/projects/MT.jpg",
    url: "https://marveltrackr.example.com",
    github: "https://github.com/IsaacN/marveltrackr",
    status: "In Development",
    year: 2026,
  },
  {
    name: "LunaLog",
    description:
      "A mobile mental wellness app with AI-driven therapy-style responses, built in 24 hours at a hackathon.",
    details: [
      "Integrated Gemini AI via a Flask backend for real-time, personalized psychological insights.",
      "Absorbed full-stack responsibilities mid-sprint after the team halved from 4 to 2.",
      "Delivered a complete MVP within the 24-hour hackathon window.",
    ],
    tech: [
      "React Native",
      "Express.js",
      "SQLite",
      "Gemini API",
      "Flask",
      "Python",
    ],
    image: "/projects/LunaLog.png",
    url: "https://devpost.com/software/1089820?flow%5Bdata%5D%5Binvitation_key%5D=VpweVzWPV4sYx7NW8rR4&flow%5Bname%5D=accept_software_invitation&ref_content=new_user_added_to_software_team&ref_feature=portfolio&ref_medium=email&utm_campaign=software&utm_content=invitation_to_join_software_team&utm_medium=email&utm_source=transactional",
    github: "https://github.com/KaiserKiam/Lunalog-Hackathon-2025",
    status: "Completed",
    year: 2025,
  },
  {
    name: "Personal Website V1",
    description:
      "My first personal website built to showcase projects and experience.",
    details: [
      "First iteration of my personal website showcasing projects, experience, and skills.",
      "Built to experiment with React.js and Tailwind CSS while learning how to structure a portfolio site.",
    ],
    tech: ["React.js", "Tailwind CSS"],
    image: "/projects/PersonalWebsiteCover.webp",
    url: "https://v1.isaacnunez.com",
    github: "https://github.com/IsaacN/personalwebsitev1",
    status: "Completed",
    year: 2024,
  },
  {
    name: "Genshin Codes Discord Bot",
    description:
      "A Discord bot for sharing and redeeming Genshin Impact codes.",
    details: [
      "Lets Discord server members share and track active Genshin Impact redeemable codes.",
      "Built to practice Discord.js and external API integration for real-time code tracking.",
    ],
    tech: ["Node.js", "Discord.js", "MongoDB"],
    image: "/projects/GenshinCodes.png",
    url: "https://genshincodes.example.com",
    github: "https://github.com/IsaacN/genshincodes",
    status: "Completed",
    year: 2024,
  },
  {
    name: "C.H.A.I.R.S Demo",
    description:
      "A Unity project demo with the objective to showcase the potential concept of a survival horror experience with a unique twist.",
    details: [
      "Deep dive into game design exploring new mechanics and horror concepts.",
      "Learned JSON serialization, expanding versatility as a game developer.",
      "A turning point in my game development journey, pushing creative and technical limits.",
    ],
    tech: ["C#", "Unity", "JSON", "UI/UX"],
    image: "/projects/Chairs.png",
    url: "",
    github: "",
    status: "Completed",
    year: 2024,
  },
  {
    name: "EAHS Guidance Mobile App",
    description:
      "A mobile app designed to provide students with easy access to guidance resources and information.",
    details: [
      "High school senior project enabling students to schedule appointments with guidance counselors.",
      "Gained hands-on experience with front-end and back-end connectivity.",
      "Left incomplete due to the COVID-19 pandemic.",
    ],
    tech: ["C#", "JavaScript", "HTML", "CSS"],
    image: "/projects/EAHSGuidance.jpg",
    url: "",
    github: "https://github.com/IsaacN/eahsguidance",
    status: "Canceled",
    year: 2020,
  },
  {
    name: "The Adventures of Jack",
    description:
      "A 2.5D Unity Platformer. This was the first time I had ever touched code and to this day I like to go back and recreate this game and add a little bit more, just to see how much I've improved.",
    details: [
      "My very first programming project — a 2.5D platformer built in Unity.",
      "Taught myself C# and Unity fundamentals from zero to bring it to life.",
      "Revisit it periodically as a personal benchmark of how far I've come.",
    ],
    tech: ["C#", "Unity"],
    image: "/projects/TOAJ.png",
    url: "https://gamejolt.com",
    github: "",
    status: "Completed",
    year: 2015,
  },
];

export default projects;
