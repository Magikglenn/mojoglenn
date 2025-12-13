import { Button } from "@/components/ui/button";
import { Users, Lightbulb, Rocket } from "lucide-react";
import hackathon1 from "@/assets/hackathon-1.jpg";
import hackathon2 from "@/assets/hackathon-2.jpg";
import hackathon3 from "@/assets/hackathon-3.jpg";
import hackathon4 from "@/assets/hackathon-4.jpg";

export const HackathonSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Organisez votre{" "}
              <span className="text-rose-light">HACKATHON</span>
            </h2>
            <p className="text-background/70 mb-8 text-lg">
              Mobilisez vos équipes pour relever les défis de demain
            </p>

            <div className="space-y-6 text-background/80 leading-relaxed mb-10">
              <p>
                Un hackathon, c'est un challenge d'innovation en mode <strong className="text-background">SPRINT</strong>. En 2 ou 3 jours, avec des équipes de 2 à 6 personnes, et jusqu'à 150 personnes, on drive les participants pour les amener à prototyper des solutions digitales ou physiques à un ou plusieurs problèmes définis en amont.
              </p>
              <p>
                Une vraie expérience collective qui révèle tout le potentiel des humains, qui valorise chacun et repousse les limites de la créativité.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-rose-light/20 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-rose-light" />
                </div>
                <p className="text-sm text-background/70">Jusqu'à 150 personnes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-rose-light/20 flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="w-6 h-6 text-rose-light" />
                </div>
                <p className="text-sm text-background/70">2-3 jours d'innovation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-rose-light/20 flex items-center justify-center mx-auto mb-3">
                  <Rocket className="w-6 h-6 text-rose-light" />
                </div>
                <p className="text-sm text-background/70">Prototypes concrets</p>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="border-rose-light text-rose-light hover:bg-rose-light hover:text-foreground"
              onClick={scrollToContact}
            >
              Contactez-moi
            </Button>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src={hackathon1} alt="Hackathon - Session de travail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={hackathon2} alt="Hackathon - Accompagnement équipes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={hackathon3} alt="Hackathon - Photo de groupe" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src={hackathon4} alt="Hackathon - Glenn Le Bourhis" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
