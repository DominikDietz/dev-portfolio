import {
  SiCss3,
  SiEslint,
  SiGit,
  SiGithubactions,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLinux,
  SiNextdotjs,
  SiPostman,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSass,
  SiStorybook,
  SiSwagger,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiWebpack,
} from "@icons-pack/react-simple-icons";
import {
  Accessibility,
  Database,
  KanbanSquare,
  MonitorSmartphone,
  Network,
} from "lucide-react";
import { Vite } from "./assets/icons/vite";
import { Vitest } from "./assets/icons/vitest";

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
  icon: React.ComponentType;
  color: string;
  category: "frontend" | "tools" | "other";
}

export const skills: Skill[] = [
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "text-orange-500",
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: SiCss3,
    color: "text-blue-500",
    category: "frontend",
  },
  {
    name: "Sass",
    icon: SiSass,
    color: "text-pink-500",
    category: "frontend",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-cyan-500",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-500",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
    category: "frontend",
  },
  {
    name: "React",
    icon: SiReact,
    color: "text-sky-500",
    category: "frontend",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "text-purple-600",
    category: "frontend",
  },
  {
    name: "Zustand",
    icon: Database,
    color: "text-amber-600",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black dark:text-white",
    category: "frontend",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "text-orange-600",
    category: "tools",
  },
  {
    name: "Vite",
    icon: Vite,
    color: "text-purple-500",
    category: "tools",
  },

  {
    name: "Vitest",
    icon: Vitest,
    color: "text-purple-500",
    category: "tools",
  },
  {
    name: "Jest",
    icon: SiJest,
    color: "text-red-500",
    category: "tools",
  },
  {
    name: "ESLint",
    icon: SiEslint,
    color: "text-purple-600",
    category: "tools",
  },
  {
    name: "Prettier",
    icon: SiPrettier,
    color: "text-pink-500",
    category: "tools",
  },
  {
    name: "Storybook",
    icon: SiStorybook,
    color: "text-pink-600",
    category: "tools",
  },
  {
    name: "Webpack",
    icon: SiWebpack,
    color: "text-blue-500",
    category: "tools",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    color: "text-pink-600",
    category: "frontend",
  },
  {
    name: "REST APIs",
    icon: Network,
    color: "text-green-600",
    category: "frontend",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "text-orange-500",
    category: "tools",
  },
  {
    name: "Swagger",
    icon: SiSwagger,
    color: "text-green-500",
    category: "tools",
  },
  {
    name: "Linux",
    icon: SiLinux,
    color: "text-black-600",
    category: "other",
  },
  {
    name: "Responsive Design",
    icon: MonitorSmartphone,
    color: "text-teal-500",
    category: "frontend",
  },
  {
    name: "Web Accessibility",
    icon: Accessibility,
    color: "text-green-500",
    category: "frontend",
  },
  {
    name: "Agile Development",
    icon: KanbanSquare,
    color: "text-indigo-500",
    category: "other",
  },
  {
    name: "Testing Library",
    icon: SiTestinglibrary,
    color: "text-red-500",
    category: "other",
  },
  {
    name: "CI/CD",
    icon: SiGithubactions,
    color: "text-blue-500",
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
