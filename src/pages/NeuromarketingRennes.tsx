import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, Brain, MapPin, Mic2, Sparkles, Target, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import glennPortrait from "@/assets/glenn-portrait.jpg.asset.json";
import confNeuro from "@/assets/conf-neuromarketing-rennes.png.asset.json";

const faqs = [
  {
    q: "Qu'est-ce que le neuromarketing exactement ?",
    a: "Le neuromarketing est l'application des sciences cognitives et des sciences comportementales à la communication et au marketing. Il s'appuie sur la compréhension des mécanismes du cerveau — attention, mémoire, émotion, décision — pour concevoir des messages, des produits et des parcours clients plus efficaces.",
  },
  {
    q: "Comment fonctionne le cerveau de mes clients face à une publicité ou un message commercial ?",
    a: "Le cerveau traite l'information en grande partie de façon automatique et émotionnelle, avant même toute analyse rationnelle. Comprendre ces mécanismes — attention sélective, biais cognitifs, charge émotionnelle d'une histoire — permet d'adapter ses messages pour qu'ils soient mieux perçus, mémorisés, et qu'ils déclenchent une action.",
  },
  {
    q: "Le neuromarketing peut-il vraiment aider à vendre plus ?",
    a: 'Oui, mais pas par la manipulation. En adaptant son discours, son storytelling et ses supports aux mécanismes réels de décision (et non à des recettes marketing dépassées comme le "cerveau reptilien" ou les "95 % de décisions irrationnelles"), les entreprises constatent généralement une meilleure réception de leurs messages et une amélioration de leurs taux de conversion.',
  },
  {
    q: "Quelle est la différence entre une conférence, un atelier et une formation en neuromarketing ?",
    a: "La conférence est un format court (environ 1 heure), pensé pour sensibiliser une équipe ou un public à grande échelle. L'atelier est plus participatif et permet d'appliquer les principes directement à vos outils. La formation va plus loin, avec un objectif de montée en compétence durable des équipes commerciales et marketing.",
  },
  {
    q: "Le neuromarketing fonctionne-t-il pour toutes les entreprises, quelle que soit leur taille ?",
    a: "Oui. Les principes des sciences cognitives s'appliquent à toute communication humaine, qu'il s'agisse d'une TPE, d'une PME ou d'un grand groupe. Seule l'application diffère selon le contexte, les canaux et les objectifs de l'entreprise.",
  },
  {
    q: "Comment savoir si mon entreprise a besoin d'un accompagnement en neuromarketing ?",
    a: "Si vos messages ne génèrent pas l'engagement attendu, si vos équipes commerciales peinent à convaincre malgré un bon produit, ou si votre communication \"ne ressemble à rien\" alors qu'elle suit pourtant les bonnes pratiques habituelles — ce sont des signaux qui justifient un regard extérieur basé sur les sciences comportementales.",
  },
];

const interventions = [
  {
    icon: Mic2,
    title: "Conférence neuromarketing",
    text: "Une heure pour bousculer les certitudes de votre équipe ou de votre public sur le fonctionnement réel du cerveau face au marketing. Idéale pour un séminaire d'entreprise, un événement professionnel ou une keynote grand public.",
    highlight: 'Conférence phare : "Neuromarketing : les secrets du cerveau pour convaincre"',
    cta: { label: "Accéder aux conférences", to: "/conferences" },
    variant: "hero" as const,
  },
  {
    icon: Users,
    title: "Atelier neuromarketing",
    text: "Un format plus participatif, pensé pour une équipe marketing, commerciale ou de direction qui souhaite appliquer concrètement les principes des sciences comportementales à ses propres outils de communication : site web, argumentaires, campagnes, parcours client.",
    highlight: "Bénéfice : vos équipes repartent avec des recommandations directement applicables à vos supports.",
    cta: { label: "Discuter de la mise en place d'un atelier", to: "/conferences#contact-conference" },
    variant: "outline" as const,
  },
  {
    icon: Sparkles,
    title: "Formation neuromarketing",
    text: "Une formation plus approfondie, destinée aux équipes commerciales et marketing qui veulent intégrer durablement les principes du neuromarketing dans leurs pratiques quotidiennes : structuration des messages, gestion des objections, storytelling de marque.",
    highlight: "Bénéfice : une montée en compétence durable, pas un effet d'annonce.",
    cta: { label: "Me contacter pour organiser une formation", to: "/conferences#contact-conference" },
    variant: "outline" as const,
  },
  {
    icon: Target,
    title: "Consulting en stratégie de communication",
    text: "Pour les marques et entreprises qui souhaitent aller plus loin : un accompagnement sur-mesure pour repenser leur positionnement, leur discours et leurs supports à la lumière des sciences cognitives.",
    highlight: null,
    cta: { label: "Découvrir mon parcours et mes références", to: "/a-propos" },
    variant: "outline" as const,
  },
];

