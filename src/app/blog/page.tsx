import type { Metadata } from 'next';
import Link from 'next/link';
import { getPostsMeta, formatDate } from '../lib/posts';
import Container from '../components/Container';
import ArrowLink from '../components/ArrowLink';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Notas de ingeniería de Ricuesta sobre React, TypeScript, arquitectura de software y decisiones técnicas.',
};

export default function BlogPage() {
  const posts = getPostsMeta();

  return (
    <>
      <section className="section border-b border-rule">
        <Container>
          <p className="label">Blog</p>
          <h1 className="mt-5 max-w-4xl font-display text-display text-ink">
            Notas de ingeniería.
            <span className="block text-muted">
              Decisiones, no tutoriales de moda.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-body text-muted">
            Escribo sobre lo que cambia cuando un producto crece: arquitectura,
            tipos, límites entre sistemas y el coste de las decisiones que
            parecían pequeñas.
          </p>
        </Container>
      </section>

      <section className="section">
        <Container>
          {posts.length === 0 ? (
            <div className="border-t border-rule py-16">
              <p className="font-display text-h3 text-ink">
                Todavía no hay publicaciones.
              </p>
              <p className="mt-3 max-w-lg text-small text-muted">
                Estoy preparando las primeras notas. Mientras tanto, puedes ver
                el trabajo que hay detrás de este portafolio.
              </p>
              <ArrowLink href="/projects" className="mt-6">
                Ver proyectos
              </ArrowLink>
            </div>
          ) : (
            <ol>
              {posts.map((post, index) => (
                <li key={post.slug} className="border-t border-rule">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid min-h-24 gap-3 py-7 md:grid-cols-12 md:items-baseline md:gap-6"
                  >
                    <span className="font-mono text-label tracking-[0.14em] text-muted md:col-span-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="md:col-span-8">
                      <h2 className="font-display text-h3 text-ink transition-colors duration-[var(--duration-fast)] group-hover:text-accent-strong">
                        {post.title}
                      </h2>
                      {post.date && (
                        <time
                          dateTime={post.date}
                          className="mt-2 block font-mono text-label uppercase tracking-[0.14em] text-muted"
                        >
                          {formatDate(post.date)}
                        </time>
                      )}
                    </div>
                    <span
                      aria-hidden="true"
                      className="text-lg text-accent-strong md:col-span-3 md:text-right"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          )}
        </Container>
      </section>
    </>
  );
}
