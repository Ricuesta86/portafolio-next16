import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostSlugs, getPostMeta, formatDate } from '../../lib/posts';
import Container from '../../components/Container';
import ArrowLink from '../../components/ArrowLink';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostMeta(slug);

  if (!post) {
    return { title: 'Artículo no encontrado' };
  }

  return {
    title: post.title,
    description: `Nota de ingeniería de Ricuesta: ${post.title}.`,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostMeta(slug);

  let Post: () => React.ReactNode;
  try {
    const loadedModule = await import(`@/content/${slug}.mdx`);
    Post = loadedModule.default;
  } catch {
    notFound();
  }

  return (
    <>
      <section className="border-b border-rule pb-10 pt-14 md:pb-12 md:pt-20">
        <Container>
          <ArrowLink href="/blog" className="mb-8">
            Volver al blog
          </ArrowLink>
          <article className="reading-width">
            <p className="label">Nota de ingeniería</p>
            <h1 className="mt-4 font-display text-h2 text-ink">
              {post?.title}
            </h1>
            {post?.date && (
              <time
                dateTime={post.date}
                className="mt-4 block font-mono text-label uppercase tracking-[0.14em] text-muted"
              >
                {formatDate(post.date)}
              </time>
            )}
          </article>
        </Container>
      </section>

      <div className="section">
        <Container>
          <article className="prose prose-lg reading-width">
            <Post />
          </article>
        </Container>
      </div>
    </>
  );
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}
