import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { fadeInUp } from "../utils/animations";


const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-25 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Technologies I work with
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
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
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-300">
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
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center h-full">
                        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          <div
                            className="w-10 h-10 mx-auto flex items-center justify-center"
                            style={{ color: skill.color }}
                          >
                            <IconComponent size={40} />
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-white">
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
      </div>
    </section>
  );
};

export default Skills;
