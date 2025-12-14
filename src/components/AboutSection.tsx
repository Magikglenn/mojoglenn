import glennPortrait from "@/assets/glenn-portrait.jpg";
import glennIphone from "@/assets/glenn-iphone.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Portrait Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={glennPortrait} 
                  alt="Glenn Le Bourhis - Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full -z-10 blur-xl" />
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full -z-10 blur-xl" />
            </div>
          </div>

          {/* Why work with me */}
          <div className="order-1 lg:order-2">
            <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
              Je suis Glenn Le Bourhis
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">
              Pourquoi travailler{" "}
              <span className="text-accent">avec moi ?</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                <strong className="text-foreground font-semibold">
                  Si les gens étaient logiques, ça fait longtemps qu'on ne vendrait plus de cigarettes.
                </strong>{" "}
                Mon métier c'est d'aller chercher les désirs profonds et les émotions qui génèrent des décisions et des passages à l'action.
              </p>
              
              <p>
                Comme un bon ami, une marque ou une entreprise doit inspirer confiance avant tout. Ce sentiment crée une relation qui, à très court terme, rend votre communication plus efficace. Elle consolide votre notoriété, elle génère de la recommandation, elle muscle votre marque-employeur.
              </p>
              
              <p>
                Du petit artisan au grand groupe, nous avons tous une histoire à raconter, il est l'heure de vous aligner. Et je vous aide à passer ce cap.
              </p>
            </div>
          </div>
        </div>

        {/* Who am I - Full width below */}
        <div className="mt-20 grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 bg-muted/30 rounded-lg p-10 lg:p-12 border border-border/50">
            <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
              Bio
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight">
              Qui suis-je<span className="text-accent">?</span>
            </h3>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg font-semibold text-foreground">
                Passionné de communication sous toutes ses formes, j'ai passé les 10 dernières années à essayer de mieux comprendre le cerveau humain.
              </p>

              <p>
                Je m'appelle <strong className="text-foreground">Glenn Le Bourhis</strong>. J'ai toujours aimé les histoires. J'ai écrit des nouvelles, raconté des blagues, fait de la magie, du théâtre, lu des tonnes de livres et de BD, rédigé des publicités, des scénarios de jeux de rôles, des films, animé des séminaires, donné des cours…
              </p>

              <p>
                Tout cela, je crois que je l'ai fait par amour du storytelling et la joie qu'on trouve à se rapprocher des autres à travers un récit. Avec une histoire, on peut fédérer, donner de l'espoir, rendre amoureux.
              </p>

              <p className="border-l-4 border-accent pl-6 py-2 text-foreground italic">
                Les révolutions sont nées d'une histoire, tout comme les civilisations… C'est un moteur puissant qui sert à créer des liens.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={glennIphone} 
                alt="Glenn Le Bourhis avec iPhone" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent/20 rounded-full -z-10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};