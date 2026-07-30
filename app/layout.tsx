import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const publicSans = Public_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Armel Tindo — Data Science & Intelligence Artificielle',
  description:
    "Ingénieur Statisticien Économiste, je conçois des modèles de machine learning et des méthodes statistiques au service des politiques fiscales et socio-économiques.",
  openGraph: {
    title: 'Armel Tindo — Data Science & Intelligence Artificielle',
    description: 'Je transforme les données publiques en décisions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${publicSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
