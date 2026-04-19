import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import About from "./AboutSection";
import Skills from "./SkillSection";
import Achievement from "./MainSection";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio() {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (pageLoading) {
    return (
      <div className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center w-16 h-16">
          <div className="absolute w-16 h-16 rounded-full border border-blue-500/20"></div>
          <div className="absolute w-16 h-16 rounded-full border-t-2 border-blue-500 border-r-2 border-cyan-400 animate-spin"></div>

          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.45)]"></div>
        </div>

        <p className="mt-5 text-xs tracking-[0.35em] uppercase text-gray-300">
          Loading
        </p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Achievement />
      <Contact />
      <Footer />
    </>
  );
}