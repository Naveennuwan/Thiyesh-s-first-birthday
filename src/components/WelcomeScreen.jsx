
import { useState } from "react";
import { ChevronRight, Sparkles } from "lucide-react";
import { Balloon, Cloud, Monkey } from "./SafariDecorations";

export default function WelcomeScreen({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;

    setOpening(true);

    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] min-h-screen overflow-hidden bg-[#FDFBF2] flex flex-col items-center justify-center px-5 ${
        opening ? "welcome-exit" : "welcome-screen"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-10 left-5 welcome-cloud">
          <Cloud />
        </div>

        <div className="absolute top-20 right-5 welcome-cloud">
          <Cloud />
        </div>

        <div className="absolute top-16 left-1/2 -translate-x-1/2 text-6xl sun-glow">
          ☀️
        </div>

        <div className="absolute top-32 left-[12%] welcome-balloon">
          <Balloon color="#F4A6A6" />
        </div>

        <div className="absolute top-40 right-[10%] welcome-balloon-delayed">
          <Balloon color="#E8C66A" />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-[#A3B899] rounded-t-[50%] scale-x-125" />

        <div className="absolute bottom-0 left-0 w-full h-20 bg-[#7C9473] rounded-t-[45%]" />

        <div className="absolute bottom-8 left-5 text-4xl">
          🌿
        </div>

        <div className="absolute bottom-12 right-5 text-4xl">
          🌴
        </div>

        <div className="absolute top-[45%] left-5 text-2xl floating-star">
          ✨
        </div>

        <div className="absolute top-[55%] right-5 text-2xl floating-star-delayed">
          ⭐
        </div>
      </div>

      {/* Main welcome content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">

        <div className="mb-2 text-sm sm:text-base tracking-[0.3em] font-bold text-[#7C9473] uppercase">
          You're Invited To
        </div>

        <div className="welcome-title">
          <p className="text-4xl sm:text-5xl font-extrabold text-[#587653]">
            THIYESH'S
          </p>

          <h1 className="text-6xl sm:text-8xl font-extrabold text-[#D69B45] leading-tight">
            1st
          </h1>

          <p className="text-2xl sm:text-3xl font-extrabold tracking-widest text-[#587653]">
            BIRTHDAY PARTY
          </p>
        </div>

        {/* Monkey decoration */}
        <div className="my-3 welcome-monkey">
          <Monkey />
        </div>

        <p className="text-[#745239] font-semibold text-lg sm:text-xl">
          A little wild, a lot of fun!
        </p>

        <p className="text-[#7C9473] text-sm mt-2 max-w-xs">
          Join us for a jungle adventure filled with smiles, laughter and happy memories.
        </p>

        {/* Open invitation button */}
        <button
          onClick={handleOpen}
          disabled={opening}
          className="mt-7 group flex items-center gap-3 bg-[#D69B45] hover:bg-[#C58B36] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-80"
        >
          <Sparkles size={20} />

          {opening ? "Opening Invitation..." : "Open Invitation"}

          <ChevronRight
            size={21}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>

        <p className="mt-4 text-xs text-[#8A987F] tracking-wider">
          TAP TO ENTER THE JUNGLE
        </p>
      </div>

      {/* Bottom animals */}
      <div className="absolute bottom-2 sm:bottom-4 left-0 w-full z-10 flex justify-around items-end text-4xl sm:text-5xl pointer-events-none">
        <span className="welcome-animal">🦁</span>
        <span className="welcome-animal-delayed">🦒</span>
        <span className="welcome-animal">🦓</span>
        <span className="welcome-animal-delayed">🐯</span>
      </div>
    </div>
  );
}
