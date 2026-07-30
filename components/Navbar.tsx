'use client'
import { useState } from 'react'
import ObfuscatedLink from '@/components/ObfuscatedLink'
import { EMAIL_REVERSED } from '@/lib/contact'

const links = [
  { href: '#approche', label: 'Approche' },
  { href: '#projet', label: 'Projet phare' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 bg-white/92 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1100px] mx-auto px-8 py-4 flex items-center justify-between">
        <span className="font-extrabold text-[15px] tracking-[0.03em] text-navy">
          Armel Tindo
        </span>

        <nav aria-label="Navigation principale" className="hidden md:flex gap-[26px]">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-semibold text-[13px] text-navy no-underline hover:text-accent"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ObfuscatedLink
            reversed={EMAIL_REVERSED}
            kind="email"
            className="hidden md:inline-block font-semibold text-[13px] text-white hover:text-white bg-navy hover:bg-accent transition-colors px-[18px] py-[10px] rounded-md no-underline whitespace-nowrap"
          >
            Me contacter
          </ObfuscatedLink>
          <button
            type="button"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden text-navy text-xl leading-none w-9 h-9 flex items-center justify-center"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Navigation mobile"
          className="md:hidden border-t border-slate-200 bg-white px-8 py-4 flex flex-col gap-4"
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-semibold text-[14px] text-navy no-underline"
            >
              {label}
            </a>
          ))}
          <ObfuscatedLink
            reversed={EMAIL_REVERSED}
            kind="email"
            onClick={() => setOpen(false)}
            className="font-semibold text-[14px] text-white hover:text-white bg-navy hover:bg-accent transition-colors px-[18px] py-[10px] rounded-md no-underline text-center"
          >
            Me contacter
          </ObfuscatedLink>
        </nav>
      )}
    </header>
  )
}
