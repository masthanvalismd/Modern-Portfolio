import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiMui,
  SiMysql,
  SiExpress,
  SiMongoose,
  SiPostman,
  SiGooglechrome,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Skills Data
export const skills = {
  frontend: {
    title: "Frontend Development",
    grid: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    ],
  },
  backend: {
    title: "Backend Development",
    grid: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "Mongoose", icon: SiMongoose, color: "#880000" },
    ],
  },
  tools: {
    title: "Tools & Technologies",
    grid: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    items: [
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "MongoDB Compass", icon: SiMongodb, color: "#47A248" },
      { name: "Chrome DevTools", icon: SiGooglechrome, color: "#4285F4" },
    ],
  },
};

// Skill Strengths for About Section
export const skillStrengths = [
  {
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
    icon: "code",
  },
  {
    title: "Modern Stack",
    description: "Expert in React, TypeScript, and cutting-edge technologies",
    icon: "stack",
  },
  {
    title: "Performance",
    description: "Optimizing for speed, accessibility, and user experience",
    icon: "performance",
  },
];
