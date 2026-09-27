/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CookiePreferences {
  strictlyNecessary: boolean; // Always true
  preferences: boolean;       // UI states, table density, theme
  analytics: boolean;         // Internal console telemetry events
  marketing: boolean;         // Ad trackers (none currently used)
  timestamp: string;          // ISO date of choice
  hasConsented: boolean;      // User explicitly took action
}

const STORAGE_KEY = 'dialpulse_cookie_consent_v1';

export const DEFAULT_PREFERENCES: CookiePreferences = {
  strictlyNecessary: true,
  preferences: true,
  analytics: false,
  marketing: false,
  timestamp: '',
  hasConsented: false,
};

export function getStoredCookiePreferences(): CookiePreferences | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return {
      strictlyNecessary: true,
      preferences: Boolean(parsed.preferences),
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      timestamp: parsed.timestamp || new Date().toISOString(),
      hasConsented: Boolean(parsed.hasConsented),
    };
  } catch {
    return null;
  }
}

export function saveCookiePreferences(prefs: Partial<CookiePreferences>): CookiePreferences {
  const current = getStoredCookiePreferences() || DEFAULT_PREFERENCES;
  const updated: CookiePreferences = {
    ...current,
    ...prefs,
    strictlyNecessary: true, // Invariant: always true
    timestamp: new Date().toISOString(),
    hasConsented: true,
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn('[DialPulse Consent]: Unable to save preferences to localStorage', err);
  }

  // Dispatch custom window event so reactive listeners can update immediately
  window.dispatchEvent(new CustomEvent('dialpulse_cookie_consent_updated', { detail: updated }));

  return updated;
}

export function acceptAllCookies(): CookiePreferences {
  return saveCookiePreferences({
    strictlyNecessary: true,
    preferences: true,
    analytics: true,
    marketing: false, // DialPulse does not deploy third-party advertising trackers
  });
}

export function rejectNonEssentialCookies(): CookiePreferences {
  return saveCookiePreferences({
    strictlyNecessary: true,
    preferences: false,
    analytics: false,
    marketing: false,
  });
}
