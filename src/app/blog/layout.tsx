export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto py-10 px-4">
      {children}
    </article>
  )
}