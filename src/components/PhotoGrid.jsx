"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PhotoGrid() {
  const images = [
    "/media/limitless-photo-33.jpg",
    "/media/limitless-photo-34.jpg",
    "/media/limitless-photo-35.jpg",
  ];

  return (
    <section className="w-full bg-black py-16 px-6 md:px-12 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative aspect-square w-full group overflow-hidden rounded-sm cursor-pointer"
          >
            <Image
              src={src}
              alt={`Galerie ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              quality={80}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
