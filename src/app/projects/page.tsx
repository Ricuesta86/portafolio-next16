import type { Metadata } from 'next';
import ProjectsExplorer from '../components/ProjectsExplorer';
import { getAvailableProjectImages } from '../lib/project-images';

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Proyectos de Ricuesta: plataformas e-commerce, SaaS, fintech, healthtech y arquitecturas backend con React, Node.js y Python.',
};

export default function ProjectsPage() {
  return <ProjectsExplorer availableImages={getAvailableProjectImages()} />;
}
