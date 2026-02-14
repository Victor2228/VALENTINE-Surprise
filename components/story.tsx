"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 space-y-16 bg-linear-to-br from-rose-100 via-pink-100 to-purple-100">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="text-5xl md:text-7xl max-w-4xl leading-tight"
      >
        Out of billions of people…
        <br />
        somehow,
        <span className="text-rose-400"> I found you.</span>
      </motion.h2>

      <div className="space-y-10 text-2xl max-w-2xl ">
        <p>
          I don’t know the exact moment when you became my favorite thought.
          Perhaps it was hidden in one of our quiet conversations,
          Or in the way your laughter stayed with me long after the day had ended.  
        </p>
        <p>
          All I know is that somewhere along the way
          My world began to feel Softer,
          Warmer, and infinitely brighter because you are in it.
        </p>
        <p>
          You are not just someone I love.
          You are the feeling my heart had been searching for all along.
        </p>
      </div>
    </section>
  );
}
