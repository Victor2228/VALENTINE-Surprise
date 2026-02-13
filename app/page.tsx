"use client";

import { useState } from "react";
import Hero from "@/components/hero";
import Story from "@/components/story";
import Envelopes from "@/components/envelopes";
import Gallery from "@/components/gallery";
import Future from "@/components/future";
import Letter from "@/components/letter";
import FloatingHearts from "@/components/floatinghearts";
import MusicPlayer from "@/components/musicplayer";

export default function Home() {
  const [entered, setEntered] = useState(false);

  if (!entered) return <Hero onEnter={() => setEntered(true)} />;

  return (
    <main className="font-serif text-gray-800 relative">
      <FloatingHearts />
      <MusicPlayer />
      <Story />
      <Envelopes />
      <Gallery />
      <Future />
      <Letter />

      <footer className="text-center pb-16 text-lg bg-linear-to-br from-rose-100 via-pink-100 to-purple-100">
        Thank you for existing ❤️
      </footer>
    </main>
  );
}