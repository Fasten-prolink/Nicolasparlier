"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Palmares() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-32 px-6 md:px-12 flex flex-col items-center justify-center bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
        
        {/* Left Column : Palmares & Philosophy */}
        <motion.div style={{ y: y1, opacity }} className="flex flex-col justify-center">
          <h2 className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-gray-400 mb-8">
            L'Essence du Kitefoil
          </h2>
          
          <div className="mb-16">
            <h3 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">4X</h3>
            <p className="text-xl md:text-2xl font-light text-gray-300">
              Champion du Monde
            </p>
          </div>

          <div className="space-y-8 text-lg md:text-xl font-light text-gray-400 leading-relaxed max-w-lg">
            <p>
              À 29 ans, Nicolas a fait le choix radical de s'éloigner des formats olympiques pour revenir à l'essence même de son sport : la longue distance.
            </p>
            <p className="italic text-gray-200">
              "Enfermés sur des parcours courts, c'est comme mettre un guépard dans une cage. Le kitefoil est fait pour l'immensité."
            </p>
          </div>
        </motion.div>

        {/* Right Column : Ecology */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-center"
        >
          <div className="bg-zinc-900/50 p-8 md:p-12 rounded-2xl border border-white/5 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-6 text-white">
              Un Engagement Vital
            </h3>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
              Parcourir les océans, c'est être le premier témoin de leur fragilité. L'océan n'est pas une poubelle : il produit l'oxygène que nous respirons et absorbe notre CO2.
            </p>
            <blockquote className="border-l-2 border-white/20 pl-6 py-2 text-xl font-medium text-gray-200">
              "Il faut arrêter de jeter du plastique dans les océans. À chaque sortie, je récupère ce que je peux. C'est infime, mais vital."
            </blockquote>
            <div className="mt-8 pt-8 border-t border-white/10 text-sm text-gray-500 uppercase tracking-widest">
              World Ocean Day / ONU
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
