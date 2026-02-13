"use client";

import { motion } from "framer-motion";

const places = [
  "Watching the northern lights together",
  "Getting lost in a quiet European street",
  "A beach where time slows down",
  "Mountain sunsets wrapped in one blanket",
  "A random midnight drive",
  "Building a home that feels like us",
];

export default function Future() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      {/* dreamy gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-rose-100 via-pink-100 to-purple-100" />

      {/* soft glowing orb */}
      <div className="absolute w-125 h-125 bg-pink-300/20 blur-3xl rounded-full top-20 left-1/2 -translate-x-1/2" />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-semibold mb-8"
      >
        Places I want to hold your hand 🌍
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
        className="text-xl max-w-2xl mb-16"
      >
        This is only the beginning of our story. There are sunsets we haven’t
        watched yet, trips we haven’t taken, and entire chapters waiting to be
        written — together.
      </motion.p>

      {/* future cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        {places.map((place, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -6 }}
            className="glass-card romantic-glow p-8 rounded-3xl text-lg"
          >
            ✨ {place}
          </motion.div>
        ))}
      </div>

      {/* emotional closer */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-2xl max-w-2xl leading-relaxed"
      >
        And honestly… it won’t matter where we go.
        <br />
        As long as I get to go there with you.
      </motion.p>
    </section>
  );
}
