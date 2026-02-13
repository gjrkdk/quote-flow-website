'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    description: 'For small stores getting started',
    price: 0,
    features: [
      'Up to 50 custom quotes per month',
      'Basic pricing rules',
      'Email support',
      'Shopify integration',
      'Quote templates',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Most popular',
    price: 29,
    features: [
      'Everything in Free',
      'Unlimited quotes',
      'Advanced pricing rules',
      'Priority support',
      'Customer segmentation',
      'Analytics dashboard',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For high-volume businesses',
    price: 99,
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom integrations',
      'API access',
      'White-label quotes',
      'SLA guarantee',
    ],
  },
];

export function Pricing() {
  const [activePlan, setActivePlan] = useState('free');
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

  const activePlanData = pricingPlans.find((p) => p.id === activePlan);

  return (
    <section ref={sectionRef} id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className="reveal rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 50%, #1a1a1a 100%)',
          }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-medium text-white">Simple, transparent pricing</h2>

              {/* Plan Selector */}
              <div className="space-y-3">
                {pricingPlans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setActivePlan(plan.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                      activePlan === plan.id
                        ? 'bg-white/10 border border-white/20'
                        : 'bg-transparent border border-white/10 hover:bg-white/5'
                    }`}
                  >
                    <div className="text-left">
                      <p className="text-white font-medium">{plan.name}</p>
                      <p className="text-white/60 text-sm">{plan.description}</p>
                    </div>
                    {activePlan === plan.id && (
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://images.unsplash.com/photo-${1494790108377 + i * 100000}?w=40&h=40&fit=crop&crop=face`}
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-gray-700 object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-white font-medium">4.9 / 5 Rated</p>
                  <p className="text-white/60 text-sm">Trusted by 500+ stores</p>
                </div>
              </div>
            </div>

            {/* Right Side - Active Plan Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-xl font-medium">{activePlanData?.name}</span>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-semibold text-white">
                  {activePlanData?.price === 0 ? 'Free' : `$${activePlanData?.price}`}
                </span>
                {activePlanData?.price !== 0 && <span className="text-white/60"> / mo</span>}
              </div>

              <p className="text-white/70 mb-8">
                {activePlanData?.id === 'free' &&
                  'Perfect for small Shopify stores testing custom pricing and quotes.'}
                {activePlanData?.id === 'professional' &&
                  'Ideal for growing stores with regular wholesale and B2B customers.'}
                {activePlanData?.id === 'enterprise' &&
                  'Built for high-volume businesses that need advanced customization and support.'}
              </p>

              <button className="w-full flex items-center justify-center gap-2 bg-[#FFF9C4] text-gray-900 px-6 py-4 rounded-full text-sm font-medium hover:bg-[#F5E6A3] transition-all duration-200 group mb-8">
                <span>Get started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <div className="space-y-3">
                {activePlanData?.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white/60" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
