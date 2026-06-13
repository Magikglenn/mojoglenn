import { useMemo, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, Briefcase, Building2, Globe2, Lightbulb, Mail, Phone, Rocket, ShieldAlert, Sparkles, Trees, Users, Cpu } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import heroPhoto from "@/assets/ateliers-hero-payer-publier.png.asset.json";
import glennTotal from "@/assets/ateliers-glenn-total.jpg.asset.json";
import hackathonPhoto from "@/assets/ateliers-hackathon-room.jpeg.asset.json";
import cartePolitique from "@/assets/ateliers-carte-politique.png.asset.json";
import carteSociete from "@/assets/ateliers-carte-societe.png.asset.json";
import carteScoreSocial from "@/assets/ateliers-carte-score-social.png.asset.json";
import collageCartes from "@/assets/ateliers-collage-cartes.png.asset.json";

const categories = [
  {
    title: "Politique",
    description: "Les décisions publiques, les régulations, les arbitrages et les nouveaux rapports de force qui redessinent votre terrain de jeu.",
    icon: ShieldAlert,
    tagClass: "tag-rose",
  },
  {
    title: "Économie",
    description: "Les modèles de valeur, les transformations de marché et les tensions qui changent la manière d'acheter, de produire et de décider.",
    icon: Briefcase,
    tagClass: "tag-bleu",
  },
  {
    title: "Société",
    description: "Les comportements, les usages, les attentes culturelles et les nouvelles sensibilités qui influencent vos clients et vos équipes.",
    icon: Users,
    tagClass: "tag-violet",
  },
  {
    title: "Planète",
    description: "Les enjeux climatiques, les ressources, les contraintes environnementales et leurs impacts sur vos activités et vos priorités.",
    icon: Trees,
    tagClass: "tag-vert",
  },
  {
    title: "Technologie",
    description: "Les avancées qui accélèrent, automatisent ou déplacent la création de valeur, du pilotage opérationnel aux expériences clients.",
    icon: Cpu,
    tagClass: "tag-bleu",
  },
] as const;

const benefits = [
  {
    title: "Synergie d'équipe et team building",
    description: "Créer un moment collectif fort pour faire dialoguer des profils qui travaillent rarement ensemble sur un même terrain d'exploration.",
    icon: Users,
  },
  {
    title: "Anticipation de situations de crise",
    description: "Mettre à plat des scénarios difficiles avant qu'ils n'arrivent et entraîner l'organisation à penser plus vite, plus juste, plus loin.",
    icon: ShieldAlert,
  },
  {
    title: "Innovation",
    description: "Ouvrir des pistes nouvelles, questionner les réflexes du présent et transformer l'incertitude en matière première stratégique.",
    icon: Rocket,
  },
  {
    title: "Émergence de nouvelles idées",
    description: "Faire surgir des angles inattendus, des opportunités concrètes et des conversations utiles pour vos prochains projets.",
    icon: Lightbulb,
  },
] as const;

const audiences = [
  "Entreprises et grands groupes",
  "Dirigeants et entrepreneurs",
  "Équipes marketing et communication",
  "Séminaires et temps forts internes",
  "Associations et collectifs",
  "Toute personne qui pilote des projets ou des équipes",
] as const;

const offers = [
  {
    title: "Format demi-journée",
    price: "À partir de 990 € HT",
    description: "Une immersion dense pour ouvrir la réflexion, aligner un collectif et faire émerger des premières pistes d'action.",
  },
  {
    title: "Format journée complète",
    price: "À partir de 1600 € HT",
    description: "Un format plus approfondi pour explorer davantage de scénarios, enrichir les échanges et produire des livrables plus structurés.",
  },
] as const;

const cardGallery = [
  {
    src: collageCartes.url,
    alt: "Collage de cartes illustrées des Ateliers du Futur représentant plusieurs scénarios prospectifs.",
    className: "md:col-span-2",
    caption: "Vue d'ensemble du jeu de cartes illustrées",
  },
  {
    src: cartePolitique.url,
    alt: "Carte illustrée de prospective catégorie Politique intitulée Payer pour publier.",
    className: "",
    caption: "Exemple de carte — catégorie Politique",
  },
  {
    src: carteSociete.url,
    alt: "Carte illustrée de prospective catégorie Société intitulée Un monde sans marque.",
    className: "",
    caption: "Exemple de carte — catégorie Société",
  },
  {
    src: carteScoreSocial.url,
    alt: "Carte illustrée de prospective catégorie Société autour du score social professionnel.",
    className: "md:col-span-2",
    caption: "Exemple de mise en situation — atelier en action",
  },
] as const;

