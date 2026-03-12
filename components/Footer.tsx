import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-border bg-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden ring-2 ring-primary/40">
                <Image src="/profile.jpg" alt="TINDO Armel" width={36} height={36} className="w-full h-full object-cover object-top" />
              </div>
              <span className="font-display font-bold text-text-primary text-lg">
                Tindo Armel<span className="text-primary-light">.</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Data Scientist & ML Engineer basé à Cotonou, Bénin. Je transforme les données
              en décisions stratégiques.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">Navigation</h4>
            <nav className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {[
                { label: 'Accueil', href: '#hero' },
                { label: 'À propos', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Projets', href: '#projects' },
                { label: 'Parcours', href: '#timeline' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-text-muted hover:text-text-primary text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">Me retrouver</h4>
            <div className="flex gap-3 mb-4">
              {[
                { href: 'https://github.com/armeltindo', icon: Github, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/armel-tindo-839916190', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:armeltindo@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border border-dark-border bg-dark-card flex items-center justify-center text-text-muted hover:text-primary-light hover:border-primary/40 hover:bg-primary/10 transition-all"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <a
              href="/cv-tindo-armel.pdf"
              download
              className="inline-flex items-center gap-2 text-sm text-primary-light hover:underline font-medium"
            >
              Télécharger mon CV →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-dark-border flex items-center justify-center">
          <p className="text-text-muted text-xs font-mono">
            © {currentYear} TINDO Armel. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
