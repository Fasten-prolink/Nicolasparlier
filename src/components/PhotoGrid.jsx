"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PhotoGrid() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.2, delay, ease: [0.25, 0.1, 0.25, 1] }
    })
  };

  return (
    <section 
      ref={containerRef}
      className="w-full bg-black py-24 md:py-48 px-4 sm:px-8 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        
        {/* Photo 1 */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={imageVariants}
          className="md:col-span-8 relative aspect-[4/3] md:aspect-[16/9] w-full group overflow-hidden"
        >
          <Image
            src="/media/limitless-photo-32.jpg"
            alt="Limitless Photo 32"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            quality={90}
          />
        </motion.div>

        {/* Espace vide pour l'asymétrie */}
        <div className="hidden md:block md:col-span-4" />

        {/* Photo 2 */}
        <div className="hidden md:block md:col-span-4" />
        <motion.div
          custom={0.2}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={imageVariants}
          className="md:col-span-5 relative aspect-[3/4] w-full group overflow-hidden md:-mt-32"
        >
          <Image
            src="/media/limitless-photo-33.jpg"
            alt="Limitless Photo 33"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            quality={90}
          />
        </motion.div>
        <div className="hidden md:block md:col-span-3" />

        {/* Photo 3 */}
        <div className="hidden md:block md:col-span-2" />
        <motion.div
          custom={0.4}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={imageVariants}
          className="md:col-span-8 relative aspect-video w-full group overflow-hidden mt-16 md:mt-32"
        >
          <Image
            src="/media/limitless-photo-34.jpg"
            alt="Limitless Photo 34"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            quality={90}
          />
        </motion.div>
        <div className="hidden md:block md:col-span-2" />
        
        {/* Photo 4 */}
        <div className="hidden md:block md:col-span-7" />
        <motion.div
          custom={0.6}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={imageVariants}
          className="md:col-span-4 relative aspect-square w-full group overflow-hidden mt-16"
        >
          <Image
            src="/media/limitless-photo-35.jpg"
            alt="Limitless Photo 35"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            quality={90}
          />
        </motion.div>
        <div className="hidden md:block md:col-span-1" />

      </div>
    </section>
  );
}
