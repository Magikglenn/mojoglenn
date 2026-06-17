import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, BookOpen, Brain, Mail, Mic2, Phone, Sparkles, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import bullshitCover from "@/assets/bullshit-couv-levitation.png.asset.json";
import glennPortrait from "@/assets/glenn-portrait.jpg.asset.json";
import glennConference from "@/assets/glenn-conference-iscom.jpg.asset.json";

const conferences = [
  {
    id: "storytelling",
    tag: "STORYTELLING",
    title: "L'outil le plus puissant de votre communication",
    audience: "Équipes commerciales et marketing",
    duration: "1 heure",
    price: "990 € HT",
    icon: Sparkles,
    pitch:
      "Le storytelling, tout le monde en parle, personne ne sait vraiment s'en servir. Pendant une heure, on démonte les recettes toutes faites pour revenir à l'essentiel : comment une histoire bien construite transforme un argumentaire en conviction, un pitch en déclic. Vos équipes commerciales et marketing repartent avec une méthode concrète, pas une théorie de plus.",
  },
  {
    id: "neuromarketing",
    tag: "NEUROMARKETING",
    title: "Les secrets du cerveau pour convaincre",
    audience: "Grand public",
    duration: "1 heure",
    price: "990 € HT",
    icon: Brain,
    pitch:
      "Comment utiliser les récentes découvertes en sciences comportementales pour consolider ses techniques de ventes, créer du lien, devenir mémorables. Une conférence entre science et magie qui vulgarise les dernières avancées en neuromarketing pour mieux comprendre le fonctionnement du cerveau, notamment celui du consommateur.",
  },
] as const;

