import { Sparkles, BookOpen, Brain } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    number: "01",
    title: "BRANDING",
    subtitle: "Capter l'attention de votre marché",
    description:
      "Votre marque est un aimant. Quand elle reflète ce que vous êtes profondément, elle attire naturellement les bons clients. Ensemble, on clarifie votre positionnement, vos valeurs et votre singularité pour faire émerger une identité forte, cohérente et mémorable.",
    color: "rose" as const,
  },
  {
    icon: BookOpen,
    number: "02",
    title: "STORYTELLING",
    subtitle: "Faites partie de l'histoire de votre client",
    description:
      "Vous ne vendez pas un produit. Vous vendez un rôle dans l'histoire de votre public. Je vous aide à construire un récit qui crée un lien émotionnel, renforce la confiance et donne envie de passer à l'action.",
    color: "kaki" as const,
  },
  {
    icon: Brain,
    number: "03",
    title: "NEUROMARKETING",
    subtitle: "Les neurosciences pour mieux comprendre le cerveau",
    description:
      "95 % des décisions sont émotionnelles. Grâce aux sciences comportementales, on identifie ce qui déclenche l'attention, l'intérêt et le passage à l'action. Une communication plus humaine, plus intuitive, plus efficace.",
    color: "rose" as const,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Comment on va booster
            <br />
            <span className="text-primary">votre communication</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Number */}
              <span className="text-8xl font-extrabold text-muted/50 absolute -top-10 -left-2 select-none">
                {service.number}
              </span>

              <div className="relative pt-12 pb-8">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-foreground flex items-center justify-center mb-8">
                  <service.icon className="w-6 h-6 text-background" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-primary font-semibold mb-6">{service.subtitle}</p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom border on hover */}
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};