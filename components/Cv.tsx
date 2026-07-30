import Image from 'next/image'
import ObfuscatedLink from '@/components/ObfuscatedLink'
import { EMAIL_REVERSED, PHONE1_REVERSED, PHONE2_REVERSED } from '@/lib/contact'

const domaines = [
  'Data Science & Machine Learning',
  'Modélisation & économétrie',
  'Suivi-évaluation & reporting',
  'Intelligence artificielle',
  'Administration fiscale',
  'Finances publiques',
]

const outils = [
  { label: 'Stats', text: 'SPSS, SPAD, Eviews, STATA, KoBoToolbox' },
  { label: 'Langages', text: 'R, SQL, Python' },
  {
    label: 'Machine Learning',
    text: 'Régression, Gradient Boosting, XGBoost, Random Forest, K-means',
  },
  { label: 'Bureautique', text: 'MS Word, MS Excel, MS PowerPoint' },
]

type Experience = {
  role: string
  org: string
  period: string
  location: string
  subtitle?: string
  bullets: { text: string; sub?: string[] }[]
}

const experiences: Experience[] = [
  {
    role: 'Statisticien',
    org: 'Service de Centralisation et de Suivi du Recouvrement — DGI',
    period: 'Févr. 2022 – à ce jour',
    location: 'Cotonou',
    bullets: [
      { text: 'Centralisation et suivi du recouvrement des recettes fiscales' },
      { text: 'Suivi des recouvrements effectués pour le compte de la Direction Générale des Impôts' },
      { text: 'Élaboration de bordereau de développement des recettes fiscales' },
      { text: 'Élaboration de point hebdomadaire du recouvrement des recettes fiscales' },
    ],
  },
  {
    role: 'Statisticien — Projet Datafid',
    org: 'La science des données au service des administrations fiscales et douanières',
    period: '2026',
    location: 'Cotonou',
    bullets: [
      {
        text: 'Catégorisation automatique des arriérés fiscaux par apprentissage supervisé',
        sub: [
          'Modélisation supervisée de la probabilité de recouvrement de 55 493 créances',
          'Comparaison régression logistique / gradient boosting optimisé',
          'Découpage en trois classes de gestion par maximisation de la variance inter-classes',
          'Analyse des déterminants (comportement de paiement, situation administrative)',
        ],
      },
    ],
  },
  {
    role: 'Statisticien',
    org: 'Cabinet du Directeur Général des Impôts',
    period: 'Août 2021 – Févr. 2022',
    location: 'Cotonou',
    bullets: [{ text: 'Collaborateur du Directeur Assistant du Directeur Général des Impôts' }],
  },
  {
    role: 'Statisticien',
    org: 'Unité de Politique Fiscale — DGI',
    period: 'Févr. – Août 2021',
    location: 'Cotonou',
    bullets: [
      {
        text: "Simplification du mode de calcul de l'Impôt sur les Revenus des Personnes Physiques / Traitements et salaires (IRPP-TS)",
      },
      {
        text: 'Simplification du mode de calcul de la Taxe Foncière Unique (TFU)',
        sub: ['Mise en place de la base de données', 'Modélisation et simulation des effets des modifications'],
      },
    ],
  },
  {
    role: 'Statisticien',
    org: 'Cabinet COSMOS Consulting',
    period: '2020',
    location: 'Cotonou',
    bullets: [
      {
        text: "Étude de faisabilité — stratégie de généralisation de l'éducation financière",
        sub: ['Apurement et traitement de la base de données', 'Calcul d\'indicateurs et analyse économétrique'],
      },
    ],
  },
  {
    role: "Chargé d'Études Économiques et Financières",
    org: 'SICMa-Bénin',
    period: 'Nov. 2019 – Janv. 2020',
    location: 'Abomey-Calavi',
    bullets: [
      {
        text: 'Conduite d\'enquête de satisfaction Client',
        sub: [
          'Préparation des questionnaires, formation des enquêteurs',
          'Supervision et contrôle qualité des données collectées',
          'Traitement des données et production des rapports d\'études',
        ],
      },
    ],
  },
  {
    role: 'Consultant indépendant',
    org: 'SICMa-Bénin',
    period: '2019',
    location: 'Abomey-Calavi',
    bullets: [
      { text: 'Enquête de satisfaction client — Mutuelle pour le Développement à la Base (MDB) : traitement des données et rapport d\'étude' },
      { text: 'Superviseur d\'enquête, traitement et rédaction du rapport — Mutuelle des Services Financiers pour la Prospérité (MSFP)' },
      { text: 'Superviseur d\'enquête, traitement et rédaction du rapport — Coopérative des Membres Unis Bethel Actions (COMUBA)' },
      { text: 'Superviseur d\'enquête, traitement et rédaction du rapport — Association de Lutte pour la Promotion des Initiatives de Développement (ALIDé)' },
    ],
  },
  {
    role: 'Consultant indépendant',
    org: 'SICMa-Bénin',
    period: 'Mars 2019',
    location: 'Abomey-Calavi',
    bullets: [
      {
        text: 'Étude de satisfaction client — COOPEC-AD Togo',
        sub: ['Conception de la base de données, apurement et traitement des données', "Élaboration du rapport d'étude"],
      },
    ],
  },
  {
    role: "Chargé d'Études Junior",
    org: 'Rakhem Comeli Group',
    period: 'Mai – Août 2019',
    location: 'Cotonou',
    bullets: [
      { text: "Rédaction des questionnaires ; préparation et suivi des enquêtes de terrain" },
      { text: 'Préparation des données au traitement ; analyse des résultats ; production de rapports d\'études' },
    ],
  },
  {
    role: 'Stagiaire — Assistant Suivi-Évaluation',
    org: 'Direction de la Programmation et de la Prospective, Ministère de la Défense Nationale',
    period: 'Juil. – Déc. 2018',
    location: 'Cotonou',
    bullets: [
      { text: 'Suivi-évaluation des projets et programmes ; revue trimestrielle du Plan de Travail Annuel' },
      { text: "Participation à l'élaboration des documents stratégiques et de l'annuaire statistique 2019" },
    ],
  },
  {
    role: 'Stagiaire',
    org: 'Direction de la Recherche, des Statistiques et des Études (DRSE) — Observatoire de l\'Emploi et de la Formation (OEF)',
    period: 'Oct. – Déc. 2017',
    location: 'Cotonou',
    bullets: [{ text: "Étude sur l'analyse des facteurs explicatifs de l'accès à l'emploi des jeunes au Bénin" }],
  },
]

