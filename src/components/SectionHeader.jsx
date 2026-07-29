"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ title }) {
  return (
    <section className="w-full bg-black py-12 md:py-24 px-6 md:px-12 flex justify-center">
      <div className="max-w-7xl w-full flex justify-start items-center">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase"
        >
          {title}
        </motion.h2>
      </div>
    </section>
  );
}
