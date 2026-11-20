import { Gift, Heart, Sparkles } from "lucide-react";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="fade-up text-center px-4 pb-10">

      <div className="max-w-3xl mx-auto card p-6 sm:p-12 relative overflow-hidden">

        <div className="absolute top-3 left-4 text-[#D4AF37]">
          <Sparkles size={25} />
        </div>

        <div className="absolute top-3 right-4 text-[#D4AF37]">
          <Sparkles size={25} />
        </div>

        <div className="flex justify-center items-center gap-2 gold-text font-bold mb-4">
          <Gift size={18} />
          <span className="tracking-widest uppercase text-sm">
            You're Invited To
          </span>
          <Gift size={18} />
        </div>

        <p className="text-[#7C9473] text-lg font-bold">
          Join us to celebrate
        </p>

        <h1 className="hero-title text-5xl sm:text-7xl font-bold text-[#2D3A28] mt-3">
          THIYESH'S
        </h1>

        <div className="flex justify-center items-center gap-3 mt-2">
          <div className="h-px w-12 bg-[#D4AF37]" />
          <span className="text-5xl sm:text-7xl font-bold gold-text display-font">
            ONE
          </span>
          <div className="h-px w-12 bg-[#D4AF37]" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#7C9473] mt-2">
          1ST BIRTHDAY
        </h2>

        <p className="mt-5 text-[#777]">
          One year of love, laughter and little adventures!
        </p>

        <div className="flex justify-center gap-2 mt-5 text-[#D4AF37]">
          <Heart size={18} fill="currentColor" />
          <Heart size={18} fill="currentColor" />
          <Heart size={18} fill="currentColor" />
        </div>

        <p className="mt-7 font-bold text-[#2D3A28]">
          LET THE CELEBRATION BEGIN IN
        </p>

        <Countdown />

        <p className="text-sm text-[#7C9473] mt-4">
          Saturday, January 2, 2027 · 3:00 PM
        </p>

      </div>
    </section>
  );
}