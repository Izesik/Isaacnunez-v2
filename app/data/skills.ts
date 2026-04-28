export type Skill = {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
};

export type SkillCategory = {
  label: string;
  color: string;
  skills: Skill[];
};

const skills: SkillCategory[] = [
  {
    label: "Frontend",
    color: "#38bdf8",
    skills: [
      { name: "React / React Native", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "JavaScript", level: 5 },
      { name: "Tailwind CSS", level: 4 },
      { name: "Next.js", level: 4 },
    ],
  },
  {
    label: "Backend",
    color: "#34d399",
    skills: [
      { name: "Node.js / Express", level: 4 },
      { name: "Python", level: 3 },
      { name: "Java", level: 3 },
      { name: "C#", level: 4 },
    ],
  },
  {
    label: "Data",
    color: "#fbbf24",
    skills: [
      { name: "MongoDB", level: 4 },
      { name: "Firebase / Firestore", level: 4 },
      { name: "Redis", level: 3 },
      { name: "SQL / SQLite", level: 3 },
    ],
  },
  {
    label: "Mobile",
    color: "#a78bfa",
    skills: [
      { name: "React Native", level: 5 },
      { name: "Kotlin", level: 2 },
    ],
  },
  {
    label: "DevOps & Cloud",
    color: "#fb7185",
    skills: [
      { name: "GitHub Actions", level: 3 },
      { name: "AWS EC2", level: 2 },
      { name: "PowerShell", level: 3 },
    ],
  },
  {
    label: "Game Dev",
    color: "#fb923c",
    skills: [
      { name: "Unity", level: 4 },
      { name: "C# (game scripting)", level: 4 },
    ],
  },
];

export default skills;
