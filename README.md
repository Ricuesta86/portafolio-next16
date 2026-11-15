# ricuesta.dev

Portafolio personal de Ricuesta, ingeniero de software. Construido con Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS v4.

## Desarrollo

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm lint     # ESLint
pnpm build    # build de producción
pnpm start    # servir el build
```

El contenido vive en `src/content` (MDX), los datos en `src/data`, las rutas en `src/app` y los artículos se leen con `src/app/lib/posts.ts`. `posts.ts` lee el frontmatter YAML para el título, la fecha y el resumen; `remark-strip-frontmatter.mjs` lo retira del render en build para que no aparezca en el cuerpo.

## Sistema de diseño

El sitio sigue una dirección editorial técnica: papel cálido, tinta casi negra y un único acento bermellón. La jerarquía se construye con tipografía, reglas finas y espacio, no con tarjetas ni sombras.

### Tokens

Definidos en `src/app/globals.css` como variables CSS y expuestos a Tailwind con `@theme inline`:

| Token | Uso |
| --- | --- |
| `paper` | Fondo principal de la página |
| `surface` | Superficies elevadas y bloques de contenido |
| `ink` | Texto principal |
| `muted` | Texto secundario y metadatos |
| `rule` | Bordes y separadores de 1 px |
| `accent` / `accent-strong` | Enlaces, foco, subrayados y acciones |
| `accent-contrast` | Texto sobre el acento |

Cada token tiene su valor claro en `:root` y su valor oscuro en `.dark`.

### Tipografía

- `font-display`: Newsreader, para titulares y citas.
- `font-sans`: Inter, para cuerpo, navegación y formularios.
- `font-mono`: JetBrains Mono, para etiquetas, fechas, cifras y metadatos.

Las tres familias se cargan con `next/font/local` desde `src/app/fonts` (WOFF2, subset latin y licencias OFL incluidas), sin depender de Google Fonts en el build. La escala está en `@theme`: `text-display`, `text-h2`, `text-h3`, `text-body`, `text-small` y `text-label`.

### Reglas de uso

- Un solo acento; no se usa como fondo de bloques grandes.
- Sin degradados decorativos, texto degradado, blobs, resplandores ni sombras de color.
- Superficies planas con bordes de 1 px; radios de 0 a 2 px.
- Contenedor de 1200 px (`site-container`), ancho de lectura de 68 ch (`reading-width`).
- Movimiento solo en la entrada del hero y en cambios de estado breves. Todo se desactiva con `prefers-reduced-motion: reduce`.
- Foco visible global de 2 px y objetivos táctiles de al menos 44×44 px.

## Estructura

```text
src/app/              rutas, layout, estilos y componentes
src/app/components/   shell, primitivas y componentes de página
src/data/             proyectos, habilidades, experiencia y redes
src/content/          artículos MDX
src/types/            tipos compartidos
```
