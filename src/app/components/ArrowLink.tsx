import Link from 'next/link';
import type { ReactNode } from 'react';

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const ArrowLink = ({ href, children, className = '' }: ArrowLinkProps) => {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center gap-2 font-medium text-accent-strong transition-colors duration-[var(--duration-fast)] hover:text-ink ${className}`}
    >
      <span className="border-b border-transparent pb-0.5 transition-colors duration-[var(--duration-fast)] group-hover:border-current">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
};

export default ArrowLink;
