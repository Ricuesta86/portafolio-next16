'use client';

import { useMemo, useState } from 'react';
import Container from './Container';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';
import type { ProjectCategory } from '@/types';

type FilterValue = ProjectCategory | 'all';

const categories: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'mobile', label: 'Mobile' },
];

const ProjectsExplorer = ({
  availableImages,
}: {
  availableImages: Record<string, boolean>;
}) => {
  const [activeCategory, setActiveCategory] = useState<FilterValue>('all');

  const counts = useMemo(() => {
    return categories.reduce(
      (acc, category) => {
        acc[category.value] =
          category.value === 'all'
            ? projects.length
            : projects.filter((project) => project.category === category.value)
                .length;
        return acc;
      },
      {} as Record<FilterValue, number>,
    );
  }, []);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <section className="section border-b border-rule">
        <Container>
          <p className="label">Proyectos</p>
          <h1 className="mt-5 max-w-4xl font-display text-display text-ink">
            Trabajo donde la arquitectura
            <span className="block text-muted">tuvo que demostrarse.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-body text-muted">
            Productos reales, con restricciones reales: plazos, equipos
            pequeños, tráfico, regulación y decisiones que había que sostener
            más allá del lanzamiento.
          </p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="flex flex-col gap-6 border-b border-rule pb-6 md:flex-row md:items-end md:justify-between">
            <p className="label">Filtrar por categoría</p>
            <div
              role="group"
              aria-label="Filtrar proyectos por categoría"
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {categories.map((category) => {
                const active = activeCategory === category.value;
                return (
                  <button
                    key={category.value}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveCategory(category.value)}
                    className={`inline-flex min-h-11 items-center gap-2 border-b-2 font-mono text-label uppercase tracking-[0.12em] transition-colors duration-[var(--duration-fast)] ${
                      active
                        ? 'border-accent font-medium text-ink'
                        : 'border-transparent text-muted hover:border-rule hover:text-ink'
                    }`}
                  >
                    {category.label}
                    <span className="font-mono text-label tracking-[0.1em] text-muted">
                      {counts[category.value]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="border-b border-rule py-16">
              <p className="font-display text-h3 text-ink">
                No hay proyectos en esta categoría.
              </p>
              <p className="mt-3 text-small text-muted">
                Tengo trabajo en otras áreas; puedes verlo todo junto.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className="mt-6 inline-flex min-h-11 items-center border-b-2 border-accent text-small font-medium text-ink"
              >
                Ver todos los proyectos
              </button>
            </div>
          ) : (
            <div>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  hasImage={availableImages[project.id] ?? false}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default ProjectsExplorer;
