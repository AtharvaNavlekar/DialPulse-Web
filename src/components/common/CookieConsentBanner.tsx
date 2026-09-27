/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, X, Settings2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  getStoredCookiePreferences,
  acceptAllCookies,
  rejectNonEssentialCookies,
  CookiePreferences,
} from '@/lib/cookies/cookieConsentStore';
import { CookiePreferencesModal } from './CookiePreferencesModal';

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferencesModal, setShowPreferencesModal] = useState(false);

  useEffect(() => {
    // Check if user has already made a selection
    const stored = getStoredCookiePreferences();
    if (!stored || !stored.hasConsented) {
      // Delay slightly for natural entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 750);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for manual preference triggers or external updates
  useEffect(() => {
    const handleUpdate = () => {
      const stored = getStoredCookiePreferences();
      if (stored && stored.hasConsented) {
        setIsVisible(false);
      }
    };

    const handleOpenModal = () => {
      setShowPreferencesModal(true);
    };

    window.addEventListener('dialpulse_cookie_consent_updated', handleUpdate);
    window.addEventListener('dialpulse_open_cookie_preferences', handleOpenModal);

    return () => {
      window.removeEventListener('dialpulse_cookie_consent_updated', handleUpdate);
      window.removeEventListener('dialpulse_open_cookie_preferences', handleOpenModal);
    };
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    rejectNonEssentialCookies();
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <aside
          role="region"
          aria-label="Cookie and Privacy Consent Notice"
          className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-4 md:p-5 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto pointer-events-auto bg-slate-900/95 backdrop-blur-md text-slate-200 border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-[0_12px_40px_rgba(0,0,0,0.4)] animate-in slide-in-from-bottom duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              {/* Text & Icon */}
              <div className="flex items-start gap-3.5 max-w-3xl">
                <div className="w-9 h-9 rounded-xl bg-[#00695C]/20 border border-[#00695C]/40 text-[#80D5C4] flex items-center justify-center shrink-0 mt-0.5">
                  <Cookie className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white tracking-tight">
                      Privacy & Local Storage Transparency
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[#80D5C4] bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800/80">
                      <ShieldCheck className="w-3 h-3" />
                      Zero 3rd-Party Trackers
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    DialPulse uses strictly necessary cookies and local storage to secure sessions and preserve user preferences. We do not deploy third-party advertising cookies or cross-site tracking scripts. You can choose to accept all, reject non-essential items, or customize preferences.
                  </p>
                  <div className="flex items-center gap-3 pt-0.5 text-[11px] text-slate-400">
                    <Link
                      to="/cookies"
                      className="text-[#80D5C4] hover:underline"
                    >
                      Cookie Policy
                    </Link>
                    <span>•</span>
                    <Link
                      to="/privacy"
                      className="text-[#80D5C4] hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 w-full lg:w-auto justify-end shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowPreferencesModal(true)}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Settings2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Customize</span>
                </button>
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Reject Non-Essential
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-4 py-2 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-xs font-bold text-white transition-colors shadow-xs cursor-pointer"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Preferences Modal */}
      <CookiePreferencesModal
        isOpen={showPreferencesModal}
        onClose={() => setShowPreferencesModal(false)}
        onSave={() => setIsVisible(false)}
      />
    </>
  );
}
