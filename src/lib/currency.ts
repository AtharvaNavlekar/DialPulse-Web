/**
 * Currency Formatting Utility for DialPulse Commercial Engine
 * Supports INR (₹) by default as per specification, with future multi-currency architecture.
 */

export interface CurrencyConfig {
  code: string;
  symbol: string;
  locale: string;
  name: string;
}

export const SUPPORTED_CURRENCIES: Record<string, CurrencyConfig> = {
  INR: {
    code: 'INR',
    symbol: '₹',
    locale: 'en-IN',
    name: 'Indian Rupee',
  },
  USD: {
    code: 'USD',
    symbol: '$',
    locale: 'en-US',
    name: 'US Dollar',
  },
};

export const DEFAULT_CURRENCY = SUPPORTED_CURRENCIES.INR;

/**
 * Formats a numeric price into localized currency string,
 * or gracefully returns the configured non-numeric status (e.g. "TBD", "Contact Sales").
 */
export function formatPrice(
  amount: number | string | null | undefined,
  currency: CurrencyConfig = DEFAULT_CURRENCY
): string {
  if (amount === null || amount === undefined || amount === '' || amount === 'TBD' || amount === 'tbd') {
    return 'TBD';
  }

  if (typeof amount === 'string') {
    const parsed = parseFloat(amount.replace(/[^0-9.-]+/g, ''));
    if (isNaN(parsed)) {
      return amount; // Return as-is (e.g. "Contact us", "Custom")
    }
    amount = parsed;
  }

  try {
    return new Intl.NumberFormat(currency.locale, {
      style: 'currency',
      currency: currency.code,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `${currency.symbol}${amount}`;
  }
}
