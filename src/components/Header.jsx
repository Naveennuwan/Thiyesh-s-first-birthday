import { Balloon, Cloud, Leaves, Monkey } from "./SafariDecorations";

export default function Header() {
  return (
    <header className="relative overflow-hidden min-h-[230px] sm:min-h-[300px]">

      <div className="absolute top-0 left-0">
        <Leaves />
      </div>

      <div className="absolute top-0 right-0 rotate-180">
        <Leaves />
      </div>

      <div className="absolute top-8 left-[35%]">
        <Cloud />
      </div>

      <div className="absolute top-20 right-[25%]">
        <Cloud />
      </div>

      <div className="absolute top-12 left-[25%]">
        <Balloon color="#A3B899" />
      </div>

      <div className="absolute top-6 right-[30%]">
        <Balloon color="#F6BD9B" />
      </div>

      <div className="absolute top-24 right-[10%]">
        <Balloon color="#D4AF37" />
      </div>

      <div className="absolute bottom-0 left-4">
        <Monkey />
      </div>

      <div className="relative z-10 text-center pt-16 sm:pt-24 px-4">
        <p className="gold-text font-bold tracking-[.25em] text-sm uppercase">
          Welcome to our little jungle
        </p>
        <p className="text-[#7C9473] text-sm mt-2">
          A wild adventure is about to begin!
        </p>
      </div>
    </header>
  );
}