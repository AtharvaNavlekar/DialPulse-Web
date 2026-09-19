import React from 'react';
import { Shield, Filter, FileSpreadsheet, EyeOff, CheckCircle2 } from 'lucide-react';

const DEFENSE_LAYERS = [
  {
    title: 'INPUT VALIDATION',
    subtitle: 'Type and format verification before processing',
    desc: 'Incoming HTTP request payloads are strictly validated against structured schemas to ensure phone numbers, emails, dates, and tenant references adhere to expected data structures.',
    icon: Filter,
  },
  {
    title: 'STRUCTURE SANITIZATION',
    subtitle: 'Removal of unsafe object keys and pollution vectors',
    desc: 'Deep object traversal strips prototype-polluting keys and unexpected properties from incoming JSON payloads, preventing unauthorized object manipulation at the application tier.',
    icon: Shield,
  },
  {
    title: 'SPREADSHEET PROTECTION',
    subtitle: 'Formula-injection neutralization on bulk import',
    desc: 'CSV and Excel data imports are evaluated to neutralize leading symbols (=, +, -, @) that could trigger remote code execution or formula-injection vulnerabilities in client spreadsheet software.',
    icon: FileSpreadsheet,
  },
  {
    title: 'OUTPUT SANITIZATION',
    subtitle: 'Sensitive field suppression on serialization',
    desc: 'Internal credential hashes, administrative secrets, and sensitive infrastructure identifiers are systematically excluded from serialized responses prior to network transmission.',
    icon: EyeOff,
  },
];

export function SecurityInputProtection() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-low border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Filter className="w-3.5 h-3.5" />
            <span>PAYLOAD INTEGRITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight leading-tight">
            Security starts <br />
            <span className="text-primary">before data is stored.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Protecting data requires sanitizing information as it enters and leaves the application perimeter, mitigating common injection vectors across web and spreadsheet tools.
          </p>
        </div>

        {/* Editorial Non-Repetitive Stack */}
        <div className="divide-y divide-outline-variant/70">
          {DEFENSE_LAYERS.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <div 
                key={layer.title}
                className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline group"
              >
                <div className="lg:col-span-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-outline block">LAYER // 0{idx + 1}</span>
                    <h3 className="text-base sm:text-lg font-mono font-bold text-on-surface">
                      {layer.title}
                    </h3>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-1.5">
                  <div className="text-xs font-mono text-primary font-semibold">
                    {layer.subtitle}
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
