# Portfolio — Armel Tindo

Site de présentation professionnel — Next.js 14 + Tailwind CSS, sans base de données.

---

## Structure du projet

```
portfolio/
├── app/
│   ├── globals.css          ← Styles de base (section-label, chip, reset)
│   ├── layout.tsx           ← Police Google (Public Sans) + metadata SEO
│   ├── page.tsx             ← Assemblage des sections
│   └── cv/page.tsx          ← Page CV (placeholder, à compléter)
├── components/
│   ├── Navbar.tsx           ← Navigation sticky
│   ├── Hero.tsx              ← Accroche + emplacement photo
│   ├── Stats.tsx             ← Bandeau de chiffres clés
│   ├── Approche.tsx          ← "Ce que je fais" (3 cartes)
│   ├── ProjetPhare.tsx       ← Étude de cas Datafid
│   ├── Parcours.tsx          ← Timeline d'expériences
│   ├── FormationsLangues.tsx ← Formations + langues
│   ├── Temoignage.tsx        ← Citation
│   └── Contact.tsx           ← CTA contact (mailto + LinkedIn)
└── tailwind.config.js
```

---

## Démarrage rapide

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Déploiement Vercel

1. Pushez le projet sur GitHub
2. [vercel.com](https://vercel.com) → **New Project** → importez le repo
3. **Deploy**

---

## Personnalisation

- **Contenu** : chaque section est un composant dans `components/`, avec le texte en dur dans le fichier.
- **Photo du hero** : `components/Hero.tsx` contient actuellement un placeholder. Ajoutez une image dans `/public` et remplacez le bloc placeholder par un `<Image>`/`<img>`.
- **Page CV complet** : `app/cv/page.tsx` est un placeholder — à remplacer par la version détaillée du CV quand elle sera prête.
- **Couleurs** : `tailwind.config.js` → section `colors` (palette bleu marine / accent bleu).

---

## Stack

| Technologie | Usage |
|---|---|
| Next.js 14 | Framework React (App Router) |
| TypeScript | Typage statique |
| Tailwind CSS | Styles utilitaires |
| Vercel | Déploiement & CDN |
