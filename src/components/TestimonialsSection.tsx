import { Star, Quote } from "lucide-react";

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
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Ce que disent mes <span className="text-primary">clients</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-card rounded-2xl p-8 shadow-card card-hover border border-border/50 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-primary">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
