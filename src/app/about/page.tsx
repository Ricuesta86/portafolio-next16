import type { Metadata } from 'next';
import { Briefcase, Code, User, Target } from 'lucide-react';
import SkillsSection from '../components/SkillsSection';
import Timeline from '../components/Timeline';
import ScrollReveal from '../components/ScrollReveal';
import { skills } from '@/data/skills';
import { experiences } from '@/data/experience';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description:
    'Conoce mi trayectoria como Ingeniero de Software, mis habilidades técnicas y experiencia profesional.',
};

const highlights = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Full Stack Developer',
    description: 'React, Next.js, Node.js, Python - de frontend a backend completo.',
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: '20+ años de experiencia',
    description: 'Desde desarrollo web hasta arquitectura de sistemas distribuidos.',
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Enfoque en resultados',
    description: 'MVPs en 6 semanas, escalables y con cero deuda técnica.',
  },
  {
    icon: <User className="h-6 w-6" />,
    title: 'Liderazgo técnico',
    description: 'Equipos de hasta 8 desarrolladores. Mentoring y code reviews.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
              Sobre mí
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Construyendo software que{' '}
              <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                importa
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Soy un ingeniero de software con 20 años de experiencia transformando
              ideas en productos digitales exitosos. Mi enfoque combina la
              excelencia técnica con la comprensión del negocio.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-20 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Comencé mi carrera como desarrollador web en 2005, trabajando con
              JavaScript y PHP para agencias digitales. Con el tiempo, migré hacia
              el ecosistema JavaScript moderno, convirtiéndome en un especialista en
              React y TypeScript. Durante los últimos 6 años, lidero equipos de
              desarrollo, mentoring de desarrolladores junior, arquitectura de
              sistemas y la entrega de MVPs para startups del programa de
              incubación. Mi enfoque se centra en construir software que no solo
              funcione, sino que escale y mantenga la calidad con el crecimiento del
              producto.
            </p>
          </div>
        </ScrollReveal>

        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-md hover:shadow-brand-100/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700 dark:hover:shadow-brand-900/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-900/50 dark:text-brand-400">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Habilidades técnicas
          </h2>
        </ScrollReveal>
        <div className="mx-auto mb-20 max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <SkillsSection skills={skills} />
        </div>

        <ScrollReveal>
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experiencia & Educación
          </h2>
        </ScrollReveal>
        <div className="mx-auto max-w-3xl">
          <Timeline experiences={experiences} />
        </div>
      </div>
    </div>
  );
}