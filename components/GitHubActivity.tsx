import { Github, Star, GitFork, ExternalLink, Code2 } from 'lucide-react'

type GitHubRepo = {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  updated_at: string
}

const LANG_COLORS: Record<string, string> = {
  Python: '#3572A5',
  R: '#198CE7',
  TypeScript: '#2B7489',
  JavaScript: '#F1E05A',
  Jupyter: '#DA5B0B',
  HTML: '#E34C26',
}

async function fetchRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      'https://api.github.com/users/armeltindo/repos?sort=updated&per_page=6&type=public',
      {
        next: { revalidate: 3600 },
        headers: { Accept: 'application/vnd.github+json' },
      }
    )
    if (!res.ok) return []
    const data: GitHubRepo[] = await res.json()
    return data.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6)
  } catch {
    return []
  }
}

export default async function GitHubActivity() {
  const repos = await fetchRepos()
  if (repos.length === 0) return null

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark relative overflow-hidden">
      <div className="orb-primary w-80 h-80 top-0 right-0 opacity-15" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="section-badge mb-3 inline-flex">
              <Github size={12} />
              GitHub
            </span>
            <h2 className="section-title mt-3">
              Code <span className="gradient-text">Open Source</span>
            </h2>
          </div>
          <a
            href="https://github.com/armeltindo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex self-start sm:self-auto"
          >
            <Github size={15} />
            Voir le profil complet
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-base p-5 group flex flex-col gap-3 hover:border-primary/40 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Code2 size={15} className="text-primary-light flex-shrink-0" />
                  <span className="font-display font-bold text-text-primary text-sm truncate group-hover:text-primary-light transition-colors">
                    {repo.name}
                  </span>
                </div>
                <ExternalLink size={13} className="text-text-muted flex-shrink-0 group-hover:text-primary-light transition-colors" />
              </div>

              {repo.description && (
                <p className="text-text-secondary text-xs leading-relaxed line-clamp-2 flex-1">
                  {repo.description}
                </p>
              )}

              {repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {repo.topics.slice(0, 3).map((t) => (
                    <span key={t} className="tag-pill text-[10px]">{t}</span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-4 pt-2 border-t border-dark-border">
                {repo.language && (
                  <div className="flex items-center gap-1.5 text-text-muted text-xs">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: LANG_COLORS[repo.language] ?? '#8EA4C0' }}
                    />
                    {repo.language}
                  </div>
                )}
                {repo.stargazers_count > 0 && (
                  <div className="flex items-center gap-1 text-text-muted text-xs ml-auto">
                    <Star size={11} className="text-gold" />
                    {repo.stargazers_count}
                  </div>
                )}
                {repo.forks_count > 0 && (
                  <div className="flex items-center gap-1 text-text-muted text-xs">
                    <GitFork size={11} />
                    {repo.forks_count}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
