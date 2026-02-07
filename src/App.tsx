import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <div className="gradient-ring min-h-screen">
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-300 to-indigo-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar theme={theme} onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main className="max-w-6xl mx-auto px-4 pb-20 space-y-24">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
