import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { navLinks } from "../data/portfolio";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [targetLink, setTargetLink] = useState(null);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active link based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = section;
          }
        }
      }

      setActiveLink(`#${currentSection}`);

      // Check if we've reached the target section
      if (targetLink && `#${currentSection}` === targetLink) {
        setTargetLink(null);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetLink]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setTargetLink(href);

    // Scroll to the section
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? "bg-[#0a0a0f]/80 backdrop-blur-lg shadow-lg shadow-black/10"
              : "bg-white/80 backdrop-blur-lg shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo and Available Badge */}
            <div className="flex flex-col">
              <motion.a
                href="#home"
                className="text-lg md:text-xl font-normal font-display"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                  S M D
                </span>
              </motion.a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeLink === link.href
                      ? isDark
                        ? "bg-[#1e3a5f] text-white"
                        : "bg-primary-600/10 text-primary-600"
                      : isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Right side - Theme Toggle and CTA */}
            <div className="hidden md:flex items-center gap-3">
              <motion.button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full transition-colors ${
                  isDark
                    ? "text-slate-400 hover:text-white hover:bg-white/5"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <IoSunnyOutline size={22} />
                ) : (
                  <IoMoonOutline size={22} />
                )}
              </motion.button>
              <motion.a
                href="#contact"
                className="px-5 py-2.5 rounded-full text-sm font-medium bg-[#0ea5e9] text-white hover:bg-[#0284c7] transition-all shadow-lg shadow-sky-500/25"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(14, 165, 233, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? "text-slate-300 hover:text-white hover:bg-white/5"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <IoSunnyOutline size={22} />
                ) : (
                  <IoMoonOutline size={22} />
                )}
              </motion.button>
              <motion.button
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? "text-slate-300 hover:text-white hover:bg-white/5"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <HiX size={24} />
                ) : (
                  <HiMenuAlt3 size={24} />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`absolute right-0 top-0 bottom-0 w-72 border-l p-6 pt-20 ${
                isDark
                  ? "bg-[#12121a] border-white/5"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-lg font-medium py-3 px-4 rounded-lg transition-all ${
                      isDark
                        ? "text-slate-300 hover:text-white hover:bg-white/5"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="mt-4 py-3 px-4 rounded-lg text-center font-medium bg-[#0ea5e9] text-white"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
