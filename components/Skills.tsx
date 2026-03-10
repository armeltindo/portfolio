'use client'
import { useEffect, useRef, useState } from 'react'

const categories = [
  {
    label: 'Langages',
    icon: '< >',
    skills: [
      { name: 'Python', level: 90, color: 'cyan' },
      { name: 'R', level: 92, color: 'cyan' },
      { name: 'SQL', level: 85, color: 'cyan' },
      { name: 'JavaScript', level: 65, color: 'violet' },
    ],
  },
  {
    label: 'Machine Learning',
    icon: '🧠',
    skills: [
      { name: 'Scikit-learn', level: 88, color: 'cyan' },
      { name: 'TensorFlow / Keras', level: 75, color: 'cyan' },
      { name: 'PyTorch', level: 65, color: 'violet' },
      { name: 'XGBoost / LightGBM', level: 85, color: 'cyan' },
    ],
  },
  {
    label: 'Data & BI',
    icon: '📊',
    skills: [
      { name: 'Pandas / NumPy', level: 92, color: 'cyan' },
      { name: 'Power BI', level: 80, color: 'violet' },
      { name: 'R Shiny', level: 88, color: 'cyan' },
      { name: 'Plotly / Seaborn', level: 85, color: 'cyan' },
    ],
  },
  {
    label: 'Dev & MLOps',
    icon: '⚙️',
    skills: [
      { name: 'Git / GitHub', level: 85, color: 'cyan' },
      { name: 'Docker', level: 60, color: 'violet' },
      { name: 'Supabase', level: 75, color: 'cyan' },
      { name: 'Vercel / Next.js', level: 70, color: 'violet' },
    ],
  },
]

const tools = [
  'Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-learn',
  'XGBoost', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly',
  'R Shiny', 'Power BI', 'Looker Studio', 'Git', 'Docker',
  'Supabase', 'PostgreSQL', 'Next.js', 'Jupyter', 'VS Code',
  'Stata', 'SPSS', 'FactoMineR', 'caret', 'pROC',
]

function SkillBar({ name, level, color, animate }: { name: string; level: number; color: string; animate: boolean }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-xs text-text-secondary">{name}</span>
        <span className={`font-mono text-xs ${color === 'cyan' ? 'text-cyan-DEFAULT' : 'text-violet-bright'}`}>
          {level}%
        </span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            width: animate ? `${level}%` : '0%',
            background: color === 'cyan'
              ? 'linear-gradient(90deg, #00f5ff, #7c3aed)'
              : 'linear-gradient(90deg, #7c3aed, #a855f7)',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            setAnimate(true)
          }
        })
      },
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-28 px-6 bg-surface/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-glow rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-xs text-cyan-DEFAULT tracking-[0.3em] uppercase mb-3 block">
            — compétences —
          </span>
          <h2 className="font-display text-5xl text-text-primary">
            Stack <span className="gradient-text">Technique</span>
          </h2>
        </div>

        {/* Skill bars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((cat, i) => (
            <div
              key={cat.label}
              className="reveal bg-surface border border-border rounded-xl p-6 card-hover"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-lg">{cat.icon}</span>
                <h3 className="font-mono text-sm text-text-primary font-semibold tracking-wider uppercase">
                  {cat.label}
                </h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map(s => (
                  <SkillBar key={s.name} {...s} animate={animate} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools cloud */}
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-border" />
            <span className="font-mono text-xs text-text-muted uppercase tracking-widest">Outils & Technologies</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {tools.map((tool, i) => (
              <span
                key={tool}
                className={`tag-pill cursor-default transition-all hover:scale-105 ${
                  i % 3 === 0 ? '' : i % 3 === 1 ? 'tag-pill-violet' : 'border-border text-text-secondary'
                }`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
