'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import { statistics } from '../lib/statistics';
import ScrollReveal from './ScrollReveal';

const Statistics = () => {
  return (
    <section className="px-4 py-16 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
              Impacto en números
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Resultados que hablan por sí mismos
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-xl bg-slate-50 p-6 text-center transition-shadow hover:shadow-lg dark:bg-slate-800/50"
            >
              <div className="mb-3">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix || ''}
                  prefix={stat.prefix || ''}
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {stat.label}
              </h3>
              {stat.description && (
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {stat.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;