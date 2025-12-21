import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen antialiased transition-colors duration-300 ${
        isDark ? "bg-[#0a0a0f] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        {/* <Certifications /> */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
