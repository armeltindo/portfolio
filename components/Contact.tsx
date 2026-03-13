'use client'

import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Linkedin, Clock, Github } from 'lucide-react'
import { getSupabase } from '@/lib/supabase'

const schema = z.object({
  name: z.string().min(2, 'Minimum 2 caractères').max(80),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().max(120).optional(),
  message: z.string().min(10, 'Minimum 10 caractères').max(2000),
})

type FormData = z.infer<typeof schema>

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'armeltindo@gmail.com',
    href: 'mailto:armeltindo@gmail.com',
    color: 'primary',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/tindo-armel',
    href: 'https://www.linkedin.com/in/armel-tindo-839916190',
    color: 'primary',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/armeltindo',
    href: 'https://github.com/armeltindo',
    color: 'primary',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Cotonou, Bénin 🇧🇯',
    href: null,
    color: 'gold',
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const [supabaseError, setSupabaseError] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const onSubmit = async (data: FormData) => {
    setSupabaseError('')
    const client = getSupabase()
    if (!client) {
      setSupabaseError('Service de messagerie non configuré.')
      return
    }
    const { error } = await client
      .from('contact_messages')
      .insert([{ name: data.name, email: data.email, message: `[${data.subject ?? ''}] ${data.message}` }])
    if (error) {
      setSupabaseError(error.message)
      return
    }
    reset()
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-dark-surface relative overflow-hidden"
    >
      <div className="orb-primary w-96 h-96 top-0 right-0 opacity-20" />
      <div className="orb-gold w-80 h-80 bottom-0 left-0 opacity-15" />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-badge mb-4">Contact</span>
          <h2 className="section-title mt-4">
            Travaillons <span className="gradient-text">Ensemble</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto text-lg">
            Un projet data, une opportunité ou simplement envie d&apos;échanger ? Je réponds
            à tous les messages sous 48h.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Left — Info (2/5) */}
          <div className="lg:col-span-2 space-y-6 reveal">

            {/* Availability */}
            <div className="card-base p-5 bg-gradient-to-br from-success/10 to-success/5 border-success/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                <span className="font-display font-bold text-text-primary">Disponible</span>
              </div>
              <p className="text-text-secondary text-sm">
                Ouvert aux opportunités full-time, consulting et projets freelance.
              </p>
              <div className="flex items-center gap-2 mt-3 text-text-muted text-xs font-mono">
                <Clock size={12} />
                Réponse moyenne : 24–48h
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="card-base p-4 flex items-center gap-4 group">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    color === 'primary' ? 'bg-primary/15 group-hover:bg-primary/25' : 'bg-gold/15 group-hover:bg-gold/25'
                  } transition-colors`}>
                    <Icon size={16} className={color === 'primary' ? 'text-primary-light' : 'text-gold-light'} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] text-text-muted uppercase tracking-wider">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={`text-sm truncate block hover:underline ${
                          color === 'primary' ? 'text-primary-light' : 'text-gold-light'
                        }`}
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-text-secondary text-sm">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* What I can help with */}
            <div className="card-base p-5">
              <div className="font-mono text-xs text-text-muted uppercase tracking-widest mb-3">Je peux vous aider sur</div>
              <div className="space-y-2">
                {[
                  'Projets Machine Learning & IA',
                  'Analyse & visualisation de données',
                  'Dashboards & Business Intelligence',
                  'Modélisation statistique & économétrie',
                  'Consulting & audit de données',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-text-secondary text-sm">
                    <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form (3/5) */}
          <div className="lg:col-span-3 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="card-base p-6 lg:p-8">
              <h3 className="font-display font-bold text-text-primary text-xl mb-6">
                Envoyez-moi un message
              </h3>

              {isSubmitSuccessful && !supabaseError ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <CheckCircle size={40} className="text-success" />
                  <p className="text-text-primary font-semibold text-lg">Message envoyé !</p>
                  <p className="text-text-secondary text-sm">Je vous réponds sous 48h.</p>
                  <button
                    onClick={() => reset()}
                    className="btn-outline mt-2"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-text-secondary text-sm font-medium mb-2">
                        Nom complet <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`input-field ${errors.name ? 'border-danger/60 focus:border-danger' : ''}`}
                        placeholder="Votre nom"
                        {...register('name')}
                      />
                      {errors.name && (
                        <p className="mt-1 text-danger text-xs">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm font-medium mb-2">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className={`input-field ${errors.email ? 'border-danger/60 focus:border-danger' : ''}`}
                        placeholder="votre@email.com"
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="mt-1 text-danger text-xs">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-text-secondary text-sm font-medium mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Ex: Projet ML, Collaboration, Question..."
                      {...register('subject')}
                    />
                  </div>

                  <div>
                    <label className="block text-text-secondary text-sm font-medium mb-2">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      rows={6}
                      className={`input-field resize-none ${errors.message ? 'border-danger/60 focus:border-danger' : ''}`}
                      placeholder="Décrivez votre projet, vos besoins ou votre message..."
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className="mt-1 text-danger text-xs">{errors.message.message}</p>
                    )}
                  </div>

                  {supabaseError && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-danger/10 border border-danger/25 text-danger text-sm">
                      <AlertCircle size={18} className="flex-shrink-0" />
                      <span>{supabaseError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
