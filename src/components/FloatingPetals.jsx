import { useMemo } from "react";

const colors = [
  "#F6BD9B",
  "#F3A678",
  "#E8B8C8",
  "#D4AF37",
  "#A3B899",
  "#F9D9C5",
];

export default function FloatingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: `${(i * 47.3) % 100}%`,
        delay: `${-((i * 1.7) % 15)}s`,
        duration: `${12 + (i % 8) * 2}s`,
        size: `${12 + (i % 4) * 5}px`,
        color: colors[i % colors.length],
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {petals.map((petal) => (
        <svg
          key={petal.id}
          viewBox="0 0 30 30"
          className="petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            width: petal.size,
            height: petal.size,
          }}
        >
          <path
            d="M15 2 C27 7 27 20 15 28 C3 20 3 7 15 2Z"
            fill={petal.color}
            opacity=".85"
          />
          <path
            d="M15 5 Q15 16 15 25"
            stroke="white"
            strokeWidth="1"
            fill="none"
            opacity=".6"
          />
        </svg>
      ))}
    </div>
  );
}