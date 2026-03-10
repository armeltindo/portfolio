'use client'
import { useEffect, useRef } from 'react'
import { GraduationCap, Briefcase, Award } from 'lucide-react'

const events = [
  {
    year: '2026',
    title: 'Formation Datafid2',
    org: 'ENSEA — Abidjan',
    desc: 'Spécialisation Data Science pour la Douane et les Impôts. Développement d\'applications Shiny R, modèles de scoring de fraude, NLP et ML appliqué.',
    icon: GraduationCap,
    type: 'education',
    tags: ['R Shiny', 'Machine Learning', 'Scoring Fraude'],
    side: 'right',
  },
  {
    year: '2024',
    title: 'Statisticien-Économiste',
    org: 'DGI Bénin',
    desc: 'Analyse de données fiscales, modélisation économique, développement d\'outils d\'aide à la décision et de détection des anomalies déclaratives.',
    icon: Briefcase,
    type: 'work',
    tags: ['Python', 'R', 'SQL', 'Power BI'],
    side: 'left',
  },
  {
    year: '2023',
    title: 'Master Statistique & Économétrie',
    org: 'ENSEA — Abidjan',
    desc: 'Formation avancée en méthodes quantitatives, économétrie, analyse des séries temporelles et introduction au Machine Learning.',
    icon: GraduationCap,
    type: 'education',
    tags: ['Économétrie', 'Séries temporelles', 'R', 'Stata'],
    side: 'right',
  },
  {
    year: '2022',
    title: 'Certification Data Science',
    org: 'Coursera / DeepLearning.AI',
    desc: 'Spécialisation complète en Data Science et Deep Learning — réseaux de neurones, NLP, Computer Vision.',
    icon: Award,
    type: 'cert',
    tags: ['TensorFlow', 'Keras', 'NLP', 'CNN'],
    side: 'left',
  },
]

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="timeline" ref={sectionRef} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-5xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="font-mono text-xs text-cyan-DEFAULT tracking-[0.3em] uppercase mb-3 block">
            — parcours —
          </span>
          <h2 className="font-display text-5xl text-text-primary">
            Mon <span className="gradient-text">Parcours</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-12">
            {events.map((ev, i) => {
              const Icon = ev.icon
              const isRight = ev.side === 'right'
              return (
                <div
                  key={i}
                  className={`reveal flex items-center gap-0 ${isRight ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Content card */}
                  <div className={`w-5/12 ${isRight ? 'pr-10 text-right' : 'pl-10 text-left'}`}>
                    <div className="bg-surface border border-border rounded-xl p-5 card-hover cursor-default">
                      <div className={`flex items-center gap-2 mb-2 ${isRight ? 'justify-end' : 'justify-start'}`}>
                        <span className="font-mono text-xs text-cyan-DEFAULT bg-cyan-glow px-2 py-1 rounded">
                          {ev.year}
                        </span>
                        <span className={`font-mono text-xs uppercase tracking-wider ${
                          ev.type === 'education' ? 'text-violet-bright' :
                          ev.type === 'work' ? 'text-cyan-DEFAULT' : 'text-amber-400'
                        }`}>
                          {ev.type === 'education' ? 'Formation' : ev.type === 'work' ? 'Expérience' : 'Certification'}
                        </span>
                      </div>
                      <h3 className="text-text-primary font-semibold text-lg mb-1">{ev.title}</h3>
                      <p className="font-mono text-xs text-text-muted mb-3">{ev.org}</p>
                      <p className="text-text-secondary text-sm leading-relaxed mb-3">{ev.desc}</p>
                      <div className={`flex flex-wrap gap-1.5 ${isRight ? 'justify-end' : 'justify-start'}`}>
                        {ev.tags.map(t => (
                          <span key={t} className="tag-pill">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="relative flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-surface border-2 border-cyan-DEFAULT/40 flex items-center justify-center shadow-cyan z-10">
                        <Icon size={16} className="text-cyan-DEFAULT" />
                      </div>
                    </div>
                  </div>

                  {/* Empty side */}
                  <div className="w-5/12" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
