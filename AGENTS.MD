# Directrices de Diseño y Flujo de Trabajo

## Jerarquía de Skills de Diseño
1. **OpenSpec manda en el QUÉ**: La estructura, los requisitos y las tareas siempre provienen de los artefactos de OpenSpec (`proposal.md`, `tasks.md`, `design.md`). No alteres el alcance funcional definido allí.
2. **Taste manda en la ESTÉTICA GENERAL**: Para decisiones de layout, tipografía, color y los "tres diales" (`DESIGN_VARIANCE`, `MOTION_INTENSITY`, `VISUAL_DENSITY`), sigue `design-taste-frontend`.
3. **Emil Kowalski manda en el MOVIMIENTO**: Si hay conflicto sobre animaciones o transiciones, las reglas de `emil-design-eng` tienen prioridad sobre las sugerencias de movimiento de Taste. Pregunta siempre si un elemento necesita animarse antes de añadir movimiento.
4. **Impeccable manda en la AUDITORÍA FINAL**: Antes de dar una tarea de UI por terminada, pasa el código por los detectores de `impeccable` para eliminar patrones genéricos de IA.

## Flujo de Trabajo Obligatorio
- Sigue el ciclo de OpenSpec: `/opsx-propose` → `/opsx-apply` → `/opsx-archive`.
- En la fase de `/opsx-apply`, aplica las directrices de Taste, Emil Kowalski e Impeccable según la jerarquía anterior.