import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Glenn, c'est l'apport de précieux conseils et d'une vision décalée permettant de vraiment se démarquer en matière de communication. Travaillant ensemble depuis 2 ans, c'est avant tout une écoute très attentive permettant de construire des projets qui ne dénaturent pas les valeurs de leurs clients pour les mettre encore mieux en relief. Merci pour cette heureuse collaboration (et mon beau logo 😊)",
    author: "Sébastien Ardouin",
    company: "Sherpa",
  },
  {
    quote:
      "Merci pour l'ensemble de vos conseils, nous avons décidé de changer le nom de notre entreprise vieille de 32ans et cela nous a généré pas mal d'angoisse. Mais votre accompagnement nous a complètement rassuré dans ce choix, et aujourd'hui nous sommes ravis de notre nouvelle identité. Nous ne manquerons pas de vous recommander.",
    author: "Kevin Bourdin",
    company: "Karwan",
  },
  {
    quote:
      "Nous avons l'occasion de travailler avec Glenn et son équipe depuis plusieurs mois maintenant. Un grand merci pour leur accompagnement et leur travail. Pour notre entreprise et sa communication, il y a un avant et après, défi relevé !",
    author: "Jules Morat",
    company: "KEROS",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 section-gradient">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
            Témoignages
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Ce que disent mes <span className="text-accent">clients</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-card rounded-lg p-8 lg:p-10 border border-border/50 relative group hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-accent/30 mb-6" />

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed mb-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="font-display font-bold text-foreground text-lg">
                  {testimonial.author}
                </p>
                <p className="text-accent font-semibold">{testimonial.company}</p>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};