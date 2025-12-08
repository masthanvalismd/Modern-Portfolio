import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMail, HiLocationMarker, HiPhone, HiCheck } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../data/portfolio";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "../utils/animations";

// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an Email Service (connect your Gmail or other email provider)
// 3. Create an Email Template with these variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Replace the values below with your own:
const EMAILJS_SERVICE_ID = "service_v5wlmbs"; // e.g., "service_xxxxxx"
const EMAILJS_TEMPLATE_ID = "template_ikiqq9h"; // e.g., "template_xxxxxx"
const EMAILJS_PUBLIC_KEY = "5mUWZ4rLMvhb2sTya"; // e.g., "xxxxxxxxxxxxxx"

const Contact = () => {
  const formRef = useRef();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
          from_name: formState.name,
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(
        "Failed to send message. Please try again or email me directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Reset form after showing success message
  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const contactInfo = [
    {
      icon: HiMail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: HiLocationMarker,
      label: "Location",
      value: personalInfo.location,
      href: "#",
    },
    {
      icon: HiPhone,
      label: "Phone",
      value: "+91 7095803221",
      href: "tel:+917095803221",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-25 relative overflow-hidden bg-[#0d0d12]"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-indigo-400 font-medium text-sm uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Let's work together
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <h3 className="text-2xl font-bold mb-8">Get in touch</h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all">
                    <item.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/5">
              <p className="text-slate-300 italic">
                "📩 I’m open to opportunities in MERN stack development,
                frontend engineering, and full-stack roles where I can
                contribute to impactful projects. Let’s connect and explore how
                we can work together."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#12121a] border border-white/5">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <HiCheck className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-slate-400 text-center">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all peer"
                      placeholder="Your Name"
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-4 transition-all pointer-events-none ${
                        formState.name || focusedField === "name"
                          ? "-top-2.5 text-xs text-indigo-400 bg-[#12121a] px-1"
                          : "top-4 text-slate-500"
                      }`}
                    >
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all peer"
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-4 transition-all pointer-events-none ${
                        formState.email || focusedField === "email"
                          ? "-top-2.5 text-xs text-indigo-400 bg-[#12121a] px-1"
                          : "top-4 text-slate-500"
                      }`}
                    >
                      Email Address
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      id="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none peer"
                      placeholder="Your Message"
                    />
                    <label
                      htmlFor="message"
                      className={`absolute left-4 transition-all pointer-events-none ${
                        formState.message || focusedField === "message"
                          ? "-top-2.5 text-xs text-indigo-400 bg-[#12121a] px-1"
                          : "top-4 text-slate-500"
                      }`}
                    >
                      Your Message
                    </label>
                  </div>

                  {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-xl font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
