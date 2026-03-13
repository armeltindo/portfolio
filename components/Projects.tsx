'use client'

import { useEffect, useRef, useState } from 'react'
import { Github, ExternalLink, Star, Brain, BarChart2, Eye, MessageSquare, Database, Zap } from 'lucide-react'
import type { ComponentType } from 'react'
import { getSupabase, type Project } from '@/lib/supabase'
import { PROJECTS as DEMO_PROJECTS } from '@/data/projects'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CATEGORY_ICONS: Record<string, ComponentType<any>> = {
  'machine-learning': Brain,
  'deep-learning': Zap,
  'nlp': MessageSquare,
  'computer-vision': Eye,
  'data-analysis': BarChart2,
}

const CATEGORY_LABELS: Record<string, string> = {
  all: 'Tous',
  'machine-learning': 'Machine Learning',
  'deep-learning': 'Deep Learning',
  nlp: 'NLP',
  'computer-vision': 'Vision',
  'data-analysis': 'Data Analysis',
}

const METRIC_COLORS: Record<string, string> = {
  primary: 'text-primary-light bg-primary/10 border-primary/25',
  gold: 'text-gold-light bg-gold/10 border-gold/25',
  teal: 'text-teal-light bg-teal/10 border-teal/25',
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [projects, setProjects] = useState<Project[]>(DEMO_PROJECTS)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const client = getSupabase()
        if (!client) { setLoading(false); return }
        const { data, error } = await client
          .from('projects')
          .select('*')
          .order('featured', { ascending: false })
          .order('created_at', { ascending: false })
        if (!error && data && data.length > 0) setProjects(data)
      } catch {
        // keep demo
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  useEffect(() => {
    if (loading) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.05 }
    )
    // Small delay so DOM is fully painted before observing
    const t = setTimeout(() => {
      sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    }, 50)
    return () => { clearTimeout(t); observer.disconnect() }
  }, [loading, projects])

  const categories = ['all', ...Array.from(new Set(projects.map((p) => p.category)))]
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)
  const featured = filtered.filter((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

  if (loading) {
    return (
      <section id="projects" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-dark-surface">
        <div className="max-w-7xl mx-auto flex justify-center items-center h-48">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      </section>
    )
  }

  return (
    <section id="projects" ref={sectionRef} className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-dark-surface relative overflow-hidden">
      <div className="orb-primary w-96 h-96 bottom-0 left-0 opacity-20" />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="mb-12 reveal">
          <span className="section-badge mb-4">Projets</span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="section-title mt-4">
              Preuves <span className="gradient-text">concrètes</span>
            </h2>
            <p className="text-text-secondary max-w-sm">
              Modèles en production, pas juste en notebook — données fiscales et économiques africaines réelles.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                filter === cat
                  ? 'bg-primary border-primary text-white font-semibold shadow-primary-sm'
                  : 'border-dark-border text-text-muted hover:border-primary/40 hover:text-text-primary bg-dark-card'
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
              const metricColor = METRIC_COLORS[(p as Project & { metric_color?: string }).metric_color ?? 'primary']
              const metric = (p as Project & { metric?: string }).metric
              return (
                <div
                  key={p.id}
                  className="reveal card-base p-6 relative overflow-hidden group"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Featured badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gold/10 border border-gold/25 rounded-full px-2.5 py-1">
                    <Star size={10} className="text-gold fill-gold" />
                    <span className="font-mono text-[10px] text-gold-light font-medium">Featured</span>
                  </div>

                  {/* Icon + header */}
                  <div className="flex items-start gap-4 mb-4 pr-20">
                    <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                      <Icon size={20} className="text-primary-light" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-text-primary text-lg leading-tight">{p.title}</h3>
                      <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                        {CATEGORY_LABELS[p.category]}
                      </span>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{p.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between pt-4 border-t border-dark-border">
                    <div className="flex gap-3">
                      {p.github_url && (
                        <a href={p.github_url} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-text-muted hover:text-text-primary font-mono text-xs transition-colors">
                          <Github size={13} /> Code
                        </a>
                      )}
                      {p.demo_url && (
                        <a href={p.demo_url} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-primary-light font-mono text-xs transition-colors">
                          <ExternalLink size={13} /> Demo
                        </a>
                      )}
                    </div>
                    {metric && (
                      <span className={`font-mono text-xs px-2.5 py-1 rounded-full border font-medium ${metricColor}`}>
                        {metric}
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Other projects */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p, i) => {
              const Icon = CATEGORY_ICONS[p.category] ?? Database
              const metricColor = METRIC_COLORS[(p as Project & { metric_color?: string }).metric_color ?? 'primary']
              const metric = (p as Project & { metric?: string }).metric
              return (
                <div
                  key={p.id}
                  className="reveal card-base p-5 group"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={15} className="text-primary-light" />
                    <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                      {CATEGORY_LABELS[p.category]}
                    </span>
                    {metric && (
                      <span className={`ml-auto font-mono text-[10px] px-2 py-0.5 rounded-full border ${metricColor}`}>
                        {metric}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-text-primary mb-2 leading-snug">{p.title}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed mb-3 line-clamp-3">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.slice(0, 3).map((t) => <span key={t} className="tag-pill text-[10px]">{t}</span>)}
                    {p.tags.length > 3 && (
                      <span className="tag-pill text-[10px]">+{p.tags.length - 3}</span>
                    )}
                  </div>
                  <div className="flex gap-3 pt-3 border-t border-dark-border">
                    {p.github_url && (
                      <a href={p.github_url} target="_blank" rel="noopener noreferrer"
                        className="text-text-muted hover:text-text-primary font-mono text-xs transition-colors flex items-center gap-1">
                        <Github size={11} /> Code
                      </a>
                    )}
                    {p.demo_url && (
                      <a href={p.demo_url} target="_blank" rel="noopener noreferrer"
                        className="text-primary-light font-mono text-xs flex items-center gap-1">
                        <ExternalLink size={11} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-10 text-center reveal">
          <a
            href="https://github.com/armeltindo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <Github size={16} />
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
