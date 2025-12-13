import conferenceIscom from "@/assets/conference-iscom.jpg";

export const ExtendedQuoteSection = () => {
  return (
    <section className="py-24 lg:py-32 section-quote">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] max-w-lg mx-auto rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={conferenceIscom} 
                alt="Glenn Le Bourhis en conférence - 95% de nos décisions sont irrationnelles" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Quote and text */}
          <div className="order-1 lg:order-2">
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8">
              <span className="text-accent">"</span>
              95% de nos décisions sont irrationnelles
              <span className="text-accent">"</span>
            </blockquote>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">L'humain n'est pas logique. Il est d'abord émotionnel.</strong> Notre cerveau fonctionne à 2 vitesses : un système rapide, instinctif, émotionnel. Et un système rationnel, plus lent, plus réfléchi.
              </p>
              <p>
                Nous activons ce cerveau logique après que nos émotions aient guidé nos choix, pour rationaliser nos décisions. Parce que nous avons besoin de sens.
              </p>
              <p className="p-6 bg-card rounded-xl border border-border/50 shadow-soft">
                Le sens, c'est exactement ce que je vous promets d'apporter dans mon accompagnement. Pour vous d'abord, pour vous sentir aligné, avec un cap. Et pour vos clients demain, pour résonner en eux, et enfin créer la <strong className="text-accent">confiance</strong> qui amène au développement de votre marque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};