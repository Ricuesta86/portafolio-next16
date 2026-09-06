import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPostSlugs, getPostTitle } from '../../lib/posts'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const title = getPostTitle(slug)
  return { title: title ?? 'Blog' }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let Post: () => React.ReactNode
  try {
    const loadedModule = await import(`@/content/${slug}.mdx`)
    Post = loadedModule.default
  } catch {
    notFound()
  }

  return (
    <article className="prose prose-lg dark:prose-invert mx-auto max-w-3xl px-4 pt-24 pb-20">
      <Post />
    </article>
  )
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}