import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import glennHero from "@/assets/glenn-hero.jpg";

export const HeroSection = () => {
  const scrollToOffers = () => {
    const element = document.querySelector("#offers");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            {/* Main headline - Bold and impactful */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground mb-8 animate-fade-in-up leading-[1.1] tracking-tight">
              Une communication qui{" "}
              <span className="scribble-underline text-primary">déclenche</span>
              <br />
              <span className="text-primary">des actions</span>
            </h1>

            {/* Subheadline - Clean and professional */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-in-delay-1 leading-relaxed font-medium">
              Je vous accompagne dans la transformation durable de votre image de marque grâce aux sciences comportementales.
            </p>

            {/* Tags - Bold and minimal */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 animate-fade-in-delay-2">
              <span className="tag-rose">Branding</span>
              <span className="tag-kaki">Storytelling</span>
              <span className="tag-cream">Neuromarketing</span>
            </div>

            {/* CTA Button - High contrast */}
            <div className="animate-fade-in-delay-3">
              <Button
                variant="hero"
                size="xl"
                onClick={scrollToOffers}
                className="group text-lg px-10 py-6"
              >
                Voir mes offres
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in-delay-2 order-first lg:order-last">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={glennHero} 
                  alt="Glenn Le Bourhis - Expert en communication et neuromarketing" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-kaki/20 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};