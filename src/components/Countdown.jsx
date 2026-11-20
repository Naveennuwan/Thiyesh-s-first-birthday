import { useEffect, useState } from "react";

const eventDate = new Date(2027, 0, 2, 15, 0, 0);

export default function Countdown() {
  const calculateTime = () => {
    const difference = eventDate.getTime() - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds],
  ];

  return (
    <div className="grid grid-cols-4 gap-2 max-w-md mx-auto mt-8">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="bg-white/90 rounded-2xl p-3 shadow-sm border border-[#E7E8DC]"
        >
          <div className="text-2xl sm:text-3xl font-bold text-[#7C9473] display-font tabular-nums">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-xs text-[#7C9473] font-bold uppercase tracking-wider">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}