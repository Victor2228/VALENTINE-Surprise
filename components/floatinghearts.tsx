"use client";

import { motion } from "framer-motion";

const hearts = Array.from({ length: 20 });

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: "100vh",
            x: Math.random() * window.innerWidth,
            opacity: 0.7,
            scale: Math.random() * 0.6 + 0.4,
          }}
          animate={{
            y: "-10vh",
          }}
          transition={{
            duration: Math.random() * 6 + 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute text-pink-300"
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
