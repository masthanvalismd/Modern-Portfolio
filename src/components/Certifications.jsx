import { motion } from "framer-motion";
import { HiCalendar, HiExternalLink, HiBadgeCheck } from "react-icons/hi";
import { FaAws, FaReact, FaTrophy, FaStar, FaMedal } from "react-icons/fa";
import { certifications, achievements } from "../data/portfolio";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { useTheme } from "../context/ThemeContext";

const Certifications = () => {
  const { isDark } = useTheme();

  const getCertIcon = (iconName) => {
    switch (iconName) {
      case "aws":
        return <FaAws size={32} />;
      case "react":
        return <FaReact size={32} />;
      default:
        return <HiBadgeCheck size={32} />;
    }
  };

  const getAchievementIcon = (iconName) => {
    switch (iconName) {
      case "trophy":
        return <FaTrophy size={24} />;
      case "star":
        return <FaStar size={24} />;
      case "medal":
        return <FaMedal size={24} />;
      default:
        return <FaTrophy size={24} />;
    }
  };

  return (
    <section
      id="certifications"
      className={`py-20 md:py-25 relative overflow-hidden ${
        isDark ? "" : "bg-gray-50"
      }`}
    >
      {/* Background Effects */}
      <div
        className={`absolute top-1/4 left-0 w-72 h-72 rounded-full blur-[100px] ${
          isDark ? "bg-amber-600/10" : "bg-amber-200/50"
        }`}
      />
      <div
        className={`absolute bottom-1/4 right-0 w-72 h-72 rounded-full blur-[100px] ${
          isDark ? "bg-purple-600/10" : "bg-purple-200/50"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-amber-400 font-medium text-sm uppercase tracking-widest">
            Recognition
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mt-4 font-display ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Certifications & Achievements
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto ${
              isDark ? "text-slate-400" : "text-gray-600"
            }`}
          >
            Professional certifications and recognition earned throughout my
            career
          </p>
        </motion.div>

        {/* Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3
              className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              variants={fadeInUp}
            >
              <HiBadgeCheck className="text-amber-400" size={24} />
              Certifications
            </motion.h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl border ${
                    isDark
                      ? "bg-[#12121a] border-white/5 hover:border-white/10"
                      : "bg-white border-gray-200 hover:border-gray-300 shadow-lg"
                  } transition-all`}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: `${cert.color}20`,
                        color: cert.color,
                      }}
                    >
                      {getCertIcon(cert.icon)}
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-bold text-lg ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {cert.title}
                      </h4>
                      <p className="text-indigo-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div
                      className={`flex items-center gap-1.5 text-sm ${
                        isDark ? "text-slate-400" : "text-gray-500"
                      }`}
                    >
                      <HiCalendar size={16} />
                      <span>Issued {cert.date}</span>
                    </div>
                    <div
                      className={`text-sm ${
                        isDark ? "text-slate-500" : "text-gray-400"
                      }`}
                    >
                      ID: {cert.credentialId}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm mb-4 ${
                      isDark ? "text-slate-400" : "text-gray-600"
                    }`}
                  >
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          isDark
                            ? "bg-white/5 text-slate-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Achievements */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3
              className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              variants={fadeInUp}
            >
              <FaTrophy className="text-amber-400" size={22} />
              Achievements
            </motion.h3>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl border ${
                    isDark
                      ? "bg-[#12121a] border-white/5 hover:border-amber-500/20"
                      : "bg-white border-gray-200 hover:border-amber-300 shadow-lg"
                  } transition-all`}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isDark
                          ? "bg-amber-500/10 text-amber-400"
                          : "bg-amber-100 text-amber-600"
                      }`}
                    >
                      {getAchievementIcon(achievement.icon)}
                    </div>

                    <div className="flex-1">
                      {/* Title & Year */}
                      <div className="flex items-center gap-3 mb-2">
                        <h4
                          className={`font-bold text-lg ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {achievement.title}
                        </h4>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            isDark
                              ? "bg-amber-500/10 text-amber-400"
                              : "bg-amber-100 text-amber-600"
                          }`}
                        >
                          {achievement.year}
                        </span>
                      </div>

                      {/* Description */}
                      <p
                        className={`text-sm ${
                          isDark ? "text-slate-400" : "text-gray-600"
                        }`}
                      >
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
