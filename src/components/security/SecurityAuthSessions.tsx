import React from 'react';
import { KeyRound, Clock, ShieldAlert, RotateCw, Cookie, LogOut } from 'lucide-react';

const SESSION_PRACTICES = [
  {
    title: 'Cryptographic Credential Hashing',
    desc: 'Passwords are never stored in plaintext. Credentials undergo secure cryptographic hashing before persistent storage.',
    icon: KeyRound,
  },
  {
    title: 'Automated Rate Limiting',
    desc: 'Authentication endpoints enforce rate limits to protect accounts from credential-stuffing and automated brute-force attempts.',
    icon: ShieldAlert,
  },
  {
    title: 'Short-Lived Access Sessions',
    desc: 'Session access tokens are intentionally constrained in lifespan, minimizing exposure windows for active credentials.',
    icon: Clock,
  },
  {
    title: 'Secure Refresh Handling',
    desc: 'Refresh tokens follow controlled lifecycle handling with single-use rotation semantics to mitigate token hijacking.',
    icon: RotateCw,
  },
  {
    title: 'Hardened Cookie Flags',
    desc: 'Production session cookies are configured with HttpOnly, Secure, and SameSite attributes to protect tokens from client script exfiltration.',
    icon: Cookie,
  },
  {
    title: 'Explicit Session Revocation',
    desc: 'Administrators and users can explicitly invalidate active sessions on demand, instantly terminating authorized access.',
    icon: LogOut,
  },
];

export function SecurityAuthSessions() {
  return (
    <section className="py-20 md:py-28 bg-surface border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <KeyRound className="w-3.5 h-3.5" />
            <span>AUTHENTICATION SAFEGUARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight leading-tight">
            Accounts need <br />
            <span className="text-primary">strong boundaries too.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Authentication is the front door of customer operations. We implement defense-in-depth principles across session issuance, token handling, and lifecycle termination.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SESSION_PRACTICES.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title}
                className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/80 hover:border-primary/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-display font-bold text-on-surface mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-outline-variant/40 text-[10px] font-mono text-outline">
                  // IDENTITY_HYGIENE
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
