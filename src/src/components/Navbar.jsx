"use client";

import { useState, useEffect } from "react";
import { Play, Wind, Menu, X, Compass, Film, Award, Users, Mail, Image as ImageIcon } from "lucide-react";

export default function Navbar({ onOpenVideo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Le Film", href: "#film", icon: Film },
    { name: "L'Aventure 2400km", href: "#aventure", icon: Compass },
    { name: "Galerie Photos", href: "#galerie", icon: ImageIcon },
    { name: "Nicolas Parlier", href: "#palmares", icon: Award },
    { name: "L'Équipe", href: "#equipe", icon: Users },
    { name: "Contact & Presse", href: "#contact", icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050914]/90 backdrop-blur-xl border-b border-cyan-950/50 py-3 shadow-2xl shadow-cyan-950/20"
          : "bg-gradient-to-b from-[#050914]/90 via-[#050914]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-teal-500 to-sky-400 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
            <div className="w-full h-full bg-[#050914] rounded-[11px] flex items-center justify-center">
              <Wind className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-cyan-400 transition-colors">
              NICOLAS PARLIER
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-cyan-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              LIMITLESS DOCUMENTARY
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5 py-1 relative group"
              >
                <Icon className="w-4 h-4 text-cyan-500/70 group-hover:text-cyan-400 transition-colors" />
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            );
          })}
        </nav>

        {/* CTA Teaser Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenVideo}
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-400 to-sky-500 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative px-5 py-2.5 rounded-full bg-[#091122] flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300 group-hover:text-white transition-colors">
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400 group-hover:scale-110 transition-transform" />
              Teaser Officiel
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 focus:outline-none"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070e1c]/95 backdrop-blur-2xl border-b border-cyan-950 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/50 text-base font-medium"
                >
                  <Icon className="w-5 h-5 text-cyan-400" />
                  {link.name}
                </a>
              );
            })}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenVideo();
            }}
            className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            <Play className="w-5 h-5 fill-white" />
            Voir le Teaser YouTube (55 min)
          </button>
        </div>
      )}
    </header>
  );
}
