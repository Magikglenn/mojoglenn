import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mojoVoodoo from "@/assets/mojo-voodoo.svg";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Parlons de{" "}
            <span className="scribble-underline text-accent">votre projet</span>
          </h2>

          <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
            Prenez quelques minutes pour me parler de votre projet. Je vous recontacte sous 48 heures pour échanger sur vos besoins.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="xl"
              className="group"
              asChild
            >
              <a
                href="https://tally.so"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mojoVoodoo} alt="" className="w-5 h-5 opacity-70" style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(10%) saturate(746%) hue-rotate(213deg) brightness(95%) contrast(88%)' }} />
                Remplir le questionnaire
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              className="group bg-vert text-gris border-vert hover:bg-vert/90 hover:border-vert/90"
              asChild
            >
              <a href="mailto:contact@exemple.com">
                <img src={mojoVoodoo} alt="" className="w-5 h-5 opacity-70" style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(10%) saturate(500%) hue-rotate(200deg) brightness(95%) contrast(90%)' }} />
                Envoyer un mail
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};