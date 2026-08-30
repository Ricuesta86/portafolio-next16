import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Personaliza elementos HTML si quieres
    // Por ejemplo, hacer que los enlaces se abran en nueva pestaña
    a: ({ href, children }) => (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    ...components,
  }
}