import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import glennPitch from "@/assets/glenn-pitch-strategie.jpg.asset.json";
import atelierAbea from "@/assets/atelier-branding-abea.jpg.asset.json";
import glennAtelier from "@/assets/glenn-atelier-equipe.jpg.asset.json";

const rows = [
  {
    n: "1",
    model: "Gérer en interne, sans accompagnement",
    who: "TPE en démarrage, dirigeant déjà formé",
    budget: "0€ direct (coût caché : temps dirigeant)",
    flaw: "Aucun recul extérieur",
  },
  {
    n: "2",
    model: "Le freelance polyvalent",
    who: "Besoin ponctuel et bien défini",
    budget: "286-391€/jour (Baromètre Malt)",
    flaw: "Bon exécutant, rarement stratège",
  },
  {
    n: "3",
    model: "Le consultant-opérateur (MOJO)",
    who: "Stratégie qui doit s'appliquer au quotidien",
    budget: "Dès 600€ HT (audit) / 800€ HT/mois (coaching)",
    flaw: "Seul, pas de banc de profils permanent",
  },
  {
    n: "4",
    model: "Le consultant expert ponctuel",
    who: "Diagnostic pointu sur un sujet précis",
    budget: "587-781€/jour (Baromètre Malt)",
    flaw: "Repart avant le déploiement",
  },
  {
    n: "5",
    model: "L'agence de communication",
    who: "Production multicanal soutenue",
    budget: "10 000-12 500€/projet médian pour une PME (La Fabrique du Net)",
    flaw: "Turnover, comptes gérés par des juniors",
  },
  {
    n: "6",
    model: "Le directeur de communication externalisé",
    who: "Pilotage stratégique et budgétaire à l'année",
    budget: "3 500 à 15 000€ HT/mois (étude Futur Proche / Malt / Robert Walters)",
    flaw: "Orchestre, ne crée pas toujours",
  },
];

const faqs = [
  {
    q: "Quelle est la différence entre un consultant en communication et une agence de communication ?",
    a: "Une agence apporte une capacité de production en équipe (créatifs, chef de projet), avec un budget de projet médian de 10 000 à 12 500€ pour une PME. Un consultant indépendant offre un interlocuteur unique, plus de souplesse de format, et un ticket d'entrée souvent plus bas — mais sans équipe de production interne.",
  },
  {
    q: "Combien coûte un directeur de communication externalisé ?",
    a: "Entre 3 500 et 15 000€ HT par mois selon le nombre de jours d'intervention (1 à 4 jours/semaine), avec un TJM médian autour de 850€ (source : étude Futur Proche / Malt / Robert Walters).",
  },
  {
    q: "Faut-il un accompagnement en communication quand on est une petite entreprise ?",
    a: "Pas toujours au démarrage : beaucoup de TPE gèrent leur communication en interne. Le coût caché, c'est le temps du dirigeant et l'absence de recul extérieur sur les décisions. Un accompagnement ponctuel devient pertinent dès qu'un vrai enjeu de positionnement ou de prise de parole apparaît.",
  },
  {
    q: "Quel est le tarif d'un freelance en communication ?",
    a: "Entre 286 et 391€ par jour selon l'expérience pour un profil généraliste (0 à 7 ans d'expérience), selon le Baromètre Malt.",
  },
  {
    q: "Qu'est-ce qu'un consultant-opérateur en communication ?",
    a: "Un consultant qui combine stratégie et déploiement terrain. Contrairement à un consultant expert qui livre un diagnostic ponctuel et repart, il reste jusqu'à ce que la stratégie s'applique concrètement dans les équipes — c'est l'approche de MOJO.",
  },
];

type Block = {
  title: string;
  lines: { label: string; text: React.ReactNode }[];
  link?: boolean;
};

