export const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Why work with me */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Pourquoi travailler{" "}
              <span className="text-primary">avec moi ?</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <strong className="text-foreground">
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

          {/* Who am I */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border/50">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Qui suis-je<span className="text-primary"> ?</span>
            </h3>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg font-medium text-foreground">
                Passionné de communication sous toutes ses formes, j'ai passé les 10 dernières années à essayer de mieux comprendre le cerveau humain.
              </p>

              <p>
                Je m'appelle <strong className="text-foreground">Glenn Le Bourhis</strong>. J'ai toujours aimé les histoires. J'ai écrit des nouvelles, raconté des blagues, fait de la magie, du théâtre, lu des tonnes de livres et de BD, rédigé des publicités, des scénarios de jeux de rôles, des films, animé des séminaires, donné des cours…
              </p>

              <p>
                Tout cela, je crois que je l'ai fait par amour du storytelling et la joie qu'on trouve à se rapprocher des autres à travers un récit. Avec une histoire, on peut fédérer, donner de l'espoir, rendre amoureux. On peut passionner, intéresser, rendre curieux. On peut partager, apprendre, donner.
              </p>

              <p className="italic border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg">
                Les révolutions sont nées d'une histoire, tout comme les civilisations… C'est un moteur puissant qui sert à créer des liens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
