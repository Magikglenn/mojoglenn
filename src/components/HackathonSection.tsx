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
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Organisez votre{" "}
              <span className="text-accent">HACKATHON</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Mobilisez vos équipes pour relever les défis de demain
            </p>

            <div className="space-y-6 text-muted-foreground leading-relaxed mb-10">
              <p>
                Un hackathon, c'est un challenge d'innovation en mode <strong className="text-foreground">SPRINT</strong>. En 2 ou 3 jours, avec des équipes de 2 à 6 personnes, et jusqu'à 150 personnes, on drive les participants pour les amener à prototyper des solutions digitales ou physiques à un ou plusieurs problèmes définis en amont.
              </p>
              <p>
                Une vraie expérience collective qui révèle tout le potentiel des humains, qui valorise chacun et repousse les limites de la créativité.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground">Jusqu'à 150 personnes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground">2-3 jours d'innovation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <Rocket className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground">Prototypes concrets</p>
              </div>
            </div>

            <Button variant="outline" size="lg" onClick={scrollToContact}>
              Contactez-moi
            </Button>
          </div>

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