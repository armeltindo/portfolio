import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CV — Armel Tindo',
}

export default function CvPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 text-center">
      <div>
        <div className="section-label !mb-3">CV complet</div>
        <h1 className="font-extrabold text-[28px] text-navy-deep">
          Bientôt disponible.
        </h1>
        <p className="text-[14.5px] leading-[1.6] text-slate-700 mt-3 max-w-[440px] mx-auto">
          La version détaillée du CV n&apos;est pas encore en ligne ici.
        </p>
        <a
          href="/"
          className="inline-block mt-6 font-semibold text-[13.5px] underline"
        >
          ← Retour au site
        </a>
      </div>
    </div>
  )
}
