
import React, { useEffect } from 'react';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export const CTASection: React.FC = () => {
  useEffect(() => {
    const initCalendly = () => {
      const widget = document.querySelector('.calendly-inline-widget');
      if (widget && window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/mahfuzulnabil',
          parentElement: widget as HTMLElement,
        });
      }
    };

    if (window.Calendly) {
      initCalendly();
    } else {
      const script = document.querySelector('script[src*="calendly"]');
      if (script) {
        script.addEventListener('load', initCalendly);
      }
    }
  }, []);

  return (
    <section className="w-full bg-white py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">

        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-1.5 py-1 mb-8 shadow-sm">
           <span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-bold uppercase tracking-wide">Free</span>
           <span className="text-sm text-gray-600 font-medium px-2">30 min discussion</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-4xl md:text-6xl text-gray-900 text-center mb-16 leading-tight">
          Have any project idea in your mind!
        </h2>

        {/* Calendly Embedded Widget */}
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/mahfuzulnabil"
          style={{ minWidth: '320px', height: '700px' }}
        ></div>

      </div>
    </section>
  );
};