const blocks: Block[] = [
  {
    title: "1. Gérer en interne, sans accompagnement",
    lines: [
      { label: "Verdict", text: "la solution par défaut, gratuite en apparence, mais qui coûte cher ailleurs." },
      { label: "Pour qui ?", text: "Les TPE en démarrage ou les dirigeants qui ont déjà une vraie culture com/marketing et le temps de l'exercer eux-mêmes." },
      { label: "Format", text: "aucun format fixe — ça dépend entièrement des ressources et du temps déjà disponibles en interne." },
      { label: "Profondeur d'expertise", text: "variable, strictement limitée à ce qui existe déjà dans l'équipe. Rarement pointue sur la culture de marque ou les sciences comportementales." },
      { label: "Autonomie de sourcing", text: "totale, mais sans filtre — les outils et prestataires ponctuels sont choisis au coup par coup, sans grille de sélection." },
      { label: "Repère budget sourcé", text: "0€ de dépense externe directe. (Coût caché : temps dirigeant, décisions non challengées, risque d'incohérence de marque dans la durée.)" },
      { label: "Défaut assumé", text: "pas de recul extérieur, pas de méthode challengée par un tiers. La com devient vite un empilement de coups plutôt qu'une trajectoire." },
    ],
  },
  {
    title: "2. Le freelance polyvalent",
    lines: [
      { label: "Verdict", text: "rapide et abordable pour de l'exécution, mais sans profondeur stratégique." },
      { label: "Pour qui ?", text: "Les petites structures avec un besoin ponctuel et bien défini — poster sur les réseaux, rédiger des contenus courants, produire un visuel — et qui savent déjà ce qu'elles veulent dire." },
      { label: "Format", text: "missions courtes, facturées à la journée ou au forfait, généralement sans engagement long." },
      { label: "Profondeur d'expertise", text: "solide sur un périmètre limité (rédaction, community management), rarement formée aux sciences comportementales ou à la stratégie de marque globale." },
      { label: "Autonomie de sourcing", text: "aucune — c'est à l'entreprise d'identifier et de coordonner elle-même plusieurs freelances si le besoin dépasse une seule compétence." },
      { label: "Repère budget sourcé", text: "TJM 286 à 391€/jour selon l'expérience (profils 0-7 ans). Source : Baromètre Malt, Consultants en communication." },
      { label: "Défaut assumé", text: "bon technicien, rarement bon stratège. Sans cadrage en amont, on obtient une belle exécution... d'une mauvaise idée." },
    ],
  },
  {
    title: "3. Le consultant-opérateur (l'approche MOJO)",
    link: true,
    lines: [
      { label: "Verdict", text: "un stratège qui reste jusqu'à ce que ça s'applique vraiment, avec la souplesse d'un indépendant et la culture créative d'une agence." },
      { label: "Pour qui ?", text: "Des dirigeants et des équipes qui veulent une stratégie qui infuse dans le quotidien — pas juste un document remis en fin de mission. Des entreprises en pleine transformation (marque employeur, prise de parole, storytelling) qui veulent que leurs équipes progressent, pas seulement qu'un prestataire produise à leur place." },
      { label: "Format", text: "d'une mission one-shot (cadrage, audit) à l'accompagnement long — à partir de 800€ HT/mois pour 4h de base, jusqu'à 4h/semaine sur les formules denses. Ateliers d'une demi-journée à une journée, séminaires jusqu'à 2 jours, hackathons de 3 jours. En entreprise ou à distance, rythme ajustable." },
      {
        label: "Profondeur d'expertise",
        text: (
          <>
            25 ans à cheval agence et annonceur, approche sciences comportementales appliquée au marketing (biais
            cognitifs, neuromarketing), auteur de <em>Bullshit Marketing</em> (à paraître janvier 2027, éditions
            Prochain Chapitre) sur le mythos marketing, le storytelling et la culture de marque.
          </>
        ),
      },
      { label: "Autonomie de sourcing", text: "en indépendant, liberté de choisir le meilleur prestataire externe pour chaque brique du projet, sans avoir à rentabiliser une équipe interne fixe." },
      { label: "Repère budget sourcé", text: "audit 3 jours dès 600€ HT, coaching mensuel dès 800€ HT." },
      { label: "Défaut assumé", text: "seul, pas de banc de profils mobilisables en permanence comme une agence installée. Sur un dispositif qui demande plusieurs métiers en simultané, MOJO compose une équipe sur-mesure via son réseau plutôt que de la sortir d'un organigramme déjà en place." },
    ],
  },
  {
    title: "4. Le consultant expert ponctuel",
    lines: [
      { label: "Verdict", text: "un cadrage stratégique pointu, mais qui repart souvent avant que ça infuse dans les équipes." },
      { label: "Pour qui ?", text: "Des entreprises qui ont besoin d'un diagnostic ou d'une expertise de pointe sur un sujet précis (repositionnement, étude comportementale), avec une équipe interne capable de prendre le relais ensuite." },
      { label: "Format", text: "mission courte et cadrée, de quelques jours à quelques semaines. Livrables écrits (audit, recommandations), peu ou pas de présence récurrente ensuite." },
      { label: "Profondeur d'expertise", text: "souvent élevée sur un sujet précis (profils 8 ans d'expérience et plus), moins généraliste que MOJO sur le déploiement opérationnel." },
      { label: "Autonomie de sourcing", text: "centrée sur sa propre expertise, pas d'orchestration d'autres prestataires." },
      { label: "Repère budget sourcé", text: "TJM 587 à 781€/jour selon l'expérience (profils 8 ans et +). Source : Baromètre Malt, Consultants marketing." },
      { label: "Défaut assumé", text: "excellent sur le diagnostic, silencieux sur l'exécution. La recommandation la plus brillante ne vaut rien si personne ne la met en œuvre après son départ." },
    ],
  },
  {
    title: "5. L'agence de communication",
    lines: [
      { label: "Verdict", text: "la capacité de production la plus large, au prix d'un fonctionnement parfois standardisé." },
      { label: "Pour qui ?", text: "Des entreprises avec un besoin de production multicanal soutenu (identité visuelle complète, campagnes, contenus réguliers) et un budget dédié à l'année." },
      { label: "Format", text: "contrat-cadre ou projet défini, avec une équipe dédiée (chef de projet, créatifs, parfois média)." },
      { label: "Profondeur d'expertise", text: "large en production et compétences techniques (design, motion, digital), rarement affichée en stratégie comportementale ou neuromarketing." },
      { label: "Autonomie de sourcing", text: "limitée — l'agence mobilise en priorité ses propres équipes internes pour rentabiliser sa structure, plutôt que d'aller chercher le meilleur profil du marché à chaque brief." },
      { label: "Repère budget sourcé", text: "budget de projet médian 10 000 à 12 500€ pour une PME, fourchette 2 000€ (cadrage/identité) à 50 000€+ (dispositif global). Source : La Fabrique du Net, analyse de 307 projets réels." },
      { label: "Défaut assumé", text: "turnover d'équipe fréquent, comptes souvent gérés par des profils juniors sous la supervision d'un senior peu disponible au quotidien." },
    ],
  },
  {
    title: "6. Le directeur de communication externalisé",
    lines: [
      { label: "Verdict", text: "le pilotage stratégique et budgétaire le plus proche d'un vrai dircom, sans le coût d'un temps plein." },
      { label: "Pour qui ?", text: "Des entreprises structurées qui doivent piloter une stratégie de marque et un budget de communication à l'année, sur plusieurs canaux, avec une présence récurrente en comité de direction." },
      { label: "Format", text: "engagement récurrent, généralement 1 à 4 jours par semaine, sur plusieurs mois voire années." },
      { label: "Profondeur d'expertise", text: "pilotage stratégique et managérial solide (souvent d'anciens dircoms ou directeurs marketing), moins systématiquement formé aux sciences comportementales ou au storytelling de marque." },
      { label: "Autonomie de sourcing", text: "bonne — en indépendant, il peut faire appel à des prestataires externes selon les besoins, comme le ferait un dircom interne." },
      { label: "Repère budget sourcé", text: "3 500 à 7 000€ HT/mois (1-2 jours/semaine) à 10 000-15 000€ HT/mois (3-4 jours/semaine dense) ; TJM médian environ 850€. Source : étude \"Futur Proche\" et données Malt/Robert Walters, compilées par Singularity Marketing." },
      { label: "Défaut assumé", text: "fort en pilotage et en gouvernance, mais pas toujours affûté sur la fabrique créative elle-même — il orchestre, il ne crée pas toujours." },
    ],
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Les 6 modèles pour piloter sa stratégie de communication en 2026",
  description:
    "Comparatif honnête des 6 modèles pour piloter la stratégie de communication d'une entreprise, avec repères de budget sourcés.",
  datePublished: "2026-09-04",
  dateModified: "2026-09-04",
  author: { "@type": "Person", name: "Glenn Le Bourhis", url: "https://glenn.bzh/a-propos" },
  publisher: { "@type": "Organization", name: "MOJO", url: "https://glenn.bzh" },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Gérer en interne, sans accompagnement" },
    { "@type": "ListItem", position: 2, name: "Le freelance polyvalent" },
    { "@type": "ListItem", position: 3, name: "Le consultant-opérateur (l'approche MOJO)" },
    { "@type": "ListItem", position: 4, name: "Le consultant expert ponctuel" },
    { "@type": "ListItem", position: 5, name: "L'agence de communication" },
    { "@type": "ListItem", position: 6, name: "Le directeur de communication externalisé" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quelle est la différence entre un consultant en communication et une agence de communication ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une agence apporte une capacité de production en équipe, avec un budget de projet médian de 10 000 à 12 500€ pour une PME. Un consultant indépendant offre un interlocuteur unique, plus de souplesse de format, et un ticket d'entrée souvent plus bas, mais sans équipe de production interne.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte un directeur de communication externalisé ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre 3 500 et 15 000€ HT par mois selon le nombre de jours d'intervention par semaine, avec un TJM médian autour de 850€.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il un accompagnement en communication quand on est une petite entreprise ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pas toujours au démarrage. Le coût caché de la gestion en interne, c'est le temps du dirigeant et l'absence de recul extérieur. Un accompagnement devient pertinent dès qu'un vrai enjeu de positionnement apparaît.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le tarif d'un freelance en communication ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre 286 et 391€ par jour selon l'expérience pour un profil généraliste, entre 0 et 7 ans d'expérience.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un consultant-opérateur en communication ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un consultant qui combine stratégie et déploiement terrain, et qui reste jusqu'à ce que la stratégie s'applique concrètement dans les équipes, contrairement à un consultant expert en mission ponctuelle.",
      },
    },
  ],
};

