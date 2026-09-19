import { Calendar, Info } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface PricingToggleProps {
  billingCycle: 'monthly' | 'annual';
  onChange: (cycle: 'monthly' | 'annual') => void;
  annualNotice?: string;
}

export function PricingToggle({ billingCycle, onChange, annualNotice }: PricingToggleProps) {
  const handleToggle = (cycle: 'monthly' | 'annual') => {
    trackEvent('billing_toggle', { cycle });
    onChange(cycle);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200/90 shadow-inner">
        <button
          type="button"
          onClick={() => handleToggle('monthly')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            billingCycle === 'monthly'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Monthly Schedule</span>
        </button>

        <button
          type="button"
          onClick={() => handleToggle('annual')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            billingCycle === 'annual'
              ? 'bg-[#00695C] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>Annual / Multi-Year</span>
          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-teal-100/30 text-teal-800 font-bold border border-teal-200/40">
            Enterprise Terms
          </span>
        </button>
      </div>

      {billingCycle === 'annual' && (
        <div className="inline-flex items-center gap-2 text-xs text-slate-600 bg-teal-50/70 border border-teal-200/70 px-4 py-1.5 rounded-full font-medium animate-fadeIn">
          <Info className="w-3.5 h-3.5 text-[#00695C] shrink-0" />
          <span>
            {annualNotice || 'Annual schedules receive dedicated SLA and tailored onboarding terms upon contract review.'}
          </span>
        </div>
      )}
    </div>
  );
}
