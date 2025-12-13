import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline - Bold and impactful */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-foreground mb-8 animate-fade-in-up leading-[1.1] tracking-tight">
            Une communication qui{" "}
            <span className="scribble-underline text-primary">déclenche</span>
            <br />
            <span className="text-primary">des actions</span>
          </h1>

          {/* Subheadline - Clean and professional */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-delay-1 leading-relaxed font-medium">
            Je vous accompagne dans la transformation durable de votre image de marque grâce aux sciences comportementales.
          </p>

          {/* Tags - Bold and minimal */}
          <div className="flex flex-wrap justify-center gap-4 mb-14 animate-fade-in-delay-2">
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
      </div>
    </section>
  );
};