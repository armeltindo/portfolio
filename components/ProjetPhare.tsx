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
    <div id="projet" className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-[1100px] mx-auto px-8 py-[72px]">
        <div className="section-label">Projet phare</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="font-extrabold text-[28px] leading-[1.25] text-navy-deep text-balance">
              Projet Datafid — catégoriser 55 493 créances fiscales par
              apprentissage supervisé
            </div>
            <div className="font-medium text-[13px] leading-[1.4] text-accent mt-2.5">
              Direction Générale des Impôts · 2026
            </div>
          </div>
          <div className="flex flex-col gap-4 text-[14.5px] leading-[1.6] text-slate-800">
            {points.map(({ label, text }) => (
              <div key={label}>
                <span className="font-bold text-navy">{label} — </span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
