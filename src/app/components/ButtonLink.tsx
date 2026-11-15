import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}

const styles = {
  primary:
    'border-transparent bg-accent text-accent-contrast hover:bg-accent-strong active:bg-accent-strong',
  outline:
    'border-muted/70 text-ink hover:border-ink active:bg-surface',
};

const ButtonLink = ({
  href,
  children,
  variant = 'primary',
  className = '',
}: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-[44px] items-center justify-center gap-2 border px-5 py-3 text-sm font-medium transition-colors duration-[var(--duration-fast)] ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
