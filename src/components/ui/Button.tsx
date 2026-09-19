import * as React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'elevated' | 'outlined' | 'text' | 'tonal';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'filled', size = 'md', href, external, asChild, ...props }, ref) => {
    // M3 Interaction states and shaping
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-38 disabled:pointer-events-none relative overflow-hidden group';
    
    // M3 Button Types
    const variants = {
      filled: 'bg-primary text-on-primary hover:bg-primary/90 shadow-sm active:scale-[0.98]',
      elevated: 'bg-surface-container-low text-primary shadow-[0_1px_2px_rgba(0,0,0,0.3)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.3)] hover:bg-surface-container active:scale-[0.98]',
      tonal: 'bg-primary-container text-on-primary-container hover:bg-primary-container/80 active:scale-[0.98]',
      outlined: 'border border-outline bg-transparent hover:bg-surface-variant text-on-surface active:scale-[0.98]',
      text: 'bg-transparent text-primary hover:bg-surface-variant px-3',
    };

    const sizes = {
      sm: 'h-10 px-4 text-sm',
      md: 'h-12 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    // State layer overlay (M3 standard interaction ripple effect simulation)
    const StateLayer = () => (
      <span className="absolute inset-0 bg-current opacity-0 group-hover:opacity-[0.08] group-active:opacity-[0.12] transition-opacity pointer-events-none" />
    );

    if (href) {
      if (external) {
        return (
          <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
            <StateLayer />
            <span className="relative z-10 flex items-center gap-2">{props.children}</span>
          </a>
        );
      }
      return (
        <Link to={href} className={classes}>
          <StateLayer />
          <span className="relative z-10 flex items-center gap-2">{props.children}</span>
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        <StateLayer />
        <span className="relative z-10 flex items-center gap-2">{props.children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

