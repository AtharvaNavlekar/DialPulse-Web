import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function AboutAiPhilosophy() {
  return (
    <section className="py-20 md:py-32 bg-surface border-b border-outline-variant/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Text Statement */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight leading-tight mb-6">
              AI should make the workflow lighter, <br />
              <span className="text-primary">not less accountable.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-on-surface-variant leading-relaxed mb-8">
              <p>
                DialPulse uses AI-assisted capabilities for supported tasks such as transcription, summarization, sentiment classification and text-based assistance.
              </p>
              <p className="text-on-surface font-medium">
                AI sits inside an existing permission, quota, processing and governance model. The goal is assistance — not silent automation without context.
              </p>
            </div>

            <Button href="/product" variant="outlined" size="lg">
              Explore the Product
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>

          {/* RIGHT: Product-Inspired AI Pipeline Visual */}
          <div className="lg:col-span-6">
            <div 
              role="img"
              aria-label="Workflow diagram showing AI assistance with redaction and human accountability checkpoints"
              className="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/80 shadow-xs space-y-4"
            >
              <div className="flex items-center justify-between border-b border-outline-variant/50 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-mono font-bold uppercase text-on-surface">
                    AI_ASSISTED_PIPELINE
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                  GOVERNED_EXECUTION
                </span>
              </div>

              {/* Step 1: Raw Customer Context */}
              <div className="p-3.5 rounded-2xl bg-surface-container-lowest border border-outline-variant flex items-center justify-between text-xs">
                <div>
                  <span className="font-mono text-[10px] text-outline uppercase block">STAGE 01</span>
                  <span className="font-bold text-on-surface">Customer Interaction Data</span>
                </div>
                <span className="text-[10px] font-mono text-on-surface-variant">Audio / Timeline</span>
              </div>

              {/* Step 2: Privacy Redaction */}
              <div className="p-3.5 rounded-2xl bg-surface-container-lowest border border-primary/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <span className="font-mono text-[10px] text-primary uppercase block font-semibold">STAGE 02 // PRIVACY SAFEGUARD</span>
                    <span className="font-bold text-on-surface">Server-Side PII Masking</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                  SANITIZED
                </span>
              </div>

              {/* Step 3: Google Gemini Model Assist */}
              <div className="p-3.5 rounded-2xl bg-primary/5 border border-primary/40 flex items-center justify-between text-xs">
                <div>
                  <span className="font-mono text-[10px] text-primary uppercase block font-semibold">STAGE 03 // GEMINI ASSIST</span>
                  <span className="font-bold text-on-surface">Summary & Sentiment Extraction</span>
                </div>
                <span className="text-[10px] font-mono text-primary font-bold">
                  SERVER PROXIED
                </span>
              </div>

              {/* Step 4: Human Review */}
              <div className="p-3.5 rounded-2xl bg-surface-container-lowest border border-outline-variant flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <UserCheck className="w-4 h-4 text-[#1F3A5F] shrink-0" />
                  <div>
                    <span className="font-mono text-[10px] text-outline uppercase block">STAGE 04 // OPERATIONAL ACCOUNTABILITY</span>
                    <span className="font-bold text-on-surface">Human Confirmation & Follow-up</span>
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              </div>

              <div className="pt-2 text-[11px] font-mono text-on-surface-variant flex items-center justify-between">
                <span>MODEL_TRAINING_ON_TENANT_DATA:</span>
                <span className="text-emerald-700 font-bold">DISABLED</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