const diplomes = [
  { year: '2025 —', text: 'Master Pro. en Statistique, ENEAM-UAC' },
  { year: '2017 —', text: 'Licence Pro. en Statistique, ENEAM-UAC' },
  { year: '2017 —', text: 'Licence Pro. en Économie Appliquée, FASEG-UAC' },
  { year: '2017 —', text: 'BTS Informatique de Gestion, ESCAE' },
  { year: '2014 —', text: 'Baccalauréat Série D, CEG 1 de Bohicon' },
]

const certifiantes = [
  { year: '2026 —', text: 'Data Science fiscale/douanière, ENSEA Abidjan' },
  { year: '2023 —', text: 'Analyse exploratoire des données douanières sur R, OMD/FERDI' },
  { year: '2023 —', text: 'ML, Robotique, Domotique — École d\'Été IA' },
  { year: '2022 —', text: 'R, Python, ML, Visualisation — Kaggle / DGI' },
]

const leadership = [
  {
    year: '2026 —',
    text: "Membre fondateur du Réseau des Alumni de l'Institut pour la Gouvernance Démocratique (RA-IGD)",
  },
  {
    year: '2020 – à ce jour —',
    text: 'Membre du Réseau des Organisations de Jeunesse pour le Développement local et la Coopération Décentralisée (ROJCOD)',
  },
  {
    year: '2020 —',
    text: "École politique de l'Institut Néerlandais pour la Démocratie Multipartite (NIMD)",
  },
  {
    year: '2017 – 2020 —',
    text: 'Membre du Parlement des Jeunes du Bénin (PJB), deuxième mandature',
  },
]

const qualites = ['Rigueur & précision analytique', 'Autonomie & proactivité', 'Esprit de synthèse & clarté']

const langues = ['Français — Couramment', 'Anglais — Intermédiaire', 'Fon — Maternelle']

