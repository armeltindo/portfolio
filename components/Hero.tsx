export default function Hero() {
  return (
    <div className="max-w-[1100px] mx-auto px-8 pt-[88px] pb-16 grid grid-cols-1 md:grid-cols-[1.3fr_0.9fr] gap-14 items-center">
      <div>
        <div className="font-semibold text-[14px] tracking-[0.1em] uppercase text-accent mb-[18px]">
          Data Science &amp; Intelligence Artificielle
        </div>
        <h1 className="font-extrabold text-[40px] md:text-[52px] leading-[1.12] text-navy-deep text-balance">
          Je transforme les données publiques en décisions.
        </h1>
        <p className="text-[17px] leading-[1.65] text-slate-700 max-w-[600px] mt-6 text-pretty">
          Ingénieur Statisticien Économiste, je conçois des modèles de machine
          learning et des méthodes statistiques au service des politiques
          fiscales et socio-économiques — avec plus de 8 ans d&apos;expérience,
          dont 5 à la Direction Générale des Impôts du Bénin.
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <a
            href="#projet"
            className="font-semibold text-[14px] text-white bg-navy px-6 py-[14px] rounded-md no-underline whitespace-nowrap"
          >
            Voir le projet Datafid
          </a>
          <a
            href="https://www.linkedin.com/in/armel-tindo-839916190/"
            className="font-semibold text-[14px] text-navy bg-slate-100 px-6 py-[14px] rounded-md no-underline whitespace-nowrap"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div
        className="w-full rounded-[20px] flex flex-col items-center justify-center gap-2 text-slate-500"
        style={{
          aspectRatio: '4 / 5',
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(28,43,69,0.06) 0px, rgba(28,43,69,0.06) 10px, rgba(28,43,69,0.02) 10px, rgba(28,43,69,0.02) 20px)',
          backgroundColor: 'rgba(28,43,69,0.04)',
        }}
      >
        <span className="font-mono text-xs uppercase tracking-wider">Photo</span>
      </div>
    </div>
  )
}
