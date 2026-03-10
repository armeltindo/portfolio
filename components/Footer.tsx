import { Github, Linkedin, Mail, Terminal } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 border border-cyan-DEFAULT/40 rounded flex items-center justify-center">
            <Terminal size={12} className="text-cyan-DEFAULT" />
          </div>
          <span className="font-mono text-xs text-text-muted">
            <span className="text-cyan-DEFAULT">tindo</span>_armel · 2026
          </span>
        </div>

        <p className="font-mono text-xs text-text-muted">
          Built with <span className="text-cyan-DEFAULT">Next.js</span> ·{' '}
          <span className="text-violet-bright">Supabase</span> · Deployed on{' '}
          <span className="text-text-secondary">Vercel</span>
        </p>

        <div className="flex items-center gap-4">
          {[
            { href: 'https://github.com/armeltindo', icon: Github },
            { href: 'https://linkedin.com', icon: Linkedin },
            { href: 'mailto:tindo.armel@example.com', icon: Mail },
          ].map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-cyan-DEFAULT transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
