# Proposal

## Why

El portafolio actual funciona, pero su lenguaje visual es genérico: gradientes indigo, tarjetas redondeadas con iconos, texto con degradado, blobs animados y un efecto de máquina de escribir. Esos patrones no transmiten los 20 años de experiencia ni la precisión técnica del perfil, y la página de contacto conserva una sección hero residual con contenido de plantilla («Tu Nombre», «Desarrollador Web») e imagen inexistente.

La oportunidad es convertir el sitio en una pieza editorial técnica, sobria y con voz propia, que presente la experiencia y el criterio de ingeniería como argumento principal, sin perder las rutas, los datos ni la funcionalidad existentes.

## What Changes

- **Sistema visual editorial técnico**: sustituir la identidad indigo/slate con degradados por una base neutra (clara y oscura) con un único acento, tipografía con jerarquía marcada, bordes finos, superficies planas y composición asimétrica con espacio en blanco generoso.
- **Shell del sitio**: rediseñar cabecera, navegación de escritorio y móvil, conmutador de tema y pie de página; añadir un enlace de salto al contenido y estados de foco visibles.
- **Reestructuración y copy de las cinco páginas** (`/`, `/about`, `/projects`, `/blog`, `/blog/[slug]`, `/contact`): nueva jerarquía de secciones, titulares y textos con voz propia en español; se elimina el hero residual de contacto.
- **Componentes de contenido**: rediseñar tarjetas de proyecto, timeline, habilidades, estadísticas, formulario de contacto y estados vacíos; las tarjetas de proyecto deben verse completas aunque falten las imágenes en `public/projects/`.
- **Movimiento contenido**: retirar animaciones permanentes y decorativas (typewriter, blobs pulsantes, flotación, escalados en hover); conservar solo entradas y transiciones breves con propósito, respetando `prefers-reduced-motion`.
- **Accesibilidad y responsive**: contraste AA, navegación por teclado, jerarquía de encabezados, objetivos táctiles y layouts correctos de 320 px a pantallas grandes.
- **Sin cambios funcionales**: se conservan las rutas, el modelo de datos (`src/data`, `src/types`), el filtrado de proyectos, el blog MDX, la validación del formulario y el tema claro/oscuro.

## Capabilities

### New Capabilities

- `visual-design-system`: fundación visual y de movimiento del sitio — tokens de color, tipografía, espaciado, superficies, responsive, accesibilidad visual y política de animación.
- `site-shell`: cabecera, navegación principal y móvil, conmutador de tema y pie de página compartidos por todas las rutas.
- `portfolio-pages`: estructura, jerarquía y copy de las páginas de inicio, sobre mí, proyectos, blog, artículo y contacto, incluidos sus estados vacíos y de error.

### Modified Capabilities

<!-- No existen specs previas en openspec/specs; todas las capacidades son nuevas. -->

## Impact

- **Código afectado**: `src/app/globals.css`, `src/app/layout.tsx`, todas las páginas en `src/app/**/page.tsx` y los componentes de `src/app/components/`. Se eliminan o reescriben componentes sin uso (`AnimatedBox`, `FadeIn`, `StaggeredList`, `TypewriterText`) y se reemplaza el hero residual de contacto.
- **Datos y contenido**: se reescriben textos en las páginas; `src/data/*`, `src/types` y `src/content/*.mdx` se mantienen como fuente de datos salvo ajustes de copy puntuales. No se cambian URLs.
- **Dependencias**: ninguna nueva; se sigue usando Tailwind CSS v4, Framer Motion, `next-themes` y `lucide-react`. Posible reducción de dependencias si el nuevo movimiento no requiere Framer Motion en todos los componentes.
- **Recursos**: faltan las imágenes referenciadas en `public/projects/*.jpg`; el diseño debe prever un fallback determinista sin imágenes rotas.
- **Calidad**: `pnpm lint` y `pnpm build` deben pasar; revisión visual en claro/oscuro, móvil y escritorio, y auditoría final con las directrices de `impeccable`.
