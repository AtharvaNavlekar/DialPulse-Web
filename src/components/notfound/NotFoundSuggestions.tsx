import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Layers, 
  CreditCard, 
  MessageSquare, 
  Workflow,
  ArrowUpRight 
} from 'lucide-react';

interface QuickDestination {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
}

const DESTINATIONS: QuickDestination[] = [
  {
    id: 'product',
    title: 'Product',
    description: 'What DialPulse brings together.',
    href: '/product',
    icon: Package,
  },
  {
    id: 'solutions',
    title: 'Solutions',
    description: 'Explore workflows DialPulse is designed around.',
    href: '/solutions',
    icon: Layers,
  },
  {
    id: 'pricing',
    title: 'Pricing',
    description: 'See the current pricing experience.',
    href: '/pricing',
    icon: CreditCard,
  },
  {
    id: 'about',
    title: 'About',
    description: 'Why DialPulse exists and our philosophy.',
    href: '/about',
    icon: Workflow,
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Start a conversation.',
    href: '/contact',
    icon: MessageSquare,
  },
];

export function NotFoundSuggestions() {
  return (
    <section className="py-12 bg-surface-container-low border-y border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Panel Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
              DIRECTORY ASSISTANCE
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-on-surface">
              Maybe you were looking for...
            </h2>
          </div>
          <span className="text-xs text-on-surface-variant font-mono">
            Fast links to core platform areas
          </span>
        </div>

        {/* Suggestion Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DESTINATIONS.map((dest) => {
            const Icon = dest.icon;
            return (
              <Link
                key={dest.id}
                to={dest.href}
                className="group p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 hover:border-primary/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-outline group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>

                  <h3 className="text-base font-semibold text-on-surface group-hover:text-primary transition-colors duration-200 mb-1">
                    {dest.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {dest.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-outline-variant/40 flex items-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <span>Go to {dest.title}</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
