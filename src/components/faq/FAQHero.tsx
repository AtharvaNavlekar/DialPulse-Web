import React from 'react';
import { Search, X, CheckCircle2, ArrowDown, HelpCircle } from 'lucide-react';

interface FAQHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClearSearch: () => void;
}

export function FAQHero({ searchQuery, onSearchChange, onClearSearch }: FAQHeroProps) {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden bg-surface border-b border-outline-variant/60">
      {/* Background Architectural Radial Gradient */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,105,92,0.06),transparent_60%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Eyebrow, Headline, Supporting Copy, and Search */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-6">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FAQ</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-on-surface tracking-tight leading-[1.1] mb-6">
              Questions are part of <br className="hidden sm:inline" />
              <span className="text-primary">the workflow.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-2xl mb-8">
              Everything you need to understand DialPulse before you bring it into your customer operation.
            </p>

            {/* Search Input Box */}
            <div className="w-full max-w-xl">
              <label htmlFor="faq-search-input" className="sr-only">
                Search questions across product, security, communication, AI, pricing and support
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                
                <input
                  id="faq-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search questions..."
                  autoComplete="off"
                  className="w-full pl-11 pr-12 py-3.5 text-base sm:text-lg bg-surface-container-lowest border border-outline rounded-2xl text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-xs transition-all duration-200"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={onClearSearch}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-outline hover:text-on-surface transition-colors"
                    aria-label="Clear search input"
                  >
                    <div className="w-7 h-7 rounded-full bg-surface-variant flex items-center justify-center">
                      <X className="w-4 h-4" />
                    </div>
                  </button>
                )}
              </div>

              {/* Sub-label under search */}
              <p className="mt-2.5 text-xs text-on-surface-variant font-mono">
                Search across product, security, communication, AI, pricing and support.
              </p>
            </div>

          </div>

          {/* RIGHT: Product-Inspired Workflow Architecture Fragment Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div 
              aria-label="Product visual representing verified FAQ workflow stages: Question, Context, Answer, and Next Step"
              role="img"
              className="w-full max-w-md bg-surface-container-lowest border border-outline-variant rounded-3xl p-6 shadow-sm relative overflow-hidden"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-outline-variant/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-mono font-medium text-on-surface-variant">
                    DIALPULSE_RESOLUTION_TRACE
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold border border-primary/20">
                  VERIFIED PRODUCT SPECS
                </span>
              </div>

              {/* Sequential Flow Blocks: QUESTION -> CONTEXT -> ANSWER -> NEXT STEP */}
              <div className="space-y-3 relative">
                
                {/* 1. QUESTION */}
                <div className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/70 relative">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-outline uppercase tracking-wider mb-1">
                    <span>STEP 01 // INQUIRY</span>
                    <span className="text-primary font-bold">QUESTION</span>
                  </div>
                  <p className="text-xs font-semibold text-on-surface">
                    "How does DialPulse isolate customer data?"
                  </p>
                </div>

                {/* Arrow Connector */}
                <div className="flex justify-center -my-1">
                  <ArrowDown className="w-3.5 h-3.5 text-primary/60" />
                </div>

                {/* 2. CONTEXT */}
                <div className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/70 relative">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-outline uppercase tracking-wider mb-1">
                    <span>STEP 02 // ARCHITECTURE</span>
                    <span className="text-[#1F3A5F] font-bold">CONTEXT</span>
                  </div>
                  <div className="text-[11px] font-mono text-on-surface-variant space-y-1">
                    <div>• Server-side tenant scoping</div>
                    <div>• Row-level authorization</div>
                  </div>
                </div>

                {/* Arrow Connector */}
                <div className="flex justify-center -my-1">
                  <ArrowDown className="w-3.5 h-3.5 text-primary/60" />
                </div>

                {/* 3. ANSWER */}
                <div className="p-3.5 rounded-2xl bg-primary/5 border border-primary/30 relative shadow-inner">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-primary uppercase tracking-wider mb-1">
                    <span>STEP 03 // RESOLUTION</span>
                    <span className="text-primary font-bold">ANSWER</span>
                  </div>
                  <p className="text-xs text-on-surface font-medium leading-relaxed">
                    Customer records are strictly partitioned within authenticated tenant perimeters.
                  </p>
                </div>

                {/* Arrow Connector */}
                <div className="flex justify-center -my-1">
                  <ArrowDown className="w-3.5 h-3.5 text-primary/60" />
                </div>

                {/* 4. NEXT STEP */}
                <div className="p-3 rounded-2xl bg-surface-container-low border border-outline-variant/70 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="font-semibold text-on-surface">Verified Next Step</span>
                  </div>
                  <span className="font-mono text-[11px] text-primary font-medium">
                    /security →
                  </span>
                </div>

              </div>

              {/* Bottom Status Ribbon */}
              <div className="mt-4 pt-3 border-t border-outline-variant/50 flex items-center justify-between text-[10px] font-mono text-on-surface-variant">
                <span>DATABASE_TENANT_ISOLATION</span>
                <span className="text-emerald-700 font-bold">ENFORCED</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
