import type { Skill } from '@/types';

interface SkillsSectionProps {
  skills: Skill[];
}

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Bases de datos',
  tools: 'Herramientas',
  soft: 'Trabajo y liderazgo',
};

const levelLabel = (level: number) => {
  if (level >= 90) return 'Experto';
  if (level >= 80) return 'Avanzado';
  return 'Sólido';
};

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const grouped = skills.reduce(
    (acc, skill) => {
      (acc[skill.category] ??= []).push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>,
  );

  return (
    <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(grouped).map(([category, categorySkills]) => (
        <section key={category} aria-labelledby={`skills-${category}`}>
          <h3
            id={`skills-${category}`}
            className="border-t border-rule pt-4 font-mono text-label uppercase tracking-[0.14em] text-muted"
          >
            {categoryLabels[category] ?? category}
          </h3>
          <ul className="mt-2">
            {categorySkills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-baseline justify-between gap-4 border-b border-rule py-3"
              >
                <span className="text-small font-medium text-ink">
                  {skill.name}
                </span>
                <span className="shrink-0 font-mono text-label uppercase tracking-[0.12em] text-muted">
                  {levelLabel(skill.level)}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default SkillsSection;
