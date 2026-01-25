import { motion } from "framer-motion";
import { HiArrowDown, HiLocationMarker, HiExternalLink } from "react-icons/hi";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";
import resume from "../assets/Mohammed_Masthan_Vali_Resume.pdf";
import { useTheme } from "../context/ThemeContext";
import smd from "../assets/smd.jpg";
import { useRef, useState } from "react";

const Hero = () => {
  const { isDark } = useTheme();
  const photoRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Mohammed_Masthan_Vali_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMouseMove = (e) => {
    if (!photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 15);
    setRotateY((centerX - x) / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24 md:pb-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]"
          animate={{
            x: [0, -40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            {/* Available Badge */}
            <motion.div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8 ${
                isDark
                  ? "bg-white/5 border border-white/10 text-slate-300"
                  : "bg-gray-100 border border-gray-200 text-gray-600"
              }`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              <motion.p
                className={`text-xl sm:text-2xl md:text-3xl font-medium mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Hi, I'm
              </motion.p>
              <h1 className="font-bold leading-tight mb-4 font-display">
                <motion.span
                  className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-primary-600 to-green-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  Mohammed
                </motion.span>
                <motion.span
                  className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  Masthan Vali
                </motion.span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.p
              className={`text-xl sm:text-2xl md:text-3xl font-medium mb-4 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              {personalInfo.title}
            </motion.p>

            {/* Subtitle */}
            <motion.p
              className={`text-lg max-w-lg mb-8 ${
                isDark ? "text-slate-400" : "text-gray-600"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Crafting exceptional digital experiences with modern web
              technologies
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <motion.a
                href="#projects"
                className="px-6 py-3.5 rounded-lg font-medium bg-[#2563eb] text-white transition-all flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <HiExternalLink size={18} />
              </motion.a>
              <motion.button
                onClick={downloadResume}
                className={`px-6 py-3.5 rounded-lg font-medium border border-[#2563eb] text-[#2563eb] transition-colors flex items-center gap-2 ${
                  isDark ? "hover:bg-[#2563eb]/10" : "hover:bg-[#2563eb]/5"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiDownload size={20} />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              {[
                { icon: FiGithub, href: personalInfo.social.github },
                { icon: FiLinkedin, href: personalInfo.social.linkedin },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all ${
                    isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Avatar */}
          <motion.div
            className="relative order-2 lg:order-1 mb-8 lg:mb-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div
              ref={photoRef}
              className="relative w-full max-w-md mx-auto"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative aspect-square"
                style={{
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s ease-out",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl rotate-6 opacity-20" />
                <div
                  className={`absolute inset-0 backdrop-blur-sm rounded-2xl border overflow-hidden shadow-2xl ${
                    isDark
                      ? "bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-white/10 shadow-indigo-500/10"
                      : "bg-gradient-to-br from-indigo-100/50 to-purple-100/50 border-gray-200 shadow-indigo-200/20"
                  }`}
                >
                  <img
                    src={smd}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <motion.div
                  className={`absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 p-3 md:p-4 rounded-xl border shadow-xl ${
                    isDark
                      ? "bg-[#1a1a24] border-white/10"
                      : "bg-white border-gray-200"
                  }`}
                  style={{ transform: "translateZ(30px)" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div
                    className={`flex items-center gap-2 ${
                      isDark ? "text-slate-300" : "text-gray-700"
                    }`}
                  >
                    <HiLocationMarker className="text-indigo-400" />
                    <span className="text-sm">{personalInfo.location}</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.a
          href="#about"
          className={`flex flex-col items-center gap-2 transition-colors cursor-pointer ${
            isDark
              ? "text-slate-500 hover:text-slate-300"
              : "text-gray-400 hover:text-gray-600"
          }`}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm tracking-wide">Scroll Down</span>
          <HiArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
