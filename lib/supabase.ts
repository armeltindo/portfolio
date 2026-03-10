import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let _client: SupabaseClient | null = null

export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  if (!_client) _client = createClient(url, key)
  return _client
}

// Alias pour compatibilité descendante — peut retourner null si non configuré
export const supabase = {
  from: (table: string) => {
    const client = getSupabase()
    if (!client) {
      // Retourne un objet factice qui ne lève pas d'erreur
      return {
        select: () => ({ order: () => ({ order: () => Promise.resolve({ data: null, error: new Error('Supabase non configuré') }) }) }),
        insert: () => Promise.resolve({ data: null, error: new Error('Supabase non configuré') }),
      }
    }
    return client.from(table)
  },
}

export type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  github_url?: string
  demo_url?: string
  image_url?: string
  featured: boolean
  category: 'machine-learning' | 'deep-learning' | 'nlp' | 'computer-vision' | 'data-analysis'
  created_at: string
}

export type ContactMessage = {
  id?: number
  name: string
  email: string
  message: string
  created_at?: string
}
