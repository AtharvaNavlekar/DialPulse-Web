import { ReactNode } from 'react';

interface FooterColumnProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function FooterColumn({ title, children, className = '' }: FooterColumnProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="text-slate-900 font-semibold text-sm tracking-wide mb-1">{title}</div>
      {children}
    </div>
  );
}
