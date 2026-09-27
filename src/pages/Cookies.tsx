/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useSEO } from '@/lib/seo/useSEO';
import { Link } from 'react-router-dom';
import {
  Cookie,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sliders,
  ExternalLink,
  Lock,
  Layers,
  Info,
  Clock,
} from 'lucide-react';
import { CookiePreferencesModal } from '@/components/common/CookiePreferencesModal';
import {
  getStoredCookiePreferences,
  DEFAULT_PREFERENCES,
  CookiePreferences,
} from '@/lib/cookies/cookieConsentStore';

export default function Cookies() {
  useSEO({
    title: 'Cookie Policy | DialPulse CRM',
    description: 'Learn how DialPulse utilizes cookies and browser local storage for essential session security, preferences, and zero third-party marketing tracking.',
    canonical: 'https://dialpulse.com/cookies',
  });

  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    const current = getStoredCookiePreferences();
    if (current) {
      setPreferences(current);
    }
  }, []);

  const openPreferences = () => {
    setShowModal(true);
  };

  return (
    <div className="flex flex-col bg-surface min-h-screen text-on-surface">
      {/* Hero Header */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-20 bg-surface border-b border-outline-variant/60 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,105,92,0.05),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase font-mono">
                <Cookie className="w-3.5 h-3.5 text-primary" />
                TRANSPARENCY & TRACKING
              </span>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>ZERO 3RD-PARTY TRACKING SCRIPTS</span>
              </div>

              <span className="text-xs text-on-surface-variant font-mono flex items-center gap-1">
                <Clock className="w-3 h-3 text-on-surface-variant" />
                Effective date: Pre-Publication Draft
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-on-surface leading-[1.1] mb-6">
              Cookie & Local <br />
              <span className="text-primary">Storage Policy</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed max-w-3xl mb-8">
              This policy explains how DialPulse uses cookies, browser local storage, and similar client technologies across our website and CRM application. We prioritize data minimization and zero cross-site advertising surveillance.
            </p>

            {/* Quick Actions Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-surface-container border border-outline-variant/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-3xl">
              <div className="space-y-1">
                <div className="text-xs font-bold text-on-surface">Manage Your Stored Choices</div>
                <div className="text-xs text-on-surface-variant">
                  Current consent status:{' '}
                  <span className="font-mono text-primary font-semibold">
                    {preferences.hasConsented ? 'Customized' : 'Default (Essential Only)'}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={openPreferences}
                className="px-4 py-2 rounded-xl bg-primary hover:bg-[#004D40] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Change Cookie Preferences</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* Section 1: What Are Cookies */}
        <section className="space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block">
            01 / OVERVIEW
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            What Are Cookies and Local Storage?
          </h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Cookies are small text files placed on your computer or mobile device when you load a webpage. Browser LocalStorage and SessionStorage are modern client storage mechanisms that allow applications to persist state directly inside your browser sandbox without sending that data in every HTTP header.
          </p>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            DialPulse relies primarily on modern browser local storage for UI settings and cryptographically signed session tokens. We strictly limit storage to operational necessities.
          </p>
        </section>

        {/* Section 2: Verified Categories */}
        <section className="space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block">
            02 / CATEGORIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Categories of Storage We Use
          </h2>

          <div className="space-y-4">
            {/* 1. Strictly Necessary */}
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-bold text-on-surface">1. Strictly Necessary Storage</h3>
                </div>
                <span className="font-mono text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 uppercase">
                  Always Required
                </span>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                These storage keys are indispensable for the website and web application to function properly. They handle user authentication, tenant routing verification, CSRF token protection, and remembering your cookie consent state. Disabling them would prevent access to protected areas of the CRM.
              </p>
              <div className="p-3 rounded-xl bg-surface-container-low text-xs font-mono text-on-surface-variant space-y-1">
                <div>• <code className="text-primary font-semibold">dialpulse_cookie_consent_v1</code>: Records your consent choice (LocalStorage).</div>
                <div>• <code className="text-primary font-semibold">auth_session_token</code>: Encrypted JWT session identifier for authenticated users.</div>
              </div>
            </div>

            {/* 2. Functional & Preferences */}
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-bold text-on-surface">2. Functional & UI Preferences</h3>
                </div>
                <span className="font-mono text-[10px] font-semibold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded border border-outline-variant uppercase">
                  Optional
                </span>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                These keys remember your customization choices, such as your selected billing cycle (Monthly vs Annual) on pricing tables, collapsed sidebar state in the CRM console, or softphone audio device settings.
              </p>
            </div>

            {/* 3. Analytics & Telemetry */}
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-bold text-on-surface">3. Analytics & Usage Telemetry</h3>
                </div>
                <span className="font-mono text-[10px] font-semibold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded border border-outline-variant uppercase">
                  Optional
                </span>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Aggregated insights into how visitors navigate public documentation. In the current release, telemetry is handled via an internal analytics dispatcher (<code className="font-mono text-xs text-primary">/src/lib/analytics/index.ts</code>) that logs structured operational events. <strong>No external advertising trackers or third-party behavioral pixels are currently loaded.</strong>
              </p>
            </div>

            {/* 4. Marketing & Third-Party Advertising */}
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-bold text-on-surface">4. Marketing & Targeted Advertising</h3>
                </div>
                <span className="font-mono text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 uppercase">
                  Inactive / Zero Trackers
                </span>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Marketing cookies are typically utilized by third-party ad networks (e.g. Google Ads Remarketing, Meta Pixel, LinkedIn Insight Tag) to profile users across different domains. <strong>DialPulse does not participate in third-party advertising tracking networks and does not sell or share browsing telemetry with data brokers.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Cookie Inventory Table */}
        <section className="space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block">
            03 / INVENTORY
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Technical Storage Inventory
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-outline-variant bg-surface-container-lowest">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container-low text-on-surface font-semibold">
                  <th className="py-3 px-4">Identifier / Key</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Duration</th>
                  <th className="py-3 px-4">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/60 text-on-surface-variant">
                <tr>
                  <td className="py-3 px-4 font-mono font-semibold text-primary">dialpulse_cookie_consent_v1</td>
                  <td className="py-3 px-4">LocalStorage</td>
                  <td className="py-3 px-4 font-semibold text-on-surface">Strictly Necessary</td>
                  <td className="py-3 px-4">Persistent (until cleared)</td>
                  <td className="py-3 px-4">Stores user cookie preference selections</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono font-semibold text-primary">auth_session</td>
                  <td className="py-3 px-4">HTTP Cookie / Token</td>
                  <td className="py-3 px-4 font-semibold text-on-surface">Strictly Necessary</td>
                  <td className="py-3 px-4">Session lifespan</td>
                  <td className="py-3 px-4">Enforces authenticated workspace session security</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono font-semibold text-primary">ui_workspace_prefs</td>
                  <td className="py-3 px-4">LocalStorage</td>
                  <td className="py-3 px-4">Functional</td>
                  <td className="py-3 px-4">1 Year</td>
                  <td className="py-3 px-4">Retains sidebar collapse, table density, and filters</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Browser Management */}
        <section className="space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block">
            04 / CONTROLS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            How to Control Cookies Through Your Browser
          </h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            In addition to our on-page consent controls, you can manage or delete cookies directly through your browser settings. Most modern browsers allow you to block third-party cookies, clear cookies upon browser exit, or inspect stored keys:
          </p>
          <ul className="text-xs sm:text-sm text-on-surface-variant space-y-2 list-disc pl-5 leading-relaxed">
            <li><strong>Google Chrome:</strong> Settings → Privacy and security → Third-party cookies.</li>
            <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Enhanced Tracking Protection.</li>
            <li><strong>Apple Safari:</strong> Settings → Privacy → Prevent cross-site tracking.</li>
            <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions.</li>
          </ul>
        </section>

        {/* Section 5: Legal Questions & Contact */}
        <section className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-outline-variant space-y-4">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-on-surface">
              Policy Status & Contact
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            This Cookie Policy corresponds to the technical architecture verified during our codebase audit. As production third-party analytics or support tooling (e.g. self-serve payment processors) are officially provisioned, this page will update accordingly.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-500 block">POLICY QUESTIONS</span>
              <span className="font-semibold text-on-surface">To be confirmed (Pending DPO setup)</span>
            </div>
            <div>
              <span className="text-slate-500 block">RELATED POLICIES</span>
              <div className="flex items-center gap-3 pt-0.5">
                <Link to="/privacy" className="text-primary hover:underline font-semibold">Privacy Policy</Link>
                <span>•</span>
                <Link to="/terms" className="text-primary hover:underline font-semibold">Terms of Service</Link>
                <span>•</span>
                <Link to="/refund" className="text-primary hover:underline font-semibold">Refund Policy</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Preferences Modal */}
      <CookiePreferencesModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={(updated) => setPreferences(updated)}
      />
    </div>
  );
}
