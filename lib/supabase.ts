import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
