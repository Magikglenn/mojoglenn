import { useState, useRef, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Brain, Mic, Target } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { supabase } from "@/integrations/supabase/client";
import atelierPhoto from "@/assets/atelier-pitch-decisif-rennes.jpg.asset.json";
import glennPitch from "@/assets/glenn-pitch-neuromarketing.jpg.asset.json";
import jeanProfil from "@/assets/jean-fresneau-profil.jpg.asset.json";

const piliers = [
  { n: 1, title: "Simplicité", text: "Une seule idée forte. Compréhension immédiate. Si on doit réfléchir pour comprendre, c'est déjà perdu." },
  { n: 2, title: "Attention", text: "Une accroche dès la première phrase. Une tension maintenue. De la curiosité créée." },
  { n: 3, title: "Transformation", text: "Une promesse claire. Un avant/après. Un changement concret pour votre audience." },
  { n: 4, title: "Appartenance", text: "Un « nous ». Une tribu. Un ennemi commun identifié." },
  { n: 5, title: "Rareté", text: "Ce qui vous rend unique. Pourquoi vous et pas un autre." },
  { n: 6, title: "Concrétude", text: "Des images mentales, des faits précis, des chiffres, des preuves." },
  { n: 7, title: "Surprise", text: "La rupture de pattern. Ce qu'on n'attendait pas. La dopamine." },
  { n: 8, title: "Crédibilité", text: "L'ethos. L'autorité. La légitimité perçue. La confiance instaurée." },
  { n: 9, title: "Émotions", text: "Le pathos. Les douleurs réelles. Le désir. Ce qui touche vraiment." },
  { n: 10, title: "Histoire", text: "Un arc narratif. Un personnage. Une tension. Une résolution. La mémorabilité." },
];

