import { Sparkles, BookOpen, Brain } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "BRANDING",
    subtitle: "Capter l'attention de votre marché",
    description:
      "Votre marque est un aimant. Quand elle reflète ce que vous êtes profondément, elle attire naturellement les bons clients. Ensemble, on clarifie votre positionnement, vos valeurs et votre singularité pour faire émerger une identité forte, cohérente et mémorable.",
    color: "rose" as const,
  },
  {
    icon: BookOpen,
    title: "STORYTELLING",
    subtitle: "Faites partie de l'histoire de votre client",
    description:
      "Vous ne vendez pas un produit. Vous vendez un rôle dans l'histoire de votre public. Je vous aide à construire un récit qui crée un lien émotionnel, renforce la confiance et donne envie de passer à l'action.",
    color: "kaki" as const,
  },
  {
    icon: Brain,
    title: "NEUROMARKETING",
    subtitle: "Les neurosciences pour mieux comprendre le cerveau",
    description:
      "95 % des décisions sont émotionnelles. Grâce aux sciences comportementales, on identifie ce qui déclenche l'attention, l'intérêt et le passage à l'action. Une communication plus humaine, plus intuitive, plus efficace.",
    color: "rose" as const,
  },
];

const colorStyles = {
  rose: {
    iconBg: "bg-rose-light",
    iconColor: "text-rose-dark",
    accent: "bg-primary",
  },
  kaki: {
    iconBg: "bg-kaki-light",
    iconColor: "text-kaki-dark",
    accent: "bg-secondary",
  },
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Comment on va booster{" "}
            <span className="text-primary">votre communication</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const styles = colorStyles[service.color];
            return (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 shadow-card card-hover border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${styles.iconBg} flex items-center justify-center mb-6`}
                >
                  <service.icon className={`w-7 h-7 ${styles.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-primary font-medium mb-4">{service.subtitle}</p>

                {/* Accent line */}
                <div className={`w-12 h-1 ${styles.accent} rounded-full mb-5`} />

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