export default function Cv() {
  return (
    <article className="max-w-[880px] mx-auto">
      <header className="bg-navy text-white">
        <div className="px-8 md:px-12 py-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden flex-none border-2 border-white/20">
            <Image src="/hero.jpg" alt="Sèhou Armel TINDO" fill className="object-cover object-top" />
          </div>
          <div>
            <h1 className="font-extrabold text-[30px] leading-[1.2]">Sèhou Armel TINDO</h1>
            <p className="text-[15px] text-onnavy-sub2 mt-1">
              Ingénieur Statisticien Économiste — Data Science &amp; Intelligence Artificielle
            </p>
            <p className="text-[13px] text-onnavy-sub mt-3 leading-[1.6]">
              Abomey-Calavi, Bénin ·{' '}
              <ObfuscatedLink
                reversed={PHONE1_REVERSED}
                kind="tel"
                display="(+229) 01 95 79 51 32"
                className="text-white underline"
              />{' '}
              /{' '}
              <ObfuscatedLink
                reversed={PHONE2_REVERSED}
                kind="tel"
                display="01 61 12 07 13"
                className="text-white underline"
              />{' '}
              ·{' '}
              <ObfuscatedLink
                reversed={EMAIL_REVERSED}
                kind="email"
                className="text-white underline"
              />
              <br />
              <a
                href="https://www.linkedin.com/in/armel-tindo-839916190/"
                className="text-white underline"
              >
                linkedin.com/in/armel-tindo
              </a>
            </p>
          </div>
        </div>
      </header>

      <div className="px-8 md:px-12 py-10 flex flex-col gap-10">
        <section aria-label="Profil professionnel">
          <h2 className="section-label">Profil professionnel</h2>
          <p className="text-[14px] leading-[1.7] text-slate-800">
            <span className="font-bold text-navy">Je transforme les données publiques en décisions.</span>{' '}
            Ingénieur Statisticien Économiste, spécialisé dans l&apos;analyse de données et la
            modélisation statistique, avec plus de 8 ans d&apos;expérience professionnelle et plus de
            5 ans au sein de la Direction Générale des Impôts du Bénin. Expert en analyse de données,
            je conçois et applique des méthodes de data science et de machine learning pour répondre
            aux enjeux des politiques socio-économiques. J&apos;allie rigueur analytique, maîtrise des
            outils numériques et capacité à produire des livrables à haute valeur ajoutée pour les
            décideurs.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <section aria-label="Compétences et domaines">
            <h2 className="section-label">Compétences &amp; domaines</h2>
            <div className="flex flex-wrap gap-2">
              {domaines.map((d) => (
                <span key={d} className="chip">
                  {d}
                </span>
              ))}
            </div>
          </section>
          <section aria-label="Outils et logiciels">
            <h2 className="section-label">Outils &amp; logiciels</h2>
            <div className="flex flex-col gap-1.5 text-[14px] leading-[1.5] text-slate-800">
              {outils.map(({ label, text }) => (
                <div key={label}>
                  <span className="font-bold text-navy">{label} — </span>
                  {text}
                </div>
              ))}
            </div>
          </section>
        </div>

        <section aria-label="Expériences professionnelles">
          <h2 className="section-label">Expériences professionnelles</h2>
          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <div
                key={`${exp.role}-${exp.period}`}
                className={`relative pl-6 pb-6 ${i < experiences.length - 1 ? 'border-l border-slate-200 ml-[3px]' : 'ml-[3px]'}`}
              >
                <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-accent" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-bold text-[15px] leading-[1.3] text-navy-900">{exp.role}</h3>
                  <div className="text-[12px] text-slate-400 whitespace-nowrap">
                    {exp.period} · {exp.location}
                  </div>
                </div>
                <div className="text-[13px] text-slate-600 mt-0.5">{exp.org}</div>
                <ul className="mt-2 pl-4 flex flex-col gap-1.5 text-[14px] leading-[1.5] text-slate-800 list-disc">
                  {exp.bullets.map((b) => (
                    <li key={b.text}>
                      {b.text}
                      {b.sub && (
                        <ul className="mt-1.5 pl-4 flex flex-col gap-1 text-[13px] text-slate-600 list-disc">
                          {b.sub.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <section aria-label="Formations et diplômes">
            <h2 className="section-label">Formations &amp; diplômes</h2>
            <div className="flex flex-col gap-2 text-[14px] leading-[1.5] text-slate-800">
              {diplomes.map(({ year, text }) => (
                <div key={text}>
                  <span className="font-bold text-navy">{year}</span> {text}
                </div>
              ))}
            </div>
          </section>
          <section aria-label="Formations certifiantes">
            <h2 className="section-label">Formations certifiantes</h2>
            <div className="flex flex-col gap-2 text-[14px] leading-[1.5] text-slate-800">
              {certifiantes.map(({ year, text }) => (
                <div key={text}>
                  <span className="font-bold text-navy">{year}</span> {text}
                </div>
              ))}
            </div>
          </section>
        </div>

        <section aria-label="Leadership et vie associative">
          <h2 className="section-label">Leadership &amp; vie associative</h2>
          <div className="flex flex-col gap-2 text-[14px] leading-[1.5] text-slate-800">
            {leadership.map(({ year, text }) => (
              <div key={text}>
                <span className="font-bold text-navy">{year}</span> {text}
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <section aria-label="Qualités">
            <h2 className="section-label">Qualités</h2>
            <div className="flex flex-wrap gap-2">
              {qualites.map((q) => (
                <span key={q} className="chip">
                  {q}
                </span>
              ))}
            </div>
          </section>
          <section aria-label="Langues">
            <h2 className="section-label">Langues</h2>
            <div className="flex flex-wrap gap-2">
              {langues.map((l) => (
                <span key={l} className="chip">
                  {l}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section aria-label="Références">
          <h2 className="section-label">Références</h2>
          <p className="text-[14px] leading-[1.6] text-slate-600">
            Références disponibles sur demande —{' '}
            <ObfuscatedLink reversed={EMAIL_REVERSED} kind="email" className="underline" />.
          </p>
        </section>
      </div>
    </article>
  )
}
