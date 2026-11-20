export function Balloon({ color, style = {} }) {
  return (
    <svg
      viewBox="0 0 70 110"
      className="w-12 sm:w-16 balloon-float"
      style={style}
    >
      <ellipse cx="35" cy="35" rx="25" ry="32" fill={color} />
      <ellipse cx="26" cy="20" rx="6" ry="11" fill="white" opacity=".3" />
      <path d="M31 67 L39 67 L35 74 Z" fill={color} />
      <path
        d="M35 74 Q42 88 34 106"
        stroke="#A69C83"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export function Cloud() {
  return (
    <svg viewBox="0 0 150 75" className="w-28 sm:w-36 cloud-float">
      <path
        d="M25 58 C4 58 5 31 28 29 C34 4 70 2 81 27 C110 10 139 30 131 52 C129 62 117 63 108 63 H26Z"
        fill="#fff"
        opacity=".9"
      />
    </svg>
  );
}

export function Leaves() {
  return (
    <svg viewBox="0 0 180 180" className="w-28 sm:w-44 leaf-sway">
      <path
        d="M90 175 Q70 80 18 15"
        stroke="#587653"
        strokeWidth="5"
        fill="none"
      />
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M${90 - i * 12} ${150 - i * 35} Q${10 - i * 5} ${120 - i * 30} ${
            18 + i * 8
          } ${15 + i * 20} Q${95 - i * 10} ${45 + i * 25} ${90 - i * 12} ${
            150 - i * 35
          }`}
          fill="#7C9473"
          opacity=".9"
        />
      ))}
    </svg>
  );
}

export function Monkey() {
  return (
    <svg
      viewBox="0 0 180 200"
      className="w-28 sm:w-36 overflow-visible"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Jungle Branch */}
      <g className="monkey-branch">
        <path
          d="M5 25 Q65 5 175 25"
          stroke="#745239"
          strokeWidth="13"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M45 18 Q35 -5 20 -8"
          stroke="#587653"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M130 18 Q145 -5 160 -8"
          stroke="#587653"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />

        {/* Small Leaves */}
        <ellipse
          cx="20"
          cy="-8"
          rx="13"
          ry="6"
          fill="#7C9473"
          transform="rotate(-30 20 -8)"
        />
        <ellipse
          cx="160"
          cy="-8"
          rx="13"
          ry="6"
          fill="#A3B899"
          transform="rotate(30 160 -8)"
        />
      </g>

      {/* Monkey Body - Swinging */}
      <g className="monkey-swing">
        {/* Tail */}
        <path
          d="M105 105 Q145 125 130 155 Q115 175 137 181"
          stroke="#9B6847"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
          className="monkey-tail"
        />

        {/* Body */}
        <ellipse cx="88" cy="112" rx="25" ry="34" fill="#9B6847" />

        {/* Belly */}
        <ellipse cx="88" cy="115" rx="15" ry="23" fill="#F5D8B0" />

        {/* Legs */}
        <g className="monkey-legs">
          <path
            d="M73 133 Q55 150 62 168"
            stroke="#9B6847"
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M103 133 Q120 150 112 168"
            stroke="#9B6847"
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
          />

          {/* Feet */}
          <ellipse cx="62" cy="170" rx="10" ry="6" fill="#F5D8B0" />
          <ellipse cx="112" cy="170" rx="10" ry="6" fill="#F5D8B0" />
        </g>

        {/* Arms holding the branch */}
        <path
          d="M68 65 Q48 43 40 27"
          stroke="#9B6847"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M108 65 Q130 43 140 27"
          stroke="#9B6847"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />

        {/* Hands */}
        <circle cx="40" cy="27" r="9" fill="#F5D8B0" />
        <circle cx="140" cy="27" r="9" fill="#F5D8B0" />

        {/* Head */}
        <circle cx="88" cy="66" r="31" fill="#9B6847" />

        {/* Ears */}
        <circle cx="59" cy="62" r="12" fill="#9B6847" />
        <circle cx="117" cy="62" r="12" fill="#9B6847" />

        <circle cx="59" cy="62" r="6" fill="#F5D8B0" />
        <circle cx="117" cy="62" r="6" fill="#F5D8B0" />

        {/* Face */}
        <ellipse cx="88" cy="74" rx="21" ry="17" fill="#F5D8B0" />

        {/* Eyes */}
        <circle cx="78" cy="63" r="3.5" fill="#2D3A28" />
        <circle cx="98" cy="63" r="3.5" fill="#2D3A28" />

        {/* Nose */}
        <ellipse cx="88" cy="74" rx="4" ry="3" fill="#745239" />

        {/* Smile */}
        <path
          d="M81 81 Q88 88 95 81"
          stroke="#2D3A28"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Cheeks */}
        <circle cx="69" cy="76" r="5" fill="#EBAA9A" opacity=".6" />
        <circle cx="107" cy="76" r="5" fill="#EBAA9A" opacity=".6" />
      </g>

      {/* Decorative sparkle */}
      <text x="145" y="95" fontSize="15" className="monkey-sparkle">
        ✨
      </text>
    </svg>
  );
}


export function SafariAnimals() {
  const animals = [
    {
      emoji: "🦁",
      name: "Leo",
      subtitle: "The Little King",
      crown: true,
      animation: "animal-bounce",
    },
    {
      emoji: "🦒",
      name: "Gigi",
      subtitle: "The Happy Giraffe",
      animation: "animal-sway",
    },
    {
      emoji: "🦓",
      name: "Ziggy",
      subtitle: "The Playful Zebra",
      animation: "animal-bounce",
    },
    {
      emoji: "🐯",
      name: "Tiggy",
      subtitle: "The Little Explorer",
      animation: "animal-wave",
    },
  ];

  return (
    <div className="relative pt-20 pb-10 overflow-hidden">

      {/* Sun behind the clouds */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 z-0 text-6xl sun-glow">
        ☀️
      </div>

      {/* Two clouds close together */}
      <div className="absolute top-7 left-1/2 -translate-x-[85%] z-10 text-6xl cloud-float">
        ☁️
      </div>

      <div className="absolute top-8 left-1/2 translate-x-[5%] z-10 text-6xl cloud-float">
        ☁️
      </div>

      {/* Flying bird */}
      {/* <div className="absolute top-24 left-0 z-20 bird-fly text-3xl">
        🐦
      </div> */}

      {/* Background hills */}
      <div className="absolute bottom-0 left-0 w-full h-36 bg-[#A3B899] rounded-t-[50%] scale-x-125" />

      <div className="absolute bottom-0 left-0 w-full h-24 bg-[#7C9473] rounded-t-[45%]" />

      {/* Grass details */}
      <div className="absolute bottom-12 left-0 w-full flex justify-around text-3xl grass-wave">
        <span>🌿</span>
        <span>🌱</span>
        <span>🌿</span>
        <span>🌱</span>
        <span>🌿</span>
        <span>🌱</span>
      </div>

      {/* Animals */}
      <div className="relative z-10 flex justify-center items-end gap-3 sm:gap-10 max-w-4xl mx-auto px-3">
        {animals.map((animal, index) => (
          <div key={animal.name} className="flex flex-col items-center w-1/4">
            <div
              className={`relative text-5xl sm:text-7xl ${animal.animation}`}
              style={{
                animationDelay: `${index * 0.45}s`,
              }}
            >
              {animal.emoji}

              {animal.crown && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-2xl">
                  👑
                </span>
              )}
            </div>

            <div className="mt-3 bg-[#FDFBF7]/90 rounded-2xl px-2 sm:px-4 py-2 shadow-md text-center">
              <p className="font-bold text-[#2D3A28] text-sm">
                {animal.name}
              </p>

              <p className="text-[9px] sm:text-xs text-[#7C9473]">
                {animal.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Flowers */}
      <div className="relative z-10 flex justify-around text-2xl mt-5">
        <span className="animal-sway">🌼</span>
        <span className="animal-bounce">🌸</span>
        <span className="animal-sway">🌺</span>
        <span className="animal-bounce">🌼</span>
        <span className="animal-sway">🌸</span>
      </div>
    </div>
  );
}

