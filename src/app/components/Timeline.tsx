import type { Experience } from '@/types';

interface TimelineProps {
  experiences: Experience[];
}

const Timeline = ({ experiences }: TimelineProps) => {
  return (
    <ol>
      {experiences.map((experience) => (
        <li key={experience.id} className="border-t border-rule">
          <div className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="font-mono text-label uppercase tracking-[0.14em] text-muted">
                {experience.period}
              </p>
              <p className="mt-2 font-mono text-label uppercase tracking-[0.12em] text-accent-strong">
                {experience.type === 'work' ? 'Experiencia' : 'Educación'}
              </p>
            </div>

            <div className="md:col-span-9 md:border-l md:border-rule md:pl-8">
              <h3 className="text-h3 font-semibold text-ink">
                {experience.role}
              </h3>
              <p className="mt-1 text-small font-medium text-muted">
                {experience.company}
              </p>
              <p className="mt-4 max-w-2xl text-small text-muted">
                {experience.description}
              </p>
              <p className="mt-4 font-mono text-label uppercase leading-[1.5] tracking-[0.12em] text-muted">
                {experience.technologies.join(' · ')}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
