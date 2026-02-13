'use client';

import { useState, useEffect, useRef } from 'react';
import { DollarSign, FileText, TrendingDown, Users, ArrowRight } from 'lucide-react';

const features = [
  {
    id: 'pricing-rules',
    label: 'Custom pricing',
    icon: DollarSign,
    tag: 'CUSTOM PRICING',
    title: 'Flexible pricing rules for any scenario',
    description:
      'Set customer-specific prices, volume discounts, and tiered pricing structures. Create pricing rules that adapt to your business needs.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
  },
  {
    id: 'quote-management',
    label: 'Quote management',
    icon: FileText,
    tag: 'QUOTE MANAGEMENT',
    title: 'Streamline your quote workflow',
    description:
      'Generate professional quotes instantly, track their status, and convert them to orders with one click. Keep your sales pipeline organized.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    id: 'wholesale',
    label: 'Wholesale discounts',
    icon: TrendingDown,
    tag: 'WHOLESALE DISCOUNTS',
    title: 'Automate bulk pricing',
    description:
      'Apply automatic discounts based on quantity, customer type, or purchase history. Perfect for B2B and wholesale operations.',
    image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=600&h=400&fit=crop',
  },
  {
    id: 'customers',
    label: 'Customer segments',
    icon: Users,
    tag: 'CUSTOMER SEGMENTATION',
    title: 'Organize customers by pricing tier',
    description:
      'Group customers into segments with custom pricing. Easily manage VIP, wholesale, and retail pricing tiers from one dashboard.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
  },
];

export function Features() {
  const [activeFeature, setActiveFeature] = useState('customers');
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

  const activeFeatureData = features.find((f) => f.id === activeFeature);

  return (
    <section ref={sectionRef} id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="reveal text-3xl sm:text-4xl font-medium text-gray-900 mb-4">Built for flexible pricing</h2>
          <p className="reveal text-gray-600 max-w-2xl mx-auto" style={{ transitionDelay: '100ms' }}>
            QuoteFlow gives you complete control over pricing, quotes, and customer segments — empowering you to close
            more B2B deals and scale your wholesale operations.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-12" style={{ transitionDelay: '200ms' }}>
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFeature === feature.id
                    ? 'bg-white shadow-lg text-gray-900'
                    : 'text-gray-600 hover:bg-white/50 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                {feature.label}
              </button>
            );
          })}
        </div>

        {/* Feature Content */}
        <div className="reveal grid lg:grid-cols-2 gap-8 items-center" style={{ transitionDelay: '300ms' }}>
          {/* Feature Image/UI */}
          <div className="relative">
            <div className="glass-card-strong rounded-3xl p-6 shadow-floating">
              <div className="w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center">
                <p className="text-gray-400 text-sm">{activeFeatureData?.label} Screenshot</p>
              </div>
            </div>
          </div>

          {/* Feature Text */}
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-[#FFF9C4] text-xs font-medium rounded-full">
              {activeFeatureData?.tag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium text-gray-900">{activeFeatureData?.title}</h3>
            <p className="text-gray-600 leading-relaxed">{activeFeatureData?.description}</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors group"
            >
              Get started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
