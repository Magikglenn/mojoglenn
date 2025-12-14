import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </Button>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">
          Mentions légales
        </h1>

        <div className="max-w-3xl space-y-10 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Éditeur du site
            </h2>
            <p className="leading-relaxed">
              Glenn Le Bourhis<br />
              Consultant en communication et stratégie de marque<br />
              Bretagne, France<br />
              Email : connexion@glenn.bzh<br />
              Téléphone : 06 81 49 98 40
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Hébergement
            </h2>
            <p className="leading-relaxed">
              Ce site est hébergé par Lovable.<br />
              Pour plus d'informations, veuillez consulter : lovable.dev
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Propriété intellectuelle
            </h2>
            <p className="leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Glenn Le Bourhis, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
            </p>
            <p className="leading-relaxed mt-4">
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Glenn Le Bourhis.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Données personnelles
            </h2>
            <p className="leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.
            </p>
            <p className="leading-relaxed mt-4">
              Pour exercer ces droits ou pour toute question relative au traitement de vos données, vous pouvez nous contacter à l'adresse : connexion@glenn.bzh
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Cookies
            </h2>
            <p className="leading-relaxed">
              Ce site peut utiliser des cookies à des fins de mesure d'audience et d'amélioration de l'expérience utilisateur. En naviguant sur ce site, vous acceptez l'utilisation de ces cookies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Limitation de responsabilité
            </h2>
            <p className="leading-relaxed">
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
