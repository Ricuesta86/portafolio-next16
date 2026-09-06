'use client';

import { Briefcase, GraduationCap } from 'lucide-react';
import type { Experience } from '@/types';
import ScrollReveal from './ScrollReveal';

interface TimelineProps {
  experiences: Experience[];
}

const Timeline = ({ experiences }: TimelineProps) => {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 md:left-1/2 md:-translate-x-px" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <ScrollReveal key={exp.id} delay={index * 0.1}>
            <div
              className={`relative flex flex-col gap-6 md:flex-row ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div
                  className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
                      {exp.type === 'work' ? 'Experiencia' : 'Educación'}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute left-4 -translate-x-1/2 md:left-1/2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-500 bg-white shadow-lg dark:bg-slate-950">
                  {exp.type === 'work' ? (
                    <Briefcase className="h-4 w-4 text-brand-600" />
                  ) : (
                    <GraduationCap className="h-4 w-4 text-brand-600" />
                  )}
                </div>
              </div>

              <div className="hidden flex-1 md:block" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Timeline;