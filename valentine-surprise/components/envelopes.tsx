"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { envelopes } from "@/data/messages";

export default function Envelopes() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-linear-to-br from-rose-100 via-pink-100 to-purple-100">
      <h2 className="text-5xl mb-16">Open when your heart needs it ❤️</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
        {envelopes.map((env, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.06, y: -8 }}
            onClick={() => setSelected(env)}
            className="glass-card romantic-glow cursor-pointer p-8 rounded-3xl"
          >
            💌
            <p className="text-xl mt-4">{env.title}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-card romantic-glow rounded-3xl p-10 max-w-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl mb-6">{selected.title}</h3>
              <p className="text-lg leading-relaxed">{selected.message}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
