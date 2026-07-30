const items = [
  {
    year: '2026 —',
    text: "Membre fondateur du Réseau des Alumni de l'Institut pour la Gouvernance Démocratique (RA-IGD)",
  },
  {
    year: '2020 – à ce jour —',
    text: 'Membre du Réseau des Organisations de Jeunesse pour le Développement local et la Coopération Décentralisée (ROJCOD)',
  },
  {
    year: '2020 —',
    text: "École politique de l'Institut Néerlandais pour la Démocratie Multipartite (NIMD)",
  },
  {
    year: '2017 – 2020 —',
    text: 'Membre du Parlement des Jeunes du Bénin (PJB), deuxième mandature',
  },
]

export default function Leadership() {
  return (
    <section aria-label="Leadership et vie associative" className="max-w-[1100px] mx-auto px-8 pb-[72px]">
      <h2 className="section-label">Leadership &amp; vie associative</h2>
      <div className="flex flex-col gap-2 text-[14px] leading-[1.5] text-slate-800">
        {items.map(({ year, text }) => (
          <div key={text}>
            <span className="font-bold text-navy">{year}</span> {text}
          </div>
        ))}
      </div>
    </section>
  )
}
