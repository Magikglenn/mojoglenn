import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToOffers = () => {
    const element = document.querySelector("#offers");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-rose-light/30 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-kaki-light/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground mb-6 animate-fade-in-up leading-tight">
            Une communication qui{" "}
            <span className="scribble-underline text-primary">déclenche des actions</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-delay-1 leading-relaxed">
            Je vous accompagne dans la transformation durable de votre image de marque grâce aux sciences comportementales.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-delay-2">
            <span className="tag-rose">Branding</span>
            <span className="tag-kaki">Storytelling</span>
            <span className="tag-cream">Neuromarketing</span>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-delay-3">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToOffers}
              className="group"
            >
              Voir mes offres
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ArrowDown size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
