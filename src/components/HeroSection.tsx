import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import glennHero from "@/assets/glenn-hero.jpg";
import mojoVoodoo from "@/assets/mojo-voodoo.svg";

export const HeroSection = () => {
  const scrollToOffers = () => {
    const element = document.querySelector("#offers");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 -z-10 section-mesh" />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            {/* Main headline - Bold Grotesk */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-8 animate-fade-in-up leading-[1.1] tracking-tight">
              Du branding,{" "}
              <span className="highlight-box">de la confiance</span>,
              <br />
              <span className="text-accent">des clients.</span>
            </h1>
            <span className="sr-only">
              Consultant en branding, storytelling et neuromarketing en Bretagne et en France
            </span>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-in-delay-1 leading-relaxed font-medium">
              Directeur de la communication externalisé, je vous aide à structurer, consolider ou déployer votre image de marque en utilisant les sciences comportementales et le neuromarketing.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 animate-fade-in-delay-2">
              <span className="tag-bleu">Branding</span>
              <span className="tag-violet">Storytelling</span>
              <span className="tag-vert">Neuromarketing</span>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in-delay-3">
              <Button
                variant="hero"
                size="xl"
                onClick={scrollToOffers}
                className="group text-lg px-10 py-6"
              >
                <img src={mojoVoodoo} alt="" className="w-6 h-6 opacity-70" style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(10%) saturate(746%) hue-rotate(213deg) brightness(95%) contrast(88%)' }} />
                Voir mes offres
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in-delay-2 order-first lg:order-last">
          <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <iframe
                  src="https://www.youtube.com/embed/OAHxJ5tNWDE"
                  title="Présentation MOJO"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full -z-10 blur-xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/30 rounded-full -z-10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};