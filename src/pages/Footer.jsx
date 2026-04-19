import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ArrowUp, Phone } from "lucide-react";

export default function Footer() {
  const [callActive, setCallActive] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCall = () => {
    setCallActive(true);

    window.location.href = "tel:+917010339757";

    setTimeout(() => setCallActive(false), 2000);
  };

  return (
    <>
      {/* 🔥 TOAST */}
      {callActive && (
        <div className="fixed bottom-24 right-6 z-50 px-4 py-2 rounded-lg text-sm 
        bg-blue-500/10 border border-blue-400/30 text-blue-300 backdrop-blur-md">
          Opening call...
        </div>
      )}

      <footer className="w-full bg-[#111111] border-t border-white/10 py-8 px-4 text-white">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          {/* LEFT */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Barath
          </p>

          {/* RIGHT */}
          <div className="flex flex-col items-center gap-3">

            {/* TITLE */}
            <p className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Connect with me
            </p>

            {/* ICONS */}
            <div className="flex gap-4">

              <a href="https://github.com/Barathram-B" target="_blank"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:scale-110 transition">
                <FaGithub className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>

              <a href="https://linkedin.com/in/BarathramB2006" target="_blank"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:scale-110 transition">
                <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />
              </a>

              <a href="https://www.instagram.com/iam___barath/" target="_blank"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:scale-110 transition">
                <FaInstagram className="w-5 h-5 text-pink-500" />
              </a>

            </div>
          </div>
        </div>

        {/* 🔥 STICKY BUTTONS */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

          {/* 📞 BLUE CALL BUTTON */}
          <button
            onClick={handleCall}
            className="p-3 rounded-full bg-blue-500/20 border border-blue-400/40 
            hover:scale-110 transition animate-bounce"
          >
            <Phone className="text-blue-400" />
          </button>

          {/* ⬆ TOP */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 border border-white/10 
            hover:border-cyan-400/50 transition"
          >
            <ArrowUp className="text-gray-400 hover:text-cyan-400 transition" />
          </button>

        </div>
      </footer>
    </>
  );
}