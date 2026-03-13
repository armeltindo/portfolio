import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://tindo-armel.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TINDO Armel — Data Scientist & ML Engineer | Bénin',
    template: '%s | TINDO Armel',
  },
  description:
    'Data Scientist spécialisé en ML appliqué aux administrations fiscales africaines. Scoring de fraude 89% précision, NLP, déploiement en production @ DGID Bénin. ENSEA Datafid2 2026.',
  keywords: [
    'TINDO Armel',
    'data scientist bénin',
    'machine learning afrique',
    'scoring fraude fiscale',
    'ENSEA datafid2',
    'ML Engineer Afrique',
    'intelligence artificielle administration',
    'Deep Learning',
    'NLP francophone',
    'Python',
    'R',
    'XGBoost',
    'TensorFlow',
    'Scikit-learn',
    'Power BI',
    'R Shiny',
    'Statisticien Économiste',
    'DGID Bénin',
    'ENSEA Abidjan',
    'Datafid2',
    'Scoring fraude',
    'Analyse données Afrique',
    'Portfolio Data Science',
    'Cotonou',
  ],
  authors: [{ name: 'TINDO Armel', url: SITE_URL }],
  creator: 'TINDO Armel',
  publisher: 'TINDO Armel',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'TINDO Armel — Data Scientist',
    title: 'TINDO Armel — Data Scientist & ML Engineer | Bénin',
    description:
      'Data Scientist spécialisé en ML pour administrations fiscales africaines. Scoring fraude 89% précision, déployé en production @ DGID Bénin.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TINDO Armel — Data Scientist & ML Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TINDO Armel — Data Scientist & ML Engineer | Bénin',
    description:
      'Data Scientist et ML Engineer basé à Cotonou, Bénin. ML · Deep Learning · NLP · Analyse de données.',
    images: ['/og-image.png'],
    creator: '@armeltindo',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
  category: 'technology',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'TINDO Armel',
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  sameAs: [
    'https://www.linkedin.com/in/armel-tindo-839916190',
    'https://github.com/armeltindo',
  ],
  jobTitle: 'Data Scientist & ML Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Direction Générale des Impôts et Domaines (DGID)',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cotonou',
      addressCountry: 'BJ',
    },
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'ENSEA — École Nationale Supérieure de Statistique et d\'Économie Appliquée',
    url: 'https://www.ensea.ed.ci',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cotonou',
    addressCountry: 'BJ',
  },
  email: 'armeltindo@gmail.com',
  knowsAbout: [
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Data Science',
    'Statistical Modeling',
    'Econometrics',
    'Business Intelligence',
    'Python',
    'R',
    'TensorFlow',
    'Power BI',
  ],
  description:
    'Statisticien-Économiste à la DGID Bénin, spécialisé en Machine Learning et Intelligence Artificielle appliquée au contexte africain. Programme Datafid2 ENSEA 2026.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-dark text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
