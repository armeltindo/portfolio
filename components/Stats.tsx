const stats = [
  { value: '8+ ans', label: "D'expérience professionnelle" },
  { value: '55 493', label: 'Créances fiscales modélisées' },
  { value: '5 ans', label: 'À la Direction Générale des Impôts' },
  { value: '11', label: 'Missions & études conduites' },
]

export default function Stats() {
  return (
    <section aria-label="Chiffres clés" className="bg-navy">
      <div className="max-w-[1100px] mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <div className="font-extrabold text-[30px] text-white">{value}</div>
            <div className="text-[12px] leading-[1.4] text-onnavy-sub mt-1.5">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
