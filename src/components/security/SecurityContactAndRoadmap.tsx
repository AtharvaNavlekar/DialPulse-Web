import React from 'react';
import { Mail, ArrowRight, RefreshCw, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function SecurityContactAndRoadmap() {
  return (
    <section className="py-20 md:py-28 bg-surface-container-low border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Security Question & Contact */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-surface-container-lowest border border-outline-variant/80 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>DIRECT INQUIRIES</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface tracking-tight mb-4">
                Have a security question?
              </h2>

              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
                Questions about how DialPulse approaches security, access control or data handling can be routed through the appropriate contact channel.
              </p>

              <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/60 mb-6 font-mono text-xs">
                <span className="text-outline block text-[10px] uppercase tracking-wider mb-1">
                  DESIGNATED SECURITY CONTACT
                </span>
                <span className="text-on-surface font-semibold">
                  To be confirmed
                </span>
                <p className="text-[11px] text-on-surface-variant font-sans mt-1">
                  Our team coordinates security and architecture reviews directly via our inquiry workflow.
                </p>
              </div>
            </div>

            <div>
              <Button href="/contact" size="md">
                Contact DialPulse
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* RIGHT: Continuous Improvement & Engineering Discipline */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-surface-container-lowest border border-outline-variant/80 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>ENGINEERING DISCIPLINE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface tracking-tight mb-4">
                Continuous improvement
              </h2>

              <p className="text-sm text-on-surface-variant leading-relaxed">
                Security is an ongoing engineering discipline. DialPulse continues to evaluate how access controls, observability, data handling and operational safeguards should evolve with the platform.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-outline-variant/40 text-[10px] font-mono text-outline">
              // EVOLUTION_WITHOUT_UNFOUNDED_PROMISES
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
