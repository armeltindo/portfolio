const points = [
  {
    label: 'Le défi',
    text: 'catégoriser automatiquement les arriérés fiscaux pour prioriser le recouvrement.',
  },
  {
    label: 'La méthode',
    text: 'modélisation supervisée de la probabilité de recouvrement, comparaison régression logistique / gradient boosting optimisé.',
  },
  {
    label: 'Le résultat',
    text: 'découpage en trois classes de gestion par maximisation de la variance inter-classes, et analyse des déterminants du comportement de paiement.',
  },
]

export default function ProjetPhare() {
  return (
    <section id="projet" className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-[1100px] mx-auto px-8 py-[72px]">
        <h2 className="section-label">Projet phare</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-extrabold text-[28px] leading-[1.25] text-navy-deep text-balance">
              Projet Datafid — catégoriser 55 493 créances fiscales par
              apprentissage supervisé
            </h3>
            <div className="font-medium text-[13px] leading-[1.4] text-accent mt-2.5">
              Direction Générale des Impôts · 2026
            </div>
          </div>
          <div className="flex flex-col gap-4 text-[14px] leading-[1.6] text-slate-800">
            {points.map(({ label, text }) => (
              <div key={label}>
                <span className="font-bold text-navy">{label} — </span>
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-slate-200">
          <h3 className="font-bold text-[17px] leading-[1.3] text-navy-900">
            Comptage automatique de trafic
          </h3>
          <div className="font-medium text-[13px] leading-[1.4] text-accent mt-1.5">
            École d&apos;Été sur l&apos;Intelligence Artificielle · 2023
          </div>
          <p className="text-[14px] leading-[1.6] text-slate-600 mt-3 max-w-[600px]">
            Projet d&apos;équipe mené dans le cadre de l&apos;École d&apos;Été sur
            l&apos;IA — membre de l&apos;équipe projet.
          </p>
        </div>
      </div>
    </section>
  )
}
