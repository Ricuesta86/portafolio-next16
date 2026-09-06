'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import TypewriterText from './TypewriterText';

const Hero = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse-glow rounded-full bg-brand-400/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse-glow rounded-full bg-brand-600/10 blur-3xl [animation-delay:1.5s]" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 dark:border-brand-800 dark:bg-brand-950/50 dark:text-brand-300"
        >
          Disponible para nuevos proyectos
        </motion.div>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
          <TypewriterText
            text="Tu idea en producción en 6 semanas."
            speed={45}
            className="text-slate-900 dark:text-white"
          />
          <span className="mt-2 block bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent dark:from-brand-400 dark:to-brand-300">
            Sin sorpresas. Sin deuda técnica.
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl"
        >
          20 años construyendo MVPs que escalan.
          <span className="mt-1 block text-slate-500 dark:text-slate-500">
            De la idea al mercado, sin perder tiempo ni dinero.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-8 py-4 font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-600/40 hover:scale-105"
          >
            Ver proyectos <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 transition-all hover:border-brand-600 hover:scale-105 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-brand-400"
          >
            <Calendar className="h-4 w-4" /> Agendar llamada
          </Link>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16"
        >
          <div className="mx-auto flex h-12 w-6 items-start justify-center rounded-full border-2 border-slate-300 pt-2 dark:border-slate-700">
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-slate-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;