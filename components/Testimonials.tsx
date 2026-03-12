'use client'

import { useEffect, useRef, useState } from 'react'
import { Quote, Star } from 'lucide-react'
import { getSupabase } from '@/lib/supabase'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar_url?: string
  rating: number
}

const DEMO_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Émeka Okafor',
    role: 'Directeur de Recherche & Programmes',
    company: 'ENSEA — Abidjan',
    content:
      "Armel a démontré une maîtrise remarquable des méthodes économétriques avancées dans le cadre du programme Datafid2. Sa capacité à combiner rigueur statistique et vision stratégique, tout en l'ancrant dans les réalités africaines, en fait un profil exceptionnel. Ses travaux sur le scoring de fraude douanière ont impressionné l'ensemble du corps enseignant.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Mme Régine Ahouansou',
    role: 'Chef de Service Informatique & SI',
    company: 'DGID — Cotonou, Bénin',
    content:
      "Le système de scoring développé par Armel a transformé notre approche du contrôle fiscal. Son modèle détecte 89% des anomalies avec une précision remarquable et a significativement amélioré notre efficacité opérationnelle. Au-delà des compétences techniques, Armel sait vulgariser des concepts complexes pour les équipes non techniques.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Prof. Jean-Baptiste Mensah',
    role: 'Professeur de Statistiques',
    company: "Université d'Abomey-Calavi",
    content:
      "Étudiant brillant et chercheur rigoureux. Armel possède cette rare capacité à maîtriser à la fois les fondements théoriques et les applications pratiques de la statistique. Son mémoire de master sur la modélisation du risque fiscal au Bénin est d'une qualité qui honore notre faculté. Un talent prometteur pour la data science africaine.",
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'text-gold fill-gold' : 'text-dark-border'}
        />
      ))}
    </div>
  )
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-primary-sm">
      <span className="font-display font-bold text-white text-sm">{initials}</span>
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [testimonials, setTestimonials] = useState<Testimonial[]>(DEMO_TESTIMONIALS)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const client = getSupabase()
        if (!client) return
        const { data, error } = await client
          .from('testimonials')
          .select('*')
          .order('created_at', { ascending: false })
        if (!error && data && data.length > 0) setTestimonials(data)
      } catch {
        // keep demo
      }
    }
    fetchTestimonials()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [testimonials])

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-dark relative overflow-hidden"
    >
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="orb-gold w-96 h-96 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-10" />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-badge mb-4">Témoignages</span>
          <h2 className="section-title mt-4">
            Ce qu&apos;ils <span className="gradient-text">disent</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            Retours de collègues, professeurs et partenaires avec qui j&apos;ai eu la chance de travailler.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="reveal card-base p-6 flex flex-col"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Quote icon + stars */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Quote size={18} className="text-primary-light" />
                </div>
                <Stars count={t.rating} />
              </div>

              {/* Content */}
              <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
                <Avatar name={t.name} />
                <div>
                  <div className="text-text-primary font-semibold text-sm">{t.name}</div>
                  <div className="text-text-muted text-xs">{t.role}</div>
                  <div className="text-primary-light text-xs font-mono">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
