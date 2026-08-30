// lib/statistics.ts
export interface Statistic {
  id: string;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  description?: string;
}

export const statistics: Statistic[] = [
  {
    id: 'experience',
    value: 20,
    label: 'Años de experiencia',
    suffix: '+',
    description: 'Construyendo software profesional'
  },
  {
    id: 'mvps',
    value: 15,
    label: 'MVPs entregados',
    suffix: '+',
    description: 'De la idea a la producción'
  },
  {
    id: 'industries',
    value: 4,
    label: 'Industrias diferentes',
    description: 'E-commerce, SaaS, Fintech, Healthtech'
  }
];