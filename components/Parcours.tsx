const roles = [
  {
    period: '2022 — aujourd\'hui',
    title: 'Statisticien, Direction Générale des Impôts',
    text: 'Centralisation et suivi du recouvrement des recettes fiscales.',
  },
  {
    period: '2021 — 2022',
    title: 'Statisticien, Cabinet & Unité de Politique Fiscale — DGI',
    text: "Simplification du calcul de l'IRPP-TS et de la Taxe Foncière Unique.",
  },
  {
    period: '2019 — 2020',
    title: "Chargé d'Études & Consultant, SICMa-Bénin",
    text: "Conduite et supervision d'enquêtes de satisfaction client pour des institutions financières.",
  },
  {
    period: '2017 — 2019',
    title: 'Débuts en suivi-évaluation',
    text: "Stages et missions au Ministère de la Défense Nationale et à l'Observatoire de l'Emploi et de la Formation.",
  },
]

export default function Parcours() {
  return (
    <section id="parcours" className="max-w-[1100px] mx-auto px-8 py-[72px]">
      <h2 className="section-label">Parcours</h2>
      <div className="flex flex-col">
        {roles.map(({ period, title, text }, i) => (
          <div
            key={period}
            className={`flex flex-col md:flex-row gap-6 py-[22px] items-baseline ${
              i < roles.length - 1 ? 'border-b border-slate-200' : ''
            }`}
          >
            <div className="flex-none w-full md:w-[140px] font-medium text-[12.5px] leading-[1.3] text-slate-400">
              {period}
            </div>
            <div>
              <h3 className="font-bold text-[16px] leading-[1.3] text-navy-900">
                {title}
              </h3>
              <div className="text-[13.5px] leading-[1.5] text-slate-600 mt-1">
                {text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <a href="/cv" className="font-semibold text-[13.5px] underline">
          Voir le CV complet et détaillé →
        </a>
      </div>
    </section>
  )
}
