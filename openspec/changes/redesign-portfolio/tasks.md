# Tasks

## 1. Fundamentos visuales

- [x] 1.1 Definir en `src/app/globals.css` la paleta semántica (`paper`, `surface`, `ink`, `muted`, `rule`, `accent`, `accent-strong`) para claro y oscuro, la escala tipográfica fluida y los tokens de espaciado; exponerlos como utilidades con `@theme inline`. Verificar con `pnpm dev` que `bg-paper`, `text-ink`, `border-rule` y `text-accent` generan estilos, y que el tema oscuro cambia los valores.
- [x] 1.2 Cargar `Newsreader`, `Inter` y `JetBrains Mono` con `next/font/local` desde `src/app/fonts`, limitar pesos y subsets, y mapear `--font-display`, `--font-sans` y `--font-mono` en `@theme`. Verificar en el navegador que titulares, cuerpo y etiquetas usan las familias esperadas y que `pnpm build` termina sin errores de fuentes.
- [x] 1.3 Añadir estilos base en `globals.css`: `color-scheme`, fondo/texto con tokens, `::selection`, scrollbar, foco visible de 2 px con offset, ancho de lectura y reglas. Verificar con Tab que cada control muestra foco visible y que el scrollbar respeta el tema activo.
- [x] 1.4 Añadir la política global de movimiento en CSS: duración y easing compartidos, transición de menú y bloqueo total de animaciones no esenciales bajo `prefers-reduced-motion: reduce`. Verificar emulando la preferencia en DevTools y comprobando que no hay desplazamientos ni transiciones de entrada.
- [x] 1.5 Reemplazar el README boilerplate por una sección breve de desarrollo y otra de sistema de diseño (tokens, fuentes, reglas de uso y comandos `pnpm lint`/`pnpm build`). Verificar que los comandos documentados existen en `package.json` y se ejecutan como se describen.

## 2. Primitivas compartidas y shell

- [x] 2.1 Crear las primitivas server `Container`, `Eyebrow`, `SectionHeading` y `ArrowLink` en `src/app/components/` con la retícula, la escala y los estilos definidos en `design.md`. Verificar que se renderizan sin `"use client"` y que `pnpm build` compila.
- [x] 2.2 Añadir el enlace «Saltar al contenido» como primer elemento enfocable y un `main id="contenido"` en `layout.tsx`. Verificar con Tab al cargar que el enlace aparece, y al activarlo el foco salta al contenido sin recorrer la navegación.
- [x] 2.3 Rediseñar `Header` con `sticky`, fondo transparente arriba y superficie con borde al hacer scroll, enlaces con `aria-current="page"` y subrayado de acento, sin píldora ni `layoutId`. Verificar en `/` y `/projects` que solo la ruta activa se marca y que la cabecera sigue legible al desplazar.
- [x] 2.4 Implementar el menú móvil accesible: `aria-expanded`, `aria-controls`, cierre con Escape, devolución de foco al botón, cierre al navegar y transición de `grid-template-rows`. Verificar a 375 px con teclado y lector de pantalla que el estado se anuncia y el foco no queda atrapado.
- [x] 2.5 Rediseñar `ThemeToggle` sin rotación animada, con etiqueta según la acción, icono de 20 px y objetivo táctil de 44×44 px. Verificar que respeta la preferencia del sistema en primera visita, persiste el cambio al recargar y no produce destello de tema.
- [x] 2.6 Rediseñar `Footer` con identidad, resumen, navegación principal, redes, año actual y enlaces externos con `rel="noopener noreferrer"`. Verificar que todas las rutas y redes responden, que el año es el actual y que el foco es visible.

## 3. Página de inicio

