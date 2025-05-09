export const navItems = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#experience",
    label: "Experience",
  },
];

export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: "frontend" | "tools" | "other";
}

export const skills: Skill[] = [
  {
    name: "HTML5",
    icon: "code",
    color: "text-orange-500",
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: "palette",
    color: "text-blue-500",
    category: "frontend",
  },
  {
    name: "Sass",
    icon: "sparkles",
    color: "text-pink-500",
    category: "frontend",
  },
  {
    name: "Tailwind",
    icon: "wind",
    color: "text-cyan-500",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: "square-code",
    color: "text-yellow-500",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: "file-type",
    color: "text-blue-600",
    category: "frontend",
  },
  { name: "React", icon: "atom", color: "text-sky-500", category: "frontend" },
  {
    name: "Redux",
    icon: "database",
    color: "text-purple-600",
    category: "frontend",
  },
  {
    name: "Zustand",
    icon: "bear",
    color: "text-amber-600",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: "server",
    color: "text-black dark:text-white",
    category: "frontend",
  },
  {
    name: "Git",
    icon: "git-branch",
    color: "text-orange-600",
    category: "tools",
  },
  { name: "Vite", icon: "zap", color: "text-purple-500", category: "tools" },
  { name: "Jest", icon: "test-tube", color: "text-red-500", category: "tools" },
  {
    name: "Linux",
    icon: "terminal",
    color: "text-green-600",
    category: "other",
  },
  {
    name: "Windows",
    icon: "window",
    color: "text-blue-500",
    category: "other",
  },
  {
    name: "Responsive Design",
    icon: "smartphone",
    color: "text-teal-500",
    category: "frontend",
  },
  {
    name: "Web Accessibility",
    icon: "accessibility",
    color: "text-green-500",
    category: "frontend",
  },
  {
    name: "Agile Development",
    icon: "kanban-square",
    color: "text-indigo-500",
    category: "other",
  },
];

export interface TimelineItem {
  timeframe: string;
  company: string;
  title: string;
  location: string;
  responsibilities: string[];
}

export const timelineData: TimelineItem[] = [
  {
    timeframe: "Nov 2024 - Present",
    company: "valantic ACE",
    title: "Expert Consultant",
    location: "Frankfurt am Main",
    responsibilities: [
      "Conception and implementation of a Writeback Extension for bidirectional data exchange between BI application and database",
      "Localization of an administration platform in the BI area",
    ],
  },
  {
    timeframe: "Jul 2021 - Oct 2024",
    company: "Syzygy Techsolutions",
    title: "Web Developer",
    location: "Bad Homburg",
    responsibilities: [
      "Further development of a B2B sales portal",
      "Development of a mobile companion app for the sales portal with CapacitorJS",
      "Maintenance of an internal UI component catalog",
      "Onboarding and support of new team members",
      "Implementation of proof of concepts (POCs)",
      "Ensuring software quality and stability through unit and integration testing as well as code reviews",
      "Agile working in Scrum and Kanban environments",
    ],
  },
  {
    timeframe: "Mar 2020 - Jun 2021",
    company: "Solayer GmbH",
    title: "Process Developer",
    location: "Kesselsdorf",
    responsibilities: [
      "Research and development of manufacturing processes in the field of vacuum-based thin-film technology for IR filters",
      "Support of production facilities and analysis equipment",
    ],
  },
];
