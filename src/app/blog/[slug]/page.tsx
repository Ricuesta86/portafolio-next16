import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let Post: () => React.ReactNode
  try {
    const module = await import(`@/content/${slug}.mdx`)
    Post = module.default
  } catch {
    notFound()
  }

  return <Post />
}

export function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src', 'content')
  const files = fs.readdirSync(contentDir)
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({ slug: file.replace(/\.mdx$/, '') }))
}
