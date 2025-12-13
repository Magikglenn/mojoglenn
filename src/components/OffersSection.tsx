import { Button } from "@/components/ui/button";
import { Search, Users, Mic } from "lucide-react";

const offers = [
  {
    icon: Search,
    title: "AUDIT et BILAN",
    subtitle: "3 jours pour être fixé sur les actions à prioriser dans votre communication.",
    description:
      "On fait le point sur votre image, votre positionnement, vos actions, vos supports, et on met le doigt sur les dysfonctionnements qui vous bloquent pour avancer dans la bonne direction.",
    price: "À partir de 600 € HT",
    color: "rose" as const,
  },
  {
    icon: Users,
    title: "COACHING développement",
    subtitle: "Un accompagnement mensuel qui englobe tous les aspects de la communication.",
    description:
      "On parle de branding, de storytelling et de neuromarketing. On clarifie votre vision, on définit votre positionnement, on se concentre sur ce qui fonctionne pour vous.",
    price: "Tarif mensuel : à partir de 600 € HT",
    color: "kaki" as const,
    featured: true,
  },
  {
    icon: Mic,
    title: "CONFÉRENCES",
    subtitle: "Plusieurs conférences pour vos séminaires ou vos équipes marketing.",
    description:
      "« Storytelling : le pouvoir des histoires », « Créer de la confiance pour vendre mieux », « Comment éliminer la concurrence ». Des conférences de 1 heure pour changer de perspective et mieux comprendre le cerveau humain.",
    price: "Sur devis",
    color: "rose" as const,
  },
];

const colorStyles = {
  rose: {
    iconBg: "bg-rose-light",
    iconColor: "text-rose-dark",
    border: "border-primary/20",
    button: "hero" as const,
  },
  kaki: {
    iconBg: "bg-kaki-light",
    iconColor: "text-kaki-dark",
    border: "border-secondary/20",
    button: "kaki" as const,
  },
};

export const OffersSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="offers" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Mes <span className="text-primary">offres</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => {
            const styles = colorStyles[offer.color];
            return (
              <div
                key={offer.title}
                className={`bg-card rounded-2xl p-8 shadow-card card-hover border ${styles.border} relative ${
                  offer.featured ? "ring-2 ring-secondary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Featured badge */}
                {offer.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Populaire
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${styles.iconBg} flex items-center justify-center mb-6`}
                >
                  <offer.icon className={`w-7 h-7 ${styles.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {offer.title}
                </h3>

                {/* Subtitle */}
                <p className="text-primary font-medium mb-4 text-sm">
                  {offer.subtitle}
                </p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                  {offer.description}
                </p>

                {/* Price */}
                <div className="border-t border-border pt-6 mt-auto">
                  <p className="font-semibold text-foreground mb-4">
                    {offer.price}
                  </p>
                  <Button
                    variant={styles.button}
                    className="w-full"
                    onClick={scrollToContact}
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
