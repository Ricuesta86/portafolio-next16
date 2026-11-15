# Design

## Context

Ver `proposal.md` — Why para la motivación. El estado actual que condiciona el enfoque:

- Next.js 16 con App Router, React 19, TypeScript y Tailwind CSS v4 configurado mediante `@theme` en `src/app/globals.css`.
- Tema claro/oscuro con `next-themes` (`attribute="class"`, `defaultTheme="system"`).
- Framer Motion presente en casi todos los componentes: `ScrollReveal` envolviendo secciones, `motion` en header, hero, tarjetas, timeline, formulario y conmutador de tema.
- Paleta `brand-*` (indigo) más `slate`, tipografía Inter, tarjetas `rounded-2xl` con iconos en cajas de color, texto con degradado y animaciones en bucle (`pulse-glow`, `float`, typewriter).
- Datos y contenido separados en `src/data/*`, `src/types`, `src/app/lib/*` y artículos MDX en `src/content`.
- No existen `public/projects/*.jpg` referenciados por los proyectos ni `public/hero.jpg`; la página de contacto conserva un hero de plantilla.
- No hay suite de tests ni Storybook. La validación disponible es `pnpm lint`, `pnpm build` y revisión visual en navegador.
- `AGENTS.MD` establece la jerarquía: OpenSpec define el qué; Taste la estética; Emil Kowalski el movimiento; Impeccable la auditoría final.

## Goals / Non-Goals

**Goals:**

- Un único sistema editorial técnico que se reconozca en las cinco rutas, en claro y oscuro.
- Reducir el ruido visual y de movimiento: menos tarjetas, menos efectos, más tipografía, reglas y jerarquía.
- Reestructurar las páginas y reescribir el copy para que el perfil senior sea el argumento central.
- Eliminar deuda de UI: componentes muertos, hero residual de contacto, animaciones en bucle y dependencia innecesaria de Framer Motion.
- Cumplir accesibilidad AA, navegación por teclado, responsive desde 320 px y `prefers-reduced-motion`.

**Non-Goals:**

- Añadir rutas, secciones de blog nuevas, CMS, internacionalización o backend real de contacto.
- Cambiar el modelo de datos, los slugs, las URLs, el contenido de los MDX o la lógica de validación.
- Generar imágenes reales de proyectos o un retrato nuevo; se diseña un fallback tipográfico y se reutiliza `public/imagen/imagen1.jpeg`.
- Mantener compatibilidad con las clases `brand-*` o los componentes actuales de animación.

## Decisions

### 1. Dirección: editorial técnico sobrio

Se abandona la estética de plantilla SaaS (indigo, degradados, tarjetas flotantes, iconos en cuadros) por una composición editorial: papel cálido, tinta casi negra, un acento bermellón, reglas finas, mucho aire y tipografía como estructura. La jerarquía se construye con escala, peso, alineación y espacio, no con contenedores ni sombras.

- **Paleta semántica** en `:root` y `.dark`: `paper`, `surface`, `ink`, `muted`, `rule`, `accent`, `accent-strong`. Se exponen como utilidades con `@theme inline` (`bg-paper`, `text-ink`, `border-rule`, `text-accent`, etc.).
- **Valores propuestos** (ajustables en implementación manteniendo contraste AA):
  - Claro: `paper #F7F5F0`, `surface #FCFBF7`, `ink #171614`, `muted #5C5850`, `rule #D8D3C8`, `accent #A63D22`, `accent-strong #7A2A16`.
  - Oscuro: `paper #12110F`, `surface #191815`, `ink #F2EEE4`, `muted #ABA59A`, `rule #35322C`, `accent #E07A5F`, `accent-strong #F09A82`.
- **Reglas de uso**: el acento solo para enlaces, foco, subrayado activo y datos puntuales; nunca como fondo de bloques grandes. Sin `bg-gradient-*`, `bg-clip-text`, `blur-3xl` decorativo, `animate-pulse` ni sombras de color.
- **Alternativas descartadas**: refinar la identidad indigo (mantiene el aspecto genérico), dark-first con acento eléctrico (más moda que criterio), cálido con serif y textura (deriva en lifestyle, no en ingeniería).

### 2. Tipografía: serif editorial + sans de UI + mono de datos

- **Display**: `Newsreader` (variable, 400/500, cursiva opcional) para `h1`/`h2` y citas. Aporta carácter editorial sin convertirse en una web de moda.
- **Cuerpo/UI**: `Inter` (400/500/600), ya integrada con `next/font`, para párrafos, navegación, botones y formularios.
- **Datos/etiquetas**: `JetBrains Mono` (400/500) para eyebrows, metadatos, años, categorías, numeración de proyectos y cifras.
- Se cargan con `next/font/local` desde `src/app/fonts` (WOFF2, subset `latin`, licencias OFL incluidas), `display: swap` y pesos limitados. Se declaran como `--font-display`, `--font-sans`, `--font-mono` y se mapean en `@theme`.
- **Escala** con `clamp()`: display `clamp(2.75rem, 6vw, 5.5rem)` y `line-height: 0.98`; h2 `clamp(2rem, 3.5vw, 3.25rem)`; h3 `1.5rem`; cuerpo `1.0625rem/1.65`; pequeño `0.875rem`; etiqueta `0.75rem` mayúsculas con `letter-spacing: 0.14em`.
- **Alternativa descartada**: una sola familia grotesca (correcta pero plana) o tres familias con serif + grotesca + mono de otra fundición (incoherente).

