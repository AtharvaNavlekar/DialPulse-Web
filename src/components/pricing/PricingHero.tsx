import { Phone, Users, Shield, BarChart3, Sparkles, ArrowRight, Calendar, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '@/lib/analytics';

export function PricingHero() {
  return (
    <section className="pt-24 pb-14 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/60 to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-[#00695C] text-xs font-mono font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#00695C] animate-pulse" />
            Commercial Architecture
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-display font-bold text-slate-900 tracking-tight leading-[1.06]">
            Choose the setup that fits <br className="hidden sm:block" />
            <span className="text-[#00695C]">the way your team works.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            DialPulse aligns pricing to team size, communication volume, automation depth, compliance requirements, and operational complexity. No forced bundles or opaque software lock-ins.
          </p>

          {/* Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
            {[
              { label: 'CRM & Pipeline', icon: Users, color: 'text-teal-700 bg-teal-50/80 border-teal-200/80' },
              { label: 'WebRTC Telephony', icon: Phone, color: 'text-blue-700 bg-blue-50/80 border-blue-200/80' },
              { label: 'Compliance Locks', icon: Shield, color: 'text-amber-700 bg-amber-50/80 border-amber-200/80' },
              { label: 'Operational BI', icon: BarChart3, color: 'text-indigo-700 bg-indigo-50/80 border-indigo-200/80' },
              { label: 'In-Tenant AI', icon: Sparkles, color: 'text-purple-700 bg-purple-50/80 border-purple-200/80' },
            ].map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium tracking-tight ${badge.color}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </div>

          {/* Commercial Transparency Note */}
          <div className="pt-4 max-w-2xl mx-auto">
            <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200/80 flex items-start gap-3.5 text-left shadow-xs">
              <div className="p-1.5 rounded-lg bg-amber-100/80 text-amber-800 shrink-0 mt-0.5">
                <Lock className="w-4 h-4" />
              </div>
              <div className="text-xs text-amber-950 leading-relaxed space-y-1">
                <span className="font-semibold text-amber-900 block font-mono uppercase tracking-wider text-[11px]">
                  Commercial Notice: Public Pricing Under Review
                </span>
                <p className="text-slate-700">
                  Public self-serve pricing figures are currently undergoing final operational validation to ensure carrier pass-through rates and compliance costs are fully transparent. Standard commercial quotes are provisioned directly through our architecture review.
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              onClick={() => trackEvent('get_started_click', { source: 'pricing_hero' })}
              className="inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-white text-sm font-semibold tracking-normal transition-all shadow-sm hover:shadow-md active:scale-[0.99]"
            >
              <span>Book Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#plan-comparison"
              onClick={() => trackEvent('comparison_expand', { source: 'hero_link' })}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-all"
            >
              <Calendar className="w-4 h-4 text-slate-500" />
              <span>Compare Full Feature Tiers</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
