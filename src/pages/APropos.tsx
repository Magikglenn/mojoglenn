import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import glennPortrait from "@/assets/glenn-portrait.jpg";
import glennIphone from "@/assets/glenn-iphone.jpg";

const APropos = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Glenn Le Bourhis – Expert Branding & Neuromarketing en Bretagne";

    const metaDesc = document.querySelector('meta[name="description"]');
    const previousDesc = metaDesc?.getAttribute("content") ?? "";
    metaDesc?.setAttribute(
      "content",
      "Glenn Le Bourhis, directeur de communication externalisé en Bretagne. Expert en branding, storytelling, neuromarketing et sciences comportementales pour les dirigeants et équipes marketing en France."
    );

    return () => {
      document.title = previousTitle;
      if (metaDesc && previousDesc) metaDesc.setAttribute("content", previousDesc);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </Button>

        <header className="max-w-4xl mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
            À propos
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight leading-tight">
            Glenn Le Bourhis, consultant en communication stratégique et neuromarketing
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Directeur de communication externalisé basé en Bretagne, j'accompagne dirigeants et équipes marketing partout en France pour construire des marques fortes grâce au branding, au storytelling et aux sciences comportementales.
          </p>
        </header>

        <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={glennPortrait}
                alt="Glenn Le Bourhis, consultant en branding et neuromarketing en Bretagne"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 text-muted-foreground leading-relaxed text-lg">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Pourquoi travailler <span className="text-accent">avec moi&nbsp;?</span>
            </h2>
            <p>
              <strong className="text-foreground font-semibold">
                Si les gens étaient logiques, ça fait longtemps qu'on ne vendrait plus de cigarettes.
              </strong>{" "}
              Mon métier c'est d'aller chercher les désirs profonds et les émotions qui génèrent des décisions et des passages à l'action.
            </p>
            <p>
              Comme un bon ami, une entreprise doit inspirer confiance avant tout. Ce sentiment crée une relation qui rend votre communication plus efficace, consolide votre notoriété, génère de la recommandation et muscle votre marque-employeur.
            </p>
            <p>
              Du petit artisan au grand groupe, nous avons tous une histoire à raconter. En tant que directeur de communication externalisé, je vous aide à passer ce cap, en Bretagne comme partout en France.
            </p>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-12 items-center mb-24">
          <div className="lg:col-span-2 bg-muted/30 rounded-lg p-10 lg:p-12 border border-border/50">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight text-foreground">
              Qui suis-je<span className="text-accent">&nbsp;?</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg font-semibold text-foreground">
                Passionné de communication sous toutes ses formes, j'ai passé les 10 dernières années à mieux comprendre le cerveau humain et à appliquer les sciences comportementales à la communication des marques.
              </p>
              <p>
                Je m'appelle <strong className="text-foreground">Glenn Le Bourhis</strong>. J'ai écrit des nouvelles, raconté des blagues, fait de la magie, du théâtre, lu des tonnes de livres et de BD, rédigé des publicités, des scénarios de jeux de rôles, des films, animé des séminaires, donné des cours…
              </p>
              <p>
                Tout cela, je l'ai fait par amour du <strong className="text-foreground">storytelling</strong> et par la joie qu'on trouve à se rapprocher des autres à travers un récit. Avec une histoire, on peut fédérer, donner de l'espoir, rendre amoureux.
              </p>
              <p>
                Aujourd'hui, j'accompagne les entreprises en tant que <strong className="text-foreground">directeur de communication externalisé</strong>. Mon expertise s'appuie sur trois piliers&nbsp;: le <strong className="text-foreground">branding</strong> pour clarifier votre identité, le <strong className="text-foreground">storytelling</strong> pour la rendre vivante, et le <strong className="text-foreground">neuromarketing</strong> pour la rendre efficace.
              </p>
              <p className="border-l-4 border-accent pl-6 py-2 text-foreground italic">
                Les révolutions sont nées d'une histoire, tout comme les civilisations… C'est un moteur puissant qui sert à créer des liens.
              </p>
              <p>
                Basé en <strong className="text-foreground">Bretagne</strong>, j'interviens dans toute la France, en présentiel comme en distanciel, auprès des dirigeants, équipes marketing et organismes de formation.
              </p>
            </div>
          </div>

          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={glennIphone}
              alt="Glenn Le Bourhis, directeur de communication externalisé, expert storytelling et sciences comportementales"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
            Parlons de votre projet
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Vous souhaitez structurer, consolider ou déployer votre image de marque&nbsp;? Découvrez mes offres ou contactez-moi directement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/#offers">Voir mes offres</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/#contact">Me contacter</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default APropos;
