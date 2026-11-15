import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { socialLinks } from '@/data/social';
import Container from './Container';

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon className="h-4 w-4" />,
  linkedin: <LinkedinIcon className="h-4 w-4" />,
  twitter: <TwitterIcon className="h-4 w-4" />,
  mail: <Mail className="h-4 w-4" aria-hidden="true" />,
};

const footerLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre mí', href: '/about' },
  { label: 'Proyectos', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center gap-2.5"
              aria-label="Ricuesta, inicio"
            >
              <Image
                src="/imagen/logo4.png"
                alt=""
                width={32}
                height={32}
                loading="eager"
                className="h-8 w-8 object-contain grayscale dark:invert"
              />
              <span className="font-display text-lg leading-none tracking-tight">
                Ricuesta
                <span className="font-mono text-xs text-accent-strong">.dev</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-small text-muted">
              Ingeniería de software para productos que tienen que crecer. De la
              primera decisión técnica al sistema en producción.
            </p>
          </div>

          <nav
            aria-label="Navegación del pie"
            className="md:col-span-4"
          >
            <p className="label mb-4">Mapa del sitio</p>
            <ul className="grid grid-cols-2 gap-x-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-11 items-center text-small text-muted transition-colors duration-[var(--duration-fast)] hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="label mb-4">Enlaces</p>
            <ul className="space-y-2">
              {socialLinks.map((social) => {
                const external = social.url.startsWith('http');
                return (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="flex min-h-11 items-center gap-2 text-small text-muted transition-colors duration-[var(--duration-fast)] hover:text-ink"
                    >
                      <span className="text-ink" aria-hidden="true">
                        {iconMap[social.icon]}
                      </span>
                      {social.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-rule pt-6 text-small text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} ricuesta.dev · Diseñado y construido con Next.js
          </p>
          <p className="font-mono text-label uppercase tracking-[0.14em]">
            Remoto · Cualquier zona horaria
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
