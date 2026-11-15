# Spec Delta

## Purpose

Define el lenguaje visual y de movimiento compartido por todo el portafolio: tipografía, color, superficies, espaciado, comportamiento responsive y accesibilidad visual, de modo que cada página se perciba como parte de una misma pieza editorial técnica.

## ADDED Requirements

### Requirement: Identidad editorial técnica coherente

El sitio SHALL presentar una identidad visual sobria y editorial basada en una paleta neutra con un único color de acento, tipografía con jerarquía marcada y superficies planas delimitadas por bordes finos. El diseño MUST NOT usar texto con relleno degradado, blobs o resplandores decorativos, ni degradados como recurso principal de fondo o de botones.

#### Scenario: Página renderizada en modo claro

- **WHEN** un visitante abre cualquier ruta con el tema claro
- **THEN** la página usa la paleta neutra clara y el acento definido, sin degradados decorativos ni texto degradado
- **AND** todos los niveles de texto cumplen contraste mínimo AA sobre su superficie

#### Scenario: Página renderizada en modo oscuro

- **WHEN** un visitante abre cualquier ruta con el tema oscuro
- **THEN** la página usa la variante oscura de los mismos tokens, conserva la jerarquía y cumple contraste mínimo AA

### Requirement: Escala tipográfica y ritmo vertical consistentes

El sitio SHALL usar una escala tipográfica limitada y consistente entre páginas, con titulares de display, encabezados de sección, cuerpo y metadatos claramente diferenciados. El espaciado vertical SHALL derivar de una escala común y mantener una jerarquía reconocible sin depender de tamaños ad hoc por página.

#### Scenario: Comparación entre páginas

- **WHEN** un visitante navega entre inicio, sobre mí, proyectos, blog y contacto
- **THEN** los titulares, encabezados de sección y cuerpo conservan la misma escala y ritmo vertical
- **AND** cada página presenta un único `h1` y una jerarquía de encabezados sin saltos

### Requirement: Layout responsive sin desbordamiento

El sitio SHALL adaptarse desde 320 px hasta pantallas de escritorio amplias sin desbordamiento horizontal, texto cortado ni solapamientos. Las composiciones SHALL reorganizarse en una sola columna en móvil y aprovechar el ancho disponible en escritorio.

#### Scenario: Viewport móvil de 320 px

- **WHEN** un visitante abre cualquier ruta en un viewport de 320 px de ancho
- **THEN** el contenido se reflowa en una columna, no aparece scroll horizontal y ningún control queda fuera de pantalla

#### Scenario: Escritorio amplio

- **WHEN** un visitante abre cualquier ruta en un viewport de 1440 px o más
- **THEN** el contenido se limita a un ancho de lectura razonable y las secciones mantienen alineaciones y márgenes consistentes

### Requirement: Movimiento intencional y reducido

El sitio SHALL limitar el movimiento a entradas de contenido y cambios de estado breves con un propósito claro. MUST NOT existir animaciones decorativas en bucle ni movimiento permanente en elementos de fondo. Cuando el sistema operativo indique `prefers-reduced-motion: reduce`, el sitio SHALL eliminar desplazamientos, escalados y animaciones no esenciales.

#### Scenario: Preferencia de movimiento reducido

- **WHEN** un visitante con `prefers-reduced-motion: reduce` carga o navega por el sitio
- **THEN** el contenido aparece sin desplazamientos ni escalados animados y las transiciones no esenciales quedan desactivadas
- **AND** ninguna información depende del movimiento para ser comprensible

#### Scenario: Interacción en hover y foco

- **WHEN** un visitante pasa el puntero o enfoca un elemento interactivo
- **THEN** el cambio visual es inmediato o una transición breve de color, borde o subrayado
- **AND** no se producen escalados llamativos ni animaciones en bucle

### Requirement: Accesibilidad visual e interacción por teclado

Todos los elementos interactivos SHALL mostrar un indicador de foco visible y distinguible, y los objetivos táctiles SHALL tener al menos 44×44 px en móvil. La información SHALL transmitirse con texto y estructura, no solo con color, y las imágenes decorativas SHALL quedar fuera del árbol de accesibilidad mientras las significativas SHALL tener texto alternativo.

#### Scenario: Navegación solo con teclado

- **WHEN** un visitante recorre la página con la tecla Tab
- **THEN** cada enlace, botón, campo y control de tema muestra un foco visible y el orden de tabulación sigue el orden visual

#### Scenario: Estados no basados solo en color

- **WHEN** un visitante observa la navegación activa, las etiquetas de categoría o los mensajes de validación
- **THEN** cada estado se distingue también por texto, forma, icono o subrayado además del color
