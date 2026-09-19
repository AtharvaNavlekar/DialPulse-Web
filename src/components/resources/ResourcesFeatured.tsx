import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Clock, BookOpen, Layers, Users, PhoneCall, ShieldCheck, X } from 'lucide-react';

export const ResourcesFeatured: React.FC = () => {
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  return (
    <section className="py-12 md:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#00695C]" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#00695C] font-bold">
              FEATURED EDITORIAL
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500">
            SLOT REF: RES-FEAT-01
          </span>
        </div>

        {/* Large Editorial Card with Asymmetrical Composition */}
        <div className="bg-[#F8FAF8] border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Editorial Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CCE8E1] text-[#00695C] text-xs font-mono font-semibold uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5" />
                    GUIDE
                  </span>
                  
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60 text-xs font-mono font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    COMING SOON
                  </span>
                  
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    CORE DISCOVERY
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#191C1B] tracking-tight leading-tight mb-4">
                  How connected customer operations change the workflow
                </h3>

                {/* Supporting Text */}
                <p className="text-base sm:text-lg text-[#3F4946] leading-relaxed mb-6">
                  An introduction to the ideas behind bringing leads, communication, team activity, visibility and operational controls closer together.
                </p>

                {/* Conceptual Topics Covered */}
                <div className="border-t border-slate-200/80 pt-6 mb-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    PLANNED TOPICS IN THIS GUIDE
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00695C]" />
                      <span>Unified intake from lead to conversation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00695C]" />
                      <span>Synchronous voice + async WhatsApp audit trails</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00695C]" />
                      <span>Supervisory visibility without micro-disruption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00695C]" />
                      <span>Policy guardrails: quiet hours & fatigue limits</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button: Clean Coming Soon Interaction */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  id="featured-resource-explore-btn"
                  variant="filled"
                  size="md"
                  onClick={() => setShowComingSoonModal(true)}
                  className="bg-[#00695C] hover:bg-[#005a4e] text-white cursor-pointer group"
                >
                  <span>Explore Guide</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>Content in editorial preparation</span>
                </div>
              </div>
            </div>

            {/* Right Column: Branded Editorial Cover Visual (Not a stock photo) */}
            <div className="lg:col-span-5 bg-[#0F172A] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-200">
              {/* Background ambient diagram lines */}
              <div 
                className="absolute inset-0 bg-[radial-gradient(#80D5C4_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" 
                aria-hidden="true" 
              />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
                    <Layers className="w-4 h-4 text-[#80D5C4]" />
                    <span>DIALPULSE SYSTEM SCHEMATIC</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                    UNPUBLISHED DRAFT
                  </span>
                </div>

                {/* Branded Vector Workflow Schematic */}
                <div className="space-y-3 font-mono text-xs">
                  {/* Step 1 */}
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-teal-950 border border-teal-700/60 text-[#80D5C4] flex items-center justify-center font-bold text-[11px]">
                        01
                      </span>
                      <div>
                        <div className="text-slate-200 font-medium">Customer Ingress</div>
                        <div className="text-[11px] text-slate-400">Leads & Contact History</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-teal-400 bg-teal-950/80 px-1.5 py-0.5 rounded border border-teal-900">
                      STAGED
                    </span>
                  </div>

                  {/* Step 2 */}
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center font-bold text-[11px]">
                        02
                      </span>
                      <div>
                        <div className="text-slate-200 font-medium">Execution Channels</div>
                        <div className="text-[11px] text-slate-400">Calls, WhatsApp, SLA Queues</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center font-bold text-[11px]">
                        03
                      </span>
                      <div>
                        <div className="text-slate-200 font-medium">Policy Verification</div>
                        <div className="text-[11px] text-slate-400">DND, Quiet Hours, Scoped Roles</div>
                      </div>
                    </div>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="relative z-10 pt-8 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>SECTION: EDITORIAL_01</span>
                <span className="text-[#80D5C4]">PLANNED LENGTH: ~10 MIN READ</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Clean Coming Soon Modal / Notice */}
      {showComingSoonModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-modal-title"
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 border border-slate-200 shadow-xl relative">
            <button
              onClick={() => setShowComingSoonModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  RESOURCE STATUS
                </span>
                <h4 id="coming-soon-modal-title" className="text-lg font-bold text-slate-900">
                  Coming Soon
                </h4>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              <span className="font-semibold text-slate-800">"How connected customer operations change the workflow"</span> is currently being written by our product and engineering team.
            </p>

            <p className="text-xs text-slate-500 leading-relaxed mb-6 bg-slate-50 p-3 rounded-lg border border-slate-200/80">
              We publish practical, deeply verified technical material rather than automated filler. When ready, it will be accessible here in the resources directory without gated forms.
            </p>

            <div className="flex items-center justify-end gap-3">
              <Button
                variant="filled"
                size="sm"
                onClick={() => setShowComingSoonModal(false)}
                className="bg-[#00695C] text-white px-5"
              >
                Understood
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
