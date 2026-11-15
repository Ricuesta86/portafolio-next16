import fs from 'fs';
import path from 'path';
import { projects } from '@/data/projects';

/**
 * Comprueba en tiempo de build qué portadas existen realmente en `public`.
 * Evita peticiones 404 y garantiza que los proyectos sin imagen usan la
 * portada tipográfica determinista.
 */
export function getAvailableProjectImages(): Record<string, boolean> {
  return Object.fromEntries(
    projects.map((project) => {
      if (!project.imageUrl) return [project.id, false];

      const filePath = path.join(
        process.cwd(),
        'public',
        project.imageUrl.replace(/^\//, ''),
      );

      return [project.id, fs.existsSync(filePath)];
    }),
  );
}