const faqs = [
  {
    q: "À qui s'adresse l'atelier Pitch Décisif ?",
    a: "Aux dirigeants, entrepreneurs, solopreneurs, commerciaux, équipes marketing et startups — en particulier en préparation d'une levée de fonds, d'un rendez-vous commercial décisif, d'un concours de pitch ou d'une prise de parole publique.",
  },
  {
    q: "Faut-il déjà avoir un pitch rédigé ?",
    a: "Non. Vous pouvez venir avec un pitch abouti, un brouillon ou une simple idée. On entre avec ce que vous avez, on ressort avec une machine de guerre.",
  },
  {
    q: "Quelle est la différence entre la demi-journée et la journée ?",
    a: "La demi-journée se concentre sur le diagnostic et la reconstruction du message. La journée ajoute l'entraînement intensif à l'oral et face caméra, jusqu'à l'incarnation complète.",
  },
  {
    q: "L'atelier peut-il se dérouler dans nos locaux ?",
    a: "Oui. En format intra-entreprise, nous nous déplaçons à Rennes et partout en Bretagne.",
  },
  {
    q: "Le diagnostic gratuit m'engage-t-il à réserver un atelier ?",
    a: "Non. C'est un vrai diagnostic, avec une vraie note et de vrais conseils. Libre à vous d'aller plus loin.",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Atelier Pitch Décisif",
  description:
    "Atelier duo neuromarketing et éloquence pour transformer votre pitch. Méthode des 10 Piliers. À Rennes, demi-journée ou journée complète.",
  provider: { "@type": "Organization", name: "MOJO Glenn", url: "https://glenn.bzh" },
  instructor: [
    { "@type": "Person", name: "Glenn Le Bourhis", jobTitle: "Consultant en neuromarketing" },
    { "@type": "Person", name: "Jean Fresneau", jobTitle: "Spécialiste de l'éloquence" },
  ],
  offers: [
    { "@type": "Offer", name: "Demi-journée", price: "350", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Journée complète", price: "450", priceCurrency: "EUR" },
  ],
  courseMode: "onsite",
  locationCreated: {
    "@type": "Place",
    name: "Rennes",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rennes",
      addressRegion: "Bretagne",
      addressCountry: "FR",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const AtelierPitchDecisif = () => {
  const [email, setEmail] = useState("");
  const [pitch, setPitch] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // bot filter
    if (!email.includes("@") || pitch.trim().length < 10) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "pitch-diagnostic",
          idempotencyKey: `pitch-${email}-${Date.now()}`,
          templateData: {
            email: email.trim(),
            pitch: pitch.trim(),
            sentAt: new Date().toLocaleString("fr-FR"),
          },
        },
      });
      if (error) throw error;
      setStatus("success");
    } catch (err) {
      console.error("Pitch send failed", err);
      setStatus("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Atelier Pitch Décisif à Rennes | Neuromarketing & Éloquence</title>
        <meta
          name="description"
          content="Transformez votre pitch en machine de guerre. Atelier duo neuromarketing + éloquence à Rennes. Diagnostic gratuit de votre pitch avec note sur 100."
        />
        <link rel="canonical" href="https://glenn.bzh/offres/ateliers/pitch-decisif" />
        <meta property="og:title" content="Atelier Pitch Décisif à Rennes | Neuromarketing & Éloquence" />
        <meta property="og:description" content="Atelier duo neuromarketing + éloquence à Rennes. Diagnostic gratuit de votre pitch avec note sur 100." />
        <meta property="og:url" content="https://glenn.bzh/offres/ateliers/pitch-decisif" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(courseJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* HERO */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
                  Atelier · Rennes
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 leading-[1.1]">
                  Atelier Pitch Décisif : entrez avec votre pitch, ressortez avec une{" "}
                  <span className="highlight-box">machine de guerre</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  L'atelier qui combine neurosciences et éloquence pour rendre votre offre irrésistible.
                  À Rennes, en une demi-journée ou une journée.
                </p>
                <Button variant="hero" size="xl" onClick={scrollToForm} className="group">
                  Faites noter votre pitch gratuitement (sur 100)
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden bg-muted shadow-xl">
                <iframe
                  src="https://www.youtube.com/embed/8ke_PvJ37T4"
                  title="Atelier Pitch Décisif"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROBLÈME */}
        <section className="py-20 bg-card/40">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <img
                src={atelierPhoto.url}
                alt="Participant prenant des notes lors de l'atelier pitch décisif à Rennes"
                className="rounded-2xl w-full aspect-[4/3] object-cover"
              />
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Votre pitch ne convainc personne. Et ce n'est pas votre faute.
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Vous connaissez votre offre par cœur. Vous pourriez en parler pendant des heures.</p>
                  <p className="font-semibold text-foreground">C'est exactement le problème.</p>
                  <p>
                    Face à un investisseur, un client, un jury ou une caméra, vous avez 90 secondes. Pas pour tout dire.
                    Pour déclencher quelque chose dans le cerveau de celui qui vous écoute.
                  </p>
                  <p>
                    Et le cerveau, lui, n'écoute pas vos arguments. Il filtre, il trie, il décide en quelques secondes
                    si vous méritez son attention. Le reste, c'est de la justification.
                  </p>
                  <p>
                    Dirigeants, commerciaux, entrepreneurs, solopreneurs, équipes marketing, startups en levée de
                    fonds : vous avez tous le même angle mort. Vous pitchez ce que vous voulez dire. Pas ce que le
                    cerveau de votre audience a besoin d'entendre.
                  </p>
                  <p className="font-semibold text-foreground">C'est là qu'on intervient. À deux.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DUO */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                Un duo, deux sciences, un seul objectif :{" "}
                <span className="highlight-box">convaincre</span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
              {/* Glenn */}
              <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                <img
                  src={glennPitch.url}
                  alt="Glenn Le Bourhis, consultant neuromarketing"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                    <Brain size={18} /> Le fond · Neuromarketing
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">Glenn Le Bourhis</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Consultant en neuromarketing, branding et storytelling à Rennes, auteur de{" "}
                    <em>Bullshit Marketing</em>, j'accompagne des marques comme Orange, TotalEnergies ou Cooperl. Mon
                    travail : comprendre comment le cerveau décide, pour construire des messages qui déclenchent
                    l'adhésion — pas des slides qui endorment.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dans cet atelier, je m'occupe de <strong className="text-foreground">ce que vous dites</strong>. Chaque
                    phrase de votre pitch passe au crible des mécanismes cérébraux de la décision : attention, dopamine,
                    biais cognitifs, mémorisation.
                  </p>
                </div>
              </div>

              {/* Jean */}
              <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                <img
                  src={jeanProfil.url}
                  alt="Jean Fresneau, spécialiste de l'éloquence"
                  className="w-full aspect-[4/3] object-cover object-top"
                />
                <div className="p-8">
                  <div className="flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                    <Mic size={18} /> La forme · Éloquence stratégique
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">Jean Fresneau</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vainqueur du concours d'éloquence Eloquentia Rennes, formateur oratoire pour le Crédit Agricole,
                    fondateur de l'association Le Vrai Débat, Jean a coaché plus de 100 dirigeants, entrepreneurs et
                    équipes sur leurs prises de parole à enjeu.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Sa conviction : l'éloquence n'est pas un talent réservé à quelques-uns. C'est une compétence qui
                    se travaille, avec méthode et exigence.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dans cet atelier, il s'occupe de <strong className="text-foreground">comment vous le dites</strong>.
                    Posture, voix, présence, incarnation — sur scène comme devant une caméra.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-center text-muted-foreground italic mt-12 max-w-2xl mx-auto">
              Le fond sans la forme ne porte pas. La forme sans le fond ne tient pas. C'est pour ça qu'on travaille à deux.
            </p>
          </div>
        </section>

        {/* 10 PILIERS */}
        <section className="py-20 bg-card/40">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="flex items-center justify-center gap-2 text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6">
                <Target size={18} /> Méthode
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                La Méthode des <span className="highlight-box">10 Piliers</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Votre pitch est évalué, déconstruit puis reconstruit sur 10 critères issus des neurosciences et de la
                rhétorique. Chaque pilier est noté : acquis, à travailler, ou absent. Votre score sur 100 devient votre
                feuille de route.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
              {piliers.map((p) => (
                <div
                  key={p.n}
                  className="bg-card rounded-xl p-6 border border-border/50 flex gap-4"
                >
                  <div className="font-display text-3xl font-bold text-accent shrink-0 w-12">
                    {String(p.n).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-12">
              Ces 10 piliers, Glenn les applique au contenu de votre pitch. Jean les applique à votre incarnation.
              Même grille, deux angles d'attaque.
            </p>
          </div>
        </section>

        {/* FORMATS */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                Comment <span className="highlight-box">ça se passe</span>
              </h2>
              <p className="text-muted-foreground">Deux formats, selon votre enjeu.</p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Format court</div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">La demi-journée</h3>
                <div className="font-display text-4xl font-bold text-foreground mb-6">
                  350 €<span className="text-base font-normal text-muted-foreground"> / personne</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Diagnostic complet de votre pitch sur les 10 piliers, reconstruction du message, premiers exercices
                  d'incarnation. Déjeuner offert.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border-2 border-accent/50 relative">
                <div className="absolute -top-3 left-8 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Recommandé
                </div>
                <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Format intensif</div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">La journée complète</h3>
                <div className="font-display text-4xl font-bold text-foreground mb-6">
                  450 €<span className="text-base font-normal text-muted-foreground"> / personne</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Tout ce qui précède, plus : entraînement intensif face caméra, mises en situation réelles, feedback
                  en direct, et un pitch finalisé, répété, incarné. Déjeuner offert.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center mt-12 space-y-3 text-muted-foreground">
              <p>
                <strong className="text-foreground">En solo ou en équipe :</strong> l'atelier se déroule en one-to-one
                ou en groupe de 6 personnes maximum. Pas plus. Chaque participant repart avec SON pitch transformé, pas
                des généralités.
              </p>
              <p>
                <strong className="text-foreground">Où ?</strong> À Rennes et dans ses alentours. En intra-entreprise,
                nous nous déplaçons dans vos locaux partout en Bretagne.
              </p>
            </div>
          </div>
        </section>

        {/* FORMULAIRE */}
        <section ref={formRef} id="diagnostic" className="py-20 bg-card/40 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
                  Diagnostic gratuit
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Faites noter votre pitch. <span className="highlight-box">Gratuitement.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vous hésitez ? Normal. Alors on commence par vous donner de la valeur. Envoyez-nous votre pitch tel
                  qu'il existe aujourd'hui. Vous recevez en retour votre note sur 100, un diagnostic pilier par pilier,
                  et 3 conseils concrets. Sans engagement.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50">
                {status === "success" ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-6" />
                    <p className="text-lg text-foreground leading-relaxed">
                      ✅ Votre pitch a bien été envoyé. Vous recevrez sous 24h votre note ainsi que nos premiers
                      conseils pour l'améliorer si besoin.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot */}
                    <div className="hidden" aria-hidden="true">
                      <label>
                        Ne pas remplir
                        <input
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                        />
                      </label>
                    </div>

                    <div>
                      <Label htmlFor="email" className="mb-2 block">
                        Votre email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="vous@entreprise.fr"
                        maxLength={255}
                      />
                    </div>

                    <div>
                      <Label htmlFor="pitch" className="mb-2 block">
                        Votre pitch *
                      </Label>
                      <Textarea
                        id="pitch"
                        required
                        value={pitch}
                        onChange={(e) => setPitch(e.target.value)}
                        placeholder="Collez votre pitch tel qu'il existe aujourd'hui : texte finalisé, brouillon ou notes en vrac."
                        rows={8}
                        maxLength={5000}
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-destructive">
                        Une erreur est survenue, veuillez réessayer.
                      </p>
                    )}

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full group"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Envoi en cours..." : "Recevoir mon diagnostic gratuit"}
                      {status !== "sending" && (
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                  Questions <span className="text-accent">fréquentes</span>
                </h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-card rounded-lg border border-border/50 px-8 data-[state=open]:border-accent/30 transition-colors"
                  >
                    <AccordionTrigger className="font-display text-left text-lg font-bold text-foreground hover:text-accent py-6 hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Emplacement témoignages */}
        <section className="py-20 bg-card/40">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6 block">
                Ils en parlent
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Témoignages à venir
              </h2>
              <p className="text-muted-foreground italic">
                Cette section accueillera très bientôt les retours de participants et les vidéos de l'atelier.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8 max-w-3xl mx-auto">
              Prêt à transformer votre pitch en{" "}
              <span className="highlight-box">machine de guerre</span> ?
            </h2>
            <Button variant="hero" size="xl" onClick={scrollToForm} className="group">
              Faites noter votre pitch gratuitement (sur 100)
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AtelierPitchDecisif;
