// components/Statistics.tsx
'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import { statistics } from '../lib/statistics';

const Statistics = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Impacto en números
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            Resultados que hablan por sí mismos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:shadow-lg transition-shadow duration-300"
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
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
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