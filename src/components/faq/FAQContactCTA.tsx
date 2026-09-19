import React from 'react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  HelpCircle, 
  Compass, 
  ShieldCheck, 
  FileText 
} from 'lucide-react';

export function FAQContactCTA() {
  return (
    <section className="py-16 md:py-24 bg-surface-container-low border-t border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main "Still have a question?" Panel */}
        <div className="bg-surface-container rounded-3xl p-8 sm:p-12 border border-outline-variant/80 relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" 
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-2">
                UNRESOLVED INQUIRIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-on-surface tracking-tight leading-tight mb-4">
                Still have a question?
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Bring us the workflow, the problem or the specific thing you're evaluating.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/contact" size="lg" className="shadow-sm">
                Talk to DialPulse
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href="/product" variant="outlined" size="lg">
                Explore the Product
              </Button>
            </div>
          </div>
        </div>

        {/* 3-Route Specialized Support / Contact Routing Grid */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-mono font-bold tracking-widest text-outline uppercase block mb-1">
              DIRECT INQUIRY PATHS
            </span>
            <h3 className="text-xl font-display font-bold text-on-surface">
              Connect with the Right Team
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* 1. SALES */}
            <Link
              to="/contact"
              className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant hover:border-primary/60 hover:shadow-xs transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-1">
                  SALES
                </h4>
                <p className="text-sm text-on-surface-variant">
                  For evaluating DialPulse.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-xs font-mono font-semibold text-primary">
                <span>Contact sales</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 2. PRODUCT */}
            <Link
              to="/product"
              className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant hover:border-primary/60 hover:shadow-xs transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-1">
                  PRODUCT
                </h4>
                <p className="text-sm text-on-surface-variant">
                  For questions about capabilities and workflows.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-xs font-mono font-semibold text-primary">
                <span>Explore architecture</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 3. PRIVACY / LEGAL */}
            <Link
              to="/privacy"
              className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant hover:border-primary/60 hover:shadow-xs transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-1">
                  PRIVACY / LEGAL
                </h4>
                <p className="text-sm text-on-surface-variant">
                  For privacy or legal questions.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-xs font-mono font-semibold text-primary">
                <span>View governance</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>
        </div>

        {/* Legal Micro-Link Ribbon */}
        <div className="pt-6 border-t border-outline-variant/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-on-surface-variant">
          <span className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            Questions about how DialPulse handles information?
          </span>
          <div className="flex items-center gap-6 font-medium">
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            <span className="text-outline">|</span>
            <Link to="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
