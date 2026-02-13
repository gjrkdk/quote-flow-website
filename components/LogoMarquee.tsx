'use client';

import { useEffect, useRef } from 'react';

const logos = [
  { name: 'WholesaleHub', icon: 'shield' },
  { name: 'RetailPro', icon: 'zap' },
  { name: 'B2B Solutions', icon: 'heart' },
  { name: 'TradeConnect', icon: 'box' },
  { name: 'WholesaleHub', icon: 'shield' },
  { name: 'RetailPro', icon: 'zap' },
  { name: 'B2B Solutions', icon: 'heart' },
  { name: 'TradeConnect', icon: 'box' },
];

export function LogoMarquee() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 overflow-hidden">
      <div className="reveal relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cream to-transparent z-10" />

        {/* Marquee container */}
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-3 mx-8 opacity-40 hover:opacity-70 transition-opacity duration-300"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                {logo.icon === 'shield' && (
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-600" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                )}
                {logo.icon === 'zap' && (
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-600" fill="currentColor">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                )}
                {logo.icon === 'heart' && (
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-600" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                )}
                {logo.icon === 'box' && (
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-600" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 2h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2z" />
                  </svg>
                )}
              </div>
              <span className="text-lg font-medium text-gray-600 whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
