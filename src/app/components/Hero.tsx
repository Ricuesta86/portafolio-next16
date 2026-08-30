// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Fondo con gradiente y animación sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 -z-10" />
      
      {/* Contenido principal */}
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Badge opcional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-sm font-medium text-indigo-700 dark:text-indigo-300"
        >
          🚀 Disponible para nuevos proyectos
        </motion.div>

        {/* Título principal con efecto máquina de escribir */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <TypewriterText 
            text="Tu idea en producción en 6 semanas."
            speed={50}
            className="text-slate-900 dark:text-white block"
          />
          <span className="text-indigo-600 dark:text-indigo-400 block mt-2">
            Sin sorpresas. Sin deuda técnica.
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          20 años construyendo MVPs que escalan. 
          <span className="block text-slate-500 dark:text-slate-400 text-lg mt-2">
            De la idea al mercado, sin perder tiempo ni dinero.
          </span>
        </p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <Link
            href="/projects"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Ver proyectos →
          </Link>
          <Link
            href="https://calendly.com/tuusuario"  // Cambiar por tu enlace real
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-400 text-slate-900 dark:text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            📅 Agendar llamada
          </Link>
        </motion.div>

        {/* Indicador scroll (opcional) */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;