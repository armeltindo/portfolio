'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail, ArrowDown, MapPin, Sparkles } from 'lucide-react'

const ROLES = [
  'Data Scientist',
  'ML Engineer',
  'Statisticien-Économiste',
  'AI Practitioner',
]

const stats = [
  { value: '8+', label: 'Projets ML/IA' },
  { value: '15+', label: 'Technologies' },
  { value: '2026', label: 'Datafid2 ENSEA' },
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
          timer = setTimeout(type, 2000)
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
      timer = setTimeout(type, deleting ? 55 : 95)
    }

    timer = setTimeout(type, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="orb-primary w-[600px] h-[600px] top-[-100px] right-[-100px] opacity-60" />
      <div className="orb-gold w-[500px] h-[500px] bottom-[-150px] left-[-150px] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">

          {/* Left column */}
          <div className="flex flex-col justify-center space-y-8 animate-fade-up">

            {/* Location badge */}
            <div className="flex items-center gap-2">
              <span className="section-badge">
                <MapPin size={12} />
                Cotonou, Bénin · Disponible
              </span>
            </div>

            {/* Name */}
            <div>
              <h1 className="font-display font-extrabold leading-none tracking-tight">
                <span className="block text-text-primary text-5xl sm:text-6xl lg:text-7xl">
                  TINDO
                </span>
                <span className="block gradient-text text-6xl sm:text-7xl lg:text-8xl">
                  Armel
                </span>
              </h1>
            </div>

            {/* Typing animation */}
            <div className="flex items-center gap-3">
              <span className="text-primary-light font-mono text-sm">&gt;</span>
              <div className="flex items-center gap-1">
                <span
                  ref={roleRef}
                  className="font-mono text-xl sm:text-2xl text-text-primary font-medium"
                />
                <span className="inline-block w-0.5 h-6 bg-primary animate-pulse ml-0.5" />
              </div>
            </div>

            {/* Description */}
            <p className="text-text-secondary text-lg leading-relaxed max-w-lg">
              Statisticien-Économiste à la{' '}
              <span className="text-text-primary font-semibold">DGI Bénin</span>, je transforme
              des données complexes en décisions stratégiques. Passionné de{' '}
              <span className="text-primary-light font-medium">Machine Learning</span> et d&apos;IA
              appliquée au contexte africain.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#projects" className="btn-primary">
                <Sparkles size={16} />
                Voir mes projets
              </a>
              <a href="#contact" className="btn-outline">
                Me contacter
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-text-muted text-sm font-mono">Retrouvez-moi :</span>
              <div className="flex gap-3">
                {[
                  { href: 'https://github.com/armeltindo', icon: Github, label: 'GitHub' },
                  { href: 'https://linkedin.com/in/tindo-armel', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'mailto:tindo.armel@example.com', icon: Mail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg border border-dark-border bg-dark-card flex items-center justify-center text-text-secondary hover:text-primary-light hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — Visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-[420px] h-[420px]">

              {/* Outer rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-soft" />
              <div className="absolute inset-4 rounded-full border border-primary/10" />
              {/* Gradient ring behind photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[260px] h-[260px] rounded-full p-[3px] bg-gradient-to-br from-primary via-gold to-primary shadow-primary">
                  <div className="w-full h-full rounded-full overflow-hidden bg-dark-card">
                    <Image
                      src="/profile.jpg"
                      alt="TINDO Armel — Data Scientist"
                      width={260}
                      height={260}
                      className="w-full h-full object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Stat cards floating */}
              {stats.map((stat, i) => {
                const positions = [
                  'top-6 right-0',
                  'bottom-8 right-4',
                  'top-1/2 -translate-y-1/2 -left-6',
                ]
                const delays = ['animate-float', 'animate-float-slow', 'animate-float-delay']
                return (
                  <div
                    key={stat.label}
                    className={`absolute ${positions[i]} ${delays[i]} glass-card px-4 py-3 min-w-[120px]`}
                  >
                    <div className="font-display font-bold text-2xl gradient-text-blue">
                      {stat.value}
                    </div>
                    <div className="text-text-secondary text-xs font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                )
              })}

              {/* Decorative dots */}
              <div className="absolute top-14 left-10 w-2.5 h-2.5 rounded-full bg-gold animate-pulse-soft" />
              <div className="absolute bottom-14 right-20 w-2 h-2 rounded-full bg-primary-light animate-pulse-soft" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/3 right-8 w-1.5 h-1.5 rounded-full bg-teal animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted animate-bounce">
          <span className="font-mono text-xs tracking-widest uppercase">Défiler</span>
          <ArrowDown size={14} />
        </div>
      </div>
    </section>
  )
}
