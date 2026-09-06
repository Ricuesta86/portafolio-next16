'use client';

import { motion } from 'framer-motion';
import type { Skill } from '@/types';
import ScrollReveal from './ScrollReveal';

interface SkillsSectionProps {
  skills: Skill[];
}

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Bases de Datos',
  tools: 'Herramientas',
  soft: 'Habilidades Blandas',
};

const categoryColors: Record<string, string> = {
  frontend: 'from-blue-500 to-cyan-500',
  backend: 'from-emerald-500 to-teal-500',
  database: 'from-orange-500 to-amber-500',
  tools: 'from-purple-500 to-violet-500',
  soft: 'from-rose-500 to-pink-500',
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
    <div className="space-y-12">
      {Object.entries(grouped).map(([category, categorySkills], groupIndex) => (
        <ScrollReveal key={category} delay={groupIndex * 0.1}>
          <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">
            {categoryLabels[category] ?? category}
          </h3>
          <div className="space-y-4">
            {categorySkills.map((skill, index) => (
              <div key={skill.name}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {skill.name}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.05,
                      ease: 'easeOut',
                    }}
                    className={`h-full rounded-full bg-gradient-to-r ${categoryColors[skill.category]}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default SkillsSection;