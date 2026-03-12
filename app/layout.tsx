import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TINDO Armel — Data Scientist & ML Engineer',
  description:
    'Portfolio de Data Science, Machine Learning et Intelligence Artificielle. Statisticien-Économiste | DGI Bénin | Datafid2 ENSEA 2026.',
  keywords: [
    'Data Science',
    'Machine Learning',
    'Intelligence Artificielle',
    'Python',
    'R',
    'Bénin',
    'Afrique',
    'Portfolio',
    'Statistique',
    'Économétrie',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'TINDO Armel — Data Scientist & ML Engineer',
    description: 'Data Science · Machine Learning · IA · Statistique',
    type: 'website',
    images: [{ url: '/icon-512.png' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-dark text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