- [x] 3.1 Reestructurar el hero de Inicio con eyebrow, titular «Software que aguanta el crecimiento.», lead, disponibilidad, CTAs «Ver proyectos» y «Hablemos», y retrato 4/5 en escala de grises con `alt` descriptivo. Verificar que los CTAs navegan a `/projects` y `/contact`, y que a 320 px el texto y el retrato se apilan sin desbordamiento.
- [x] 3.2 Implementar la entrada única del hero con opacidad y `translateY` escalonados, respetando `prefers-reduced-motion`. Verificar que sin la preferencia se anima una sola vez y con ella el contenido aparece estático y completo.
- [x] 3.3 Sustituir `Statistics` por una banda estática de cifras separadas por reglas, con datos de `src/app/lib/statistics.ts` y etiquetas mono. Verificar que se muestran 20+, 15+ y 4, y que no existe animación de contador.
- [x] 3.4 Añadir la sección «Cómo trabajo» con tres pasos (Diagnóstico, Arquitectura, Entrega) y copy específico, sin frases genéricas. Verificar que la sección usa un `h2` y que cada paso tiene título y descripción legibles en móvil.
- [x] 3.5 Convertir los proyectos destacados en un índice editorial de tres filas con número, título, descripción, tecnologías y enlace a `/projects`. Verificar que solo aparecen proyectos con `featured: true` y que cada fila es navegable por teclado.
- [x] 3.6 Reescribir el cierre de contacto de Inicio como bloque de acento contenido, con titular propio y un único CTA a `/contact`. Verificar contraste AA del texto y del botón en claro y oscuro.

## 4. Página Sobre mí

- [x] 4.1 Rehacer la cabecera y la biografía de `/about` con titular de tesis, intro y texto en dos columnas basado en los hechos de `src/data/experience.ts`. Verificar que hay un solo `h1`, que el copy está en español y que no aparecen frases de plantilla.
- [x] 4.2 Rediseñar los cuatro pilares como lista editorial con reglas y numeración, sin iconos en cajas de color. Verificar que los cuatro aparecen y que el contraste de títulos y descripciones cumple AA.
- [x] 4.3 Sustituir las barras de porcentaje de `SkillsSection` por grupos con nivel cualitativo (Experto, Avanzado, Sólido) derivados de los datos existentes. Verificar que las 14 habilidades se muestran agrupadas en sus 5 categorías y que no queda ningún porcentaje visible.
- [x] 4.4 Rediseñar `Timeline` como cronología editorial legible en una columna, con periodo, rol, empresa, descripción y tecnologías. Verificar el orden de las 4 entradas y que a 320 px no hay solapamiento entre la línea y el contenido.

## 5. Página de proyectos

- [x] 5.1 Crear `ProjectVisual` con portada tipográfica determinista (número, categoría e iniciales) y fallback ante imagen ausente o con error. Verificar que los 6 proyectos se renderizan sin imágenes rotas ni huecos y que el `alt`/texto alternativo describe el proyecto.
- [x] 5.2 Rediseñar la tarjeta/fila de proyecto con título, descripción, tecnologías, enlaces Demo y Código, y etiquetas de categoría legibles sin depender del color. Verificar que los enlaces abren en pestaña nueva de forma segura y que las etiquetas se distinguen por texto.
- [x] 5.3 Rehacer los filtros como controles de texto mono con contador, estado activo no exclusivamente cromático y `aria-pressed`. Verificar los conteos: Todos 6, Full Stack 3, Frontend 1, Backend 1, Mobile 1.
- [x] 5.4 Implementar el estado vacío del filtro con mensaje y acción para volver a «Todos». Verificar por inspección que el bloque se renderiza cuando la lista filtrada queda vacía y que la acción restaura los 6 proyectos.
- [x] 5.5 Ajustar el layout de `/projects` (índice en escritorio, bloques apilados en móvil) y su metadata. Verificar el título de documento, la ausencia de scroll horizontal a 320 px y que el filtro sigue funcionando tras redimensionar.

## 6. Blog y artículo

