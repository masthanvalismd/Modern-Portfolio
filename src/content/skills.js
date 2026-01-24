import {
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiMui,
  SiPostman,
  SiGooglechrome,
  SiRedux,
  SiAxios,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Skills Data - Frontend Developer
export const skills = {
  core: {
    title: "Core Skills",
    grid: "grid-cols-2 md:grid-cols-4 lg:grid-cols-4",
    items: [
      { name: "ReactJS", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
  },
  ui: {
    title: "UI & Styling",
    grid: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    items: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "Axios", icon: SiAxios, color: "#5A29E4" },
    ],
  },
  tools: {
    title: "Tools & Platforms",
    grid: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "npm", icon: FaNpm, color: "#CB3837" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Chrome DevTools", icon: SiGooglechrome, color: "#4285F4" },
    ],
  },
};

// Additional Skills (text-based)
export const additionalSkills = [
  "Responsive Web Design",
  "Performance Optimization",
  "Lazy Loading",
  "Code Splitting",
  "Component Architecture",
  "Single Page Applications",
  "State Management",
  "REST APIs",
  "Context API",
];

// Skill Strengths for About Section
export const skillStrengths = [
  {
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
    icon: "code",
  },
  {
    title: "Modern Frontend",
    description: "Expert in React, TypeScript, and modern UI frameworks",
    icon: "stack",
  },
  {
    title: "Performance",
    description: "Optimizing for speed, accessibility, and user experience",
    icon: "performance",
  },
];
