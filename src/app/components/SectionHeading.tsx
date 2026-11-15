import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  className?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  lead,
  children,
  className = '',
}: SectionHeadingProps) => {
  return (
    <header className={`max-w-3xl ${className}`}>
      {eyebrow && <p className="label mb-4">{eyebrow}</p>}
      <h2 className="font-display text-h2 text-ink">{title}</h2>
      {lead && (
        <p className="mt-5 max-w-2xl text-body text-muted">{lead}</p>
      )}
      {children}
    </header>
  );
};

export default SectionHeading;
