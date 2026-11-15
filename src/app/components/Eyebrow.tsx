import type { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

const Eyebrow = ({ children, className = '' }: EyebrowProps) => {
  return <p className={`label ${className}`}>{children}</p>;
};

export default Eyebrow;
