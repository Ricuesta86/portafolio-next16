'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Sobre mí' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contacto' },
];

const Header = () => {
  const pathname = usePathname();
  const [menu, setMenu] = useState({ open: false, pathname });
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isOpen = menu.open && menu.pathname === pathname;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(
    (returnFocus = false) => {
      setMenu({ open: false, pathname });
      if (returnFocus) {
        menuButtonRef.current?.focus();
      }
    },
    [pathname],
  );

  const toggleMenu = useCallback(() => {
    setMenu({ open: !isOpen, pathname });
  }, [isOpen, pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeMenu]);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-[var(--duration-fast)] ${
        isScrolled || isOpen
          ? 'border-rule bg-paper/95 backdrop-blur-sm'
          : 'border-transparent bg-paper'
      }`}
    >
      <div className="site-container flex h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-2.5"
          aria-label="Ricuesta, inicio"
        >
          <Image
            src="/imagen/logo4.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain grayscale dark:invert"
          />
          <span className="font-display text-xl leading-none tracking-tight">
            Ricuesta
            <span className="font-mono text-sm text-accent-strong">.dev</span>
          </span>
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 md:flex"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`flex min-h-11 min-w-11 items-center justify-center border-b-2 pt-0.5 text-sm transition-colors duration-[var(--duration-fast)] ${
                  active
                    ? 'border-accent font-medium text-ink'
                    : 'border-transparent text-muted hover:border-rule hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={toggleMenu}
            className="flex h-11 w-11 items-center justify-center border border-rule text-ink transition-colors duration-[var(--duration-fast)] hover:border-ink md:hidden"
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className="menu-grid border-rule md:hidden"
        data-open={isOpen}
      >
        <div>
          <nav
            aria-label="Navegación móvil"
            inert={!isOpen}
            className="site-container pb-4"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => closeMenu()}
                  aria-current={active ? 'page' : undefined}
                  className={`flex min-h-11 items-center border-t border-rule text-sm transition-colors duration-[var(--duration-fast)] ${
                    active ? 'font-medium text-accent-strong' : 'text-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