const Conferences = () => {
  const [formData, setFormData] = useState({
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    conference: "",
    date: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const scrollToForm = (conferenceTag?: string) => {
    if (conferenceTag) {
      setFormData((c) => ({ ...c, conference: conferenceTag }));
    }
    const el = document.querySelector("#contact-conference");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nom = formData.nom.trim();
    const entreprise = formData.entreprise.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!nom || !entreprise || !email || !message) {
      toast({
        title: "Formulaire incomplet",
        description: "Merci de renseigner les champs obligatoires avant d'envoyer votre demande.",
      });
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailIsValid) {
      toast({ title: "Email invalide", description: "Merci d'indiquer une adresse email valide." });
      return;
    }

    if (
      nom.length > 100 ||
      entreprise.length > 100 ||
      email.length > 255 ||
      formData.telephone.length > 40 ||
      formData.date.length > 100 ||
      message.length > 1200
    ) {
      toast({
        title: "Informations trop longues",
        description: "Raccourcissez un ou plusieurs champs pour pouvoir envoyer la demande.",
      });
      return;
    }

    setIsSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "conference-contact",
          idempotencyKey: `conference-${email}-${Date.now()}`,
          templateData: {
            nom,
            entreprise,
            email,
            telephone: formData.telephone.trim(),
            conference: formData.conference,
            date: formData.date.trim(),
            message,
          },
        },
      });

      if (error) throw error;

      toast({
        title: "Message envoyé",
        description: "Votre message a bien été envoyé, nous vous répondrons dans un futur très proche.",
      });
      setFormData({ nom: "", entreprise: "", email: "", telephone: "", conference: "", date: "", message: "" });
    } catch (err) {
      console.error("Email send failed", err);
      toast({
        title: "Envoi impossible",
        description: "Une erreur est survenue. Merci de réessayer dans quelques instants.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Conférences Storytelling & Neuromarketing | Glenn Le Bourhis</title>
        <meta
          name="description"
          content="Glenn Le Bourhis, auteur de Bullshit Marketing, donne deux conférences d'1 heure pour démonter les idées reçues du marketing : Storytelling et Neuromarketing."
        />
        <link rel="canonical" href="https://glenn.bzh/conferences" />
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
                Conférencier — auteur de Bullshit Marketing
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight leading-tight">
                Des conférences qui <span className="highlight-box">démontent</span> les idées reçues du marketing
              </h1>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  Consultant en stratégie de communication depuis <strong className="text-foreground">25 ans</strong>,
                  spécialiste du <strong className="text-foreground">neuromarketing</strong>, formateur et conférencier.
                </p>
                <p>
                  Auteur de <strong className="text-foreground">Bullshit Marketing</strong>, un essai qui démonte les
                  mythes et légendes urbaines du marketing — cerveau reptilien, pyramide de Maslow, citations apocryphes
                  de Simon Sinek, et bien d'autres idées reçues que tout le monde répète sans jamais les vérifier.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button variant="hero" size="xl" className="group" onClick={() => scrollToForm()}>
                  Réserver une conférence
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="#conferences">Voir les conférences</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg border border-border/60 shadow-elevated bg-card">
                <img
                  src={glennPortrait.url}
                  alt="Glenn Le Bourhis, conférencier"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-card border border-border/60 rounded-lg px-5 py-4 shadow-card max-w-xs">
                <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-2">Présentiel · 1h</p>
                <p className="text-sm text-muted-foreground">
                  Pour vos séminaires, équipes marketing, événements et écoles.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* LIVRE */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
              <div className="relative">
                <div className="aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-lg">
                  <img
                    src={bullshitCover.url}
                    alt="Couverture du livre Bullshit Marketing de Glenn Le Bourhis"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
                  Le livre
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                  Bullshit Marketing — <span className="highlight-box">On vous raconte des histoires</span>
                </h2>
                <p className="text-lg text-accent font-semibold mb-6">
                  Études, matrices, citations, rumeurs… ce qu'il faut savoir aujourd'hui pour faire du bon marketing.
                </p>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Et si la moitié de ce qu'on vous a enseigné sur le marketing était faux&nbsp;? Pyramide de Maslow,
                    cerveau reptilien, citations de Simon Sinek, les fameux 95&nbsp;% de décisions irrationnelles… Glenn
                    a utilisé tous ces outils, les a enseignés, y a cru. Puis il a creusé.
                  </p>
                  <p>
                    <strong className="text-foreground">Bullshit Marketing</strong> est le résultat de cette enquête :
                    un décryptage documenté — et plein d'humour — de tout ce qu'on raconte dans le marketing, et qui ne
                    tient pas vraiment la route. Mais ce n'est pas un livre cynique. Au milieu du tri, certaines vérités
                    résistent&nbsp;: le storytelling, la confiance, l'écoute profonde.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-8">
                  <span className="inline-flex items-center gap-2 bg-background border border-border/60 rounded-full px-4 py-2 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4 text-accent" />
                    Essai grand public — 188 pages
                  </span>
                </div>
                <p className="mt-8 text-lg text-foreground font-semibold">
                  Et si on en parlait en vrai, devant votre équipe&nbsp;?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONFÉRENCES */}
        <section id="conferences" className="py-24 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
                Mes conférences
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                2 conférences, 1 heure, pour bousculer vos certitudes
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Deux formats courts, denses et vivants, pensés pour vos séminaires, vos équipes marketing ou un grand
                public curieux.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {conferences.map((conf) => {
                const Icon = conf.icon;
                return (
                  <article
                    key={conf.id}
                    className="bg-card border border-border/60 rounded-lg p-8 lg:p-10 shadow-card flex flex-col card-hover"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <p className="text-muted-foreground font-semibold text-xs uppercase tracking-[0.25em]">
                        Conférence · 1h
                      </p>
                    </div>
                    <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-[0.95] uppercase">
                      <span className="highlight-box">{conf.tag}</span>
                    </h3>
                    <p className="font-display text-xl md:text-2xl font-semibold mb-5 tracking-tight text-foreground">
                      {conf.title}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{conf.pitch}</p>

                    <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                      <li className="flex items-start gap-3">
                        <Users className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                        <span>
                          <strong className="text-foreground">Public :</strong> {conf.audience}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Mic2 className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                        <span>
                          <strong className="text-foreground">Durée :</strong> {conf.duration}
                        </span>
                      </li>
                    </ul>

                    <div className="border-t border-border/60 pt-6 mt-auto">
                      <div className="font-display text-3xl md:text-4xl font-bold mb-5 tracking-tight">
                        {conf.price}
                      </div>
                      <Button variant="hero" className="w-full group" onClick={() => scrollToForm(conf.tag)}>
                        Réserver cette conférence
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PREUVE SOCIALE */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">Sur scène</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Ils l'ont déjà vu en action
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Quelques moments capturés lors de précédentes interventions.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-5 max-w-4xl">
              <figure className="bg-background border border-border/60 rounded-lg overflow-hidden shadow-card">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={glennConference.url}
                    alt="Glenn Le Bourhis en conférence au Forum ISCOM"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                  Glenn en conférence — Forum ISCOM.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-conference" className="py-24 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">Contact</span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                  Envie d'organiser une conférence&nbsp;?
                </h2>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Une conférence <strong className="text-foreground">STORYTELLING</strong>,{" "}
                    <strong className="text-foreground">NEUROMARKETING</strong>, ou une autre idée en tête&nbsp;?
                    Dites-moi tout, je vous réponds rapidement.
                  </p>
                  <div className="space-y-4 text-sm">
                    <a
                      href="mailto:connexion@glenn.bzh"
                      className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Mail className="w-4 h-4" /> connexion@glenn.bzh
                    </a>
                    <a
                      href="tel:0681499840"
                      className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Phone className="w-4 h-4" /> 06 81 49 98 40
                    </a>
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border/60 rounded-lg p-6 md:p-8 shadow-card space-y-6"
              >
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

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="conference">Conférence souhaitée</Label>
                    <Select value={formData.conference} onValueChange={(value) => handleChange("conference", value)}>
                      <SelectTrigger id="conference">
                        <SelectValue placeholder="Choisissez une conférence" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="STORYTELLING">Storytelling</SelectItem>
                        <SelectItem value="NEUROMARKETING">Neuromarketing</SelectItem>
                        <SelectItem value="Autre / à définir">Autre / à définir</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Date envisagée</Label>
                    <Input
                      id="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      placeholder="Ex. Septembre 2026"
                      maxLength={100}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Décrivez votre contexte, votre public, le format et l'objectif de l'intervention."
                    className="min-h-[160px]"
                    maxLength={1200}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full group" disabled={isSending}>
                  {isSending ? "Envoi en cours…" : "Demander un devis"}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Votre message nous parviendra directement. Nous vous répondons sous quelques jours.
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

export default Conferences;
