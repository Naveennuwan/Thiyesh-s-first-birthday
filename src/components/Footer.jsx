import { Heart, Sparkles, Star } from "lucide-react";
import { SafariAnimals } from "./SafariDecorations";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-center">

      {/* Animated Safari Landscape */}
      <SafariAnimals />

      {/* Footer message */}
      <div className="relative bg-[#2D3A28] text-white px-5 py-14 overflow-hidden">

        {/* Decorative stars */}
        <div className="absolute top-8 left-10 text-[#D4AF37] sparkle-animation">
          <Star size={20} />
        </div>

        <div className="absolute top-16 right-10 text-[#F6BD9B] sparkle-animation">
          <Sparkles size={24} />
        </div>

        <div className="absolute bottom-10 left-[25%] text-[#A3B899] sparkle-animation">
          <Star size={15} />
        </div>

        <div className="relative z-10 max-w-xl mx-auto">

          <div className="flex justify-center items-center gap-3 mb-5">
            <span className="text-3xl animal-bounce">🎈</span>
            <Heart
              size={28}
              fill="#F6BD9B"
              color="#F6BD9B"
            />
            <span className="text-3xl animal-bounce">🎈</span>
          </div>

          <p className="text-[#F6BD9B] uppercase tracking-[.3em] text-xs font-bold">
            Our little adventure
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mt-3">
            Thank You!
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Thank you for being part of Thiyesh's
            first magical journey around the sun.
          </p>

          <div className="my-7 flex justify-center gap-3 text-2xl">
            <span>🦁</span>
            <span>🌿</span>
            <span>🦒</span>
            <span>🌸</span>
            <span>🐯</span>
          </div>

          <p className="text-[#F6BD9B] font-bold text-lg">
            With Love, Thiyesh & Family
          </p>

          <div className="w-24 h-px bg-[#D4AF37] mx-auto my-7" />

          <p className="text-xs text-gray-400">
            Made with love for Thiyesh's 1st Birthday
          </p>

          <p className="text-xs text-gray-500 mt-2">
            January 2, 2027
          </p>

        </div>

      </div>
    </footer>
  );
}