- [x] 6.1 Rehacer el índice de `/blog` como lista editorial con número, fecha mono y título, manteniendo el orden de `getPostsMeta()`. Verificar que se listan las 2 publicaciones actuales, de más reciente a más antigua, y que cada una navega a su slug.
- [x] 6.2 Implementar el estado vacío del blog con copy específico y sin tarjetas vacías. Verificar por inspección que se muestra cuando `posts.length === 0` y que no altera el layout con publicaciones.
- [x] 6.3 Rediseñar `/blog/[slug]` con enlace de vuelta, título, fecha, `prose` adaptado a los tokens y ancho de lectura. Verificar que ambos artículos renderizan su MDX y que un slug inexistente responde 404.
- [x] 6.4 Revisar la metadata de `/blog` y de cada artículo (título y descripción coherentes, plantilla `%s | Ricuesta`). Verificar los títulos en el navegador para el índice y los dos artículos.

## 7. Página de contacto

- [x] 7.1 Eliminar el hero residual de `/contact` («Tu Nombre», «Desarrollador Web», `/hero.jpg`) y rehacer la página en dos columnas: introducción e información de contacto a la izquierda, formulario a la derecha. Verificar que no queda ninguna referencia a `hero.jpg` ni texto de plantilla y que no hay imágenes rotas.
- [x] 7.2 Rediseñar `ContactForm` con labels visibles, inputs de línea inferior, errores con `aria-describedby` y `role="alert"`, y confirmación con `role="status"`, conservando Zod y la simulación de envío. Verificar el envío inválido (errores por campo, sin confirmación) y el válido (confirmación, campos restablecidos y formulario desbloqueado).
- [x] 7.3 Ajustar la información de contacto, redes y metadata de `/contact`, con email `mailto:` y etiquetas mono. Verificar que el email abre el cliente de correo, que las redes abren en pestaña nueva y que el título de documento identifica la sección.

## 8. Limpieza y verificación integral

- [x] 8.1 Eliminar `ScrollReveal`, `AnimatedSpan`, `AnimatedBox`, `FadeIn`, `StaggeredList`, `TypewriterText` y `AnimatedCounter`, y actualizar todas las importaciones restantes. Verificar con `rg "ScrollReveal|AnimatedSpan|AnimatedBox|FadeIn|StaggeredList|TypewriterText|AnimatedCounter" src` que no quedan referencias y que `pnpm build` compila.
- [x] 8.2 Retirar las utilidades y keyframes antiguos (`brand-*`, `slate-*`, `pulse-glow`, `float`, `marquee`) de los componentes y de `globals.css`. Verificar con `rg "brand-|slate-|pulse-glow|animate-float|animate-marquee|bg-clip-text|blur-3xl" src` que no quedan usos y que el build pasa.
- [x] 8.3 Retirar `framer-motion` si ya no tiene usos: buscar imports, ejecutar `pnpm remove framer-motion` y confirmar que `package.json` y el lockfile quedan coherentes. Verificar con `rg "framer-motion" src package.json` que no queda ninguna referencia y que `pnpm build` pasa.
- [x] 8.4 Ejecutar `pnpm lint` y `pnpm build` y corregir cualquier error o warning introducido por el rediseño. Verificar que ambos comandos terminan con código 0.
- [x] 8.5 Revisar manualmente las cinco rutas más un artículo en 320, 375, 768, 1024 y 1440 px, en tema claro y oscuro. Verificar que no hay scroll horizontal, texto cortado, solapamientos ni cambios de tema incorrectos.
- [x] 8.6 Revisar con teclado todas las rutas: skip link, orden de tabulación, foco visible, menú móvil, filtros, formulario y enlaces externos. Verificar que el foco nunca queda atrapado ni se pierde tras abrir/cerrar el menú o enviar el formulario.
- [x] 8.7 Pasar la auditoría final de `impeccable` y la jerarquía de `AGENTS.MD` (Taste para layout/tipografía, Emil para movimiento) y corregir los patrones genéricos detectados. Verificar que no quedan degradados decorativos, texto degradado, animaciones en bucle ni iconos en cajas de color.

## Workflow follow-up

- Archivar el cambio cuando la revisión visual y los comandos de verificación estén satisfechos.
- Confirmar que los specs archivados describen el comportamiento final y que `openspec validate` pasa.
