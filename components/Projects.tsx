'use client'
import { useEffect, useRef, useState } from 'react'
import { Github, ExternalLink, Star, Brain, BarChart2, Eye, MessageSquare, Database, type LucideIcon } from 'lucide-react'
import { supabase, type Project } from '@/lib/supabase'

// Projets de démonstration si Supabase est vide
const DEMO_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Scoring de Fraude Douanière',
    description: 'Application Shiny R complète de détection de fraude via régression logistique. Feature engineering sur 8 variables, ROC/AUC, simulateur interactif avec score 0–100.',
    tags: ['R Shiny', 'Logit', 'ROC/AUC', 'ggplot2'],
    github_url: 'https://github.com/armeltindo',
    featured: true,
    category: 'machine-learning',
    created_at: '2026-02-01',
  },
  {
    id: 2,
    title: 'Analyse Flux Commerciaux CI 2023',
    description: 'Dashboard interactif d\'analyse des flux commerciaux ivoiriens. ACP, AFC, CAH, K-means, carte Leaflet, score de risque et génération de rapports automatisés.',
    tags: ['R Shiny', 'FactoMineR', 'Leaflet', 'Plotly'],
    github_url: 'https://github.com/armeltindo',
    featured: true,
    category: 'data-analysis',
    created_at: '2026-01-15',
  },
  {
    id: 3,
    title: 'Modèle de Prédiction Fiscale',
    description: 'Modèle ML de prédiction de l\'impôt sur le revenu basé sur des données macroéconomiques. Comparaison Random Forest, XGBoost et réseaux de neurones.',
    tags: ['Python', 'XGBoost', 'Scikit-learn', 'SHAP'],
    featured: false,
    category: 'machine-learning',
    created_at: '2025-10-01',
  },
  {
    id: 4,
    title: 'NLP — Analyse de Sentiments Fiscaux',
    description: 'Classification automatique de sentiments sur des retours contribuables. Fine-tuning de CamemBERT pour le français africain.',
    tags: ['Python', 'HuggingFace', 'CamemBERT', 'NLP'],
    featured: false,
    category: 'nlp',
    created_at: '2025-08-01',
  },
  {
    id: 5,
    title: 'Tableau de Bord Économique Bénin',
    description: 'Dashboard Power BI de suivi des indicateurs économiques du Bénin : PIB, inflation, recettes fiscales, avec actualisation automatique via API.',
    tags: ['Power BI', 'DAX', 'API', 'SQL'],
    featured: false,
    category: 'data-analysis',
    created_at: '2025-05-01',
  },
  {
    id: 6,
    title: 'Réseau de Neurones — Prévision PIB',
    description: 'Modèle LSTM pour la prévision du PIB des pays d\'Afrique de l\'Ouest à horizon 2 ans, entraîné sur données Banque Mondiale 1990–2024.',
    tags: ['Python', 'TensorFlow', 'LSTM', 'Économétrie'],
    featured: false,
    category: 'deep-learning',
    created_at: '2025-03-01',
  },
]

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  'machine-learning': Brain,
  'deep-learning': Brain,
  'nlp': MessageSquare,
  'computer-vision': Eye,
  'data-analysis': BarChart2,
}

const CATEGORY_LABELS: Record<string, string> = {
  'all': 'Tous',
  'machine-learning': 'ML',
  'deep-learning': 'Deep Learning',
  'nlp': 'NLP',
  'computer-vision': 'Vision',
  'data-analysis': 'Data Analysis',
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [projects, setProjects] = useState<Project[]>(DEMO_PROJECTS)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('featured', { ascending: false })
          .order('created_at', { ascending: false })

        if (!error && data && data.length > 0) {
          setProjects(data)
        }
      } catch {
        // Supabase non configuré → garder les démos
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [projects])

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))]
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)
  const featured = filtered.filter(p => p.featured)
  const rest = filtered.filter(p => !p.featured)

  return (
    <section id="projects" ref={sectionRef} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-glow rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="font-mono text-xs text-cyan-DEFAULT tracking-[0.3em] uppercase mb-3 block">
            — projets —
          </span>
          <h2 className="font-display text-5xl text-text-primary">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto text-sm">
            Applications réelles de ML/IA dans les domaines fiscal, douanier et économique
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 reveal">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-all ${
                filter === cat
                  ? 'bg-cyan-DEFAULT text-bg border-cyan-DEFAULT font-bold'
                  : 'border-border text-text-muted hover:border-cyan-DEFAULT/50 hover:text-text-primary'
              }`}
            >
              {CATEGORY_LABELS[cat] ?? cat}
            </button>
          ))}
        </div>

        {/* Featured projects */}
        {featured.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {featured.map((p, i) => {
              const Icon = CATEGORY_ICONS[p.category] ?? Database
              return (
                <div
                  key={p.id}
                  className="reveal card-hover bg-surface border border-border rounded-2xl p-6 relative overflow-hidden group"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Featured badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-amber-400/10 border border-amber-400/30 rounded-full px-2 py-0.5">
                    <Star size={10} className="text-amber-400 fill-amber-400" />
                    <span className="font-mono text-[10px] text-amber-400">Featured</span>
                  </div>

                  {/* Glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                  <div className="relative">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2.5 bg-cyan-glow border border-cyan-DEFAULT/20 rounded-lg">
                        <Icon size={18} className="text-cyan-DEFAULT" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-text-primary font-semibold text-lg leading-tight">{p.title}</h3>
                        <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                          {CATEGORY_LABELS[p.category]}
                        </span>
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{p.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                    </div>

                    <div className="flex gap-3 pt-3 border-t border-border">
                      {p.github_url && (
                        <a href={p.github_url} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-text-muted hover:text-text-primary font-mono text-xs transition-colors">
                          <Github size={13} /> Code
                        </a>
                      )}
                      {p.demo_url && (
                        <a href={p.demo_url} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-cyan-DEFAULT hover:text-cyan-dim font-mono text-xs transition-colors">
                          <ExternalLink size={13} /> Demo live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Other projects */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {rest.map((p, i) => {
              const Icon = CATEGORY_ICONS[p.category] ?? Database
              return (
                <div
                  key={p.id}
                  className="reveal card-hover bg-surface border border-border rounded-xl p-5 group relative overflow-hidden"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-DEFAULT/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={15} className="text-violet-bright" />
                    <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                      {CATEGORY_LABELS[p.category]}
                    </span>
                  </div>
                  <h3 className="text-text-primary font-semibold mb-2 text-sm leading-snug">{p.title}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed mb-3 line-clamp-3">{p.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {p.tags.slice(0, 3).map(t => <span key={t} className="tag-pill text-[10px]">{t}</span>)}
                  </div>
                  <div className="flex gap-3 pt-2 border-t border-border">
                    {p.github_url && (
                      <a href={p.github_url} target="_blank" rel="noopener noreferrer"
                        className="text-text-muted hover:text-text-primary font-mono text-xs transition-colors flex items-center gap-1">
                        <Github size={11} /> Code
                      </a>
                    )}
                    {p.demo_url && (
                      <a href={p.demo_url} target="_blank" rel="noopener noreferrer"
                        className="text-cyan-DEFAULT font-mono text-xs flex items-center gap-1">
                        <ExternalLink size={11} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
