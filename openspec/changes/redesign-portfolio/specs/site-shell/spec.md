# Spec Delta

## Purpose

Define la estructura y el comportamiento del marco compartido del portafolio — cabecera, navegación principal y móvil, conmutador de tema, salto al contenido y pie — para que todas las rutas ofrezcan una navegación clara, accesible y consistente.

## ADDED Requirements

### Requirement: Cabecera persistente con navegación principal

El sitio SHALL mostrar una cabecera en todas las rutas con la identidad de Ricuesta, los enlaces a Inicio, Sobre mí, Proyectos, Blog y Contacto, y el conmutador de tema. La cabecera SHALL permanecer accesible al hacer scroll y SHALL indicar de forma no exclusivamente cromática la ruta activa.

#### Scenario: Ruta activa

- **WHEN** un visitante está en `/projects`
- **THEN** el enlace «Proyectos» se distingue como activo mediante color y un indicador adicional como subrayado o peso tipográfico
- **AND** los demás enlaces no aparecen como activos

#### Scenario: Cabecera al hacer scroll

- **WHEN** el visitante desplaza la página más allá del inicio
- **THEN** la cabecera mantiene su legibilidad con una superficie y un borde definidos
- **AND** los enlaces siguen siendo visibles y utilizables

### Requirement: Navegación móvil accesible

En viewports estrechos, el sitio SHALL ofrecer un botón de menú con estado expandido o contraído anunciado a tecnologías de asistencia. El menú SHALL abrirse y cerrarse mediante el botón, cerrarse al seleccionar una ruta o al pulsar Escape, y MUST NOT dejar contenido inaccesible ni trampas de foco.

#### Scenario: Abrir y cerrar el menú

- **WHEN** un visitante pulsa el botón de menú en un viewport móvil
- **THEN** se muestra la lista de enlaces y el botón anuncia el estado expandido
- **AND** al pulsar de nuevo el botón o la tecla Escape el menú se cierra y el foco regresa al botón

#### Scenario: Navegación desde el menú móvil

- **WHEN** el visitante selecciona un enlace dentro del menú móvil
- **THEN** navega a la ruta elegida y el menú se cierra automáticamente

### Requirement: Conmutador de tema con preferencia del sistema

El sitio SHALL ofrecer un control para alternar entre tema claro y oscuro, accesible por teclado y con una etiqueta que describa la acción. En la primera visita SHALL respetar la preferencia del sistema operativo y SHALL conservar la elección del visitante en visitas posteriores sin producir un destello de tema incorrecto al cargar.

#### Scenario: Primera visita

- **WHEN** un visitante sin preferencia guardada carga el sitio con el sistema en modo oscuro
- **THEN** el sitio se muestra en modo oscuro desde el primer render visible

#### Scenario: Cambio y persistencia

- **WHEN** el visitante activa el tema claro desde el control
- **THEN** el sitio cambia a claro, la etiqueta del control describe la acción inversa y la elección se conserva al recargar o navegar

### Requirement: Salto al contenido principal

El sitio SHALL incluir un enlace de salto al contenido principal como primer elemento enfocable, oculto hasta recibir foco, que lleve el foco al `main` de la página.

#### Scenario: Uso del enlace de salto

- **WHEN** un visitante de teclado pulsa Tab al cargar una página
- **THEN** aparece un enlace «Saltar al contenido»
- **AND** al activarlo el foco se mueve al contenido principal sin recorrer toda la navegación

### Requirement: Pie de página completo y consistente

El sitio SHALL mostrar un pie con la identidad del sitio, un resumen breve del perfil, enlaces a las mismas rutas principales, accesos a redes sociales y el año actual. Los enlaces externos SHALL abrirse de forma segura y los controles SHALL conservar foco visible.

#### Scenario: Enlaces del pie

- **WHEN** el visitante llega al pie en cualquier ruta
- **THEN** encuentra las rutas principales, las redes sociales y el año actual
- **AND** los enlaces externos se abren en una pestaña nueva con `rel="noopener noreferrer"`
