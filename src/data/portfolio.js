// Re-export all content from the content folder for backward compatibility
// You can import directly from '../content' or continue using '../data/portfolio'

export { personalInfo } from "../content/personalInfo";
export { navLinks } from "../content/navigation";
export { skills, skillStrengths } from "../content/skills";
export { projects } from "../content/projects";
export { experience, careerJourney } from "../content/experience";
export { certifications, achievements } from "../content/certifications";

// Note: The original data has been moved to src/content/ folder
// Each section now has its own file for better organization:
// - personalInfo.js - Personal details and social links
// - navigation.js - Navigation links
// - skills.js - Skills categories and strengths
// - projects.js - Portfolio projects
// - experience.js - Work experience and career journey
// - certifications.js - Certifications and achievements
