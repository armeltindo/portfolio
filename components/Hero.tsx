'use client'
import { useEffect, useRef } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const ROLES = [
  'Data Scientist',
  'ML Engineer',
  'AI Enthusiast',
  'Statisticien-Économiste',
]

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let roleIdx = 0
    let charIdx = 0
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    const type = () => {
      const current = ROLES[roleIdx]
      if (!roleRef.current) return

      if (!deleting) {
        roleRef.current.textContent = current.slice(0, charIdx + 1)
        charIdx++
        if (charIdx === current.length) {
          deleting = true
          timer = setTimeout(type, 1800)
          return
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIdx - 1)
        charIdx--
        if (charIdx === 0) {
          deleting = false
          roleIdx = (roleIdx + 1) % ROLES.length
        }
      }
      timer = setTimeout(type, deleting ? 60 : 100)
    }

    timer = setTimeout(type, 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-violet-DEFAULT/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-cyan-DEFAULT/8 blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-bright/5 blur-3xl" />

      {/* Matrix rain effect - dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute font-mono text-cyan-DEFAULT/10 text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
            }}
          >
            {['01', '10', '0x', '∑', 'μ', 'σ', 'λ', '∇', '∫', 'π'][Math.floor(Math.random() * 10)]}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-DEFAULT/20 bg-cyan-glow mb-8 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-cyan-DEFAULT animate-pulse" />
          <span className="font-mono text-xs text-cyan-DEFAULT tracking-widest uppercase">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display text-6xl md:text-8xl mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-text-primary">TINDO</span>
          <br />
          <span className="gradient-text">Armel</span>
        </h1>

        {/* Role typing */}
        <div className="flex items-center justify-center gap-2 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="font-mono text-text-muted text-lg">{'>'}</span>
          <span
            ref={roleRef}
            className="font-mono text-xl md:text-2xl text-cyan-DEFAULT cursor-blink min-w-[200px] text-left"
          />
        </div>

        {/* Description */}
        <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Statisticien-Économiste à la <span className="text-text-primary font-medium">DGI Bénin</span>,
          je transforme des données complexes en décisions intelligentes.
          Passionné de <span className="text-cyan-DEFAULT">Machine Learning</span>,{' '}
          <span className="text-violet-bright">Deep Learning</span> et d'IA appliquée aux domaines
          fiscaux et économiques.
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 md:gap-16 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {[
            { val: '6+', label: 'Projets ML/IA' },
            { val: '3+', label: 'Langages maîtrisés' },
            { val: '2026', label: 'Datafid2 ENSEA' },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="font-mono text-3xl font-bold text-cyan-DEFAULT glow-cyan">{val}</div>
              <div className="font-mono text-xs text-text-muted mt-1 tracking-wider">{label}</div>
            </div>
          ))}
        </div>

        {/* Socials + CTA */}
        <div className="flex items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="https://github.com/armeltindo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border rounded-lg text-text-secondary hover:text-text-primary hover:border-cyan-DEFAULT/50 hover:bg-cyan-glow transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border rounded-lg text-text-secondary hover:text-text-primary hover:border-violet-bright/50 hover:bg-violet-glow transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:tindo.armel@example.com"
            className="p-3 border border-border rounded-lg text-text-secondary hover:text-text-primary hover:border-cyan-DEFAULT/50 hover:bg-cyan-glow transition-all"
          >
            <Mail size={18} />
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-DEFAULT text-bg font-mono text-sm font-bold rounded-lg hover:bg-cyan-dim transition-colors shadow-cyan"
          >
            Voir mes projets
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-text-muted tracking-widest">SCROLL</span>
        <ArrowDown size={14} className="text-text-muted" />
      </div>
    </section>
  )
}
