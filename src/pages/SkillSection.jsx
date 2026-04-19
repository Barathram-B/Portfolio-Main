import { useRef, useEffect } from "react";
import lottie from "lottie-web";

import robotAnimation from "../assets/robot.json";
import sphereAnimation from "../assets/sphere.json";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaReact,
  FaGithub
} from "react-icons/fa";

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const robotRef = useRef(null);
  const sphereRef = useRef(null);

  useEffect(() => {
    let robotAnim = null;
    let sphereAnim = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (robotRef.current && !robotAnim) {
            robotRef.current.innerHTML = "";

            robotAnim = lottie.loadAnimation({
              container: robotRef.current,
              renderer: "svg",
              loop: true,
              autoplay: true,
              animationData: robotAnimation,
              rendererSettings: {
                progressiveLoad: true,
                hideOnTransparent: true,
              },
            });

            robotAnim.setSpeed(0.7);
          }

          if (sphereRef.current && !sphereAnim) {
            sphereRef.current.innerHTML = "";

            sphereAnim = lottie.loadAnimation({
              container: sphereRef.current,
              renderer: "svg",
              loop: true,
              autoplay: true,
              animationData: sphereAnimation,
              rendererSettings: {
                progressiveLoad: true,
                hideOnTransparent: true,
              },
            });

            sphereAnim.setSpeed(0.5);
          }
        } else {
          robotAnim?.destroy();
          sphereAnim?.destroy();
          robotAnim = null;
          sphereAnim = null;
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      robotAnim?.destroy();
      sphereAnim?.destroy();
    };
  }, []);

  const skills = [
    { icon: <FaHtml5 />, color: "text-orange-500" },
    { icon: <FaCss3Alt />, color: "text-blue-500" },
    { icon: <FaJs />, color: "text-yellow-400" },
    { icon: <FaPython />, color: "text-green-400" },
    { icon: <FaJava />, color: "text-red-500" },
    { icon: <FaReact />, color: "text-cyan-400" }
  ];

  const tools = [
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="git"
          className="w-6 h-6 object-contain"
          loading="lazy"
        />
      ),
      title: "Git",
      desc: "Version control system"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      desc: "Code collaboration platform"
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          alt="vscode"
          className="w-6 h-6 object-contain"
          loading="lazy"
        />
      ),
      title: "VS Code",
      desc: "Powerful code editor"
    },
    {
      icon: (
        <img
          src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
          alt="postman"
          className="w-6 h-6 object-contain"
          loading="lazy"
        />
      ),
      title: "Postman",
      desc: "API testing tool"
    }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-black text-white min-h-[80vh] flex flex-col items-center justify-center px-6 py-16"
    >
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2
          className="text-4xl font-bold
          bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400
          text-transparent bg-clip-text"
        >
          Skills
        </h2>

        <p className="text-gray-400 text-sm mt-4">
          Technologies I use and improve continuously
        </p>
      </div>

      {/* MAIN */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full max-w-6xl">
        {/* ROBOT */}
        <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] flex items-center justify-center order-1 lg:order-2">
          <div
            ref={robotRef}
            className="w-full h-full will-change-transform pointer-events-none"
          ></div>
        </div>

        {/* ORBIT */}
        <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] flex items-center justify-center order-2 lg:order-1">
          {/* CENTER SPHERE */}
          <div
            ref={sphereRef}
            className="absolute z-10 w-24 h-24 sm:w-32 sm:h-32 pointer-events-none will-change-transform"
          ></div>

          {/* SKILLS */}
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`absolute
              w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16
              flex items-center justify-center
              rounded-xl
              bg-white/5 backdrop-blur-md
              border border-white/10
              text-xl sm:text-2xl lg:text-3xl
              ${skill.color}
              hover:scale-110 hover:bg-white/10
              transition duration-300
              animate-orbit-${index}`}
            >
              {skill.icon}
            </div>
          ))}
        </div>
      </div>

      {/* TOOLKIT */}
      <div className="mt-20 w-full max-w-5xl">
        <h3
          className="text-xl font-semibold text-center mb-10
          bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
        >
          Developer Toolkit
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group p-5 rounded-xl
              bg-white/5 backdrop-blur-xl border border-white/10
              hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,150,255,0.2)]
              transition duration-300"
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition">
                {tool.icon}
              </div>

              <h4 className="font-semibold text-white">{tool.title}</h4>
              <p className="text-xs text-gray-400 mt-1">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}