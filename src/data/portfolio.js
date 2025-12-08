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

// Replace with your personal information
export const personalInfo = {
  name: "Mohammed Masthan Vali",
  title: "Front End Developer",
  subtitle:
    "Passionate about creating beautiful, functional web experiences. \nDriven by detail, design, and refined user interactions.",
  email: "masthanvalismd@gmail.com",
  location: "Hyderabad, India",
  bio: `Hi, I’m Mohammed Masthan Vali, a Front-End Developer with 3.7+ years of experience building responsive, intuitive, and performance-driven web applications. I specialize in ReactJS, JavaScript, HTML, CSS, and modern UI frameworks, with a strong focus on clean code, user experience, and scalability.`,
  resumeUrl: "../assets/Masthan_Resume.pdf",
  social: {
    github: "https://github.com/masthanvalismd",
    linkedin: "https://www.linkedin.com/in/mohammed-masthan-vali-a99385215/",
    mail: "mailto:masthanvalismd@gmail.com",
    instagram: "https://www.instagram.com/masthanvali_smd/",
  },
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

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

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built for scalability and performance.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "AI Task Manager",
    description:
      "Smart task management app with AI-powered prioritization and natural language processing for task creation.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    tags: ["Next.js", "OpenAI", "PostgreSQL", "Tailwind"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Real-time Analytics Dashboard",
    description:
      "Interactive dashboard for visualizing business metrics with real-time data updates and customizable widgets.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "D3.js", "WebSocket", "Redis"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media Scheduler",
    description:
      "Multi-platform social media scheduling tool with analytics, team collaboration, and content calendar.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["Vue.js", "Python", "FastAPI", "AWS"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: false,
  },
  {
    id: 5,
    title: "Crypto Portfolio Tracker",
    description:
      "Cryptocurrency portfolio management with real-time prices, profit/loss tracking, and market analysis tools.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    tags: ["React", "GraphQL", "CoinGecko API", "Chart.js"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: true,
  },
  {
    id: 6,
    title: "DevOps Monitoring Tool",
    description:
      "Infrastructure monitoring solution with alerting, log aggregation, and performance metrics visualization.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: ["Go", "Docker", "Kubernetes", "Prometheus"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: false,
  },
];

export const experience = [
  {
    year: "Oct 2025 - Present",
    title: "Digital Specialist Engineer",
    company: "Infosys Ltd",
    description: `In this role, I focus on creating modern and scalable front-end solutions using ReactJS and advanced JavaScript concepts.

Enhance UI performance, optimize rendering, and refine component architecture for better maintainability.

Implement clean coding practices, improved workflows, and standardized development patterns.

Contribute to feature planning, UX considerations, and collaborative decision-making during project cycles.

Continuously learn and adapt to new front-end tools, frameworks, and best practices to deliver high-quality digital experiences aligned with business goals.`,
  },
  {
    year: "Mar 2022 - Sept 2025",
    title: "Systems Engineer",
    company: "Infosys Ltd",
    description: `Worked as a Front-End Developer building responsive and scalable web applications using ReactJS, JavaScript, HTML, and CSS.

Developed reusable UI components and optimized performance with lazy loading, code splitting, and clean state management.

Integrated REST APIs to enable smooth data flow and improved user experience.

Built an internal document management app with metadata-driven features, search, and filtering.

Collaborated with cross-functional teams to translate requirements into reliable UI solutions.

Received the Infosys Insta Award for delivering a high-impact React application rated 5/5 by the client.`,
  },
];
