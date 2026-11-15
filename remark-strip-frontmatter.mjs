/**
 * Retira el bloque de frontmatter YAML antes de renderizar el MDX.
 *
 * Los artículos guardan título y fecha en frontmatter, que `lib/posts.ts` lee
 * por su cuenta. MDX no interpreta ese bloque, así que sin este plugin
 * aparecería como texto en el cuerpo del artículo.
 */
const remarkStripFrontmatter = () => (tree, file) => {
  const match = String(file).match(/^---\s*\n[\s\S]*?\n---\s*(\n|$)/);
  if (!match) return;

  const lastFrontmatterLine = match[0].split('\n').length - 1;
  tree.children = tree.children.filter(
    (node) => !node.position || node.position.start.line > lastFrontmatterLine,
  );
};

export default remarkStripFrontmatter;
