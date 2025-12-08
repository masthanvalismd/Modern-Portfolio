import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiDownload, HiLocationMarker } from "react-icons/hi";
import { personalInfo, experience } from "../data/portfolio";
import smd from "../assets/smd.jpg";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "../utils/animations";

const About = () => {
  const photoRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

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
    <section id="about" className="py-20 md:py-23 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-indigo-400 font-medium text-sm uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Get to know me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            className="relative order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
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
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-indigo-500/10">
                  <img
                    src={smd}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <motion.div
                  className="absolute -bottom-6 -right-6 p-4 rounded-xl bg-[#1a1a24] border border-white/10 shadow-xl"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="flex items-center gap-2 text-slate-300">
                    <HiLocationMarker className="text-indigo-400" />
                    <span className="text-sm">{personalInfo.location}</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <h3 className="text-xl font-bold mb-6">
              Passionate about creating impactful digital solutions
            </h3>
            <p className="text-slate-400 leading-relaxed mb-5">
              {personalInfo.bio}
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              For me, great front-end development is all about balance:
              performance + visuals, simplicity + function, creativity + logic.
              Over the last few years, I've built applications that improved
              workflows, enhanced user experience, and even earned recognition
              like the Infosys Insta Award.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              I believe in writing maintainable code, staying updated with the
              latest front-end trends, and continuously improving as a
              developer.
            </p>

            <motion.a
              href={personalInfo.resumeUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/25"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <HiDownload size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h3
            className="text-2xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            Experience
          </motion.h3>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent md:-translate-x-1/2" />

            {experience.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-12 md:pl-0 pb-12 last:pb-0"
                variants={fadeInUp}
              >
                <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-indigo-500 -translate-x-1/2 ring-4 ring-[#0a0a0f]" />

                <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8 md:text-right"}`}>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 mb-3">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-indigo-400 font-medium mb-3">
                    {item.company}
                  </p>
                  <ul className={`text-slate-400 text-sm space-y-2 ${index % 2 === 0 ? "list-disc list-inside" : "md:list-inside list-disc"}`}>
                    {item.description.split('\n\n').map((point, i) => (
                      <li key={i} className="leading-relaxed">{point.trim()}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
