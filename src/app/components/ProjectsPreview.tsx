'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';
import { projects } from '@/data/projects';

const ProjectsPreview = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-between gap-4 mb-12 sm:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                Proyectos destacados
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Una selección de mi mejor trabajo reciente
              </p>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
            >
              Ver todos{' '}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;