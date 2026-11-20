
import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
  const [audio, setAudio] = useState(null);
  const [musicOn, setMusicOn] = useState(false);

  useEffect(() => {
    const player = new Audio("/music/music.mp3");

    player.loop = true;
    player.volume = 0.35;
    player.preload = "auto";

    setAudio(player);

    player.addEventListener("play", () => setMusicOn(true));
    player.addEventListener("pause", () => setMusicOn(false));

    // Automatically attempt to play when the invitation opens.
    player.play().catch(() => {
      setMusicOn(false);
      console.log("Music will start after visitor interaction.");
    });

    return () => {
      player.pause();
      player.src = "";
    };
  }, []);

  const toggleMusic = async () => {
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.log("Unable to play music:", error);
      }
    } else {
      audio.pause();
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-5 right-5 z-50 rounded-full bg-amber-500 p-4 text-white shadow-lg hover:bg-amber-600 transition"
      aria-label={musicOn ? "Pause music" : "Play music"}
    >
      {musicOn ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </button>
  );
}