### 3. Layout: retícula editorial, no colección de tarjetas

- Contenedor máximo `1200px`, gutter `clamp(1rem, 4vw, 2rem)`, ancho de lectura `68ch`.
- Retícula de 12 columnas en escritorio y una columna en móvil. Home con hero asimétrico 7/5 (texto/retrato), estadísticas en fila separadas por reglas y proyectos como índice numerado; páginas internas con cabecera de sección alineada a la izquierda, no centrada.
- Se elimina el patrón «todo es una tarjeta». Las tarjetas se reservan para unidades reales (proyecto, artículo); la información de soporte vive en listas, reglas y columnas.
- Secciones con `padding-block: clamp(4rem, 8vw, 8rem)` y separadores de 1 px; sin radios grandes: `rounded-none` o `rounded-sm` (2 px) como máximo.
- **Alternativa descartada**: mantener hero centrado y grid de tarjetas (es exactamente el patrón que se quiere retirar).

### 4. Arquitectura de componentes y renderizado

- Páginas estáticas siguen siendo Server Components. Solo permanecen como Client Components: `Header` (menú móvil y estado de scroll), `ThemeToggle`, la página de proyectos (filtro) y `ContactForm`.
- Se eliminan `ScrollReveal`, `AnimatedSpan`, `AnimatedBox`, `FadeIn`, `StaggeredList`, `TypewriterText` y `AnimatedCounter`. `Statistics` pasa a render estático.
- Se añaden primitivas planas en `src/app/components` (misma organización existente): `Container`, `SectionHeading`, `Eyebrow`, `ArrowLink` y `ProjectVisual`.
- `ProjectVisual` sustituye el uso de `next/image` sobre archivos inexistentes: renderiza una portada tipográfica determinista (numeración, categoría e iniciales del título) y, si en el futuro existe una imagen válida, la muestra con `onError` como fallback. Sin `<Image fill>` apuntando a rutas ausentes.
- El retrato del hero usa `next/image` con `sizes` explícito, relación 4/5, escala de grises como tratamiento editorial y `alt="Retrato de Ricuesta"`.
- **Alternativa descartada**: crear una carpeta de imágenes placeholder (añade binarios y no aporta diseño) o mantener `Image` con `onError` ocultando la imagen (deja huecos sin intención).

### 5. Movimiento: CSS y una sola entrada

- Se retira Framer Motion de la UI. Todo el movimiento se implementa con transiciones CSS y una animación de entrada.
- Entrada del hero: `opacity` + `translateY(12px)`, 500 ms, con stagger de 60 ms entre eyebrow, titular, texto, acciones y retrato. Es la única animación de entrada; el resto del contenido es estático y siempre visible.
- Hover/foco: cambio de color, borde o subrayado en 120 ms con `--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)`. Sin `scale`, sin sombras que crecen.
- Menú móvil: transición de `grid-template-rows` de `0fr` a `1fr` en 240 ms.
- `prefers-reduced-motion: reduce`: sin entrada, sin transición de menú, scroll instantáneo y estados finales visibles. Los contadores ya no animan porque desaparecen.
- Se retira `framer-motion` de `package.json` al finalizar si `rg "framer-motion" src` no devuelve usos.
- **Alternativa descartada**: conservar `whileInView` (repite el patrón actual y puede ocultar contenido), o implementar reveals con IntersectionObserver (complejidad sin beneficio).

### 6. Shell y accesibilidad

- `layout.tsx` mantiene `ThemeProvider` y añade skip link, `main id="contenido"` y landmarks. La cabecera pasa a `sticky` (no `fixed`) para no reservar espacio artificial; en la parte superior es transparente y al hacer scroll adopta `bg-paper/95`, borde inferior y `backdrop-blur-sm`.
- Enlace activo con `aria-current="page"`, color de tinta y subrayado de 2 px de acento. Sin píldora de fondo ni `layoutId`.
- Menú móvil con `aria-expanded`, `aria-controls`, cierre por Escape, devolución de foco al botón y cierre al navegar. Sin bloqueo de scroll.
- Conmutador de tema con etiqueta `aria-label` explícita, icono de 20 px, foco visible y sin rotación animada; `color-scheme` declarado para scrollbars y controles nativos.
- Foco global: `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }`. Objetivos táctiles mínimos de 44×44 px.
- Errores de formulario con `aria-describedby`, `role="alert"` y texto; éxito con `role="status"`. Se conserva la simulación actual de envío (no hay backend).
- **Alternativa descartada**: menú móvil con overlay a pantalla completa (más peso y más estados que gestionar para cinco enlaces).

