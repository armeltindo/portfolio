'use client'

import { useEffect, useRef, useState } from 'react'

const languages = [
  { name: 'R', level: 92, desc: 'Statistique & visualisation' },
  { name: 'Python', level: 90, desc: 'ML, data processing & web' },
  { name: 'SQL', level: 85, desc: 'Requêtes avancées & optimisation' },
  { name: 'JavaScript', level: 65, desc: 'Next.js & apps web' },
]

const mlSkills = [
  { name: 'Scikit-learn', level: 88 },
  { name: 'XGBoost / LightGBM', level: 85 },
  { name: 'TensorFlow / Keras', level: 78 },
  { name: 'PyTorch', level: 65 },
]

const toolCategories = [
  {
    label: 'Machine Learning',
    color: 'primary',
    tools: ['Scikit-learn', 'XGBoost', 'LightGBM', 'TensorFlow', 'Keras', 'PyTorch', 'SHAP', 'Optuna'],
  },
  {
    label: 'Data & Visualisation',
    color: 'gold',
    tools: ['Pandas', 'NumPy', 'Plotly', 'Seaborn', 'Matplotlib', 'ggplot2', 'Leaflet'],
  },
  {
    label: 'Business Intelligence',
    color: 'teal',
    tools: ['Power BI', 'R Shiny', 'Looker Studio', 'DAX', 'Tableau'],
  },
  {
    label: 'Statistique & Économétrie',
    color: 'primary',
    tools: ['Stata', 'SPSS', 'FactoMineR', 'caret', 'pROC', 'lavaan', 'survival'],
  },
  {
    label: 'Dev & MLOps',
    color: 'gold',
    tools: ['Git', 'Docker', 'FastAPI', 'Next.js', 'Supabase', 'Vercel', 'GitHub Actions'],
  },
  {
    label: 'Environnements',
    color: 'teal',
    tools: ['Jupyter', 'RStudio', 'VS Code', 'Colab', 'Linux'],
  },
]

function SkillBar({ name, level, desc, animate }: { name: string; level: number; desc?: string; animate: boolean }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-end">
        <div>
          <span className="text-text-primary font-semibold text-sm">{name}</span>
          {desc && <span className="text-text-muted text-xs ml-2 hidden sm:inline">{desc}</span>}
        </div>
        <span className="font-mono text-xs text-primary-light font-medium">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

function MLBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-text-secondary text-sm">{name}</span>
        <span className="font-mono text-xs text-gold-light">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill skill-bar-fill-gold"
          style={{ width: animate ? `${level}%` : '0%' }}
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
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            setAnimate(true)
          }
        })
      },
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-dark relative overflow-hidden"
    >
      <div className="bg-grid absolute inset-0 opacity-50" />
      <div className="orb-primary w-96 h-96 bottom-0 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-badge mb-4">Compétences</span>
          <h2 className="section-title mt-4">
            Stack <span className="gradient-text">Technique</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Un arsenal d&apos;outils couvrant toute la chaîne de valeur data, de la collecte à la mise en production.
          </p>
        </div>

        {/* Top: Skill bars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">

          {/* Languages */}
          <div className="reveal card-base p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                <span className="font-mono text-primary-light text-sm font-bold">&lt;/&gt;</span>
              </div>
              <h3 className="font-display font-bold text-text-primary text-lg">Langages</h3>
            </div>
            <div className="space-y-5">
              {languages.map((l) => (
                <SkillBar key={l.name} {...l} animate={animate} />
              ))}
            </div>
          </div>

          {/* ML Frameworks */}
          <div className="reveal card-base p-6 lg:p-8" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center">
                <span className="font-mono text-gold-light text-sm font-bold">ML</span>
              </div>
              <h3 className="font-display font-bold text-text-primary text-lg">Machine Learning</h3>
            </div>
            <div className="space-y-5">
              {mlSkills.map((s) => (
                <MLBar key={s.name} {...s} animate={animate} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Tool categories */}
        <div className="reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-dark-border" />
            <span className="font-mono text-xs text-text-muted uppercase tracking-widest whitespace-nowrap">
              Outils & Technologies
            </span>
            <div className="h-px flex-1 bg-dark-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolCategories.map((cat) => (
              <div key={cat.label} className="card-base p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      cat.color === 'primary' ? 'bg-primary' :
                      cat.color === 'gold' ? 'bg-gold' : 'bg-teal'
                    }`}
                  />
                  <span className={`font-mono text-xs font-semibold uppercase tracking-wider ${
                    cat.color === 'primary' ? 'text-primary-light' :
                    cat.color === 'gold' ? 'text-gold-light' : 'text-teal-light'
                  }`}>
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.tools.map((tool) => (
                    <span
                      key={tool}
                      className={
                        cat.color === 'primary' ? 'tag-pill' :
                        cat.color === 'gold' ? 'tag-pill-gold' : 'tag-pill-teal'
                      }
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
