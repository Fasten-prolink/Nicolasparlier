"use client";

import { useRef } from "react";
import ProjectSlide from "./ProjectSlide";

export default function ProjectSection({ id, imageSrc, youtubeId, title, subtitle, description, align = "left", children, hasMore = false }) {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
    }
  };

  return (
    <section ref={scrollRef} id={id} className="w-full h-screen snap-start bg-black flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar">
      {/* Couverture Principale */}
      <ProjectSlide 
        imageSrc={imageSrc}
        youtubeId={youtubeId}
        title={title}
        subtitle={subtitle}
        description={description}
        align={align}
        showHint={hasMore}
        onHintClick={scrollRight}
      />
      
      {/* Slides additionnels (Détails du projet) */}
      {children}
    </section>
  );
}
