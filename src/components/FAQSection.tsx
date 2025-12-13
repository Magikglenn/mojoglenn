import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Combien de temps dure un accompagnement en moyenne ?",
    answer:
      "L'accompagnement minimum est de 3 mois. C'est le temps qu'il faut pour étudier le terrain, explorer les pistes, prendre en compte vos contraintes et vos souhaits, construire une stratégie et la rendre opérationnelle pour vous et vos équipes.",
  },
  {
    question: "Est-ce que vous faites aussi la création des supports ?",
    answer:
      "J'ai été 25 ans en agence de communication, graphiste, puis directeur artistique. Je peux donc le faire, et j'ai les outils pour le faire. Néanmoins, en fonction du projet, j'aime m'entourer de personnes encore plus compétentes pour me concentrer sur la stratégie et délivrer ce qu'il y a de meilleur à tous points de vue.",
  },
  {
    question: "C'est quoi le storytelling ?",
    answer:
      "Pour moi, le storytelling c'est une façon de s'inscrire dans la vie des gens. C'est la construction de votre alignement qui va venir résonner chez le consommateur pour créer de la confiance en générant un sentiment d'appartenance. C'est essentiel à tous les niveaux.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
              FAQ
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Questions <span className="text-accent">fréquentes</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border/50 px-8 data-[state=open]:border-accent/30 transition-colors"
              >
                <AccordionTrigger className="font-display text-left text-lg font-bold text-foreground hover:text-accent py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};