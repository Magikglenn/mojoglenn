import { Button } from "@/components/ui/button";
import { Search, Users, Mic, ArrowRight } from "lucide-react";

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
        <div className="mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
            Mes <span className="text-primary">offres</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={offer.title}
              className={`relative bg-card rounded-lg p-8 lg:p-10 border group hover:-translate-y-1 transition-all duration-300 ${
                offer.featured 
                  ? "border-primary ring-2 ring-primary/20" 
                  : "border-border/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured badge */}
              {offer.featured && (
                <div className="absolute -top-4 left-8 bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                  Populaire
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-foreground flex items-center justify-center mb-8">
                <offer.icon className="w-7 h-7 text-background" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                {offer.title}
              </h3>

              {/* Subtitle */}
              <p className="text-primary font-semibold mb-6">
                {offer.subtitle}
              </p>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-10">
                {offer.description}
              </p>

              {/* Price & CTA */}
              <div className="border-t border-border pt-8 mt-auto">
                <p className="font-bold text-foreground text-lg mb-6">
                  {offer.price}
                </p>
                <Button
                  variant={offer.featured ? "hero" : "outline"}
                  className="w-full group/btn font-semibold"
                  onClick={scrollToContact}
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};