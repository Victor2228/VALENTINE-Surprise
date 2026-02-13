"use client";

import { motion } from "framer-motion";

export default function Hero({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6 relative bg-linear-to-br from-rose-100 via-pink-100 to-purple-100">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="glass-card romantic-glow p-12 rounded-[40px] max-w-2xl"
      >
        <h1 className="text-3xl md:text-4xl leading-relaxed font-semibold">
          Hey <span className="text-rose-400"> Sandhi</span>… <br /> Don’t rush this. <br /> This was made only <span className="text-rose-400"> FOR YOU.</span> ❤️
        </h1>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          onClick={onEnter}
          className="mt-10 px-10 py-4 bg-linear-to-r from-pink-400 to-rose-400 text-white rounded-full shadow-xl"
        >
          Enter Our Story
        </motion.button>
      </motion.div>
    </div>
  );
}