### 7. Estructura y copy por página

Voz: primera persona, frases cortas, verbos concretos y cifras reales del sitio (20 años, 15+ MVPs, 6 semanas, equipos de 8). Prohibido «apasionado», «soluciones innovadoras», «llevar al siguiente nivel», «sinergias» y cualquier promesa no respaldada por los datos. Los textos se escriben definitivamente en la implementación; estos son los ejes:

- **Inicio**: eyebrow `Ricuesta · Ingeniero de software`; titular «Software que aguanta el crecimiento.»; lead sobre 20 años llevando productos de la idea a producción; disponibilidad; CTAs «Ver proyectos» y «Hablemos». Después: cifras (20+ años, 15+ MVPs, 4 industrias), «Cómo trabajo» en tres pasos (Diagnóstico, Arquitectura, Entrega), tres proyectos destacados como índice y cierre de contacto.
- **Sobre mí**: titular de tesis profesional, biografía en dos columnas con hechos (2005, React/TypeScript, equipos de 8, MVPs en 6 semanas), cuatro pilares, habilidades agrupadas con nivel cualitativo (Experto / Avanzado / Sólido) en lugar de porcentajes, y cronología.
- **Proyectos**: introducción breve, filtros como texto mono con contador, proyectos en filas de índice en escritorio y bloques apilados en móvil. Cada fila: número, título, descripción, tecnologías, enlaces Demo/Código. Estado vacío con acción «Ver todos».
- **Blog**: «Notas de ingeniería» como titular, lista editorial con fecha mono y título; artículo con enlace de vuelta, título, fecha y `prose` ajustado a la paleta (sin `prose-invert` automático si los tokens ya cambian).
- **Contacto**: titular «Hablemos de lo que necesitas construir.», información de contacto en lista con etiquetas mono, disponibilidad y redes; formulario a la derecha con inputs de línea inferior, labels visibles y botón de acento. Se elimina por completo el hero residual.

### 8. Metadatos y SEO

Se conservan los títulos y descripciones actuales, ajustando el copy cuando cambie el titular. `layout.tsx` mantiene la plantilla `%s | Ricuesta`, `lang="es"`, Open Graph y keywords. Cada página mantiene su export de `metadata`; el artículo sigue generando el título desde el frontmatter.

## Risks / Trade-offs

- **Contraste insuficiente del acento sobre papel** → validar cada par texto/fondo con un checker AA y usar `accent-strong` para texto pequeño; el acento puro se reserva para foco y subrayados.
- **Serif de display con personalidad que reste legibilidad** → limitar Newsreader a titulares grandes, nunca a cuerpo ni a formularios; tamaños mínimos de 2 rem.
- **Migración incompleta de `brand-*`** → reemplazo global y verificación con `rg "brand-|slate-" src`; el build falla si quedan utilidades inexistentes, pero se revisa antes.
- **Pérdida de imágenes de proyectos** → portada tipográfica determinista; el contenido y los enlaces no dependen de la imagen.
- **Flash de tema en la primera carga** → mantener `next-themes` y `suppressHydrationWarning`; comprobar en claro/oscuro con recarga dura. No introducir render condicional que dependa de `resolvedTheme` antes de montar.
- **Eliminar Framer Motion rompe algún componente no revisado** → buscar imports antes de retirar la dependencia y dejar el paquete si aún se usa.
- **El copy reescrito puede exagerar el perfil** → ceñirse a `src/data` y a los textos existentes; cualquier cifra nueva debe salir de esos datos.
- **Formulario simulado percibido como real** → conservar la simulación actual y redactar la confirmación sin prometer entrega por email; un backend queda fuera de alcance.
- **Regresión responsive por composición asimétrica** → probar 320, 375, 768, 1024 y 1440 px; en móvil todo colapsa a una columna antes de 768 px.

## Migration Plan

1. Introducir tokens semánticos, fuentes y estilos base en `globals.css`; dejar la UI antigua funcionando sobre los tokens nuevos mientras se migra.
2. Rehacer el shell (`layout`, skip link, `Header`, `Footer`, `ThemeToggle`) y las primitivas compartidas.
3. Rehacer Inicio y Sobre mí; después Proyectos, Blog/artículo y Contacto.
4. Eliminar componentes y animaciones muertas, limpiar `brand-*`/`slate-*` y retirar Framer Motion si no quedan usos.
5. Verificar `pnpm lint`, `pnpm build`, revisión visual claro/oscuro y auditoría Impeccable.

Rollback: el cambio no toca datos, rutas ni contenido MDX; revertir el commit restaura la UI anterior sin migraciones.

## Open Questions

Ninguna pendiente que afecte al alcance, a los specs o al desglose de tareas. El tono exacto de cada párrafo se decide al escribir el copy, dentro de los ejes fijados.
