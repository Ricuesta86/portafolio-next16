import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, FileText } from 'lucide-react'
import { getPostsMeta, formatDate } from '../lib/posts'
import AnimatedSpan from '../components/AnimatedSpan'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artículos y tutoriales sobre desarrollo de software, React, TypeScript y arquitectura.',
}

export default function BlogPage() {
  const posts = getPostsMeta()

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-12 text-center">
          <AnimatedSpan>Blog</AnimatedSpan>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Artículos y{' '}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              tutoriales
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Ideas, lecciones y experiencias sobre desarrollo de software.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-center text-slate-500 dark:text-slate-400">
            Aún no hay publicaciones.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-900/50 dark:text-brand-400">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h2 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                    {post.title}
                  </h2>
                  {post.date && (
                    <p className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.date)}
                    </p>
                  )}
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand-600 dark:text-brand-400">
                    Leer artículo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}