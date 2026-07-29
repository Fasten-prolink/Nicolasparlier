import Hero from "@/components/Hero";
import Story from "@/components/Story";
import PhotoGrid from "@/components/PhotoGrid";
import CorsicaStory from "@/components/CorsicaStory";
import Palmares from "@/components/Palmares";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Story />
      <PhotoGrid />
      
      {/* Séparateur minimaliste */}
      <div className="w-full h-32 md:h-64 bg-black flex items-center justify-center">
        <div className="w-px h-16 md:h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>

      <CorsicaStory />
      
      {/* Séparateur minimaliste */}
      <div className="w-full h-32 md:h-64 bg-black flex items-center justify-center">
        <div className="w-px h-16 md:h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>

      <Palmares />
      <Footer />
    </main>
  );
}