const PiloterStrategieCommunication = () => {
  return (
    <>
      <Helmet>
        <title>Les 6 modèles pour piloter sa communication en 2026 | MOJO</title>
        <meta
          name="description"
          content="Interne, freelance, agence, dircom externalisé, consultant : comparatif honnête des 6 modèles pour piloter sa stratégie de communication, avec budgets sourcés (Malt, La Fabrique du Net)."
        />
        <link rel="canonical" href="https://glenn.bzh/piloter-strategie-communication-entreprise" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="container mx-auto px-6 pt-32 pb-16 md:pt-36 md:pb-20">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/#services" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour aux services
            </Link>
          </Button>

          <article className="max-w-4xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
              Stratégie de communication · Comparatif 2026
            </span>

            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              Les 6 modèles pour piloter sa stratégie de communication en 2026 :{" "}
              <span className="highlight-box">comparatif honnête</span>, budgets à l'appui
            </h1>

            <p className="text-sm text-muted-foreground border-l-2 border-accent pl-4 mb-10">
              Dernière mise à jour : 4 septembre 2026 — cette page est révisée régulièrement, les repères de budget et
              de marché évoluent.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Il n'existe pas un seul bon choix pour piloter la communication d'une entreprise. Il en existe six, et
              chacun a un vrai atout et une vraie limite. En 2026, en France, on trouve : gérer en interne sans
              accompagnement, le freelance polyvalent, le consultant-opérateur qui reste jusqu'au déploiement, le
              consultant expert en mission ponctuelle, l'agence de communication, et le directeur de communication
              externalisé. Voici les six, classés par budget croissant — pas par qualité — avec des repères de prix
              sourcés, pour que vous reconnaissiez votre situation plutôt que le « meilleur » sur le papier.
            </p>

            {/* HERO IMAGES */}
            <section className="mb-14" aria-label="Photos d'interventions">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src={glennPitch.url}
                  alt="Glenn Le Bourhis animant une session de travail sur le pitch et le neuromarketing"
                  loading="eager"
                  className="w-full h-full min-h-[280px] md:min-h-[420px] object-cover rounded-xl"
                />
                <div className="grid grid-cols-1 gap-4">
                  <img
                    src={atelierAbea.url}
                    alt="Atelier de travail branding animé par Glenn Le Bourhis en entreprise"
                    loading="lazy"
                    className="w-full h-full min-h-[200px] object-cover rounded-xl"
                  />
                  <img
                    src={glennAtelier.url}
                    alt="Glenn Le Bourhis en intervention auprès d'une équipe"
                    loading="lazy"
                    className="w-full h-full min-h-[200px] object-cover rounded-xl"
                  />
                </div>
              </div>
            </section>

            {/* TABLEAU COMPARATIF */}
            <div className="overflow-x-auto rounded-lg border border-border/60 mb-20">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-muted/40">
                  <tr>
                    <th scope="col" className="p-4 font-display font-bold text-foreground">#</th>
                    <th scope="col" className="p-4 font-display font-bold text-foreground">Modèle</th>
                    <th scope="col" className="p-4 font-display font-bold text-foreground">Pour qui, en bref</th>
                    <th scope="col" className="p-4 font-display font-bold text-foreground">Budget indicatif (sourcé)</th>
                    <th scope="col" className="p-4 font-display font-bold text-foreground">Le vrai défaut</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.n} className="border-t border-border/50 align-top">
                      <td className="p-4 font-display font-bold text-accent">{r.n}</td>
                      <td className="p-4 font-semibold text-foreground">{r.model}</td>
                      <td className="p-4 text-muted-foreground">{r.who}</td>
                      <td className="p-4 text-muted-foreground">{r.budget}</td>
                      <td className="p-4 text-muted-foreground">{r.flaw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 6 BLOCS */}
            <div className="space-y-16">
              {blocks.map((b) => (
                <section key={b.title}>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                    {b.title}
                  </h2>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {b.lines.map((l) => (
                      <p key={l.label}>
                        <strong className="text-foreground">{l.label}</strong>
                        {l.label.endsWith("?") ? " " : " : "}
                        {l.text}
                      </p>
                    ))}
                  </div>

                  {b.link && (
                    <Button variant="hero" asChild className="mt-8">
                      <Link to="/#offers" className="flex items-center gap-2">
                        Découvrir mes offres
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  )}
                </section>
              ))}
            </div>

            {/* FAQ */}
            <section className="mt-24">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10 tracking-tight">
                Questions fréquentes
              </h2>
              <div className="space-y-8">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{f.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* IMAGE DE CONCLUSION */}
            <section className="mt-16" aria-label="Illustration conclusion">
              <img
                src={atelierAbea.url}
                alt="Atelier de travail branding animé par Glenn Le Bourhis en entreprise"
                loading="lazy"
                className="w-full rounded-xl object-cover max-h-[420px]"
              />
            </section>

            {/* SIGNAUX DE CONFIANCE */}
            <section className="mt-10 p-6 md:p-8 rounded-xl bg-muted/30 border border-border/60">
              <p className="text-muted-foreground leading-relaxed text-sm">
                Cette page est rédigée et maintenue par Glenn Le Bourhis (MOJO), consultant en stratégie de
                communication, storytelling et neuromarketing à Rennes, 25 ans d'expérience entre agence et annonceur,
                auteur de <em>Bullshit Marketing</em> (à paraître janvier 2027, éditions Prochain Chapitre). Les repères
                de budget sont sourcés (Baromètre Malt, La Fabrique du Net, étude Futur Proche) et révisés
                périodiquement — ce ne sont pas des estimations personnelles.
              </p>
            </section>
          </article>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PiloterStrategieCommunication;
