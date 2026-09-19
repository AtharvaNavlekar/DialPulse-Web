import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showText?: boolean;
  className?: string;
  linkToHome?: boolean;
}

/**
 * Text-based Monogram / Icon for compact or icon-only scenarios.
 * Distinctive typographic mark combining letterform 'D' with the Teal pulse signal.
 */
export function LogoIcon({
  size = 'md',
  variant = 'light',
  className = '',
}: {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  className?: string;
}) {
  const isDark = variant === 'dark';

  const sizeClasses = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${sizeClasses[size]} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-200 group-hover:scale-105"
      >
        {/* Soft rounded substrate */}
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="9"
          fill={isDark ? '#004D40' : '#E0F2F1'}
          stroke={isDark ? '#00695C' : '#CCE8E1'}
          strokeWidth="1.5"
        />

        {/* Typographic 'D' stem */}
        <path
          d="M10 10V26H16.5C21 26 24 23 24 18C24 13 21 10 16.5 10H10Z"
          stroke={isDark ? '#FFFFFF' : '#0F172A'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Integrated Teal Pulse Heartbeat inside the letterform */}
        <path
          d="M12 18H14.5L16 13.5L18.5 22.5L20.5 16.5L22 18H25"
          stroke="#00695C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/**
 * Text-Based Logo for DialPulse.
 * A modern, editorial wordmark pairing architectural typography with signature Teal pulse accents.
 */
export function Logo({
  size = 'md',
  variant = 'light',
  showText = true,
  className = '',
  linkToHome = true,
}: LogoProps) {
  const isDark = variant === 'dark';

  const typographySizes = {
    sm: {
      text: 'text-[17px]',
      pulseW: 'w-3.5 h-3.5',
      gap: 'gap-1.5',
      bars: 'h-3.5',
    },
    md: {
      text: 'text-[20px] sm:text-[21px]',
      pulseW: 'w-4 h-4',
      gap: 'gap-2',
      bars: 'h-4',
    },
    lg: {
      text: 'text-[24px] sm:text-[26px]',
      pulseW: 'w-5 h-5',
      gap: 'gap-2.5',
      bars: 'h-5',
    },
  };

  const currentSize = typographySizes[size];

  const logoContent = (
    <div
      className={`inline-flex items-center select-none group focus:outline-none ${currentSize.gap} ${className}`}
    >
      {/* If showText is false, fallback to the text-monogram icon */}
      {!showText ? (
        <LogoIcon size={size} variant={variant} />
      ) : (
        <div className="flex items-center leading-none tracking-tight font-display">
          {/* Main Wordmark: 'Dial' */}
          <span
            className={`font-extrabold ${currentSize.text} tracking-[-0.035em] transition-colors duration-150 ${
              isDark ? 'text-white' : 'text-slate-900 group-hover:text-black'
            }`}
          >
            Dial
          </span>

          {/* Main Wordmark: 'Pulse' in signature Teal */}
          <span
            className={`font-black ${currentSize.text} tracking-[-0.035em] text-[#00695C] ml-[1px] transition-colors duration-150 group-hover:text-[#004D40]`}
          >
            Pulse
          </span>

          {/* Integrated Dynamic Harmonic Waveform: 4 vertical audio/pulse nodes */}
          <div
            className={`inline-flex items-center gap-[2.5px] ml-2 self-center ${currentSize.bars}`}
            aria-hidden="true"
          >
            <span
              className="w-[2.5px] h-[35%] rounded-full bg-[#00695C]/40 group-hover:bg-[#00695C] transition-all duration-300"
            />
            <span
              className="w-[2.5px] h-[75%] rounded-full bg-[#00695C]/75 group-hover:h-[85%] transition-all duration-300"
            />
            <span
              className="w-[2.5px] h-[100%] rounded-full bg-[#00695C] group-hover:scale-y-110 transition-all duration-300"
            />
            <span
              className="w-[2.5px] h-[55%] rounded-full bg-[#00695C]/60 group-hover:bg-[#00695C] transition-all duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link
        to="/"
        className="inline-flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00695C] focus-visible:ring-offset-2"
        aria-label="DialPulse Home"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
