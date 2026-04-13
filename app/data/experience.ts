export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  details: string[];
  tech: string[];
  url?: string;
};

const experience: Experience[] = [
  {
    company: "PNY Technologies, Inc.",
    role: "IT Intern · Software & Automation Focus",
    period: "June 2024 — Present",
    description:
      "Building automation pipelines, internal tooling, and security workflows for the IT operations team.",
    details: [
      "Engineering a Python and SQL ingestion pipeline to automate vendor violation audits, enabling one-click CSV ingestion into a centralized database and targeting significant reductions in manual auditor workload.",
      "Developed a production Microsoft Teams bot via Logic Apps delivering 5+ slash commands (e.g. /LAPS, /Isolate) for real-time device management, actively used daily by the IT operations and security team.",
      "Deployed 5+ Python and PowerShell scripts to automate repetitive IT security workflows, reducing manual overhead and human error in security auditing.",
    ],
    tech: ["Python", "PowerShell", "SQL", "Logic Apps", "Microsoft Teams"],
    url: "https://www.pny.com",
  },
  {
    company: "Moravian University Computing Club (MUCC)",
    role: "Secretary",
    period: "2026 — Present",
    description:
      "Serving on the executive board of the university computing club, coordinating operations and keeping the membership connected.",
    details: [
      "Manage scheduling for club meetings and events, coordinating across e-board members to keep the club running smoothly.",
      "Draft and distribute announcements to the membership covering upcoming events, opportunities, and club updates.",
      "Collaborate closely with the executive board to foster an active computing community on campus.",
    ],
    tech: ["Scheduling", "Communications", "Team Coordination"],
  },
];

export default experience;
