import React from 'react';

export function VisualWorld({
  colorMode = 'teal',
  intensity = 'medium',
  className = '',
}: {
  colorMode?: 'teal' | 'cyan' | 'amber' | 'indigo' | 'navy' | 'blue';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}) {
  const getGlowColor = () => {
    switch (colorMode) {
      case 'cyan': return 'rgba(6, 182, 212, 0.4)';
      case 'amber': return 'rgba(245, 158, 11, 0.4)';
      case 'indigo': return 'rgba(99, 102, 241, 0.4)';
      case 'navy': return 'rgba(31, 58, 95, 0.4)';
      case 'blue': return 'rgba(59, 130, 246, 0.4)';
      case 'teal':
      default: return 'rgba(0, 105, 92, 0.4)';
    }
  };

  const getLineColor = () => {
    switch (colorMode) {
      case 'cyan': return 'rgba(6, 182, 212, 0.15)';
      case 'amber': return 'rgba(245, 158, 11, 0.15)';
      case 'indigo': return 'rgba(99, 102, 241, 0.15)';
      case 'navy': return 'rgba(31, 58, 95, 0.2)';
      case 'blue': return 'rgba(59, 130, 246, 0.15)';
      case 'teal':
      default: return 'rgba(0, 105, 92, 0.15)';
    }
  };

  const getIntensityScale = () => {
    if (intensity === 'low') return 0.5;
    if (intensity === 'high') return 1.5;
    return 1;
  };

  const glowColor = getGlowColor();
  const lineColor = getLineColor();
  const scale = getIntensityScale();

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 mix-blend-screen" viewBox="0 0 1000 1000" fill="none">
        
        {/* Glow Filters */}
        <defs>
          <filter id="glow-heavy" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="24" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow-light" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <g opacity={scale}>
          {/* Base Connection Lines */}
          <path d="M100 500 C 300 200, 700 800, 900 500" stroke={lineColor} strokeWidth="2" fill="none" className="animate-[dash_20s_linear_infinite]" strokeDasharray="10 20" />
          <path d="M200 800 C 400 600, 600 400, 800 200" stroke={lineColor} strokeWidth="1" fill="none" />
          <path d="M0 400 C 400 400, 600 700, 1000 300" stroke={lineColor} strokeWidth="3" fill="none" className="opacity-50" />
          <path d="M300 100 C 500 500, 500 500, 700 900" stroke={lineColor} strokeWidth="1" fill="none" />
          <path d="M-100 600 Q 500 900, 1100 400" stroke={lineColor} strokeWidth="2" fill="none" />

          {/* Core Nodes */}
          <circle cx="300" cy="200" r="6" fill={glowColor} filter="url(#glow-heavy)" className="animate-pulse" />
          <circle cx="300" cy="200" r="2" fill="#fff" />
          
          <circle cx="700" cy="800" r="8" fill={glowColor} filter="url(#glow-heavy)" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="700" cy="800" r="3" fill="#fff" />

          <circle cx="400" cy="600" r="5" fill={glowColor} filter="url(#glow-light)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="400" cy="600" r="2" fill="#fff" />

          <circle cx="600" cy="400" r="12" fill={glowColor} filter="url(#glow-heavy)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
          <circle cx="600" cy="400" r="4" fill="#fff" />

          <circle cx="500" cy="500" r="16" fill={glowColor} filter="url(#glow-heavy)" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
          <circle cx="500" cy="500" r="6" fill="#fff" />

          <circle cx="800" cy="200" r="4" fill={glowColor} filter="url(#glow-light)" />
          <circle cx="800" cy="200" r="1" fill="#fff" />

          <circle cx="200" cy="800" r="7" fill={glowColor} filter="url(#glow-light)" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
          <circle cx="200" cy="800" r="2" fill="#fff" />

          {/* Signal Packets (Moving Dots) */}
          <circle r="3" fill="#fff" filter="url(#glow-light)">
            <animateMotion dur="8s" repeatCount="indefinite" path="M100 500 C 300 200, 700 800, 900 500" />
          </circle>
          <circle r="4" fill="#fff" filter="url(#glow-heavy)">
            <animateMotion dur="12s" repeatCount="indefinite" path="M0 400 C 400 400, 600 700, 1000 300" />
          </circle>
          <circle r="2" fill="#fff" filter="url(#glow-light)">
            <animateMotion dur="6s" repeatCount="indefinite" path="M300 100 C 500 500, 500 500, 700 900" />
          </circle>
        </g>
      </svg>
    </div>
  );
}
