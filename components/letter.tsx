"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Letter() {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      {!open ? (
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setOpen(true)}
          className="px-12 py-5 bg-linear-to-r from-rose-400 to-pink-400 text-white rounded-full shadow-2xl"
        >
          Before you go… open this
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="glass-card romantic-glow p-12 rounded-[40px] max-w-2xl"
        >
          <p className="text-xl leading-relaxed">
            Loving you has been the easiest and most beautiful thing I have ever done.
            <br /><br />
            You quietly became my favorite person, my safe place, and my happiness.
            <br /><br />
            If I had to choose again…
            <br />
            I would still choose you.
            <br /><br />
            Every single time ❤️
            <br /><br /><br />
            <span className="text-rose-400 text-3xl"> Happy Valentine's Day My Love ❤️.</span>
          </p>
        </motion.div>
      )}
    </section>
  );
}
