"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const photos = [
  {
    src: "/photos/photo6.jpg",
    top: "10%",
    left: "10%",
    rotate: -8,
    caption: "The day everything felt lighter",
    message:
      "I don’t know if you noticed… but this was one of the days I caught myself looking at you and smiling for no reason.",
  },
  {
    src: "/photos/photo1.jpg",
    top: "20%",
    left: "40%",
    rotate: 5,
    caption: "The Eye Talk",
    message:
      "The time when I saw all the love and mischief in your eyes.",
  },
  {
    src: "/photos/photo10.jpg",
    top: "15%",
    left: "70%",
    rotate: -12,
    caption: "The Couple pic",
    message:
      "In your Words... Pakka Bor Bou er prothom photo.",
  },
  {
    src: "/photos/photo2.jpg",
    top: "50%",
    left: "15%",
    rotate: 8,
    caption: "A Perfect Pic",
    message:
      "So close I got to you that day… and yet I still couldn’t get enough of you.",
  },
  {
    src: "/photos/photo4.jpg",
    top: "45%",
    left: "50%",
    rotate: -5,
    caption: "🙂",
    message:
      "Awkwarddddddd.",
  },
  {
    src: "/photos/photo5.jpg",
    top: "55%",
    left: "75%",
    rotate: 10,
    caption: "Cute Kiss",
    message:
      "You were shying out, I was trying to kiss you… and we ended up with this cute mess. I wouldn’t change a thing about it.",
  },
  {
    src: "/photos/photo7.jpg",
    top: "70%",
    left: "25%",
    rotate: -10,
    caption: "Perfect, just like this",
    message:
      "No matter where we are… as long as it’s with you, it feels like home.",
  },
  {
    src: "/photos/photo3.jpg",
    top: "70%",
    left: "55%",
    rotate: 6,
    caption: "Bus ride",
    message:
      "Trying to kiss you every moment I get.",
  },
  {
    src: "/photos/photo8.jpg",
    top: "70%",
    left: "70%",
    rotate: -19,
    caption: "My safe place",
    message:
      "Your hand in my chest, your head on my shoulder… in that moment, I felt like I was exactly where I was supposed to be.",
  },
  {
    src: "/photos/photo9.jpg",
    top: "60%",
    left: "5%",
    rotate: 12,
    caption: "Us, being us",
    message:
      "Me Shy as always, You Shy as always.",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<null | (typeof photos)[0]>(null);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center py-32">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-rose-100 via-pink-100 to-purple-100" />

      <h2 className="absolute top-16 text-5xl text-center w-full font-semibold">
        Our Memories ❤️
      </h2>

      <p className="absolute top-36 text-xl text-center max-w-2xl px-6">
        If I could pin every beautiful moment with you on a wall, it would look
        something like this.
      </p>

      <div className="relative w-full max-w-6xl h-225">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: i * 0.15 }}
            viewport={{ once: true }}
            style={{
              position: "absolute",
              top: photo.top,
              left: photo.left,
              rotate: `${photo.rotate}deg`,
            }}
            whileHover={{ scale: 1.15, rotate: "0deg", zIndex: 50 }}
            onClick={() => setSelected(photo)}
            className="bg-white p-4 pb-10 rounded-md shadow-2xl cursor-pointer"
          >
            <img
              src={photo.src}
              alt="memory"
              className="w-55 h-70 object-cover rounded-sm"
            />

            <p className="text-center mt-3 text-sm text-gray-600 italic">
              {photo.caption}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ZOOM MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-6"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
            >
              <img
                src={selected.src}
                alt="memory"
                className="w-full h-full object-cover"
              />

              <div className="p-8 text-center">
                <p className="text-2xl text-rose-500 font-semibold mb-4 italic">
                  {selected.caption}
                </p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  {selected.message}
                </motion.p>

                <p className="mt-6 text-sm text-gray-400">(tap anywhere to close)</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
