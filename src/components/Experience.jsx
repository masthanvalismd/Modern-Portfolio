import { motion } from "framer-motion";
import { HiCalendar, HiLocationMarker, HiCheckCircle } from "react-icons/hi";
import { FaBriefcase } from "react-icons/fa";
import { experience } from "../data/portfolio";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { useTheme } from "../context/ThemeContext";

const Experience = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="experience"
      className={`py-20 md:py-25 relative overflow-hidden ${
        isDark ? "" : "bg-white"
      }`}
    >
      {/* Background Effects */}
      <div
        className={`absolute top-1/2 right-0 w-72 h-72 rounded-full blur-[100px] -translate-y-1/2 ${
          isDark ? "bg-indigo-600/10" : "bg-indigo-200/50"
        }`}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-indigo-400 font-medium text-sm uppercase tracking-widest">
            Work History
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mt-4 font-display ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Professional Experience
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto ${
              isDark ? "text-slate-400" : "text-gray-600"
            }`}
          >
            My journey in the tech industry and the impact I've made along the
            way
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Timeline line */}
          <div
            className={`absolute left-6 top-0 bottom-0 w-0.5 ${
              isDark
                ? "bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500"
                : "bg-gradient-to-b from-indigo-400 via-purple-400 to-cyan-400"
            }`}
          />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-16"
                variants={fadeInUp}
              >
                {/* Timeline Icon */}
                <div
                  className={`absolute left-0 top-6 w-12 h-12 rounded-xl flex items-center justify-center ${
                    isDark
                      ? "bg-indigo-500/20 text-indigo-400"
                      : "bg-indigo-100 text-indigo-600"
                  }`}
                >
                  <FaBriefcase size={20} />
                </div>

                {/* Card */}
                <motion.div
                  className={`p-6 rounded-2xl border ${
                    isDark
                      ? "bg-[#12121a] border-white/5"
                      : "bg-white border-gray-200 shadow-lg"
                  }`}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3
                        className={`text-xl font-bold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-indigo-400 font-medium">
                        {item.company}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? "bg-indigo-500/20 text-indigo-400"
                          : "bg-indigo-100 text-indigo-600"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div
                      className={`flex items-center gap-1.5 text-sm ${
                        isDark ? "text-slate-400" : "text-gray-500"
                      }`}
                    >
                      <HiCalendar size={16} />
                      <span>{item.year}</span>
                    </div>
                    <div
                      className={`flex items-center gap-1.5 text-sm ${
                        isDark ? "text-slate-400" : "text-gray-500"
                      }`}
                    >
                      <HiLocationMarker size={16} />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`mb-6 ${
                      isDark ? "text-slate-300" : "text-gray-700"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="mb-6">
                    <h4
                      className={`text-sm font-semibold uppercase tracking-wide mb-3 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {item.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-sm ${
                            isDark ? "text-slate-400" : "text-gray-600"
                          }`}
                        >
                          <span className="text-indigo-400 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4
                      className={`text-sm font-semibold uppercase tracking-wide mb-3 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-sm ${
                            isDark ? "text-slate-400" : "text-gray-600"
                          }`}
                        >
                          <HiCheckCircle
                            className="text-green-500 mt-0.5 flex-shrink-0"
                            size={16}
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Used */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isDark
                            ? "bg-sky-500/20 text-sky-400"
                            : "bg-sky-100 text-sky-600"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
