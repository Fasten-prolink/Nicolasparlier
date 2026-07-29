"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HamiltonHero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen snap-start bg-black overflow-hidden flex flex-col justify-between">
      
      {/* Fullscreen Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/limitless-photo-30.jpg"
          alt="Nicolas Parlier"
          fill
          className="object-cover object-top opacity-80"
          quality={100}
          priority
        />
        {/* Subtle vignette / gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Top Left: Name & Socials */}
      <div className="relative z-10 pt-16 px-8 md:pt-24 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tighter mix-blend-overlay">
            Nicolas<br />
            Parlier
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex items-center gap-6 mt-8 text-white mix-blend-overlay"
        >
          <a href="https://www.instagram.com/nicokitexp/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
            <FaInstagram size={28} />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <FaLinkedin size={28} />
          </a>
          <a href="mailto:contact@nicolas-parlier.fr" className="hover:text-gray-300 transition-colors">
            <FaEnvelope size={28} />
          </a>
        </motion.div>
      </div>

      {/* Bottom: Navigation Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="relative z-10 pb-8 px-8 md:pb-12 md:px-16 w-full flex flex-col md:flex-row justify-between items-end md:items-center gap-4 text-xs md:text-sm uppercase tracking-widest font-semibold text-white/90"
      >
        <button onClick={() => scrollTo('limitless')} className="hover:text-white transition-colors group text-left">
          <span className="border-b border-transparent group-hover:border-white transition-all pb-1">Projet Limitless</span>
        </button>
        <button onClick={() => scrollTo('corse')} className="hover:text-white transition-colors group text-left">
          <span className="border-b border-transparent group-hover:border-white transition-all pb-1">Défi Corse</span>
        </button>
        <button onClick={() => scrollTo('palmares')} className="hover:text-white transition-colors group text-left">
          <span className="border-b border-transparent group-hover:border-white transition-all pb-1">Histoire & Palmarès</span>
        </button>
      </motion.div>

    </section>
  );
}
