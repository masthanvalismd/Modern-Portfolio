import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { fadeInUp } from "../utils/animations";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="skills"
      className={`py-20 md:py-25 relative overflow-hidden ${
        isDark ? "" : "bg-white"
      }`}
    >
      <div
        className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[120px] ${
          isDark ? "bg-purple-600/10" : "bg-purple-200/50"
        }`}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-indigo-400 font-medium text-sm uppercase tracking-widest">
            My Skills
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mt-4 font-display ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Technologies I work with
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto ${
              isDark ? "text-slate-400" : "text-gray-600"
            }`}
          >
            A collection of technologies and tools I've mastered over the years
          </p>
        </motion.div>
        <div className="space-y-16">
          {Object.values(skills).map((category, sIdx) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sIdx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3
                className={`text-2xl md:text-3xl font-bold text-center mb-8 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {category.title}
              </h3>
              <div className={`grid ${category.grid} gap-6`}>
                {category.items.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 30, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="relative group"
                    >
                      <div
                        className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 text-center h-full ${
                          isDark
                            ? "bg-white/5 border-white/10 hover:border-white/20"
                            : "bg-gray-50 border-gray-200 hover:border-gray-300 shadow-sm"
                        }`}
                      >
                        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          <div
                            className="w-10 h-10 mx-auto flex items-center justify-center"
                            style={{ color: skill.color }}
                          >
                            <IconComponent size={40} />
                          </div>
                        </div>
                        <h4
                          className={`text-lg font-semibold ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {skill.name}
                        </h4>
                      </div>
                      {/* Glow effect */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300 -z-10"
                        style={{
                          background: `linear-gradient(to right, ${skill.color}40, ${skill.color}60)`,
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[
                ...Object.values(skills).flatMap((cat) => cat.items),
                ...Object.values(skills).flatMap((cat) => cat.items),
              ].map((skill, idx) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={`slider-${idx}`}
                    className="flex-shrink-0 flex flex-col items-center gap-2"
                  >
                    <div
                      className={`backdrop-blur-sm rounded-xl p-4 border ${
                        isDark
                          ? "bg-white/5 border-white/10"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div
                        className="w-12 h-12 flex items-center justify-center"
                        style={{ color: skill.color }}
                      >
                        <IconComponent size={48} />
                      </div>
                    </div>
                    <p
                      className={`text-sm font-medium text-center whitespace-nowrap ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {skill.name}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
