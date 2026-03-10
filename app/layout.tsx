import type { Metadata } from 'next'
import { Space_Grotesk, Fira_Code, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-display',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'TINDO Armel — Data Scientist & AI Engineer',
  description: 'Portfolio de Data Science, Machine Learning et Intelligence Artificielle. Statisticien-Économiste | DGI Bénin | Datafid2 2026.',
  keywords: ['Data Science', 'Machine Learning', 'IA', 'Python', 'R', 'Portfolio'],
  openGraph: {
    title: 'TINDO Armel — Data Scientist & AI Engineer',
    description: 'Data Science · Machine Learning · Intelligence Artificielle',
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
      <body className={`${dmSerif.variable} ${spaceGrotesk.variable} ${firaCode.variable} font-body bg-bg text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  )
}
