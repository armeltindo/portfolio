'use client'

import { useEffect, useRef } from 'react'
import { Brain, BarChart3, PieChart, TrendingUp, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'Machine Learning & IA',
    subtitle: 'Modèles prédictifs & intelligents',
    description:
      'Développement de modèles de classification, régression, clustering et détection d\'anomalies. Du scoring de fraude aux systèmes de recommandation, je construis des solutions ML adaptées à vos données.',
    features: [
      'Classification & régression supervisée',
      'Détection de fraude & anomalies',
      'Deep Learning (CNN, LSTM, Transformers)',
      'AutoML & optimisation d\'hyperparamètres',
      'Déploiement et monitoring de modèles',
    ],
    color: 'primary',
    gradient: 'from-primary/15 to-primary/5',
    border: 'border-primary/20',
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary-light',
  },
  {
    icon: BarChart3,
    title: 'Analyse de Données',
    subtitle: 'Insights & storytelling data',
    description:
      'Exploration approfondie, nettoyage et transformation de vos données brutes en insights actionnables. Visualisations interactives et rapports qui racontent une histoire claire à vos décideurs.',
    features: [
      'Analyse exploratoire (EDA) avancée',
      'Nettoyage & ingénierie de features',
      'Visualisations interactives (Plotly, Seaborn)',
      'Rapports automatisés',
      'Analyse de cohortes & segmentation',
    ],
    color: 'gold',
    gradient: 'from-gold/15 to-gold/5',
    border: 'border-gold/20',
    iconBg: 'bg-gold/15',
    iconColor: 'text-gold-light',
  },
  {
    icon: PieChart,
    title: 'Business Intelligence',
    subtitle: 'Dashboards & tableaux de bord',
    description:
      'Conception de tableaux de bord interactifs sous Power BI, R Shiny ou Looker Studio. Des KPIs en temps réel qui permettent à vos équipes de prendre des décisions basées sur les données.',
    features: [
      'Dashboards Power BI & DAX',
      'Applications R Shiny interactives',
      'Connexion aux sources de données live',
      'KPIs & métriques métier',
      'Formation & transfert de compétences',
    ],
    color: 'teal',
    gradient: 'from-teal/15 to-teal/5',
    border: 'border-teal/20',
    iconBg: 'bg-teal/15',
    iconColor: 'text-teal-light',
  },
  {
    icon: TrendingUp,
    title: 'Modélisation Statistique',
    subtitle: 'Économétrie & séries temporelles',
    description:
      'Expertise en économétrie, inférence causale et modélisation des séries temporelles. Des prévisions économiques fiables aux analyses d\'impact de politiques publiques, je mobilise la statistique rigoureuse.',
    features: [
      'Économétrie & modèles causaux',
      'Séries temporelles (ARIMA, LSTM, Prophet)',
      'Tests d\'hypothèses & intervalles de confiance',
      'Analyses multivariées (ACP, AFC)',
      'Évaluation d\'impact de politiques',
    ],
    color: 'primary',
    gradient: 'from-primary/10 to-gold/5',
    border: 'border-primary/15',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary-light',
  },
]

export default function Services() {
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
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-dark relative overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-50" />
      <div className="orb-gold w-96 h-96 top-0 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-badge mb-4">
            Ce que je propose
          </span>
          <h2 className="section-title mt-4">
            Mes <span className="gradient-text">Services</span>
          </h2>
          <p className="text-text-secondary mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
            De l&apos;analyse exploratoire au déploiement en production, je vous accompagne
            à chaque étape de votre projet data.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className={`reveal card-base p-6 lg:p-8 bg-gradient-to-br ${s.gradient} border ${s.border} group cursor-default`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className={s.iconColor} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-text-primary text-xl leading-tight">
                      {s.title}
                    </h3>
                    <p className={`text-sm font-medium mt-0.5 ${s.iconColor}`}>{s.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-6 text-sm lg:text-base">
                  {s.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <div className={`w-1.5 h-1.5 rounded-full ${s.iconBg} border border-current ${s.iconColor} flex-shrink-0 mt-1.5`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-sm font-medium ${s.iconColor} hover:gap-3 transition-all duration-200`}
                >
                  Discuter de votre projet
                  <ArrowRight size={14} />
                </a>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center reveal">
          <p className="text-text-secondary mb-4">
            Vous avez un projet spécifique ? Échangeons sur vos besoins.
          </p>
          <a href="#contact" className="btn-primary inline-flex">
            Démarrer un projet
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
