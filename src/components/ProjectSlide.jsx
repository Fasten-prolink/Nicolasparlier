"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

export default function ProjectSlide({ imageSrc, youtubeId, title, subtitle, description, align = "left", showHint = false, onHintClick, children }) {
  return (
    <div className="relative w-screen h-screen shrink-0 snap-start bg-black flex items-center justify-center overflow-hidden">
      
      {/* Fullscreen Background */}
      {youtubeId ? (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&disablekb=1&modestbranding=1`}
            allow="autoplay; encrypted-media"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh]"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ) : imageSrc ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt={title || "Project visual"}
            fill
            className="object-cover opacity-50"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ) : null}

      {/* Content */}
      {title && (
        <div className={`relative z-10 w-full max-w-7xl px-8 md:px-16 flex flex-col ${align === "right" ? "items-end text-right" : "items-start text-left"}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-20%" }}
            className="max-w-2xl"
          >
            {subtitle && (
              <h4 className="text-sm md:text-base uppercase tracking-widest text-gray-400 font-semibold mb-4">
                {subtitle}
              </h4>
            )}
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-none mb-8 mix-blend-overlay">
              {title}
            </h2>
            {description && (
              <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      )}

      {/* Arbitrary content if passed */}
      {children && (
        <div className="relative z-10 w-full max-w-7xl px-8 md:px-16">
          {children}
        </div>
      )}

      {/* Swipe Hint */}
      {showHint && (
        <motion.div 
          onClick={onHintClick}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
          className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-white/50 cursor-pointer hover:text-white transition-colors"
        >
          <span className="uppercase tracking-widest text-xs rotate-90 mb-8 whitespace-nowrap">Découvrir</span>
          <FaChevronRight size={24} />
        </motion.div>
      )}

    </div>
  );
}
