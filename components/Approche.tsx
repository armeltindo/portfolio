// Same OKLCH lightness/chroma as the site's accent blue (#3a5fb0), hue
// rotated for each card so the three read as a related but distinct set.
const items = [
  {
    title: 'Data Science & Machine Learning',
    text: 'Régression, gradient boosting, XGBoost, Random Forest, K-means — appliqués à des problèmes de classification et de scoring à grande échelle.',
    accent: '#3a5fb0',
  },
  {
    title: 'Modélisation statistique & économétrie',
    text: "Analyse de données, calcul d'indicateurs et simulation des effets de politiques fiscales sur R, Python, SPSS et Stata.",
    accent: '#007082',
  },
  {
    title: 'Suivi-évaluation & enquêtes',
    text: "Conception de questionnaires, supervision d'enquêtes de terrain, contrôle qualité des données et production de rapports d'études.",
    accent: '#834694',
  },
]

export default function Approche() {
  return (
    <section id="approche" className="max-w-[1100px] mx-auto px-8 py-[72px]">
      <h2 className="section-label">Ce que je fais</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {items.map(({ title, text, accent }) => (
          <div key={title} className="rounded-[10px] overflow-hidden bg-slate-50">
            <div className="h-[3px]" style={{ background: accent }} />
            <div className="p-7">
              <h3 className="font-bold text-[17px] leading-[1.3] text-navy-900 mb-2.5">
                {title}
              </h3>
              <div className="text-[14px] leading-[1.6] text-slate-600">{text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
