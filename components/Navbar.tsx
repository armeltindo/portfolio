'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Terminal } from 'lucide-react'

const links = [
  { href: '#about',    label: 'about' },
  { href: '#timeline', label: 'parcours' },
  { href: '#skills',   label: 'skills' },
  { href: '#projects', label: 'projets' },
  { href: '#contact',  label: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border border-cyan-DEFAULT/50 rounded flex items-center justify-center group-hover:border-cyan-DEFAULT transition-colors">
            <Terminal size={14} className="text-cyan-DEFAULT" />
          </div>
          <span className="font-mono text-sm text-text-secondary group-hover:text-text-primary transition-colors">
            <span className="text-cyan-DEFAULT">tindo</span>_armel
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/cv-tindo-armel.pdf"
          download
          className="hidden md:flex items-center gap-2 px-4 py-2 border border-cyan-DEFAULT/30 rounded text-cyan-DEFAULT font-mono text-xs hover:bg-cyan-glow hover:border-cyan-DEFAULT transition-all duration-200"
        >
          <span className="text-cyan-DEFAULT opacity-60">$</span> get_cv.pdf
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-b border-border px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-mono text-sm text-text-secondary hover:text-cyan-DEFAULT transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-cyan-DEFAULT opacity-60">// </span>{label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
