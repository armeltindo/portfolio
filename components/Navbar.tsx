'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projets', href: '#projects' },
  { label: 'Parcours', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/90 backdrop-blur-xl border-b border-dark-border shadow-glass'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl overflow-hidden shadow-primary-sm group-hover:scale-105 transition-transform duration-200 ring-2 ring-primary/40">
              <Image src="/profile.jpg" alt="TINDO Armel" width={36} height={36} className="w-full h-full object-cover object-top" />
            </div>
            <span className="font-display font-bold text-text-primary text-base hidden sm:block">
              Armel<span className="text-primary-light">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-success/30 bg-success/10 text-success text-xs font-medium hover:bg-success/20 hover:border-success/50 transition-all duration-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              Disponible — Consulting &amp; Freelance
            </a>
            <a
              href="/cv-tindo-armel.pdf"
              download
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/5 text-primary-light text-sm font-medium hover:bg-primary/15 hover:border-primary/50 transition-all duration-200"
            >
              <Download size={14} />
              CV
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-dark-border text-text-secondary hover:border-primary/40 hover:text-text-primary transition-all"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-dark-surface/95 backdrop-blur-xl border-t border-dark-border px-4 pt-3 pb-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-dark-card font-medium text-sm transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-dark-border mt-2">
            <a
              href="/cv-tindo-armel.pdf"
              download
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-primary-light text-sm font-medium hover:bg-primary/10 transition-all"
            >
              <Download size={14} />
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
