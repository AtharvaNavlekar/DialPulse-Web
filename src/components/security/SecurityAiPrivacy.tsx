import React from 'react';
import { Sparkles, Shield, Key, Eye, Mic, AlertCircle, CheckCircle2 } from 'lucide-react';

export function SecurityAiPrivacy() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-low border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight leading-tight">
            AI with <br className="hidden sm:inline" />
            <span className="text-primary">boundaries.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant leading-relaxed">
            AI-assisted workflows operate inside the platform's authorization and quota model. Intelligence is applied to assist team members without bypassing data isolation or governance controls.
          </p>
        </div>

        {/* 5 Architectural AI Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          <div className="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/80 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-mono font-bold text-on-surface">PERMISSION GATING</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              AI capabilities are evaluated against role permissions before processing. Unprivileged actors cannot invoke AI workflows.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/80 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-mono font-bold text-on-surface">TENANT QUOTAS</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Tenant-level AI usage thresholds enforce financial and resource predictability, preventing runaway generation or unmonitored compute spikes.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/80 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-base font-mono font-bold text-on-surface">TEXT SANITIZATION</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Supported text processing masks detected email and phone patterns before external AI dispatch, minimizing unnecessary PII transmission.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/80 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Key className="w-5 h-5" />
            </div>
            <h3 className="text-base font-mono font-bold text-on-surface">SERVER-SIDE CREDENTIALS</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              AI provider API tokens and keys remain strictly server-side. Client applications never receive or store third-party model credentials.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/80 space-y-3 md:col-span-2 lg:col-span-2">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-mono font-bold text-on-surface">USAGE VISIBILITY & GOVERNANCE</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Invocation records, token consumption, and response classifications are recorded for platform governance, providing administrative auditability into when and how AI features are utilized.
            </p>
          </div>

        </div>

        {/* Audio Processing Transparency Notice */}
        <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/90 space-y-3">
          <div className="flex items-center gap-2 text-on-surface font-mono text-xs font-bold uppercase tracking-wider">
            <Mic className="w-4 h-4 text-primary" />
            <span>AUDIO TRANSCRIPTION PROCESSING NOTE</span>
          </div>

          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Audio submitted for transcription follows a distinct processing path and is transmitted as audio data to the configured transcription service. Provider-specific processing, data retention, model training opt-outs, and regional hosting depend on the configured AI service and the applicable organizational agreement.
          </p>
        </div>

      </div>
    </section>
  );
}
