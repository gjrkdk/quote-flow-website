'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const integrationLogos = [
  { color: '#96BF48', name: 'Shopify' },
  { color: '#635BFF', name: 'Stripe' },
  { color: '#2CA01C', name: 'QuickBooks' },
  { color: '#FFE01B', name: 'Mailchimp' },
  { color: '#00B67A', name: 'Trustpilot' },
  { color: '#FF6900', name: 'Klaviyo' },
  { color: '#0073CF', name: 'Xero' },
  { color: '#7C5CFF', name: 'Zapier' },
];

const steps = [
  'Install from Shopify App Store',
  'Connect your store in one click',
  'Sync products and start creating quotes',
];

export function Integrations() {
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
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="reveal text-3xl sm:text-4xl font-medium text-gray-900 mb-4">Seamless Shopify integration</h2>
              <p className="reveal text-gray-600" style={{ transitionDelay: '100ms' }}>
                Connect QuoteFlow with your Shopify store and favorite business tools. Keep pricing, inventory, and customer data in perfect sync.
              </p>
            </div>

            <a
              href="#contact"
              className="reveal inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 group"
              style={{ transitionDelay: '200ms' }}
            >
              <span>Get started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Steps */}
            <div className="reveal space-y-4" style={{ transitionDelay: '300ms' }}>
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Integration Grid */}
          <div className="reveal" style={{ transitionDelay: '400ms' }}>
            <div className="grid grid-cols-3 gap-4">
              {integrationLogos.map((logo, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: logo.color }}
                  >
                    <span className="text-white text-lg font-bold">{logo.name[0]}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
