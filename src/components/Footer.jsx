import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import { personalInfo, navLinks } from "../data/portfolio";
import { useTheme } from "../context/ThemeContext";

// Back to Top Button Component (Fixed position)
const BackToTopButton = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-colors ${
            isDark
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <FaArrowUp size={20}  />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.social.github, label: "GitHub" },
    { icon: FaLinkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    {
      icon: FaInstagram,
      href: personalInfo.social.instagram,
      label: "Instagram",
    },
  ];

  return (
    <footer
      className={`relative py-12 border-t ${
        isDark ? "border-white/5 bg-[#0a0a0f]" : "border-gray-200 bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              S M D
            </a>
            <p
              className={`mt-2 text-sm ${
                isDark ? "text-slate-500" : "text-gray-500"
              }`}
            >
              Building digital experiences that matter.
            </p>
          </motion.div>

          <motion.nav
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {navLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors ${
                  isDark
                    ? "text-slate-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.nav>

          <motion.div
            className="flex justify-center md:justify-end gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-2.5 rounded-lg transition-all ${
                  isDark
                    ? "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                    : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={`mt-10 pt-8 border-t text-center ${
            isDark ? "border-white/5" : "border-gray-200"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p
            className={`text-sm flex items-center justify-center gap-1 ${
              isDark ? "text-slate-500" : "text-gray-500"
            }`}
          >
            © {currentYear} {personalInfo.name}. Made with
            <FaHeart className="text-red-500 w-3 h-3" />
            and a lot of coffee.
          </p>
        </motion.div>
      </div>

      {/* Fixed Back to Top Button */}
      <BackToTopButton isDark={isDark} />
    </footer>
  );
};

export default Footer;
