'use client';

import Link from 'next/link';
import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { socialLinks } from '@/data/social';

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon className="h-5 w-5" />,
  linkedin: <LinkedinIcon className="h-5 w-5" />,
  twitter: <TwitterIcon className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
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
    <footer className="border-t border-slate-200 bg-white/50 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <Link href="/" className="group flex items-center justify-center gap-2 md:justify-start">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 font-mono text-sm text-white shadow-lg shadow-brand-500/30">
                R
              </span>
              <span className="text-lg font-bold">
                ricuesta<span className="text-brand-600 dark:text-brand-400">.dev</span>
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-slate-500 dark:text-slate-400">
              Construyendo software que escala. De la idea al mercado, sin perder
              tiempo ni dinero.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 sm:flex-row sm:justify-between">
          <p className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
            &copy; {year} ricuesta.dev &middot; Hecho con{' '}
            <Heart className="h-4 w-4 fill-red-500 text-red-500" /> y Next.js
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-all hover:bg-brand-100 hover:text-brand-600 dark:text-slate-400 dark:hover:bg-brand-900/50 dark:hover:text-brand-400"
              >
                {iconMap[social.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;