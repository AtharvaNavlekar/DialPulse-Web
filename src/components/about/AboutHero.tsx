import React from 'react';
import { 
  Users, 
  PhoneCall, 
  MessageSquare, 
  Layers, 
  FileText, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight,
  Workflow
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function AboutHero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-surface border-b border-outline-variant/60">
      {/* Background Architectural Radial Ambient */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,105,92,0.06),transparent_65%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Eyebrow, Headline, Supporting Narrative, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-6">
              <Workflow className="w-3.5 h-3.5" />
              <span>ABOUT DIALPULSE</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-on-surface tracking-tight leading-[1.1] mb-6">
              Customer operations <br className="hidden sm:inline" />
              <span className="text-primary">should feel connected.</span>
            </h1>

            {/* Supporting Copy - Two paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl mb-8">
              <p>
                DialPulse is built around a simple idea: the work around a customer should not be scattered across disconnected tools, messages, spreadsheets and manual follow-up.
              </p>
              <p className="text-on-surface font-medium">
                We're building a CRM that brings the workflow together — from the first lead to communication, team activity, support, visibility, compliance and AI-assisted work.
              </p>
            </div>

            {/* Direct Action Links */}
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/product" size="lg">
                Explore the Product
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href="/contact" variant="outlined" size="lg">
                Talk to Us
              </Button>
            </div>

          </div>

          {/* RIGHT: Editorial Visual of Converging Workflow Pieces */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div 
              role="img"
              aria-label="Product UI visual representing fragmented pieces converging into a unified DialPulse system"
              className="w-full max-w-md bg-surface-container-lowest border border-outline-variant rounded-3xl p-6 shadow-sm relative overflow-hidden"
            >
              {/* Header Status Bar */}
              <div className="flex items-center justify-between border-b border-outline-variant/60 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-mono font-medium text-on-surface-variant">
                    WORKFLOW_CONVERGENCE
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold border border-primary/20">
                  CONNECTED ARCHITECTURE
                </span>
              </div>

              {/* Fragmented pieces entering a central core */}
              <div className="space-y-3 relative">
                
                {/* 3 Converging Input Nodes */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/80 text-center">
                    <Users className="w-4 h-4 text-primary mx-auto mb-1" />
                    <span className="text-[10px] font-mono font-semibold text-on-surface block">LEAD</span>
                    <span className="text-[9px] font-mono text-outline">Ingestion</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/80 text-center">
                    <PhoneCall className="w-4 h-4 text-[#1F3A5F] mx-auto mb-1" />
                    <span className="text-[10px] font-mono font-semibold text-on-surface block">CALL</span>
                    <span className="text-[9px] font-mono text-outline">Timelines</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/80 text-center">
                    <MessageSquare className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
                    <span className="text-[10px] font-mono font-semibold text-on-surface block">MESSAGING</span>
                    <span className="text-[9px] font-mono text-outline">WhatsApp/SMS</span>
                  </div>
                </div>

                {/* Central DialPulse Convergence Hub */}
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/30 text-center relative shadow-inner">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold mb-1">
                    CENTRAL PLATFORM CORE
                  </div>
                  <div className="text-base font-display font-bold text-on-surface">
                    DialPulse Unified State
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1 leading-snug">
                    Tenant scoping • Role authorization • Context preservation
                  </p>
                </div>

                {/* 3 Dispatched Operational Outputs */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/80 text-center">
                    <Layers className="w-4 h-4 text-primary mx-auto mb-1" />
                    <span className="text-[10px] font-mono font-semibold text-on-surface block">TEAMS</span>
                    <span className="text-[9px] font-mono text-outline">Scoping</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/80 text-center">
                    <FileText className="w-4 h-4 text-primary mx-auto mb-1" />
                    <span className="text-[10px] font-mono font-semibold text-on-surface block">TICKETS</span>
                    <span className="text-[9px] font-mono text-outline">Resolution</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/80 text-center">
                    <BarChart3 className="w-4 h-4 text-primary mx-auto mb-1" />
                    <span className="text-[10px] font-mono font-semibold text-on-surface block">REPORT</span>
                    <span className="text-[9px] font-mono text-outline">Visibility</span>
                  </div>
                </div>

              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-4 pt-3 border-t border-outline-variant/50 flex items-center justify-between text-[10px] font-mono text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  COMPLIANCE_GUARDRAILS
                </span>
                <span className="text-primary font-semibold">ACTIVE</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
