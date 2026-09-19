import React from 'react';
import { Mail, ArrowRight, Settings } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ResourcesNewsletter: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#F8FAF8] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-2xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            
            <div className="max-w-xl">
              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
                  NOTIFICATION CHANNELS
                </span>
                <span className="text-[10px] font-mono uppercase bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                  Newsletter: To be configured
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
                Want updates when new resources arrive?
              </h3>

              {/* Copy */}
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct subscription dispatch is currently being provisioned. If your organization has specific workflow questions or requests for customized technical explainers, get in touch directly.
              </p>
            </div>

            {/* Direct Link to Contact */}
            <div className="shrink-0 w-full sm:w-auto">
              <Button
                id="newsletter-contact-cta"
                variant="outlined"
                size="md"
                href="/contact"
                className="w-full sm:w-auto border-slate-300 text-[#00695C] hover:bg-teal-50/50 hover:border-teal-300"
              >
                <span>Contact DialPulse</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
