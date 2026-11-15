# portfolio-pages Specification

## Purpose

Define la estructura, la jerarquía de contenido, el copy y los estados de las páginas que componen el portafolio — inicio, sobre mí, proyectos, blog, artículo y contacto — para que cada ruta comunique con claridad la experiencia, el criterio técnico y la propuesta de valor de Ricuesta.

## Requirements

### Requirement: Página de inicio con propuesta de valor clara

La página de inicio SHALL abrir con un titular que exprese la propuesta de valor profesional, un subtítulo que explique el enfoque de trabajo, un indicador de disponibilidad y dos llamadas a la acción: ver proyectos y agendar una conversación. Después SHALL presentar las estadísticas de impacto, una selección de proyectos destacados y un cierre orientado al contacto.

#### Scenario: Recorrido completo de la home

- **WHEN** un visitante recorre `/` de arriba abajo
- **THEN** encuentra, en orden, la propuesta de valor con llamadas a la acción, las estadísticas, los proyectos destacados y el cierre de contacto
- **AND** cada sección tiene un encabezado comprensible y no repite el mismo mensaje

#### Scenario: Llamadas a la acción

- **WHEN** el visitante activa «Ver proyectos» o «Agendar llamada»
- **THEN** navega a `/projects` o `/contact` respectivamente

### Requirement: Página Sobre mí con trayectoria y capacidades

La página `/about` SHALL presentar una biografía profesional en primera persona, los pilares de la práctica (perfil full stack, experiencia, enfoque en resultados y liderazgo), las habilidades agrupadas por categoría y una cronología de experiencia y educación. La presentación de habilidades MUST NOT sugerir precisión falsa mediante porcentajes.

#### Scenario: Lectura de la trayectoria

- **WHEN** un visitante abre `/about`
- **THEN** encuentra la biografía, los pilares, las habilidades agrupadas y la cronología en orden cronológico comprensible
- **AND** las habilidades se presentan como categorías o niveles cualitativos, sin barras de porcentaje

#### Scenario: Cronología en móvil

- **WHEN** el visitante abre `/about` en un viewport de 320 px
- **THEN** la cronología se muestra en una sola columna legible sin línea lateral que se solape con el texto

### Requirement: Catálogo de proyectos filtrable

La página `/projects` SHALL listar todos los proyectos con título, descripción, tecnologías y enlaces disponibles, y SHALL permitir filtrar por categoría (Todos, Full Stack, Frontend, Backend, Mobile). El filtro SHALL anunciar la categoría activa de forma no exclusivamente cromática y SHALL mostrar un estado vacío explícito cuando no haya proyectos en la categoría.

#### Scenario: Filtrar por categoría

- **WHEN** el visitante selecciona «Backend»
- **THEN** la lista muestra solo proyectos de categoría backend y el control seleccionado se distingue visual y semánticamente
- **AND** el número de tarjetas visibles coincide con los proyectos de esa categoría

#### Scenario: Categoría sin proyectos

- **WHEN** una categoría no tiene proyectos asociados
- **THEN** la página muestra un mensaje que lo indica y una acción para volver a «Todos»

#### Scenario: Imagen de proyecto ausente

- **WHEN** un proyecto referencia una imagen que no existe en el sitio
- **THEN** la tarjeta muestra una representación visual determinista basada en el proyecto
- **AND** no aparece una imagen rota ni un hueco sin estilo

### Requirement: Blog con índice y artículo legible

La página `/blog` SHALL listar las publicaciones disponibles con título y fecha formateada, ordenadas de más reciente a más antigua, y SHALL mostrar un estado vacío cuando no existan publicaciones. Cada artículo SHALL renderizar su contenido MDX con estilos de lectura, título de página propio y navegación de regreso al blog.

#### Scenario: Índice con publicaciones

- **WHEN** un visitante abre `/blog` y existen publicaciones
- **THEN** ve una tarjeta o fila por publicación con título y fecha en español
- **AND** al seleccionar una publicación navega a `/blog/<slug>`

#### Scenario: Artículo inexistente

- **WHEN** un visitante abre una URL de artículo que no corresponde a un archivo MDX
- **THEN** el sitio responde con la página 404 y no con un error de servidor

### Requirement: Página de contacto sin contenido de plantilla

La página `/contact` SHALL presentar la información de contacto (email, ubicación, disponibilidad y tiempo de respuesta), los enlaces sociales y un formulario con nombre, email, asunto y mensaje. La página MUST NOT incluir secciones residuales con textos de plantilla como «Tu Nombre», «Desarrollador Web» ni referencias a imágenes inexistentes.

#### Scenario: Carga de contacto

- **WHEN** un visitante abre `/contact`
- **THEN** ve la información de contacto y el formulario, sin bloques de relleno ni imágenes rotas
- **AND** el email de contacto es un enlace `mailto:`

#### Scenario: Validación del formulario

- **WHEN** el visitante envía el formulario con campos vacíos o inválidos
- **THEN** cada campo inválido muestra un mensaje de error asociado y el foco permanece en el formulario
- **AND** no se muestra la confirmación de envío

#### Scenario: Envío válido

- **WHEN** el visitante completa todos los campos correctamente y envía el formulario
- **THEN** el sitio muestra una confirmación accesible y restablece los campos
- **AND** la confirmación desaparece sin dejar el formulario en un estado bloqueado

### Requirement: Copy en español con voz propia

Todos los textos visibles SHALL estar en español y SHALL describir la experiencia real de Ricuesta con un tono directo, técnico y humano. MUST NOT aparecer texto de relleno, nombres de plantilla, frases genéricas sin sustancia ni afirmaciones que contradigan los datos del sitio.

#### Scenario: Revisión de textos

- **WHEN** un revisor recorre las cinco rutas y un artículo
- **THEN** todos los textos están en español y son específicos del perfil
- **AND** no aparecen marcadores como «Lorem ipsum», «Tu Nombre» o «Desarrollador Web»

### Requirement: Metadatos y estructura semántica por ruta

Cada ruta SHALL definir un título y una descripción de página coherentes con su contenido, y SHALL usar elementos semánticos (`header`, `nav`, `main`, `section`, `article`, `footer`) con encabezados jerárquicos. Las páginas MUST NOT duplicar el `main` ni perder el título del sitio en el metadato.

#### Scenario: Metadatos de ruta

- **WHEN** un visitante abre `/about`, `/projects`, `/blog` o `/contact`
- **THEN** el título del documento identifica la sección y el sitio, y la descripción corresponde al contenido de la página

#### Scenario: Estructura de landmarks

- **WHEN** una tecnología de asistencia inspecciona cualquier página
- **THEN** encuentra un único `main`, una navegación identificable y una jerarquía de encabezados sin saltos
