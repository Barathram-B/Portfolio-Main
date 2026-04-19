import { useEffect, useRef, useState } from "react";
import { FaUserTie, FaGraduationCap } from "react-icons/fa";

export default function About() {

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
    id="about"
      ref={sectionRef}
      className="bg-black text-white pt-8 pb-16 px-6 overflow-hidden"
    >
     
     <div className="flex justify-center mb-10">
  <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
</div>

      {/* Title */}
      <div
        className={`text-center mb-12 transform transition-all duration-700 ${
          visible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        }`}
      >
        <div className="flex justify-center mb-4">
          <FaUserTie className="text-blue-500 text-5xl" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          <a href="#about">About Me</a>
        </h2>

        <p className="text-gray-400 mt-4">
          Passionate Developer • Problem Solver • UI Creator
        </p>
      </div>

      {/* Main Content */}
      <div
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start transform transition-all duration-700 ${
          visible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        }`}
      >

        {/* About Content */}
        <div
          className="border border-blue-500/30 rounded-xl p-8
          bg-gradient-to-b from-[#0a0a0a] to-[#111827]
          backdrop-blur-lg shadow-lg hover:border-blue-500
          transition duration-500 hover:-translate-y-1"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">
            Hi, I'm Barath
          </h3>

          <p className="text-gray-300 leading-relaxed">
            I am a passionate developer who enjoys building modern websites
            and solving real-world problems using technology.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            I specialize in creating animated user interfaces and responsive
            web designs that deliver smooth user experiences across devices.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            My focus is on developing visually attractive and interactive
            websites that combine creativity with performance.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            I constantly explore new technologies and improve my development
            skills to build innovative digital solutions.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">

          {/* vertical line */}
          <div className="absolute left-3 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 to-blue-700"></div>

          <div className="space-y-8">

            {/* Bachelor Degree */}
            <div className="relative pl-12 group">
              <div className="absolute left-0 top-2 bg-blue-500 p-2 rounded-full">
                <FaGraduationCap />
              </div>

              <div
                className="border border-blue-500/30 rounded-xl p-6
                bg-gradient-to-b from-[#0a0a0a] to-[#111827]
                hover:border-blue-500 transition duration-500
                shadow-lg group-hover:-translate-y-1"
              >
                <h4 className="text-lg font-semibold text-blue-400 mb-2">
                  Bachelor Degree
                </h4>

                <p className="text-gray-300">
                  Velammal Engineering College
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  B.Tech Artificial Intelligence and Data Science
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  Chennai
                </p>
              </div>
            </div>

            {/* HSC */}
            <div className="relative pl-12 group">
              <div className="absolute left-0 top-2 bg-blue-500 p-2 rounded-full">
                <FaGraduationCap />
              </div>

              <div
                className="border border-blue-500/30 rounded-xl p-6
                bg-gradient-to-b from-[#0a0a0a] to-[#111827]
                hover:border-blue-500 transition duration-500
                shadow-lg group-hover:-translate-y-1"
              >
                <h4 className="text-lg font-semibold text-blue-400 mb-2">
                  Higher Secondary (HSC)
                </h4>

                <p className="text-gray-300">
                  Lions Matric Higher Secondary School
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  Paramakudi, Ramanathapuram District
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}