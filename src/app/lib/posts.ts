import fs from 'fs'
import path from 'path'

export interface PostMeta {
  slug: string
  title: string
  date?: string
}

const contentDir = path.join(process.cwd(), 'src', 'content')

function parseFrontmatter(content: string): Record<string, string> {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/)
  if (!match) return {}
  const result: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const separator = line.indexOf(':')
    if (separator === -1) continue
    result[line.slice(0, separator).trim()] = line.slice(separator + 1).trim()
  }
  return result
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return []
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getPostsMeta(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(contentDir, `${slug}.mdx`), 'utf-8')
      const frontmatter = parseFrontmatter(raw)
      return {
        slug,
        title: frontmatter.title ?? slug,
        date: frontmatter.date,
      }
    })
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return 0
    })
}

export function getPostTitle(slug: string): string | undefined {
  if (!fs.existsSync(path.join(contentDir, `${slug}.mdx`))) return undefined
  const raw = fs.readFileSync(path.join(contentDir, `${slug}.mdx`), 'utf-8')
  return parseFrontmatter(raw).title
}

export function getPostMeta(slug: string): PostMeta | undefined {
  return getPostsMeta().find((post) => post.slug === slug)
}

export function formatDate(date?: string): string {
  if (!date) return ''
  const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(date)
  const parsed = new Date(dateOnly ? `${date}T00:00:00Z` : date)
  if (Number.isNaN(parsed.getTime())) return date
  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...(dateOnly ? { timeZone: 'UTC' } : {}),
  }).format(parsed)
}