import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page introuvable — Armel Tindo',
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-8 text-center">
      <div>
        <div className="section-label !mb-3">404</div>
        <h1 className="font-extrabold text-[28px] text-navy-deep">
          Cette page n&apos;existe pas.
        </h1>
        <p className="text-[14.5px] leading-[1.6] text-slate-700 mt-3 max-w-[440px] mx-auto">
          Le lien est peut-être cassé ou la page a été déplacée.
        </p>
        <a
          href="/"
          className="inline-block mt-6 font-semibold text-[13.5px] underline"
        >
          ← Retour à l&apos;accueil
        </a>
      </div>
    </main>
  )
}
