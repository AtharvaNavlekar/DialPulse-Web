import React from 'react';
import { 
  SearchX, 
  HelpCircle, 
  ArrowRight, 
  Layers, 
  PhoneCall, 
  CheckCircle2, 
  AlertCircle,
  Database,
  Compass,
  Sparkles,
  FileQuestion
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function NotFoundHero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background Architectural Layer */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,105,92,0.06),transparent_60%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Editorial Headline and Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>ERROR 404</span>
            </div>

            {/* Huge Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-on-surface tracking-tight leading-[1.08] mb-6">
              Looks like <br className="hidden sm:inline" />
              <span className="text-primary">this lead went missing.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-2xl mb-8">
              The page you're looking for isn't here. It may have moved, the link may be outdated, or the URL may have gone somewhere it shouldn't.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button href="/" size="lg" className="w-full sm:w-auto shadow-sm">
                Back to DialPulse
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>

              <Button href="/product" variant="outlined" size="lg" className="w-full sm:w-auto">
                Explore Product
              </Button>

              <Button href="/solutions" variant="text" size="lg" className="w-full sm:w-auto text-primary font-medium">
                View Solutions
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE: Product-Inspired Missing CRM Record Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div 
              aria-label="Conceptual illustration of an unlocated CRM record in the DialPulse pipeline"
              role="img"
              className="w-full max-w-md bg-surface-container-lowest border border-outline-variant/80 rounded-3xl p-6 shadow-sm relative overflow-hidden"
            >
              {/* Subtle top pipeline header mock */}
              <div className="flex items-center justify-between border-b border-outline-variant/50 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="text-[11px] font-mono font-medium text-on-surface-variant ml-2">
                    QUERY_ROUTE: 404_NULL
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-800 border border-amber-500/20 font-semibold">
                  STATUS: UNASSIGNED
                </span>
              </div>

              {/* Centerpiece: Oversized 404 Constructed with CRM UI Tokens */}
              <div className="relative py-4 my-2 flex items-center justify-center">
                {/* Behind watermark glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                  <span className="text-9xl font-display font-black text-primary select-none">404</span>
                </div>

                <div className="flex items-center justify-center gap-3 relative z-10">
                  {/* Digit 4 Card */}
                  <div className="w-20 h-28 sm:w-24 sm:h-32 rounded-2xl bg-surface-container-low border border-outline-variant flex flex-col justify-between p-3 relative group hover:border-primary/50 transition-colors">
                    <span className="text-[10px] font-mono text-outline">ID_PREFIX</span>
                    <span className="text-4xl sm:text-5xl font-display font-black text-[#1F3A5F] self-center">
                      4
                    </span>
                    <div className="flex items-center gap-1 text-[9px] font-mono text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>LEAD_STG</span>
                    </div>
                  </div>

                  {/* Digit 0 Record Search / Missing State */}
                  <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl bg-amber-50/70 border border-amber-300/80 flex flex-col justify-between p-3 relative shadow-inner">
                    <div className="flex items-center justify-between text-[10px] font-mono text-amber-800 font-bold">
                      <span>OBJ_CARD</span>
                      <SearchX className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
                    </div>
                    
                    <div className="flex flex-col items-center justify-center py-1">
                      <span className="text-3xl sm:text-4xl font-display font-black text-amber-900 tracking-tighter">
                        0
                      </span>
                      <span className="text-[9px] font-mono font-bold text-amber-800 uppercase tracking-wider mt-0.5 bg-amber-200/60 px-1.5 py-0.5 rounded">
                        NOT FOUND
                      </span>
                    </div>

                    <div className="text-[9px] font-mono text-amber-700 text-center truncate">
                      RECORD_MISSING
                    </div>
                  </div>

                  {/* Digit 4 Card */}
                  <div className="w-20 h-28 sm:w-24 sm:h-32 rounded-2xl bg-surface-container-low border border-outline-variant flex flex-col justify-between p-3 relative group hover:border-primary/50 transition-colors">
                    <span className="text-[10px] font-mono text-outline">ID_SUFFIX</span>
                    <span className="text-4xl sm:text-5xl font-display font-black text-[#1F3A5F] self-center">
                      4
                    </span>
                    <div className="flex items-center gap-1 text-[9px] font-mono text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>ROUTER</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-Card: Pipeline Inspection Trace */}
              <div className="mt-4 pt-4 border-t border-outline-variant/60 space-y-2">
                <div className="flex items-center justify-between text-xs text-on-surface-variant font-mono">
                  <span className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-primary" />
                    <span>Lead Directory</span>
                  </span>
                  <span className="text-slate-500">0 matches found</span>
                </div>

                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/50 text-[11px] font-mono text-on-surface-variant space-y-1">
                  <div className="flex justify-between">
                    <span className="text-outline">REQUEST_PATH:</span>
                    <span className="text-on-surface font-semibold truncate max-w-[180px]">
                      {typeof window !== 'undefined' ? window.location.pathname : '/unresolved-route'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-outline">RESOLUTION:</span>
                    <span className="text-amber-800 font-semibold">SUPPRESSED_NO_ROUTE</span>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Pipeline Indicator */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-on-surface-variant font-mono">
                <span className="flex items-center gap-1 text-primary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>DialPulse Routing Core</span>
                </span>
                <span className="text-slate-400">ACTIVE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
