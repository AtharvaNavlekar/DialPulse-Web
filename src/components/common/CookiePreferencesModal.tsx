/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Check, ShieldCheck, Lock, Sliders, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  CookiePreferences,
  getStoredCookiePreferences,
  saveCookiePreferences,
  DEFAULT_PREFERENCES,
} from '@/lib/cookies/cookieConsentStore';

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (prefs: CookiePreferences) => void;
}

export function CookiePreferencesModal({ isOpen, onClose, onSave }: CookiePreferencesModalProps) {
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES.preferences);
  const [analytics, setAnalytics] = useState(DEFAULT_PREFERENCES.analytics);
  const [marketing, setMarketing] = useState(DEFAULT_PREFERENCES.marketing);

  useEffect(() => {
    if (isOpen) {
      const current = getStoredCookiePreferences() || DEFAULT_PREFERENCES;
      setPreferences(current.preferences);
      setAnalytics(current.analytics);
      setMarketing(current.marketing);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    const updated = saveCookiePreferences({
      strictlyNecessary: true,
      preferences,
      analytics,
      marketing,
    });
    if (onSave) onSave(updated);
    onClose();
  };

  const handleAcceptAll = () => {
    const updated = saveCookiePreferences({
      strictlyNecessary: true,
      preferences: true,
      analytics: true,
      marketing: false,
    });
    if (onSave) onSave(updated);
    onClose();
  };

  const handleRejectNonEssential = () => {
    const updated = saveCookiePreferences({
      strictlyNecessary: true,
      preferences: false,
      analytics: false,
      marketing: false,
    });
    if (onSave) onSave(updated);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00695C]/10 text-[#00695C] flex items-center justify-center">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h2 id="cookie-preferences-title" className="text-base font-bold text-slate-900">
                Cookie & Storage Preferences
              </h2>
              <p className="text-xs text-slate-500">
                Customize which storage categories are active during your visit.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preferences modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Categories Body */}
        <div className="px-6 py-5 overflow-y-auto space-y-4 divide-y divide-slate-100 text-xs sm:text-sm">
          {/* 1. Strictly Necessary */}
          <div className="pt-1">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">1. Strictly Necessary</span>
                  <span className="font-mono text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 uppercase">
                    Always Active
                  </span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Required for essential website operation, security enforcement, CSRF protection, and preserving your privacy choices. These cannot be disabled.
                </p>
                <div className="font-mono text-[11px] text-slate-500 pt-1">
                  Examples: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">dialpulse_cookie_consent_v1</code>, active session authentication tokens.
                </div>
              </div>
              <div className="shrink-0 pt-1">
                <input
                  type="checkbox"
                  checked={true}
                  disabled={true}
                  aria-label="Strictly necessary cookies (always active)"
                  className="w-4 h-4 text-[#00695C] rounded border-slate-300 opacity-60 cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* 2. Functional & Preferences */}
          <div className="pt-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">2. Functional & UI Preferences</span>
                  <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    Optional
                  </span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Remembers your interface settings, such as collapsed sidebar preferences, billing cycle choice on the pricing page, or softphone display density.
                </p>
              </div>
              <div className="shrink-0 pt-1">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences}
                    onChange={(e) => setPreferences(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00695C]" />
                </label>
              </div>
            </div>
          </div>

          {/* 3. Analytics & Telemetry */}
          <div className="pt-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">3. Analytics & Usage Telemetry</span>
                  <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    Optional
                  </span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Helps us understand aggregated page views and navigation paths. In the current preview build, events are safely output to local developer console logs without loading third-party tracking scripts.
                </p>
              </div>
              <div className="shrink-0 pt-1">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00695C]" />
                </label>
              </div>
            </div>
          </div>

          {/* 4. Marketing & Third-Party Advertising */}
          <div className="pt-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">4. Marketing & Targeted Advertising</span>
                  <span className="font-mono text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    Not Active
                  </span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Used by ad networks to track visitors across websites for targeted ads. <strong className="text-slate-800">DialPulse does not currently deploy third-party advertising or cross-site tracking scripts.</strong>
                </p>
              </div>
              <div className="shrink-0 pt-1">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00695C]" />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <Link
            to="/cookies"
            onClick={onClose}
            className="text-[#00695C] hover:text-[#004D40] font-medium inline-flex items-center gap-1"
          >
            <span>Read full Cookie Policy</span>
            <ExternalLink className="w-3 h-3" />
          </Link>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleRejectNonEssential}
              className="px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors font-medium"
            >
              Reject Non-Essential
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 rounded-lg bg-[#00695C] hover:bg-[#004D40] text-white transition-colors font-medium shadow-xs"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
