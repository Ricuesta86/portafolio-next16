import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import ScrollReveal from '../components/ScrollReveal';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/SocialIcons';
import { socialLinks } from '@/data/social';
import AnimatedSpan from '../components/AnimatedSpan';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    '¿Tienes un proyecto en mente? Ponte en contacto conmigo.',
};

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon className="h-5 w-5" />,
  linkedin: <LinkedinIcon className="h-5 w-5" />,
  twitter: <TwitterIcon className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
};

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: 'Email',
    value: 'hola@ricuesta.dev',
    href: 'mailto:hola@ricuesta.dev',
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: 'Ubicación',
    value: 'Remoto / Cualquier zona horaria',
    href: null,
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: 'Disponibilidad',
    value: 'Lunes - Viernes, 9:00 - 18:00 (GMT-3)',
    href: null,
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: 'Respuesta',
    value: 'En menos de 24 horas',
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
          <AnimatedSpan>Contacto</AnimatedSpan>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Hablemos de tu{' '}
              <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                proyecto
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              ¿Tienes una idea que necesitas llevar al mercado? ¿Necesitas un
              tech lead para tu equipo? Me encantaría escuchar sobre tu proyecto.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/50 dark:text-brand-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-slate-900 transition-colors hover:text-brand-600 dark:text-white dark:hover:text-brand-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                  Sígueme en redes
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all hover:border-brand-400 hover:bg-brand-50 hover:text-brand-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-brand-700 dark:hover:bg-brand-950/50 dark:hover:text-brand-400"
                    >
                      {iconMap[social.icon]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
                Envíame un mensaje
              </h2>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}