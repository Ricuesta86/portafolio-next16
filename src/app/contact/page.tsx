import type { Metadata } from 'next';
import ContactForm from '../components/ContactForm';
import Container from '../components/Container';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/SocialIcons';
import { socialLinks } from '@/data/social';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contacta con Ricuesta para hablar de arquitectura, producto o un MVP que necesita salir a producción.',
};

const contactInfo = [
  {
    label: 'Email',
    value: 'hola@ricuesta.dev',
    href: 'mailto:hola@ricuesta.dev',
  },
  {
    label: 'Ubicación',
    value: 'Remoto · Cualquier zona horaria',
    href: null,
  },
  {
    label: 'Disponibilidad',
    value: 'Lunes a viernes, 9:00–18:00 (GMT-3)',
    href: null,
  },
  {
    label: 'Respuesta',
    value: 'En menos de 24 horas',
    href: null,
  },
];

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon className="h-4 w-4" />,
  linkedin: <LinkedinIcon className="h-4 w-4" />,
  twitter: <TwitterIcon className="h-4 w-4" />,
  mail: <span aria-hidden="true">@</span>,
};

export default function ContactPage() {
  return (
    <>
      <section className="section border-b border-rule">
        <Container>
          <p className="label">Contacto</p>
          <h1 className="mt-5 max-w-4xl font-display text-display text-ink">
            Hablemos de lo que
            <span className="block text-muted">necesitas construir.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-body text-muted">
            Si tienes una idea, un equipo atascado o una decisión de
            arquitectura pendiente, escríbeme con el contexto. Te responderé
            con una primera lectura concreta, no con una plantilla.
          </p>
        </Container>
      </section>

      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="label">Datos de contacto</p>
            <dl className="mt-6 border-t border-rule">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-1 border-b border-rule py-4 sm:grid-cols-12 sm:items-center sm:gap-4"
                >
                  <dt className="font-mono text-label uppercase tracking-[0.14em] text-muted sm:col-span-4">
                    {item.label}
                  </dt>
                  <dd className="text-small text-ink sm:col-span-8">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="inline-flex min-h-11 items-center underline decoration-rule underline-offset-4 transition-colors duration-[var(--duration-fast)] hover:text-accent-strong"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <p className="label">Redes</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const external = social.url.startsWith('http');
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      aria-label={social.name}
                      className="flex h-11 w-11 items-center justify-center border border-rule text-ink transition-colors duration-[var(--duration-fast)] hover:border-ink hover:bg-surface"
                    >
                      {iconMap[social.icon]}
                    </a>
                  );
                })}
              </div>
            </div>

            <p className="mt-10 max-w-sm border-t-2 border-accent pt-4 text-small text-muted">
              Para propuestas con alcance definido, incluye objetivos, plazos y
              qué has intentado hasta ahora. Con eso puedo darte una respuesta
              útil desde el primer mensaje.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-rule bg-surface p-6 sm:p-8">
              <h2 className="font-display text-h3 text-ink">
                Envíame un mensaje
              </h2>
              <p className="mt-2 text-small text-muted">
                Cuéntame el contexto. No hay compromiso ni llamada obligatoria.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
