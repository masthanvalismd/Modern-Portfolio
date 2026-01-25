import { useEffect } from "react";

/**
 * SEO Component for Mohammed Masthan Vali Portfolio
 * Handles dynamic meta tags and structured data for better search engine visibility
 */
const SEO = ({
  title = "Mohammed Masthan Vali | Frontend Developer | React Developer Portfolio",
  description = "Mohammed Masthan Vali - Frontend Developer with 3.9+ years of experience in ReactJS, JavaScript, TypeScript. Building responsive, high-performance web applications.",
  keywords = "Mohammed Masthan Vali, Masthan Vali, Frontend Developer, React Developer, JavaScript Developer, TypeScript, Web Developer, Hyderabad, India, Portfolio",
  image = "/og-image.png",
  url = "https://mohammedmasthanvali-dev.vercel.app/",
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector, attribute, content) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute(attribute, content);
      } else {
        element = document.createElement("meta");
        const [attr, value] = selector.match(/\[([^\]]+)\]/)[1].split("=");
        element.setAttribute(attr, value.replace(/"/g, ""));
        element.setAttribute(attribute, content);
        document.head.appendChild(element);
      }
    };

    // Update primary meta tags
    updateMetaTag('meta[name="description"]', "content", description);
    updateMetaTag('meta[name="keywords"]', "content", keywords);

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', "content", title);
    updateMetaTag('meta[property="og:description"]', "content", description);
    updateMetaTag('meta[property="og:image"]', "content", image);
    updateMetaTag('meta[property="og:url"]', "content", url);

    // Update Twitter tags
    updateMetaTag('meta[property="twitter:title"]', "content", title);
    updateMetaTag(
      'meta[property="twitter:description"]',
      "content",
      description,
    );
    updateMetaTag('meta[property="twitter:image"]', "content", image);
    updateMetaTag('meta[property="twitter:url"]', "content", url);
  }, [title, description, keywords, image, url]);

  return null; // This component doesn't render anything
};

// SEO data for different sections (can be used for future expansion)
export const seoData = {
  home: {
    title:
      "Mohammed Masthan Vali | Frontend Developer | React Developer Portfolio",
    description:
      "Mohammed Masthan Vali - Frontend Developer with 3.9+ years of experience in ReactJS, JavaScript, TypeScript. Building responsive, high-performance web applications at Infosys.",
    keywords:
      "Mohammed Masthan Vali, Masthan Vali, Frontend Developer, React Developer, JavaScript, TypeScript, Web Developer, Hyderabad, Portfolio, Infosys Developer",
  },
  about: {
    title: "About Mohammed Masthan Vali | Frontend Developer",
    description:
      "Learn about Mohammed Masthan Vali's journey as a Frontend Developer. 3.9+ years of experience building award-winning React applications at Infosys.",
    keywords:
      "Mohammed Masthan Vali about, Frontend Developer experience, React Developer Hyderabad, Infosys Developer, Web Developer India",
  },
  projects: {
    title: "Projects by Mohammed Masthan Vali | React & JavaScript Projects",
    description:
      "Explore projects built by Mohammed Masthan Vali including ShopKart, Movie-Flix, and more. Modern React applications with clean code and great UX.",
    keywords:
      "Mohammed Masthan Vali projects, React projects, JavaScript projects, Frontend projects, Web development portfolio",
  },
  contact: {
    title: "Contact Mohammed Masthan Vali | Hire Frontend Developer",
    description:
      "Get in touch with Mohammed Masthan Vali for frontend development opportunities. Available for React, JavaScript, and TypeScript projects.",
    keywords:
      "Contact Mohammed Masthan Vali, Hire Frontend Developer, React Developer for hire, Freelance Web Developer Hyderabad",
  },
};

export default SEO;
