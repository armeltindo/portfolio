'use client'
import { useEffect, useRef, useState } from 'react'
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Linkedin } from 'lucide-react'
import { getSupabase } from '@/lib/supabase'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
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
        .insert([{ name: form.name, email: form.email, message: form.message }])

      if (error) throw error
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Erreur lors de l\'envoi. Réessayez.')
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-28 px-6 bg-surface/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-glow rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-xs text-cyan-DEFAULT tracking-[0.3em] uppercase mb-3 block">
            — contact —
          </span>
          <h2 className="font-display text-5xl text-text-primary">
            Collaborons <span className="gradient-text">Ensemble</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto text-sm">
            Un projet de data science, une opportunité ou simplement envie d'échanger ?
            Je lis tous les messages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left — Info */}
          <div className="reveal space-y-8">
            <div>
              <h3 className="font-mono text-sm text-text-primary font-semibold mb-6 tracking-wider uppercase">
                <span className="text-cyan-DEFAULT">{'>'}</span> Infos de contact
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'tindo.armel@example.com', href: 'mailto:tindo.armel@example.com' },
                  { icon: MapPin, label: 'Localisation', value: 'Cotonou, Bénin', href: null },
                  { icon: Linkedin, label: 'LinkedIn', value: '/in/tindo-armel', href: 'https://linkedin.com' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl card-hover">
                    <div className="p-2 bg-cyan-glow border border-cyan-DEFAULT/20 rounded-lg flex-shrink-0">
                      <Icon size={16} className="text-cyan-DEFAULT" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-text-muted uppercase tracking-wider">{label}</div>
                      {href ? (
                        <a href={href} className="text-text-secondary hover:text-cyan-DEFAULT text-sm transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="text-text-secondary text-sm">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status indicator */}
            <div className="p-4 bg-surface border border-border rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <div className="font-mono text-xs text-text-primary font-semibold">Disponible</div>
                  <div className="font-mono text-[10px] text-text-muted mt-0.5">Ouvert aux opportunités · réponse sous 48h</div>
                </div>
              </div>
            </div>

            {/* Terminal decorative */}
            <div className="font-mono text-xs text-text-muted bg-surface border border-border rounded-xl p-4 space-y-1.5">
              <div><span className="text-cyan-DEFAULT">$</span> whoami</div>
              <div className="text-text-secondary pl-2">TINDO Armel — Data Scientist</div>
              <div><span className="text-cyan-DEFAULT">$</span> cat interests.txt</div>
              <div className="text-text-secondary pl-2">Machine Learning, IA appliquée,</div>
              <div className="text-text-secondary pl-2">Fiscalité, Économie, Pédagogie</div>
              <div><span className="text-cyan-DEFAULT">$</span> echo $STATUS</div>
              <div className="text-emerald-400 pl-2">OPEN_TO_WORK=true</div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
                  <span className="text-cyan-DEFAULT">01.</span> Nom complet
                </label>
                <input
                  type="text"
                  className="input-dark w-full rounded-xl px-4 py-3 text-sm"
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
                  <span className="text-cyan-DEFAULT">02.</span> Email
                </label>
                <input
                  type="email"
                  className="input-dark w-full rounded-xl px-4 py-3 text-sm"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
                  <span className="text-cyan-DEFAULT">03.</span> Message
                </label>
                <textarea
                  rows={5}
                  className="input-dark w-full rounded-xl px-4 py-3 text-sm resize-none"
                  placeholder="Décrivez votre projet ou votre message..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>

              {/* Feedback */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-emerald-400/10 border border-emerald-400/30 rounded-xl text-emerald-400 text-sm">
                  <CheckCircle size={16} /> Message envoyé — je vous réponds sous 48h !
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-400/10 border border-red-400/30 rounded-xl text-red-400 text-sm">
                  <AlertCircle size={16} /> {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-DEFAULT to-violet-bright text-bg font-mono text-sm font-bold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 shadow-cyan"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={15} /> Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
