import Link from 'next/link';
import { projects } from '@/data/projects';
import Container from './Container';
import SectionHeading from './SectionHeading';
import ArrowLink from './ArrowLink';

const ProjectsPreview = () => {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section className="section border-b border-rule">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Trabajo"
            title="Proyectos destacados"
            lead="Una selección de productos donde la arquitectura, la entrega y el negocio tuvieron que alinearse."
          />
          <ArrowLink href="/projects" className="shrink-0">
            Ver todos
          </ArrowLink>
        </div>

        <ol className="mt-14">
          {featuredProjects.map((project, index) => (
            <li key={project.id} className="border-t border-rule">
              <div className="grid gap-4 py-7 md:grid-cols-12 md:items-baseline md:gap-6">
                <p className="font-mono text-label tracking-[0.14em] text-muted md:col-span-1">
                  {String(index + 1).padStart(2, '0')}
                </p>

                <div className="md:col-span-5">
                  <h3 className="text-h3 font-semibold text-ink">
                    <Link
                      href="/projects"
                      className="inline-flex min-h-11 items-center transition-colors duration-[var(--duration-fast)] hover:text-accent-strong"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-xl text-small text-muted">
                    {project.description}
                  </p>
                </div>

                <p className="font-mono text-label uppercase leading-[1.5] tracking-[0.12em] text-muted md:col-span-4">
                  {project.technologies.join(' · ')}
                </p>

                <div className="md:col-span-2 md:text-right">
                  <span
                    aria-hidden="true"
                    className="text-lg text-accent-strong"
                  >
                    ↗
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default ProjectsPreview;
