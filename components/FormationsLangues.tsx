const formations = [
  { year: '2025 —', text: 'Master Professionnel en Statistique, ENEAM-UAC' },
  {
    year: '2017 —',
    text: 'Licences en Statistique et en Économie Appliquée, ENEAM / FASEG-UAC',
  },
  {
    year: '2026 —',
    text: 'Data Science pour les administrations fiscales et douanières, ENSEA Abidjan',
  },
  {
    year: '2022–2023 —',
    text: 'Machine Learning, Python, R — Kaggle, OMD/FERDI, École d\'Été sur l\'IA',
  },
]

const langues = [
  'Français — Couramment',
  'Anglais — Intermédiaire',
  'Fon — Langue maternelle',
]

export default function FormationsLangues() {
  return (
    <div className="max-w-[1100px] mx-auto px-8 pb-[72px] grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12">
      <section aria-label="Formations">
        <h2 className="section-label">Formations</h2>
        <div className="flex flex-col gap-2 text-[14px] leading-[1.5] text-slate-800">
          {formations.map(({ year, text }) => (
            <div key={text}>
              <span className="font-bold text-navy">{year}</span> {text}
            </div>
          ))}
        </div>
      </section>
      <section aria-label="Langues">
        <h2 className="section-label">Langues</h2>
        <div className="flex flex-wrap gap-2.5">
          {langues.map((l) => (
            <span key={l} className="chip">
              {l}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
