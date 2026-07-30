import type { Metadata } from 'next'
import PrintBar from '@/components/PrintBar'
import Cv from '@/components/Cv'

export const metadata: Metadata = {
  title: 'CV — Sèhou Armel TINDO',
  description:
    "CV complet de Sèhou Armel TINDO, Ingénieur Statisticien Économiste — Data Science & Intelligence Artificielle.",
}

export default function CvPage() {
  return (
    <div className="font-sans text-ink">
      <PrintBar />
      <main>
        <Cv />
      </main>
    </div>
  )
}
