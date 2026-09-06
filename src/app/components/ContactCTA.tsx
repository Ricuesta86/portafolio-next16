'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const ContactCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-10 sm:p-14 text-center"
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            </div>

            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              ¿Listo para construir algo increíble?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-brand-100 text-lg">
              Cuéntame tu idea y hagamos que suceda. Primera consulta gratuita.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-brand-700 shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Empezar ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactCTA;