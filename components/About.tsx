'use client'

import { useEffect, useRef } from 'react'
import { Target, Lightbulb, Users, Award } from 'lucide-react'

const highlights = [
  { value: '8+', label: 'Projets livrés', sub: 'ML, IA & Data' },
  { value: '3+', label: 'Années d\'expérience', sub: 'Secteur public & académique' },
  { value: '2026', label: 'Datafid2 ENSEA', sub: 'Spécialisation en cours' },
  { value: 'Top', label: 'Promotion', sub: 'Master Stats & Éco.' },
]

const values = [
  {
    icon: Target,
    title: 'Rigueur analytique',
    desc: 'Chaque modèle est validé, chaque insight étayé. La précision statistique est non-négociable.',
  },
  {
    icon: Lightbulb,
    title: 'Impact concret',
    desc: 'Des solutions concrètes qui créent de la valeur réelle, pas juste des modèles avec un bon AUC.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    desc: 'La data science est un travail d\'équipe. Je communique les insights à tous les niveaux.',
  },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-dark-surface relative overflow-hidden">
      <div className="orb-primary w-96 h-96 top-0 right-0 opacity-30" />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="mb-16 reveal">
          <span className="section-badge mb-4 inline-flex">
            <Award size={12} />
            À propos
          </span>
          <h2 className="section-title mt-4 max-w-xl">
            Passionné de data,{' '}
            <span className="gradient-text">ancré en Afrique</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Story */}
          <div className="space-y-8 reveal">
            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p className="text-lg">
                Né à{' '}
                <span className="text-text-primary font-medium">Cotonou, Bénin</span>, j&apos;ai
                découvert la puissance des données lors de mes études en Statistiques et
                Économétrie à l&apos;ENSEA d&apos;Abidjan. Cette révélation a orienté toute ma
                trajectoire professionnelle.
              </p>
              <p>
                Aujourd&apos;hui, Statisticien-Économiste à la{' '}
                <span className="text-text-primary font-medium">
                  Direction Générale des Impôts et Domaines (DGID) du Bénin
                </span>
                , je transforme des données fiscales et économiques complexes en insights
                stratégiques qui orientent des décisions à impact réel pour des millions de
                citoyens.
              </p>
              <p>
                Ma spécialisation dans le programme{' '}
                <span className="text-primary-light font-medium">Datafid2 à l&apos;ENSEA (2026)</span>{' '}
                m&apos;a permis de maîtriser les techniques avancées d&apos;analyse financière,
                de scoring de risque et de modélisation prédictive appliquées aux
                administrations douanières et fiscales africaines.
              </p>
              <p>
                Je crois profondément que la data science, appliquée avec rigueur au contexte
                africain, est un levier transformateur pour notre développement économique et
                social.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 pt-4">
              <h3 className="font-display font-bold text-text-primary text-lg">Mon approche</h3>
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="flex gap-4 p-4 rounded-xl bg-dark-card border border-dark-border hover:border-primary/30 transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon size={16} className="text-primary-light" />
                    </div>
                    <div>
                      <div className="text-text-primary font-semibold text-sm mb-1">{v.title}</div>
                      <div className="text-text-secondary text-sm leading-relaxed">{v.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right — Stats grid */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="card-base p-5 group cursor-default"
                >
                  <div className="font-display font-extrabold text-3xl gradient-text-blue mb-1">
                    {h.value}
                  </div>
                  <div className="text-text-primary font-semibold text-sm">{h.label}</div>
                  <div className="text-text-muted text-xs mt-1">{h.sub}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-gold/5 border border-primary/20">
              <div className="text-4xl text-primary-light font-display leading-none mb-3">&ldquo;</div>
              <p className="text-text-secondary italic leading-relaxed">
                Les données ne mentent pas. Elles révèlent des vérités que l&apos;intuition seule
                ne peut percevoir. Mon rôle est de les faire parler, clairement et honnêtement.
              </p>
              <div className="mt-4 text-text-primary font-semibold text-sm">— Tindo Armel</div>
            </div>

            {/* Tech stack preview */}
            <div className="mt-6 p-4 rounded-xl bg-dark-card border border-dark-border">
              <div className="text-text-muted text-xs font-mono mb-3 uppercase tracking-widest">Stack principal</div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'R', 'SQL', 'TensorFlow', 'Scikit-learn', 'Power BI', 'R Shiny', 'Next.js'].map((tech) => (
                  <span key={tech} className="tag-pill">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
