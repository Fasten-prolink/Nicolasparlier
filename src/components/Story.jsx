"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Story() {
  return (
    <section className="w-full bg-black py-24 md:py-32 px-6 md:px-12 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white">
              15 JOURS.
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-300">
              2400 KM.
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-500">
              SANS ASSISTANCE.
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-md">
            Un tour de France en kitefoil par la mer. Le vent, la houle, et une volonté de repousser ses propres limites en solitaire, de Dunkerque jusqu'à la Promenade des Anglais.
          </p>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative aspect-[4/5] w-full max-w-md mx-auto md:ml-auto group overflow-hidden rounded-sm"
        >
          <Image
            src="/media/limitless-photo-32.jpg"
            alt="Limitless Tour de France"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            quality={90}
          />
        </motion.div>

      </div>
    </section>
  );
}
