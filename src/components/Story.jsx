"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Story() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacityText1 = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 1, 0.5]);
  const opacityText2 = useTransform(scrollYProgress, [0.2, 0.5, 0.7], [0, 1, 0.5]);
  const opacityText3 = useTransform(scrollYProgress, [0.4, 0.7, 1], [0, 1, 1]);
  const yText = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[120vh] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Background Parallax */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 w-full h-[140%] -top-[20%] z-0"
      >
        <Image
          src="/media/limitless-photo-30.jpg"
          alt="Parallax Background"
          fill
          className="object-cover opacity-50"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Contenu Textuel - Centré en bloc */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 w-full flex flex-col items-center justify-center py-32">
        <motion.div style={{ y: yText }} className="flex flex-col items-center justify-center space-y-2 md:space-y-6">
          <motion.h2
            style={{ opacity: opacityText1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-white leading-none mix-blend-overlay text-center"
          >
            15 JOURS.
          </motion.h2>
          
          <motion.h2
            style={{ opacity: opacityText2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-white leading-none mix-blend-overlay text-center"
          >
            2400 KM.
          </motion.h2>
          
          <motion.h2
            style={{ opacity: opacityText3 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-white leading-none mix-blend-overlay text-center"
          >
            SANS ASSISTANCE.
          </motion.h2>
        </motion.div>

        <motion.p
          style={{ opacity: opacityText3 }}
          className="mt-16 md:mt-24 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-center font-light leading-relaxed backdrop-blur-md bg-black/30 p-8 rounded-2xl border border-white/10 shadow-2xl"
        >
          Un tour de France en kitefoil par la mer. Le vent, la houle, et une volonté de repousser ses propres limites en solitaire.
        </motion.p>
      </div>
    </section>
  );
}
