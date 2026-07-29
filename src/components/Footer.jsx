"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo / Name */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl font-bold tracking-widest text-white uppercase"
        >
          Nicolas Parlier
        </motion.div>

        {/* Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex items-center gap-8 text-sm uppercase tracking-widest font-light text-gray-400"
        >
          <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
          <a href="mailto:contact@nicolas-parlier.fr" className="hover:text-white transition-colors duration-300">Contact</a>
        </motion.div>

      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-16 text-center text-xs text-gray-600 font-light"
      >
        © {new Date().getFullYear()} Nicolas Parlier. Tous droits réservés.
      </motion.div>
    </footer>
  );
}
