import { MessageSquarePlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link 
        to="/contact"
        className="flex items-center justify-center w-14 h-14 bg-primary text-on-primary rounded-full shadow-[0_8px_24px_-4px_rgba(0,105,92,0.3)] hover:bg-primary-hover hover:scale-105 hover:shadow-[0_12px_32px_-4px_rgba(0,105,92,0.4)] transition-all duration-300 group"
        aria-label="Contact Sales"
      >
        <MessageSquarePlus className="w-6 h-6" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-inverse-surface text-inverse-on-surface text-sm font-medium rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          Contact Sales
          {/* Triangle */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-inverse-surface" />
        </div>
      </Link>
    </div>
  );
}
