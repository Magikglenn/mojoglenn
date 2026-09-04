// scripts/prerender-heads.mjs
// Génère un index.html par route avec un <head> complet (canonical + Open Graph),
// à partir du shell dist/index.html produit par Vite.
// Aucune dépendance, aucun navigateur. Tourne en quelques millisecondes.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

const SITE = "https://glenn.bzh";
const DEFAULT_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/MuzUijCofoUz5fIbkjV12UcIzTX2/social-images/social-1765700016997-Glenn-le-bourhis_bureau.jpg";

// Table de vérité : une entrée par route réelle du site.
const PAGES = [
  {
    path: "/",
    title: "Glenn Le Bourhis — Expert Neuromarketing, Branding & Storytelling en Bretagne",
    description:
      "Glenn Le Bourhis (Mojo) : consultant en neuromarketing, branding et storytelling à Rennes. Une communication plus efficace grâce aux sciences comportementales.",
  },
  {
    path: "/a-propos",
    title: "À propos — Glenn Le Bourhis, expert branding & neuromarketing en Bretagne",
    description:
      "Glenn Le Bourhis, directeur de communication externalisé en Bretagne. Expert en branding, storytelling, neuromarketing et sciences comportementales pour les dirigeants et équipes marketing en France.",
  },
  {
    path: "/conferences",
    title: "Conférences Storytelling & Neuromarketing | Glenn Le Bourhis",
    description:
      "Glenn Le Bourhis, auteur de Bullshit Marketing, donne deux conférences d'1 heure pour démonter les idées reçues du marketing : Storytelling et Neuromarketing.",
  },
  {
    path: "/neuromarketing-rennes",
    title: "Glenn Le Bourhis expert Neuromarketing — Rennes, Bretagne & France",
    description:
      "Glenn Le Bourhis, expert en neuromarketing à Rennes. Conférences, ateliers, formations et consulting pour comprendre le cerveau de vos clients et améliorer votre communication.",
  },
  {
    path: "/ateliers-du-futur",
    title: "Les Ateliers du Futur | Atelier de prospective en Bretagne",
    description:
      "Les Ateliers du Futur : atelier de prospective pour entreprise, innovation et team building en Bretagne. Scénarios illustrés, intelligence collective et formats sur mesure.",
  },
  {
    path: "/offres/ateliers",
    title: "Ateliers Glenn Le Bourhis — Prospective & Pitch à Rennes",
    description:
      "Découvrez les ateliers animés par Glenn Le Bourhis : Ateliers du Futur (prospective, team building) et Atelier Pitch Décisif (neuromarketing + éloquence) à Rennes et en Bretagne.",
  },
  {
    path: "/offres/ateliers/pitch-decisif",
    title: "Atelier Pitch Décisif à Rennes | Neuromarketing & Éloquence",
    description:
      "Transformez votre pitch en machine de guerre. Atelier duo neuromarketing + éloquence à Rennes. Diagnostic gratuit de votre pitch avec note sur 100.",
  },
  {
    path: "/piloter-strategie-communication-entreprise",
    title: "Les 6 modèles pour piloter sa communication en 2026 | MOJO",
    description:
      "Interne, freelance, agence, dircom externalisé, consultant : comparatif honnête des 6 modèles pour piloter sa stratégie de communication, avec budgets sourcés (Malt, La Fabrique du Net).",
  },
];

function esc(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Construit le bloc <head> SEO/OG pour une page.
function headBlock({ path, title, description }) {
  const url = path === "/" ? `${SITE}/` : `${SITE}${path}`;
  const t = esc(title);
  const d = esc(description);
  const img = esc(DEFAULT_IMAGE);
  return `    <title>${t}</title>
    <meta name="description" content="${d}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Glenn Le Bourhis — Mojo" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:title" content="${t}" />
    <meta property="og:description" content="${d}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${img}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${t}" />
    <meta name="twitter:description" content="${d}" />
    <meta name="twitter:image" content="${img}" />`;
}

const distDir = "dist";
const shellPath = join(distDir, "index.html");
if (!existsSync(shellPath)) {
  console.error("✗ dist/index.html introuvable. Lance 'vite build' d'abord.");
  process.exit(1);
}
let shell = readFileSync(shellPath, "utf8");

// On retire du shell les balises title/description/canonical/og/twitter existantes,
// pour les remplacer proprement par le bloc propre à chaque page.
function stripHeadTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta\s+name="description"[^>]*>\s*/gi, "")
    .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, "")
    .replace(/<meta\s+property="og:[^"]*"[^>]*>\s*/gi, "")
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>\s*/gi, "");
}

let count = 0;
for (const page of PAGES) {
  let html = stripHeadTags(shell);
  const block = headBlock(page);
  // Injecte le bloc juste après <head ...>
  html = html.replace(/(<head[^>]*>)/i, `$1\n${block}`);

  const outPath =
    page.path === "/"
      ? join(distDir, "index.html")
      : join(distDir, page.path.replace(/^\//, ""), "index.html");

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf8");
  count++;
  console.log(`✓ ${page.path.padEnd(34)} -> ${outPath}`);
}

console.log(`\n${count} pages pré-rendues (head statique injecté).`);