const hackathonGallery = [
  {
    src: hackathonPhoto.url,
    alt: "Participants en atelier de hackathon animés autour d'une table de travail.",
  },
  {
    src: glennTotal.url,
    alt: "Glenn Le Bourhis lors d'un événement avec un support visuel lié à un atelier prospectif.",
  },
] as const;

const AteliersDuFutur = () => {
  const [formData, setFormData] = useState({
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    format: "",
    message: "",
  });

  const contactHref = useMemo(() => {
    const subject = encodeURIComponent("Demande de devis — Les Ateliers du Futur");
    const body = encodeURIComponent(
      [
        `Nom : ${formData.nom}`,
        `Entreprise : ${formData.entreprise}`,
        `Email : ${formData.email}`,
        `Téléphone : ${formData.telephone || "Non renseigné"}`,
        `Format souhaité : ${formData.format || "À préciser"}`,
        "",
        "Message :",
        formData.message,
      ].join("\n")
    );

    return `mailto:connexion@glenn.bzh?subject=${subject}&body=${body}`;
  }, [formData]);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nom = formData.nom.trim();
    const entreprise = formData.entreprise.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!nom || !entreprise || !email || !formData.format || !message) {
      toast({
        title: "Formulaire incomplet",
        description: "Merci de renseigner les champs obligatoires avant d'envoyer votre demande.",
      });
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailIsValid) {
      toast({
        title: "Email invalide",
        description: "Merci d'indiquer une adresse email valide.",
      });
      return;
    }

    if (nom.length > 100 || entreprise.length > 100 || email.length > 255 || formData.telephone.length > 40 || message.length > 1200) {
      toast({
        title: "Informations trop longues",
        description: "Raccourcissez un ou plusieurs champs pour pouvoir envoyer la demande.",
      });
      return;
    }

    window.location.href = contactHref;
  };

  return (
    <>
      <Helmet>
        <title>Les Ateliers du Futur | Atelier de prospective en Bretagne</title>
        <meta
          name="description"
          content="Les Ateliers du Futur : atelier de prospective pour entreprise, innovation et team building en Bretagne. Scénarios illustrés, intelligence collective et formats sur mesure."
        />
        <link rel="canonical" href="https://mojoglenn.lovable.app/ateliers-du-futur" />
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

          <section className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center py-8 lg:py-12">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
                Atelier de prospective
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight leading-tight">
                Les <span className="highlight-box">Ateliers du Futur</span>
              </h1>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  Et si vous preniez un temps pour sortir du court terme&nbsp;? Les Ateliers du Futur sont des ateliers de prospective conçus pour aider les entreprises et leurs équipes à anticiper les futurs possibles, à ouvrir les conversations stratégiques et à faire émerger des idées utiles.
                </p>
                <p>
                  Nous les animons à deux voix, <strong className="text-foreground">Glenn Le Bourhis</strong> et <strong className="text-foreground">Aurélien Cunin</strong>, avec un format pensé pour faire dialoguer l'intuition, la méthode et le concret.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button variant="hero" size="xl" asChild className="group">
                  <a href="#demande-de-devis">
                    Demander un devis
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="#concept">Découvrir le concept</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg border border-border/60 shadow-elevated bg-card">
                <img
                  src={heroPhoto.url}
                  alt="Carte illustrée des Ateliers du Futur — scénario Payer pour publier, catégorie Politique."
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-card border border-border/60 rounded-lg px-5 py-4 shadow-card max-w-xs">
                <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-2">Présentiel</p>
                <p className="text-sm text-muted-foreground">
                  Des formats conçus pour les séminaires, les équipes marketing, les dirigeants et les grands groupes.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section id="concept" className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
                Le concept
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Cinq portes d'entrée pour explorer les futurs possibles
              </h2>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Un atelier de prospective n'a d'intérêt que s'il rend l'avenir <strong className="text-foreground">discutable</strong>. Nous avons donc construit une expérience simple à prendre en main et riche à explorer, organisée autour de cinq catégories de scénarios : <strong className="text-foreground">Politique</strong>, <strong className="text-foreground">Économie</strong>, <strong className="text-foreground">Société</strong>, <strong className="text-foreground">Planète</strong> et <strong className="text-foreground">Technologie</strong>.
                </p>
                <p>
                  À ce jour, plus de <strong className="text-foreground">30 scénarios</strong> ont été créés, et de nouveaux s'ajoutent chaque saison pour garder le jeu vivant, stimulant et connecté aux transformations du monde.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <article key={category.title} className="bg-background border border-border/60 rounded-lg p-6 card-hover min-h-[240px] flex flex-col">
                    <div className="flex items-center justify-between mb-5 gap-4">
                      <span className={category.tagClass}>{category.title}</span>
                      <div className="w-11 h-11 rounded-lg bg-muted/60 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {category.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-start">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
                  Des cartes illustrées, uniques
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                  Un jeu conçu pour rendre les scénarios concrets et manipulables
                </h2>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    C'est souvent là que tout change. Au lieu de parler de tendances de manière abstraite, les participants manipulent de véritables cartes illustrées. Elles donnent de la matière à la discussion, rendent les hypothèses tangibles et facilitent l'appropriation des scénarios.
                  </p>
                  <p>
                    Chaque carte a été pensée spécifiquement pour l'atelier. Elles apportent une dimension visuelle forte, mémorable et immédiatement exploitable dans les échanges.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {cardGallery.map((image) => (
                  <figure
                    key={image.src}
                    className={`bg-card border border-border/60 rounded-lg overflow-hidden shadow-card ${image.className}`}
                  >
                    <div className="aspect-[4/3] bg-muted/30">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
                Pourquoi nous
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Deux expertises, une même envie&nbsp;: faire réfléchir sans jamais décrocher du réel
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Avant de parler d'offre, parlons d'intention. Nous avons conçu ces ateliers pour les organisations qui veulent prendre de l'avance sans tomber dans le gadget, et pour les équipes qui ont besoin d'un cadre stimulant pour imaginer l'après.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-10">
              <article className="bg-background border border-border/60 rounded-lg p-8 shadow-card">
                <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">Glenn Le Bourhis</p>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Neuromarketing, narration et mise en mouvement</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Spécialiste du <strong className="text-foreground">neuromarketing</strong>, conférencier, avec <strong className="text-foreground">25 ans d'expérience en agence de communication</strong>, Glenn apporte à l'atelier sa capacité à faire dialoguer stratégie, désir, attention et récit.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Il est aussi l'auteur du livre <strong className="text-foreground">"Bullshit Marketing"</strong>, et anime des formats qui savent rester exigeants tout en restant vivants.
                </p>
              </article>

              <article className="bg-background border border-border/60 rounded-lg p-8 shadow-card">
                <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">Aurélien Cunin</p>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Pilotage de projets et transition en entreprise</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aurélien Cunin est spécialiste du <strong className="text-foreground">pilotage de projets</strong> et de la <strong className="text-foreground">transition en entreprise</strong>. Il apporte la rigueur de structuration, l'animation de groupe et la capacité à transformer une idée en chemin d'action.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Son regard ancre les scénarios dans les réalités d'organisation, les arbitrages concrets et les enjeux de mise en œuvre.
                </p>
              </article>
            </div>

            <div className="bg-background border border-border/60 rounded-lg p-8 lg:p-10 shadow-card mb-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ensemble, nous avons conçu et animé des <strong className="text-foreground">hackathons et ateliers</strong> pour de grands groupes comme <strong className="text-foreground">Orange</strong>, <strong className="text-foreground">TotalEnergies</strong>, <strong className="text-foreground">Cooperl</strong> et d'autres organisations qui avaient besoin d'embarquer leurs équipes dans des temps de réflexion concrets, engageants et utiles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {hackathonGallery.map((image) => (
                <figure key={image.src} className="bg-background border border-border/60 rounded-lg overflow-hidden shadow-card">
                  <div className="aspect-[4/3] bg-muted/30">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                    Galerie d'ambiance hackathon — emplacement prêt à accueillir d'autres photos.
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
                À quoi ça sert
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Des bénéfices très concrets pour vos équipes
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Un atelier de prospective n'est pas là pour faire joli dans un séminaire. Il sert à faire avancer une équipe, à ouvrir des pistes, à rendre l'incertitude utile et à remettre du mouvement dans la réflexion collective.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article key={benefit.title} className="bg-card border border-border/60 rounded-lg p-6 shadow-card card-hover min-h-[240px]">
                    <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-start">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
                  Pour qui
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                  Pour les organisations qui pilotent, décident et transforment
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Vous animez un séminaire&nbsp;? Vous cherchez un format de team building intelligent&nbsp;? Vous avez besoin d'aider une équipe à se projeter, à débloquer des idées ou à réfléchir ensemble autrement&nbsp;? C'est précisément là que l'atelier prend sa place.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {audiences.map((audience) => (
                  <div key={audience} className="bg-background border border-border/60 rounded-lg p-5 flex items-start gap-3 shadow-card">
                    <Building2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{audience}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
                L'offre
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Deux formats, un cadre adaptable à vos objectifs
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Les ateliers sont proposés <strong className="text-foreground">en présentiel</strong>. Le contenu, le rythme et les scénarios mobilisés peuvent s'adapter au niveau de maturité de votre équipe, à votre contexte et aux objectifs de l'entreprise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {offers.map((offer, index) => (
                <article
                  key={offer.title}
                  className={`rounded-lg border p-8 shadow-card ${index === 0 ? "bg-card border-border/60" : "bg-background border-accent/30"}`}
                >
                  <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">{offer.title}</p>
                  <div className="font-display text-4xl md:text-5xl font-bold mb-5 tracking-tight">{offer.price}</div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{offer.description}</p>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-start gap-3"><Globe2 className="w-4 h-4 mt-0.5 text-accent shrink-0" />Animation en présentiel dans votre entreprise ou sur votre lieu de séminaire</li>
                    <li className="flex items-start gap-3"><Sparkles className="w-4 h-4 mt-0.5 text-accent shrink-0" />Contenu modulable selon votre besoin : acculturation, cohésion, innovation, projection stratégique</li>
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="demande-de-devis" className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
                  Demande de devis
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                  Parlons de votre atelier
                </h2>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Vous avez déjà une idée du format, ou simplement une intuition à explorer&nbsp;? Racontez-nous votre contexte. Nous reviendrons vers vous avec une proposition adaptée.
                  </p>
                  <div className="space-y-4 text-sm">
                    <a href="mailto:connexion@glenn.bzh" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                      <Mail className="w-4 h-4" /> connexion@glenn.bzh
                    </a>
                    <a href="tel:0681499840" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                      <Phone className="w-4 h-4" /> 06 81 49 98 40
                    </a>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-background border border-border/60 rounded-lg p-6 md:p-8 shadow-card space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom *</Label>
                    <Input
                      id="nom"
                      value={formData.nom}
                      onChange={(e) => handleChange("nom", e.target.value)}
                      placeholder="Votre nom"
                      maxLength={100}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="entreprise">Entreprise *</Label>
                    <Input
                      id="entreprise"
                      value={formData.entreprise}
                      onChange={(e) => handleChange("entreprise", e.target.value)}
                      placeholder="Nom de l'entreprise"
                      maxLength={100}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="vous@entreprise.fr"
                      maxLength={255}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input
                      id="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={(e) => handleChange("telephone", e.target.value.replace(/[^0-9+()\-\s]/g, ""))}
                      placeholder="Optionnel"
                      maxLength={40}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="format">Format souhaité *</Label>
                  <Select value={formData.format} onValueChange={(value) => handleChange("format", value)}>
                    <SelectTrigger id="format">
                      <SelectValue placeholder="Choisissez un format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Demi-journée">Demi-journée</SelectItem>
                      <SelectItem value="Journée complète">Journée complète</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Décrivez votre contexte, vos objectifs, le type d'équipe concernée et la période envisagée."
                    className="min-h-[160px]"
                    maxLength={1200}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full group">
                  Demander un devis
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  En cliquant, votre demande s'ouvre dans votre messagerie avec les informations déjà préremplies pour un envoi rapide.
                </p>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AteliersDuFutur;
