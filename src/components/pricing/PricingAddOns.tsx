import { Phone, Cpu, Bot, HardDrive, Wrench, ShieldAlert } from 'lucide-react';
import { PRICING_ADDONS } from '@/config/pricing';
import { Link } from 'react-router-dom';

export function PricingAddOns() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'telephony':
        return Phone;
      case 'automation':
        return Cpu;
      case 'ai':
        return Bot;
      case 'storage':
        return HardDrive;
      case 'services':
      default:
        return Wrench;
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-[#00695C]" />
            Modular Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Optional Infrastructure Modules & Usage
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            DialPulse supports granular infrastructure extensions as your volume expands. Rather than inflating seat fees, specialized telecom routes and worker queues scale independently.
          </p>
        </div>

        {/* Commercial notice banner */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs flex items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0" />
            <span>
              <strong>Pass-Through Commercial Policy:</strong> Telephony minutes, SMS packets, and AI model compute are billed directly at carrier cost or provisioned via your existing SIP trunk accounts.
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider shrink-0 hidden sm:inline">
            Zero Mark-Up Option
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRICING_ADDONS.map((addon) => {
            const Icon = getCategoryIcon(addon.category);
            return (
              <div
                key={addon.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-[#00695C]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                      {addon.unit}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {addon.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {addon.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Architectural Specs:
                    </span>
                    <ul className="space-y-1" role="list">
                      {addon.verifiedDetails.map((detail, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                          <span className="text-[#00695C] font-bold">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Billing Model:</span>
                  <span className="font-mono font-semibold text-slate-800">
                    {addon.commercialModel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00695C] hover:text-[#004D40]"
          >
            <span>Discuss specialized carrier routing or custom compute requirements with our team →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
