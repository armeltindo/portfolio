'use client'

import { useEffect, useRef, useState } from 'react'
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Linkedin, Clock, Github } from 'lucide-react'
import { getSupabase } from '@/lib/supabase'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tindo.armel@example.com',
    href: 'mailto:tindo.armel@example.com',
    color: 'primary',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/tindo-armel',
    href: 'https://linkedin.com/in/tindo-armel',
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
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    setErrorMsg('')

    try {
      const client = getSupabase()
      if (!client) throw new Error('Service de messagerie non configuré.')

      const { error } = await client
        .from('contact_messages')
        .insert([{ name: form.name, email: form.email, message: `[${form.subject}] ${form.message}` }])

      if (error) throw error
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : "Erreur lors de l'envoi. Réessayez.")
    }
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

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-text-secondary text-sm font-medium mb-2">
                      Nom complet <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm font-medium mb-2">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="votre@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
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
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-text-secondary text-sm font-medium mb-2">
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    rows={6}
                    className="input-field resize-none"
                    placeholder="Décrivez votre projet, vos besoins ou votre message..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                {/* Status feedback */}
                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-success/10 border border-success/25 text-success text-sm">
                    <CheckCircle size={18} className="flex-shrink-0" />
                    <span>Message envoyé avec succès ! Je vous réponds sous 48h.</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-danger/10 border border-danger/25 text-danger text-sm">
                    <AlertCircle size={18} className="flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
