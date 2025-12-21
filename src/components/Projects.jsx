import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiCode, HiX } from "react-icons/hi";
import { projects } from "../data/portfolio";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { useTheme } from "../context/ThemeContext";

const ProjectModal = ({ project, isOpen, onClose, isDark }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`relative w-full max-w-2xl rounded-2xl overflow-hidden ${
            isDark ? "bg-[#12121a] border border-white/10" : "bg-white"
          }`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-full z-10 ${
              isDark
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
          >
            <HiX size={20} />
          </button>

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />

          <div className="p-6">
            <h3
              className={`text-2xl font-bold mb-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {project.title}
            </h3>

            <p
              className={`mb-6 ${
                isDark ? "text-slate-400" : "text-gray-600"
              }`}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    isDark
                      ? "bg-white/5 text-slate-300 border-white/5"
                      : "bg-gray-100 text-gray-700 border-gray-200"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiExternalLink size={20} />
                Live Site
              </motion.a>
              <motion.a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                  isDark
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiCode size={20} />
                View Code
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, index, isDark, onClick }) => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <motion.div
      className="group relative cursor-pointer"
      variants={fadeInUp}
      custom={index}
      onClick={onClick}
    >
      <motion.div
        className={`relative h-full rounded-2xl overflow-hidden border transition-colors ${
          isDark
            ? "bg-[#12121a] border-white/5 hover:border-white/10"
            : "bg-white border-gray-200 hover:border-gray-300 shadow-lg"
        }`}
        whileHover={{
          y: -8,
          boxShadow: isDark
            ? "0 25px 50px -12px rgba(0,0,0,0.6)"
            : "0 25px 50px -12px rgba(0,0,0,0.15)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="relative h-48 overflow-hidden"
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isImageHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${
              isDark ? "from-[#12121a]" : "from-white"
            }`}
          />

          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500 to-orange-500 text-white">
              Featured
            </div>
          )}
        </div>

        <div className="p-6">
          <h3
            className={`text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`text-sm mb-4 line-clamp-2 ${
              isDark ? "text-slate-400" : "text-gray-600"
            }`}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  isDark
                    ? "bg-white/5 text-slate-300 border-white/5"
                    : "bg-gray-100 text-gray-700 border-gray-200"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className={`py-20 md:py-25 relative overflow-hidden ${
        isDark ? "" : "bg-white"
      }`}
    >
      <div
        className={`absolute top-1/3 -left-32 w-96 h-96 rounded-full blur-[120px] ${
          isDark ? "bg-indigo-600/10" : "bg-indigo-200/50"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-indigo-400 font-medium text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mt-4 font-display ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Recent Projects
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto ${
              isDark ? "text-slate-400" : "text-gray-600"
            }`}
          >
            A selection of projects that showcase my skills and passion for
            building great products
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isDark={isDark}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />
    </section>
  );
};

export default Projects;