const NeuromarketingRennes = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Spécialiste neuromarketing Rennes — Conférences & formations | Glenn</title>
        <meta
          name="description"
          content="Spécialiste neuromarketing à Rennes : conférences, ateliers, formations et consulting pour comprendre le cerveau de vos clients et vendre plus, sans bullshit."
        />
        <link rel="canonical" href="https://glenn.bzh/neuromarketing-rennes" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="container mx-auto px-6 pt-32 pb-16 md:pt-36 md:pb-20">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
          </Button>

          {/* HERO */}
          <section className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center py-8 lg:py-12">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
                <MapPin className="w-4 h-4 inline-block mr-2 -mt-1" />
                Neuromarketing · Rennes · Bretagne
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight leading-tight">
                Spécialiste <span className="highlight-box">neuromarketing</span> à Rennes : comprendre le cerveau de
                vos clients pour mieux vendre
              </h1>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  Pourquoi certains messages marquent, convainquent, déclenchent l'achat — et d'autres tombent à plat ?
                  La réponse n'est pas dans votre budget pub. Elle est dans le{" "}
                  <strong className="text-foreground">cerveau de vos clients</strong>.
                </p>
                <p>
                  Consultant en stratégie de communication depuis <strong className="text-foreground">25 ans</strong> et
                  spécialiste du neuromarketing basé à Rennes, j'aide les entreprises, les marques et les équipes
                  commerciales en Bretagne — et partout en France — à comprendre les mécanismes des sciences cognitives
                  pour améliorer leur communication, leurs ventes et leur impact.
                </p>
                <p>
                  Conférences, ateliers, formations ou consulting : on regarde ensemble ce qui fonctionne vraiment dans
                  la tête de vos consommateurs, et ce qu'on peut faire de cette information.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button variant="hero" size="xl" className="group" asChild>
                  <Link to="/conferences">
                    Découvrir mes interventions
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg border border-border/60 shadow-elevated bg-card">
                <img
                  src={confNeuro.url}
                  alt="Glenn Le Bourhis en conférence neuromarketing à Rennes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-card border border-border/60 rounded-lg px-5 py-4 shadow-card max-w-xs">
                <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-2">Basé à Rennes</p>
                <p className="text-sm text-muted-foreground">Bretagne, France entière, et en distanciel.</p>
              </div>
            </div>
          </section>
        </div>

        {/* POURQUOI */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
              Pourquoi faire appel à un <span className="highlight-box">spécialiste en neuromarketing</span> ?
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Le neuromarketing, ce n'est pas une mode ni un gadget. C'est l'application concrète des{" "}
                <strong className="text-foreground">sciences comportementales</strong> et des{" "}
                <strong className="text-foreground">sciences cognitives</strong> à votre communication, votre offre,
                votre discours commercial.
              </p>
              <p>
                Concrètement, ça répond à une question simple : comment fonctionne le cerveau de vos clients quand ils
                sont face à votre marque, votre produit, votre message ?
              </p>
              <p>Et une fois qu'on comprend ça, tout devient plus facile :</p>
              <ul className="space-y-3 pl-6 list-disc marker:text-accent">
                <li>vendre plus, sans forcer ni manipuler</li>
                <li>améliorer sa communication pour qu'elle touche réellement sa cible</li>
                <li>arrêter de gaspiller du budget sur des messages qui ne fonctionnent pas</li>
                <li>aligner son discours commercial sur ce qui motive réellement la décision d'achat</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-14">
              <div className="bg-background border border-border/60 rounded-lg p-8">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-4">
                  Le problème : on communique souvent à l'instinct
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  La plupart des entreprises communiquent sur la base d'intuitions, d'habitudes, ou de recettes
                  marketing reprises sans être vérifiées (pyramide de Maslow, cerveau reptilien, « 95 % de décisions
                  irrationnelles »…). Le problème ? Une bonne partie de ces recettes ne tiennent pas la route — et ça,
                  je le sais, j'ai écrit un livre entier sur le sujet.
                </p>
              </div>
              <div className="bg-background border border-border/60 rounded-lg p-8">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-4">
                  La solution : s'appuyer sur ce qui fonctionne vraiment
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mon rôle : faire le tri entre ce qui relève du mythe marketing et ce que les sciences cognitives
                  confirment réellement, puis transformer ça en leviers concrets pour votre communication, votre site,
                  vos argumentaires commerciaux ou vos campagnes.
                </p>
              </div>
            </div>

            <p className="mt-10 text-lg">
              <Link to="/a-propos" className="text-accent font-semibold hover:underline inline-flex items-center gap-2">
                En savoir plus sur mon parcours et ma méthode
                <ArrowRight className="w-4 h-4" />
              </Link>
            </p>
          </div>
        </section>

        {/* MIEUX PARLER */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Mieux parler à ses consommateurs grâce aux <span className="highlight-box">sciences cognitives</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chaque entreprise a un problème commun : capter l'attention, créer de la confiance, et déclencher une
                décision. Les sciences comportementales donnent des clés très concrètes pour chacune de ces étapes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Brain,
                  title: "Capter l'attention dans un monde saturé",
                  body: "Le cerveau filtre en permanence l'information. Comprendre ses mécanismes de tri permet de structurer un message pour qu'il soit retenu — et non noyé dans le bruit.",
                  benefit:
                    "Des messages publicitaires, des posts LinkedIn, des présentations commerciales qui sortent du lot.",
                  link: { to: "/conferences", label: "Former vos équipes" },
                },
                {
                  icon: Users,
                  title: "Créer de la confiance avant de vendre",
                  body: "La confiance précède toujours la conversion. Les biais cognitifs liés à la preuve sociale, à la cohérence ou à l'autorité jouent un rôle déterminant — encore faut-il les utiliser de façon honnête et durable.",
                  benefit: "Une relation client plus solide, moins de réticence à l'achat.",
                  link: { to: "/a-propos", label: "Audit & consulting" },
                },
                {
                  icon: Target,
                  title: "Déclencher la décision sans manipuler",
                  body: "Comprendre comment fonctionne le cerveau de vos clients au moment du choix permet d'ajuster son discours commercial — sans tomber dans les techniques agressives qui finissent par se voir, et par desservir la marque.",
                  benefit:
                    "Des équipes commerciales plus à l'aise, des taux de conversion qui progressent durablement.",
                  link: { to: "/conferences#contact-conference", label: "Formation dédiée" },
                },
              ].map((card) => (
                <div key={card.title} className="bg-card border border-border/60 rounded-lg p-8 flex flex-col">
                  <card.icon className="w-8 h-8 text-accent mb-5" />
                  <h3 className="font-display text-xl font-bold mb-4">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{card.body}</p>
                  <p className="text-sm text-foreground font-semibold mb-6">Bénéfice : {card.benefit}</p>
                  <Link
                    to={card.link.to}
                    className="mt-auto text-accent font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    {card.link.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERVENTIONS */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Mes interventions : conférences, ateliers, formations et{" "}
                <span className="highlight-box">consulting</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Toutes mes interventions partent du même principe : rendre les sciences cognitives utiles, concrètes, et
                applicables immédiatement à votre activité.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {interventions.map((it) => (
                <div key={it.title} className="bg-background border border-border/60 rounded-lg p-8 flex flex-col">
                  <it.icon className="w-8 h-8 text-accent mb-5" />
                  <h3 className="font-display text-2xl font-bold mb-4">{it.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{it.text}</p>
                  {it.highlight && <p className="text-sm text-foreground font-semibold mb-6">👉 {it.highlight}</p>}
                  <div className="mt-auto pt-2">
                    <Button variant={it.variant} asChild>
                      <Link to={it.cta.to}>
                        {it.cta.label}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ANCRAGE LOCAL */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
              Spécialiste neuromarketing à <span className="highlight-box">Rennes, en Bretagne</span>, et partout en
              France
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Basé à Rennes, j'interviens prioritairement auprès des entreprises et marques bretonnes —{" "}
                <strong className="text-foreground">Rennes, Saint-Malo, Vannes, Brest, Lorient</strong>, et plus
                largement toute la région Bretagne — pour des conférences, ateliers et formations en neuromarketing en
                présentiel.
              </p>
              <p>
                Je me déplace également partout en France pour des interventions ponctuelles (conférences, séminaires,
                événements professionnels) ou pour des missions de consulting à distance.
              </p>
            </div>

            <div className="bg-card border border-border/60 rounded-lg p-8 mt-10">
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4">
                Pourquoi un ancrage local fait la différence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Travailler avec un spécialiste basé localement, c'est plus de disponibilité, une meilleure compréhension
                du tissu économique régional, et souvent moins de contraintes logistiques pour organiser une
                intervention en présentiel.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">FAQ</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Questions fréquentes sur le <span className="highlight-box">neuromarketing</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-background rounded-lg border border-border/50 px-8 data-[state=open]:border-accent/30 transition-colors"
                >
                  <AccordionTrigger className="font-display text-left text-lg font-bold text-foreground hover:text-accent py-6 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
              Passons à <span className="highlight-box">l'action</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Conférence, atelier, formation ou consulting : quel que soit le format, l'objectif reste le même —
              comprendre comment fonctionne le cerveau de vos clients, et s'en servir pour améliorer votre communication
              et vendre plus, sans tomber dans le bullshit marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group" asChild>
                <Link to="/conferences">
                  Voir mes conférences et me contacter
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/a-propos">En savoir plus sur mon parcours</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default NeuromarketingRennes;
