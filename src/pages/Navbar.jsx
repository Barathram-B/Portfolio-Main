import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useMemo, lazy, Suspense } from "react";
import { Home, User, Code, Award, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const LazySpline = lazy(() => import("@splinetool/react-spline"));

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [showSpline, setShowSpline] = useState(false);
  const [isSplineReady, setIsSplineReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpline(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const navItems = useMemo(
    () => [
      { name: "Home", id: "home" },
      { name: "About", id: "about" },
      { name: "Skills", id: "skills" },
      { name: "Achievement", id: "achievement" },
      { name: "Contact", id: "contact" },
    ],
    []
  );

  const navIcons = useMemo(
    () => ({
      Home: <Home size={18} />,
      About: <User size={18} />,
      Skills: <Code size={18} />,
      Achievement: <Award size={18} />,
      Contact: <Mail size={18} />,
    }),
    []
  );

  const handleScroll = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{ contain: "layout style paint" }}
      className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-center items-center text-white overflow-hidden px-4 py-16"
    >
      {/* Spline Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-black">
        {showSpline ? (
          <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
            <div className="w-full h-full transition-opacity duration-700 opacity-100">
              <LazySpline
                scene="https://prod.spline.design/DHrzNW5ayS6PZXtz/scene.splinecode"
                onLoad={() => {
                  requestAnimationFrame(() => {
                    setIsSplineReady(true);
                  });
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "translateZ(0)",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  perspective: 1000,
                }}
              />
            </div>
          </Suspense>
        ) : (
          <div className="absolute inset-0 bg-black" />
        )}
      </div>

      {/* Navbar */}
      <nav
        className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2
        backdrop-blur-md bg-white/10 border border-white/20
        rounded-full px-6 py-3 gap-4 shadow-lg z-50"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm transition
            ${
              active === item.id
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                : "hover:bg-blue-500/30"
            }`}
          >
            {navIcons[item.name]}
            {item.name}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden fixed top-4 right-4 z-50 
        bg-white/10 backdrop-blur-lg border border-white/20
        rounded-full p-3"
      >
        ☰
      </button>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[260px]
        bg-black/40 backdrop-blur-2xl border-l border-white/20
        transform transition duration-500 z-40
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 left-6 text-3xl"
        >
          ✕
        </button>

        <div className="flex flex-col gap-6 px-8 mt-24">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                handleScroll(item.id);
                setMenuOpen(false);
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-500/30"
            >
              {navIcons[item.name]} {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="text-center max-w-xl w-full">
        <div
          className="mx-auto w-32 h-32 sm:w-36 sm:h-36 rounded-full p-[3px]
          bg-gradient-to-r from-blue-400 to-cyan-400"
        >
          <img
            src="./images/barathprofile.png"
            alt="profile"
            loading="eager"
            decoding="async"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <h1
          className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold
          bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text
          font-[Inter]"
        >
          Barathram
        </h1>

        {isSplineReady && (
          <div className="hidden">spline-loaded</div>
        )}

        <TypeAnimation
          sequence={["I am Full Stack Developer", 1000, ""]}
          speed={20}
          repeat={Infinity}
          className="mt-3 text-lg sm:text-xl md:text-2xl font-bold text-blue-400"
        />

        <p className="mt-4 text-gray-300 text-sm sm:text-base">
          Building digital experiences with clean code and creativity.
        </p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <a
            href="mailto:balakrishnanbarath06@gmail.com"
            className="flex items-center gap-2 px-5 py-2 rounded-lg
            bg-white/10 border border-white/20 hover:bg-blue-500/20 transition"
          >
            <Mail size={16} /> Email
          </a>

          <a
            href="https://github.com/Barathram-B"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-lg
            bg-white/10 border border-white/20 hover:bg-blue-500/20 transition"
          >
            <FaGithub size={16} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}



