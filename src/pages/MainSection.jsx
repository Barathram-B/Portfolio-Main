import SliderSection from "./SliderSection";

export default function AchievementsSection() {
  return (
    <section className="bg-black text-white py-20 px-4 overflow-hidden" id="achievement">

      <SliderSection title="Achievements" type="achievement" />

      {/* DIVIDER */}
      <div className="flex justify-center my-16">
        <div className="w-24 h-[1px] bg-white/10"></div>
      </div>

      <SliderSection title="Certifications" type="certification" />

    </section>
  );
}