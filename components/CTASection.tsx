import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const CTASection: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="w-full bg-white py-24 px-4 md:px-8">
      <style>{`
        #my-cal-inline-discussion-with-nabil iframe {
          margin: 0 !important;
          padding: 0 !important;
        }
        #my-cal-inline-discussion-with-nabil [class*="branding"],
        #my-cal-inline-discussion-with-nabil [class*="powered"],
        #my-cal-inline-discussion-with-nabil a[href*="cal.com"]:not([href*="mahfuzulnabil"]) {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
          overflow: hidden !important;
        }
      `}</style>
      <div className="max-w-4xl mx-auto flex flex-col items-center">


        {/* Header Badge */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-1.5 py-1 mb-8 shadow-sm transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
           <span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-bold uppercase tracking-wide">Free</span>
           <span className="text-sm text-gray-600 font-medium px-2">30 min discussion</span>
        </div>

        {/* Headline */}
        <h2
          className={`font-serif text-4xl md:text-6xl text-gray-900 text-center mb-16 leading-tight transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Have any project idea in your mind!
        </h2>

        {/* Cal.com Embedded Calendar */}
        <div
          ref={cardRef as React.RefObject<HTMLDivElement>}
          className={`w-full max-w-[1000px] bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200 overflow-hidden transition-all duration-700 ${
            cardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div style={{width:'100%', height:'750px', overflow:'hidden', margin:'0', padding:'0'}} id="my-cal-inline-discussion-with-nabil"></div>
        </div>

      </div>
    </section>
  );
};
