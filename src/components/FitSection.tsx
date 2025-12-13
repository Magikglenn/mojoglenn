import { Check } from "lucide-react";

const fitCriteria = [
  "Vous voulez passer d'une vision floue à une stratégie concrète",
  "Vous souhaitez connecter sincèrement avec votre marché",
  "Votre produit ou service est bon mais le marché trop concurrentiel",
  "Vous cherchez comment parler de ce que vous vendez",
  "Vous voulez créer des offres qui se vendent",
  "Vous voulez être vu et remarqué dans un monde saturé d'informations",
];

export const FitSection = () => {
  return (
    <section className="py-24 lg:py-32 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12 text-center">
            On est fait pour s'entendre{" "}
            <span className="text-primary">si :</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {fitCriteria.map((criteria, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-soft border border-border/50 card-hover"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground leading-relaxed text-sm">
                  {criteria}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
