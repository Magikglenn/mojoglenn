export const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Why work with me */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
              Pourquoi moi
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight leading-tight">
              Pourquoi travailler{" "}
              <span className="text-primary">avec moi ?</span>
            </h2>

            <div className="space-y-6 text-background/70 leading-relaxed text-lg">
              <p>
                <strong className="text-background font-semibold">
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
          <div className="bg-background/5 rounded-lg p-10 lg:p-12 border border-background/10">
            <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
              Bio
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight">
              Qui suis-je<span className="text-primary">?</span>
            </h3>

            <div className="space-y-5 text-background/70 leading-relaxed">
              <p className="text-lg font-semibold text-background">
                Passionné de communication sous toutes ses formes, j'ai passé les 10 dernières années à essayer de mieux comprendre le cerveau humain.
              </p>

              <p>
                Je m'appelle <strong className="text-background">Glenn Le Bourhis</strong>. J'ai toujours aimé les histoires. J'ai écrit des nouvelles, raconté des blagues, fait de la magie, du théâtre, lu des tonnes de livres et de BD, rédigé des publicités, des scénarios de jeux de rôles, des films, animé des séminaires, donné des cours…
              </p>

              <p>
                Tout cela, je crois que je l'ai fait par amour du storytelling et la joie qu'on trouve à se rapprocher des autres à travers un récit. Avec une histoire, on peut fédérer, donner de l'espoir, rendre amoureux.
              </p>

              <p className="border-l-4 border-primary pl-6 py-2 text-background italic">
                Les révolutions sont nées d'une histoire, tout comme les civilisations… C'est un moteur puissant qui sert à créer des liens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};