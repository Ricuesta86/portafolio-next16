import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'senior-lead',
    role: 'Ingeniero de Software Senior / Tech Lead',
    company: 'TechCorp Inc.',
    period: '2021 - Actualidad',
    description:
      'Lidero un equipo de 8 desarrolladores construyendo plataformas SaaS a escala. Responsable de arquitectura, code reviews y mentoring.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
    type: 'work',
  },
  {
    id: 'fullstack-dev',
    role: 'Full Stack Developer',
    company: 'StartupLab',
    period: '2018 - 2021',
    description:
      'Desarrollé MVPs para 15+ startups del programa de incubación. Reduje el time-to-market de 6 meses a 6 semanas promedio.',
    technologies: ['React', 'Python', 'Docker', 'MongoDB'],
    type: 'work',
  },
  {
    id: 'junior-dev',
    role: 'Desarrollador Junior',
    company: 'DigitalAgency',
    period: '2015 - 2018',
    description:
      'Construcción de sitios web y aplicaciones web para clientes de e-commerce, retail y servicios profesionales.',
    technologies: ['JavaScript', 'jQuery', 'PHP', 'MySQL'],
    type: 'work',
  },
  {
    id: 'engineering-degree',
    role: 'Ingeniería en Informática',
    company: 'Universidad Politécnica',
    period: '2010 - 2015',
    description:
      'Especialización en sistemas distribuidos, bases de datos y diseño de arquitecturas de software.',
    technologies: ['Java', 'Algoritmos', 'Sistemas Distribuidos'],
    type: 'education',
  },
];