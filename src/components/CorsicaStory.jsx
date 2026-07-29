"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CorsicaStory() {
  return (
    <section className="w-full bg-black py-24 md:py-32 px-6 md:px-12 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left Column: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative aspect-[4/5] w-full max-w-md mx-auto md:mr-auto group overflow-hidden rounded-sm order-2 md:order-1"
        >
          <Image
            src="/media/limitless-photo-16.jpg"
            alt="Défi Méditerranéen Corse"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            quality={90}
          />
        </motion.div>

        {/* Right Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-8 order-1 md:order-2"
        >
          <p className="text-gray-500 tracking-[0.4em] uppercase text-xs md:text-sm font-light">
            Chapitre II — Le défi Méditerranéen
          </p>

          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white">
              187 KM.
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-300">
              5 HEURES.
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-500">
              EN HAUTE MER.
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-md">
            Relier Saint-Tropez à Calvi en solitaire. Sans assistance motorisée, face au mistral, à 90km des côtes avec un radeau de survie comme seule assurance.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
