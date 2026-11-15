import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    // Ruta absoluta serializable: Turbopack no admite funciones en la configuración.
    remarkPlugins: [
      new URL('./remark-strip-frontmatter.mjs', import.meta.url).pathname,
    ],
    // rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
