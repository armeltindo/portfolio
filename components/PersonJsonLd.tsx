import { SITE_URL } from '@/lib/site'

export default function PersonJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sèhou Armel TINDO',
    alternateName: 'Armel Tindo',
    jobTitle: 'Ingénieur Statisticien Économiste — Data Science & Intelligence Artificielle',
    description: 'Je transforme les données publiques en décisions.',
    url: SITE_URL,
    image: `${SITE_URL}/hero.jpg`,
    email: 'mailto:armeltindo@gmail.com',
    telephone: '+229-01-95-79-51-32',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abomey-Calavi',
      addressCountry: 'BJ',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Direction Générale des Impôts du Bénin',
    },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'ENEAM-UAC' },
      { '@type': 'CollegeOrUniversity', name: 'FASEG-UAC' },
    ],
    knowsAbout: [
      'Data Science',
      'Machine Learning',
      'Statistique',
      'Économétrie',
      'Intelligence artificielle',
      'Administration fiscale',
    ],
    sameAs: ['https://www.linkedin.com/in/armel-tindo-839916190/'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
