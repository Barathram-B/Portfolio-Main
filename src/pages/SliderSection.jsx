import { useEffect, useState } from "react";
import { client, urlFor } from "../sanityClient";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Code,
  Trophy,
  Medal,
  GraduationCap,
} from "lucide-react";

export default function SliderSection({ title, type }) {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type=="${type}"] | order(year desc)`).then(setItems);
  }, [type]);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + items.length) % items.length);

  const getIcon = (title) => {
    const t = title?.toLowerCase() || "";

    if (type === "certification") return <GraduationCap size={20} />;
    if (t.includes("project") || t.includes("code")) return <Code size={20} />;
    if (t.includes("winner")) return <Trophy size={20} />;
    if (t.includes("medal")) return <Medal size={20} />;

    return <Award size={20} />;
  };

  const isCert = type === "certification";

  return (
    <div className="max-w-6xl mx-auto mb-24 px-3">

      {/* TITLE */}
      <h2
        className={`text-center text-4xl sm:text-5xl font-extrabold mb-14 
        bg-gradient-to-r ${
          isCert ? "from-cyan-400 to-blue-500" : "from-blue-500 to-indigo-400"
        } bg-clip-text text-transparent`}
      >
        {title}
      </h2>

      {/* SLIDER */}
      <div className="relative flex items-center justify-center">

        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute left-1 sm:left-6 z-20 p-2 sm:p-3 rounded-full 
          bg-white/10 border border-white/20 backdrop-blur-md hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>

        {/* CARDS */}
        <div className="relative flex items-center justify-center w-full h-[340px] sm:h-[380px] overflow-hidden">

          {items.map((item, i) => {
            const offset = i - index;

            return (
              <div
                key={i}
                onClick={() => setSelected(item)}
                className="absolute transition-all duration-500 cursor-pointer"
                style={{
                  transform: `
                    translateX(${offset * (window.innerWidth < 640 ? 160 : 280)}px)
                    scale(${offset === 0 ? 1 : 0.75})
                    rotateY(${offset * -10}deg)
                  `,
                  opacity: offset === 0 ? 1 : 0.2,
                  zIndex: offset === 0 ? 20 : 1,
                }}
              >

                {/* PREMIUM CARD */}
                <div
                  className="w-[240px] sm:w-[300px] h-[320px] sm:h-[360px] rounded-2xl p-[1.2px] relative overflow-hidden"
                  style={{
                    background: isCert
                      ? "linear-gradient(135deg, #22d3ee, #3b82f6)"
                      : "linear-gradient(135deg, #3b82f6, #6366f1)",
                  }}
                >

                  {/* WAVE EFFECT */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="w-full h-full bg-gradient-to-br from-transparent via-blue-400/20 to-transparent animate-pulse" />
                  </div>

                  {/* INNER */}
                  <div className="relative h-full w-full rounded-2xl bg-black/90 backdrop-blur-xl p-4 flex flex-col">

                    {item.image && (
                      <img
                        src={urlFor(item.image).width(600).url()}
                        className="w-full h-32 sm:h-36 object-cover rounded-lg mb-3"
                      />
                    )}

                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-lg mb-2
                      ${
                        isCert
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {getIcon(item.title)}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.title}
                    </h3>

                    {/* SCROLL DESCRIPTION */}
                    <div className="flex-1 mt-2 overflow-y-auto overflow-x-hidden pr-2 custom-scroll">
                      <p className="text-gray-400 text-sm break-words whitespace-pre-wrap">
                        {item.description}
                      </p>
                    </div>

                    {/* YEAR */}
                    <p className="text-xs text-gray-500 mt-2">
                      {item.year}
                    </p>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute right-1 sm:right-6 z-20 p-2 sm:p-3 rounded-full 
          bg-white/10 border border-white/20 backdrop-blur-md hover:scale-110 transition"
        >
          <ChevronRight />
        </button>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">

          <div className="bg-black rounded-2xl p-6 max-w-md w-full border border-white/10">

            {selected.image && (
              <img
                src={urlFor(selected.image).width(800).url()}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}

            <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-3 bg-blue-500/20 text-blue-400">
              {getIcon(selected.title)}
            </div>

            <h3 className="text-xl font-bold mb-2 text-white">
              {selected.title}
            </h3>

            {/* 🔥 FIXED POPUP DESCRIPTION */}
            <div className="max-h-[220px] overflow-y-auto overflow-x-hidden pr-2 custom-scroll">
              <p className="text-gray-400 text-sm break-words whitespace-pre-wrap leading-relaxed">
                {selected.description}
              </p>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              {selected.year}
            </p>

            <button
              onClick={() => setSelected(null)}
              className="mt-6 px-5 py-2 rounded-md text-sm font-medium border border-blue-400 text-blue-300 hover:bg-blue-500/10"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </div>
  );
}