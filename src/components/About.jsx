import { motion } from "framer-motion";
import {
  HiDownload,
  HiLocationMarker,
  HiCode,
  HiLightningBolt,
} from "react-icons/hi";
import {
  FaLayerGroup,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaAward,
} from "react-icons/fa";
import { personalInfo, careerJourney, skillStrengths } from "../data/portfolio";
import resume from "../assets/Mohammed_Masthan_Vali_Resume.pdf";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "../utils/animations";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { isDark } = useTheme();

  const getIcon = (iconName) => {
    switch (iconName) {
      case "code":
        return <HiCode size={24} />;
      case "stack":
        return <FaLayerGroup size={24} />;
      case "performance":
        return <HiLightningBolt size={24} />;
      default:
        return <HiCode size={24} />;
    }
  };

  const getJourneyIcon = (type) => {
    switch (type) {
      case "job":
        return <FaBriefcase size={18} />;
      case "education":
        return <FaGraduationCap size={18} />;
      case "award":
        return <FaAward size={18} />;
      default:
        return <FaBriefcase size={18} />;
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Mohammed_Masthan_Vali_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className={`py-20 md:py-25 relative overflow-hidden ${
        isDark ? "" : "bg-gray-50"
      }`}
    >
      {/* Background Effects */}
      <div
        className={`absolute top-1/2 left-0 w-72 h-72 rounded-full blur-[100px] -translate-y-1/2 ${
          isDark ? "bg-indigo-600/10" : "bg-indigo-200/50"
        }`}
      />
      <div
        className={`absolute bottom-0 right-0 w-72 h-72 rounded-full blur-[100px] ${
          isDark ? "bg-cyan-600/10" : "bg-cyan-200/50"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-indigo-400 font-medium text-sm uppercase tracking-widest">
            About Me
          </span>
          <h2
            className={`text-xl sm:text-2xl md:text-2xl font-bold mt-4 font-display ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Get to know more about my journey, passions, and what drives me as a
            developer
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - About Text & Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            {/* Bio Paragraphs */}
            <div className="space-y-4 mb-8">
              <p
                className={`leading-relaxed ${
                  isDark ? "text-slate-300" : "text-gray-700"
                }`}
              >
                Hi, I’m Mohammed Masthan Vali, a Front-End Developer based in
                Hyderabad, India with 3.7+ years of experience building
                responsive, intuitive, and performance-driven web applications.
                I specialize in ReactJS, JavaScript, HTML, CSS, and modern UI
                frameworks, with a strong focus on clean code, user experience,
                and scalability.
              </p>
              <p
                className={`leading-relaxed ${
                  isDark ? "text-slate-400" : "text-gray-600"
                }`}
              >
                For me, great front-end development is all about balance:
                performance + visuals, simplicity + function, creativity +
                logic. Over the last few years, I've built applications that
                improved workflows, enhanced user experience, and even earned
                recognition like the Infosys Insta Award.
              </p>
              <p
                className={`leading-relaxed ${
                  isDark ? "text-slate-400" : "text-gray-600"
                }`}
              >
                My journey in tech has been driven by curiosity and a constant
                desire to learn. I believe in writing maintainable code, staying
                updated with the latest front-end trends, and continuously
                improving as a developer.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mb-6">
              <HiLocationMarker className="text-indigo-400" size={20} />
              <span className={isDark ? "text-slate-300" : "text-gray-700"}>
                Based in {personalInfo.location}
              </span>
            </div>

            {/* Download Resume Button */}
            <motion.button
              onClick={downloadResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0ea5e9] text-white font-medium shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all mb-10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <HiDownload size={18} />
              Download Resume
            </motion.button>

            {/* Skill Strengths Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skillStrengths.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`p-5 rounded-xl border text-center ${
                    isDark
                      ? "bg-[#12121a] border-white/10 hover:border-white/20"
                      : "bg-white border-gray-200 hover:border-gray-300 shadow-md"
                  } transition-all`}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                      isDark
                        ? "bg-indigo-500/10 text-indigo-400"
                        : "bg-indigo-100 text-indigo-600"
                    }`}
                  >
                    {getIcon(skill.icon)}
                  </div>
                  <h4
                    className={`font-semibold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {skill.title}
                  </h4>
                  <p
                    className={`text-sm ${
                      isDark ? "text-slate-400" : "text-gray-600"
                    }`}
                  >
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Career Journey */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <h3
              className={`text-2xl font-bold mb-8 font-display text-center ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Career Journey
            </h3>

            {/* Timeline */}
            <div className="relative">
              {/* Center Vertical line */}
              <div
                className={`absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 ${
                  isDark
                    ? "bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500"
                    : "bg-gradient-to-b from-indigo-400 via-purple-400 to-cyan-400"
                }`}
              />

              <motion.div
                className="space-y-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {careerJourney.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <motion.div
                      key={index}
                      className="relative"
                      variants={fadeInUp}
                    >
                      {/* Timeline dot with icon - centered */}
                      <div
                        className={`absolute left-1/2 top-4 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                          isDark
                            ? "bg-[#0a0a0f] text-sky-400 ring-2 ring-sky-500/50"
                            : "bg-gray-50 text-sky-600 ring-2 ring-sky-400/50"
                        }`}
                      >
                        {getJourneyIcon(item.type)}
                      </div>

                      {/* Card - alternating left/right */}
                      <div
                        className={`w-[calc(50%-2rem)] ${
                          isLeft ? "mr-auto pr-4" : "ml-auto pl-4"
                        }`}
                      >
                        <motion.div
                          className={`p-5 rounded-xl border ${
                            isDark
                              ? "bg-[#12121a] border-white/10"
                              : "bg-white border-gray-200 shadow-md"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                              isDark
                                ? "bg-sky-500/10 text-sky-400"
                                : "bg-sky-100 text-sky-600"
                            }`}
                          >
                            {item.year}
                          </span>
                          <h4
                            className={`font-bold mb-1 ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {item.title}
                          </h4>
                          <p className="text-indigo-400 text-sm font-medium mb-2">
                            {item.company}
                          </p>
                          <p
                            className={`text-sm ${
                              isDark ? "text-slate-400" : "text-gray-600"
                            }`}
                          >
                            {item.description}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
