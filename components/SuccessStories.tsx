'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const stories = [
  {
    company: 'Wholesale Hub',
    year: '2025',
    description: 'Increased B2B sales by 40% with automated tiered pricing and custom quote workflows.',
    logo: 'W',
    logoColor: '#FF6B6B',
  },
  {
    company: 'RetailPro',
    year: '2024',
    description: 'Streamlined wholesale operations with customer segmentation and volume-based discounts.',
    logo: 'R',
    logoColor: '#4ECDC4',
  },
  {
    company: 'TradeConnect',
    year: '2025',
    description: 'Scaled their B2B business with custom pricing rules for 200+ wholesale customers.',
    logo: 'T',
    logoColor: '#45B7D1',
  },
  {
    company: 'BulkGoods',
    year: '2023',
    description: 'Reduced quote turnaround time by 70% with automated quote generation and approval flows.',
    logo: 'B',
    logoColor: '#96CEB4',
  },
];

export function SuccessStories() {
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
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 bg-white/70 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-900">4.9 / 5 Rated</span>
            <span className="text-gray-400">|</span>
            <span className="text-sm text-gray-600">Trusted by 500+ stores</span>
          </div>
          <h2 className="reveal text-3xl sm:text-4xl font-medium text-gray-900 mb-4" style={{ transitionDelay: '100ms' }}>
            Success stories
          </h2>
          <p className="reveal text-gray-600 max-w-2xl mx-auto" style={{ transitionDelay: '200ms' }}>
            QuoteFlow has helped merchants grow their B2B and wholesale operations with flexible pricing and streamlined
            quote management. Explore real stories of transformation.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((story, index) => (
            <div
              key={index}
              className="reveal group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Background Placeholder */}
              <div className="aspect-[4/3] relative">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-400 text-sm">{story.company} Case Study</p>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                    {story.year}
                  </span>
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Bottom */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: story.logoColor }}
                    >
                      {story.logo}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{story.company}</h3>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">{story.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="reveal text-center mt-12" style={{ transitionDelay: '700ms' }}>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors group"
          >
            Read more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
