import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectVisual from './ProjectVisual';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
  hasImage: boolean;
}

const categoryLabels: Record<Project['category'], string> = {
  frontend: 'Frontend',
  fullstack: 'Full Stack',
  backend: 'Backend',
  mobile: 'Mobile',
};

const ProjectCard = ({ project, index, hasImage }: ProjectCardProps) => {
  return (
    <article className="border-t border-rule py-8 md:py-10">
      <div className="grid gap-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <ProjectVisual
            title={project.title}
            category={categoryLabels[project.category]}
            index={index}
            imageUrl={hasImage ? project.imageUrl : undefined}
          />
        </div>

        <div className="flex flex-col md:col-span-8">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <p className="font-mono text-label uppercase tracking-[0.14em] text-accent-strong">
              {categoryLabels[project.category]}
            </p>
            {project.featured && (
              <p className="font-mono text-label uppercase tracking-[0.14em] text-muted">
                Destacado
              </p>
            )}
          </div>

          <h2 className="mt-2 font-display text-h3 text-ink">
            {project.title}
          </h2>

          <p className="mt-3 max-w-2xl text-small text-muted">
            {project.description}
          </p>

          <p className="mt-4 font-mono text-label uppercase leading-[1.5] tracking-[0.12em] text-muted">
            {project.technologies.join(' · ')}
          </p>

          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-auto flex flex-wrap gap-x-6 pt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-small font-medium text-ink transition-colors duration-[var(--duration-fast)] hover:text-accent-strong"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-small font-medium text-ink transition-colors duration-[var(--duration-fast)] hover:text-accent-strong"
                >
                  <GithubIcon className="h-4 w-4" />
                  Código
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
