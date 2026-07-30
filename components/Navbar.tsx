const links = [
  { href: '#approche', label: 'Approche' },
  { href: '#projet', label: 'Projet phare' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 bg-white/92 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1100px] mx-auto px-8 py-4 flex items-center justify-between">
        <span className="font-extrabold text-[15px] tracking-[0.03em] text-navy">
          Armel Tindo
        </span>

        <div className="hidden md:flex gap-[26px]">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-semibold text-[13px] text-navy no-underline hover:text-accent"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="mailto:armeltindo@gmail.com"
          className="font-semibold text-[13px] text-white bg-navy px-[18px] py-[10px] rounded-md no-underline whitespace-nowrap"
        >
          Me contacter
        </a>
      </div>
    </div>
  )
}
