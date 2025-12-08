import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,

  FaHeart,
  FaInstagram,
} from "react-icons/fa";
import { personalInfo, navLinks } from "../data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.social.github, label: "GitHub" },
    { icon: FaLinkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: FaInstagram, href: personalInfo.social.instagram, label: "Instagram" },
  ];

  return (
    <footer className="relative py-12 border-t border-white/5 bg-[#0a0a0f]">
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
            <p className="text-slate-500 mt-2 text-sm">
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
                className="text-sm text-slate-400 hover:text-white transition-colors"
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
                className="p-2.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-10 pt-8 border-t border-white/5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-slate-500 text-sm flex items-center justify-center gap-1">
            © {currentYear} {personalInfo.name}. Made with
            <FaHeart className="text-red-500 w-3 h-3" />
            and a lot of coffee.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
