"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CorsicaStory() {
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
          src="/media/limitless-photo-16.jpg" 
          alt="Corse Parallax Background"
          fill
          className="object-cover opacity-60"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" /> {/* Légère teinte bleutée pour la Méditerranée */}
      </motion.div>

      {/* Contenu Textuel - Centré en bloc */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 w-full flex flex-col items-center justify-center py-32">
        
        {/* Titre de Chapitre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white/60 tracking-[0.4em] uppercase text-xs md:text-sm mb-16 font-light"
        >
          Chapitre II — Le défi Méditerranéen
        </motion.p>

        <motion.div style={{ y: yText }} className="flex flex-col items-center justify-center space-y-2 md:space-y-6">
          <motion.h2
            style={{ opacity: opacityText1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-white leading-none mix-blend-overlay text-center"
          >
            187 KM.
          </motion.h2>
          
          <motion.h2
            style={{ opacity: opacityText2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-white leading-none mix-blend-overlay text-center"
          >
            5 HEURES.
          </motion.h2>
          
          <motion.h2
            style={{ opacity: opacityText3 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-white leading-none mix-blend-overlay text-center"
          >
            EN HAUTE MER.
          </motion.h2>
        </motion.div>

        <motion.p
          style={{ opacity: opacityText3 }}
          className="mt-16 md:mt-24 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-center font-light leading-relaxed backdrop-blur-md bg-black/30 p-8 rounded-2xl border border-white/10 shadow-2xl"
        >
          Relier Saint-Tropez à Calvi en solitaire. Sans assistance motorisée, face au mistral, à 90km des côtes avec un radeau de survie comme seule assurance.
        </motion.p>
      </div>
    </section>
  );
}
