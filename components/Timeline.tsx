'use client'

import { useEffect, useRef } from 'react'
import { GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react'

const events = [
  {
    year: '2026',
    period: 'En cours',
    title: 'Formation Datafid2',
    org: "ENSEA — Abidjan, Côte d'Ivoire",
    desc: "Programme de spécialisation avancée en Data Science appliqué aux administrations douanières et fiscales africaines. Développement de solutions IA pour le contrôle fiscal et la détection de fraude.",
    icon: GraduationCap,
    type: 'education',
    tags: ['R Shiny', 'Machine Learning', 'Scoring Fraude', 'NLP'],
    color: 'primary',
  },
  {
    year: '2024',
    period: '2024 — Présent',
    title: 'Statisticien-Économiste',
    org: 'Direction Générale des Impôts (DGID) — Cotonou, Bénin',
    desc: "Analyse de données fiscales et macroéconomiques, modélisation prédictive des recettes, développement d'outils d'aide à la décision et détection des anomalies déclaratives via le Machine Learning.",
    icon: Briefcase,
    type: 'work',
    tags: ['Python', 'R', 'SQL', 'Power BI', 'XGBoost'],
    color: 'gold',
  },
  {
    year: '2023',
    period: '2021 — 2023',
    title: 'Master Statistique & Économétrie',
    org: "ENSEA — Abidjan, Côte d'Ivoire",
    desc: "Formation de haut niveau en méthodes quantitatives, économétrie avancée, analyse des séries temporelles et introduction au Machine Learning. Mémoire sur la modélisation du risque fiscal au Bénin.",
    icon: BookOpen,
    type: 'education',
    tags: ['Économétrie', 'Séries temporelles', 'R', 'Stata', 'ACP'],
    color: 'teal',
  },
  {
    year: '2022',
    period: '2022',
    title: 'Spécialisation Deep Learning',
    org: 'DeepLearning.AI — Coursera',
    desc: "Certification complète en Deep Learning couvrant les réseaux de neurones, les CNN pour la vision artificielle, les RNN et LSTM pour les séries temporelles, et le NLP avec les Transformers.",
    icon: Award,
    type: 'cert',
    tags: ['TensorFlow', 'Keras', 'CNN', 'LSTM', 'NLP'],
    color: 'primary',
  },
]

const colorMap = {
  primary: {
    dot: 'bg-primary/20 border-primary/40',
    icon: 'text-primary-light',
    year: 'bg-primary/10 text-primary-light border-primary/25',
    tag: 'tag-pill',
    period: 'text-primary-light',
  },
  gold: {
    dot: 'bg-gold/20 border-gold/40',
    icon: 'text-gold-light',
    year: 'bg-gold/10 text-gold-light border-gold/25',
    tag: 'tag-pill-gold',
    period: 'text-gold-light',
  },
  teal: {
    dot: 'bg-teal/20 border-teal/40',
    icon: 'text-teal-light',
    year: 'bg-teal/10 text-teal-light border-teal/25',
    tag: 'tag-pill-teal',
    period: 'text-teal-light',
  },
}

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-dark-surface relative overflow-hidden"
    >
      <div className="orb-primary w-80 h-80 top-1/2 -translate-y-1/2 right-0 opacity-20" />

      <div className="max-w-4xl mx-auto relative">

        {/* Header */}
        <div className="mb-16 reveal">
          <span className="section-badge mb-4">
            Parcours
          </span>
          <h2 className="section-title mt-4">
            Mon <span className="gradient-text">Histoire</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg text-lg">
            De la formation académique à l&apos;expertise terrain, un parcours construit
            autour des données et de l&apos;impact.
          </p>
        </div>

        {/* Timeline entries */}
        <div className="relative pl-12 sm:pl-16">
          {/* Vertical line */}
          <div className="timeline-connector" />

          <div className="space-y-10">
            {events.map((ev, i) => {
              const Icon = ev.icon
              const colors = colorMap[ev.color as keyof typeof colorMap]

              return (
                <div
                  key={i}
                  className="reveal relative"
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  {/* Dot */}
                  <div className={`timeline-dot ${colors.dot} border-2 absolute -left-12 sm:-left-16 top-0`}>
                    <Icon size={18} className={colors.icon} />
                  </div>

                  {/* Card */}
                  <div className="card-base p-5 sm:p-6 ml-2">
                    {/* Top row */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`font-mono text-xs px-3 py-1 rounded-full border font-medium ${colors.year}`}>
                        {ev.year}
                      </span>
                      <span className={`font-mono text-xs ${colors.period}`}>
                        {ev.period}
                      </span>
                      <span className="font-mono text-xs text-text-muted uppercase tracking-wider ml-auto">
                        {ev.type === 'education' ? 'Formation' : ev.type === 'work' ? 'Expérience' : 'Certification'}
                      </span>
                    </div>

                    {/* Title & org */}
                    <h3 className="font-display font-bold text-text-primary text-xl mb-1">
                      {ev.title}
                    </h3>
                    <p className="font-mono text-xs text-text-muted mb-3">{ev.org}</p>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{ev.desc}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {ev.tags.map((t) => (
                        <span key={t} className={colors.tag}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
