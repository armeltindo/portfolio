# 🚀 Portfolio — TINDO Armel · Data Scientist & AI Engineer

Portfolio professionnel Next.js 14 + Supabase + Tailwind CSS.  
Déployé sur **Vercel** en 5 minutes.

---

## 🗂️ Structure du projet

```
portfolio/
├── app/
│   ├── globals.css          ← Styles dark tech (grid, glow, animations)
│   ├── layout.tsx           ← Fonts Google + metadata SEO
│   └── page.tsx             ← Assemblage des sections
├── components/
│   ├── Navbar.tsx           ← Navigation fixe responsive
│   ├── Hero.tsx             ← Hero avec typing animation + stats
│   ├── Timeline.tsx         ← Parcours formation / expérience
│   ├── Skills.tsx           ← Barres de compétences + cloud de tags
│   ├── Projects.tsx         ← Grille projets (fetch Supabase)
│   ├── Contact.tsx          ← Formulaire (insert Supabase)
│   └── Footer.tsx
├── lib/
│   └── supabase.ts          ← Client Supabase + types
├── supabase_setup.sql       ← Script SQL à exécuter une fois
├── .env.local.example       ← Template variables d'environnement
└── tailwind.config.js
```

---

## ⚡ Démarrage rapide

### 1 — Installer les dépendances

```bash
npm install
```

### 2 — Configurer Supabase

1. Créez un projet sur [supabase.com](https://supabase.com)
2. Allez dans **SQL Editor** et collez le contenu de `supabase_setup.sql`
3. Cliquez **Run** → les tables `projects` et `contact_messages` sont créées avec des données de démo

### 3 — Variables d'environnement

```bash
cp .env.local.example .env.local
```

Éditez `.env.local` :
```env
NEXT_PUBLIC_SUPABASE_URL=https://VOTRE_PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=VOTRE_ANON_KEY
```

Ces valeurs sont dans : **Supabase → Settings → API**

### 4 — Lancer en local

```bash
npm run dev
# → http://localhost:3000
```

---

## 🌐 Déploiement Vercel

### Option A — Via GitHub (recommandé)

1. Pushez le projet sur GitHub
2. Allez sur [vercel.com](https://vercel.com) → **New Project** → importez le repo
3. Dans **Environment Variables**, ajoutez :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Cliquez **Deploy** → votre portfolio est en ligne ! 🎉

### Option B — CLI Vercel

```bash
npm i -g vercel
vercel
# Suivre les prompts
```

---

## ✏️ Personnalisation

### Changer les infos personnelles
- **Nom / titre** : `components/Hero.tsx` → constante `ROLES` et texte du `<p>`
- **Photo** : remplacer l'URL dans `Hero.tsx` ou ajouter une image dans `/public`
- **Liens sociaux** : `components/Navbar.tsx` et `components/Footer.tsx`
- **Email** : chercher `tindo.armel@example.com` et remplacer partout

### Ajouter un projet (sans toucher au code)
1. Allez dans **Supabase → Table Editor → projects**
2. Cliquez **Insert row**
3. Remplissez : title, description, tags (format `{tag1,tag2}`), github_url, featured, category
4. Le portfolio se met à jour automatiquement au prochain chargement

### Lire les messages reçus
- **Supabase → Table Editor → contact_messages**
- Tous les messages du formulaire Contact arrivent ici avec timestamp

### Modifier les couleurs
Dans `tailwind.config.js` → section `colors` :
```js
cyan: { DEFAULT: '#00f5ff', ... }   // Accent principal
violet: { DEFAULT: '#7c3aed', ... } // Accent secondaire
bg: '#050810'                        // Fond
```

---

## 🎨 Design

- **Thème** : Dark tech — fond `#050810`, grille cyan, orbes violets
- **Polices** : DM Serif Display (titres) · Space Grotesk (corps) · Fira Code (mono)
- **Animations** : typing cursor, scan line, floating orbs, skill bars, reveal on scroll
- **Responsive** : mobile-first, sidebar hamburger sur petit écran

---

## 📦 Stack

| Technologie | Usage |
|---|---|
| Next.js 14 | Framework React (App Router) |
| TypeScript | Typage statique |
| Tailwind CSS | Styles utilitaires |
| Supabase | BDD PostgreSQL + API REST |
| Vercel | Déploiement & CDN |

---

*Datafid2 · ENSEA Abidjan · 2026*
