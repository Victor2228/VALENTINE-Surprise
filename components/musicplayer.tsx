"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  const songs = [
    { name: "Tomay Amay Mile", src: "/Tomay-Amay-Mile.mp3" },
    { name: "Perfect", src: "/Perfect.mp3" },
    { name: "Darkhaast", src: "/Darkhaast.mp3" },
  ];

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.4; // soft romantic volume
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  const nextSong = () => {
    if (!audioRef.current) return;

    const nextIndex = (currentSong + 1) % songs.length;
    setCurrentSong(nextIndex);

    setTimeout(() => {
      if (audioRef.current && playing) {
        audioRef.current.load();
        audioRef.current.play();
      }
    }, 100);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={songs[currentSong].src} type="audio/mpeg" />
      </audio>

      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Play / Pause */}
        <button
          onClick={toggleMusic}
          className="bg-white/80 backdrop-blur-md shadow-xl px-4 py-2 rounded-full hover:scale-105 transition romantic-glow"
        >
          {playing ? "🔊" : "🔈"}
        </button>

        {/* Next Song */}
        <button
          onClick={nextSong}
          className="bg-white/80 backdrop-blur-md shadow-xl px-4 py-2 rounded-full hover:scale-105 transition romantic-glow"
        >
          ⏭️
        </button>
      </div>
    </>
  );
}
