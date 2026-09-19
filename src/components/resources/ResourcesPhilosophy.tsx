import React from 'react';

export const ResourcesPhilosophy: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-[#00695C] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00695C]" />
          <span className="text-xs font-mono uppercase tracking-widest font-semibold">
            OUR CONTENT PHILOSOPHY
          </span>
        </div>

        {/* Oversized Headline */}
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#191C1B] tracking-tight leading-[1.05] mb-8">
          <span className="text-[#00695C]">Useful</span> beats{' '}
          <span className="text-slate-400 font-serif italic font-normal">frequent.</span>
        </h2>

        {/* Supporting Text with Highlighted Accents */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-[#3F4946] font-light leading-relaxed max-w-3xl mx-auto mb-10">
          &ldquo;We&rsquo;d rather publish something{' '}
          <span className="font-semibold text-[#00695C] underline decoration-[#80D5C4] decoration-2 underline-offset-4">
            teams can actually use
          </span>{' '}
          than fill a feed just to make it look busy.&rdquo;
        </p>

        {/* Footnote / Context */}
        <div className="inline-flex items-center gap-4 text-xs font-mono text-slate-500 uppercase tracking-wider border-t border-slate-200 pt-6">
          <span>HIGH-SIGNAL DOCUMENTATION</span>
          <span className="text-slate-300">&bull;</span>
          <span>NO CLICKBAIT</span>
          <span className="text-slate-300">&bull;</span>
          <span>NO MARKETING JARGON</span>
        </div>

      </div>
    </section>
  );
};
