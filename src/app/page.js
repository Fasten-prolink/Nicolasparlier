import HamiltonHero from "@/components/HamiltonHero";
import ProjectSection from "@/components/ProjectSection";
import ProjectSlide from "@/components/ProjectSlide";

export default function Home() {
  return (
    <main className="h-screen w-full bg-black overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth hide-scrollbar">
      <HamiltonHero />
      
      <ProjectSection 
        id="limitless"
        youtubeId="TedkIbJMoCo"
        subtitle="15 Jours • 2400 Km • Sans Assistance"
        title="LIMITLESS"
        description="Un tour de France en kitefoil par la mer. Le vent, la houle, et une volonté de repousser ses propres limites en solitaire, de Dunkerque jusqu'à la Promenade des Anglais."
        align="right"
        hasMore={true}
      >
        <ProjectSlide 
          imageSrc="/media/limitless-photo-32.jpg"
          align="left"
        >
          <div className="max-w-xl">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">UNE AVENTURE<br/>HORS NORMES</h3>
            <div className="grid grid-cols-2 gap-8 mb-8 border-t border-white/20 pt-8">
              <div>
                <span className="block text-5xl md:text-7xl font-black text-white mix-blend-overlay">15</span>
                <span className="text-sm uppercase tracking-widest text-gray-400">Jours de Mer</span>
              </div>
              <div>
                <span className="block text-5xl md:text-7xl font-black text-white mix-blend-overlay">2400</span>
                <span className="text-sm uppercase tracking-widest text-gray-400">Kilomètres</span>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              Des étapes pouvant aller jusqu'à 6 heures en mer par jour. Sans le moindre bateau suiveur, Nicolas s'est appuyé sur une équipe à terre en van, prouvant qu'une approche de l'aventure bas-carbone est possible.
            </p>
          </div>
        </ProjectSlide>

        <ProjectSlide 
          imageSrc="/media/limitless-photo-39.jpg"
          align="right"
        >
          <div className="max-w-xl text-right ml-auto">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">L'ENVERS<br/>DU DÉCOR</h3>
            <h4 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-8">Survie & Conditions Extrêmes</h4>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              Eau à 8°C, falaises inaccessibles d'Étretat, et piège dans un filet de pêche. En autonomie totale, la sécurité était primordiale. Appliquant la règle aéronautique du "Un égal à zéro", Nicolas embarquait 4 systèmes de communication indépendants (dont un téléphone satellite), et des palmes accrochées au harnais au cas où le vent le lâcherait au large.
            </p>
          </div>
        </ProjectSlide>
        
        <ProjectSlide 
          imageSrc="/media/limitless-photo-31.jpg"
          align="left"
        >
          <div className="max-w-2xl">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">LE FILM</h3>
            <p className="text-gray-300 text-xl leading-relaxed font-light mb-8">
              Immortaliser l'exploit pour sensibiliser le public. Un documentaire brut de 55 minutes, retraçant l'intensité physique et psychologique d'un homme seul face aux éléments.
            </p>
            <a 
              href="https://www.youtube.com/watch?v=TedkIbJMoCo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-black text-sm uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors pointer-events-auto"
            >
              Voir le Documentaire
            </a>
          </div>
        </ProjectSlide>
      </ProjectSection>

      <ProjectSection 
        id="corse"
        imageSrc="/media/limitless-photo-43.jpg"
        subtitle="187 Km • 5 Heures • Haute Mer"
        title="DÉFI CORSE"
        description="Relier Saint-Tropez à Calvi en solitaire. Sans assistance motorisée, face au mistral, à 90km des côtes avec un radeau de survie comme seule assurance."
        align="left"
      />

      <ProjectSection 
        id="palmares"
        imageSrc="/media/limitless-photo-20.jpg"
        subtitle="Philosophie & Engagement"
        title="4X CHAMPION"
        description="Quatre fois Champion du Monde, Nicolas a mis fin à sa carrière olympique à 29 ans, refusant le diktat du poids pour se consacrer à l'endurance. Engagé, il milite pour la protection des océans et la réduction des plastiques à chaque sortie."
        align="right"
        hasMore={true}
      >
        <ProjectSlide 
          imageSrc="/media/limitless-photo-10.jpg"
          align="left"
        >
          <div className="max-w-xl">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">L'ÉQUILIBRE</h3>
            <h4 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-8">Bassin d'Arcachon & Kinésithérapie</h4>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              Fils du célèbre navigateur Yves Parlier, Nicolas a tracé son propre sillage dès l'adolescence en bricolant ses premières planches. Loin de se contenter de l'eau, ce Girondin mène de front une vie d'athlète et un cursus exigeant : après quatre ans de STAPS à Bordeaux et un diplôme d'entraîneur, il a poursuivi ses études de kinésithérapeute à Montpellier. Un garçon bien dans le vent.
            </p>
          </div>
        </ProjectSlide>
        
        <ProjectSlide 
          imageSrc="/media/limitless-photo-22.jpg"
          align="right"
        >
          <div className="max-w-xl text-right ml-auto">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">DOMINATION</h3>
            <h4 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-8">Une progression implacable</h4>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              Ses titres ne sont pas le fruit du hasard. Sur le circuit mondial, Nicolas a exercé une domination totale. Capable de remporter 11 épreuves sur 12 dans la même saison, il a survolé les championnats de Formula Kite (matériel réglementé) comme ceux d'Hydrofoil (matériel libre), confirmant son statut de légende précoce du sport.
            </p>
          </div>
        </ProjectSlide>

        <ProjectSlide 
          imageSrc="/media/limitless-photo-01.jpg"
          align="left"
        >
          <div className="max-w-xl">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">LA RUPTURE</h3>
            <h4 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-8">"Un guépard dans une cage"</h4>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              À 29 ans, au sommet de son art, Nicolas choisit de quitter l'Olympisme. La cause ? Des parcours réduits à de courts sprints et un "diktat du poids" forçant les athlètes à dépasser les 100 kg pour maîtriser des voiles ultra-puissantes. Fidèle à son gabarit de 80 kg et à l'esprit de liberté de son sport, il fait le choix de l'endurance et de l'exploration au large.
            </p>
          </div>
        </ProjectSlide>
      </ProjectSection>
    </main>
  );
}
