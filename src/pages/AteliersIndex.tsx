import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import atelierFuturHero from "@/assets/ateliers-hero-payer-publier.png.asset.json";
import atelierPitchHero from "@/assets/atelier-pitch-decisif-rennes.jpg.asset.json";

const ateliers = [
  {
    title: "Les Ateliers du Futur",
    description:
      "Un atelier de prospective illustré pour explorer les futurs possibles de votre marché et embarquer vos équipes dans l'innovation.",
    href: "/ateliers-du-futur",
    image: atelierFuturHero.url,
  },
  {
    title: "Atelier Pitch Décisif",
    description:
      "Duo neuromarketing + éloquence pour transformer votre pitch en machine de guerre. Méthode des 10 Piliers, à Rennes.",
    href: "/offres/ateliers/pitch-decisif",
    image: atelierPitchHero.url,
  },
];

const AteliersIndex = () => {
  return (
    <>
      <Helmet>
        <title>Ateliers Glenn Le Bourhis — Prospective & Pitch à Rennes</title>
        <meta
          name="description"
          content="Découvrez les ateliers animés par Glenn Le Bourhis : Ateliers du Futur (prospective, team building) et Atelier Pitch Décisif (neuromarketing + éloquence) à Rennes et en Bretagne."
        />
        <link rel="canonical" href="https://glenn.bzh/offres/ateliers" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-32 pb-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
                Ateliers
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
                Deux ateliers pour <span className="highlight-box">passer à l'action</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Prospective ou pitch : deux formats intensifs pensés pour transformer votre manière de penser, de raconter et de convaincre.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {ateliers.map((a) => (
                <Link
                  key={a.href}
                  to={a.href}
                  className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-accent/50 transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {a.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{a.description}</p>
                    <div className="inline-flex items-center gap-2 text-accent font-semibold">
                      Découvrir l'atelier
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AteliersIndex;
