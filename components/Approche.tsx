const items = [
  {
    title: 'Data Science & Machine Learning',
    text: 'Régression, gradient boosting, XGBoost, Random Forest, K-means — appliqués à des problèmes de classification et de scoring à grande échelle.',
  },
  {
    title: 'Modélisation statistique & économétrie',
    text: "Analyse de données, calcul d'indicateurs et simulation des effets de politiques fiscales sur R, Python, SPSS et Stata.",
  },
  {
    title: 'Suivi-évaluation & enquêtes',
    text: "Conception de questionnaires, supervision d'enquêtes de terrain, contrôle qualité des données et production de rapports d'études.",
  },
]

export default function Approche() {
  return (
    <section id="approche" className="max-w-[1100px] mx-auto px-8 py-[72px]">
      <h2 className="section-label">Ce que je fais</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {items.map(({ title, text }) => (
          <div key={title} className="p-7 bg-slate-50 rounded-[10px]">
            <h3 className="font-bold text-[17px] leading-[1.3] text-navy-900 mb-2.5">
              {title}
            </h3>
            <div className="text-[13.5px] leading-[1.6] text-slate-600">{text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
