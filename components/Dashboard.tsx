'use client';

import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Easy setup',
    description: 'Install the app from Shopify App Store and configure custom pricing rules in minutes.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=500&fit=crop',
  },
  {
    number: '02',
    title: 'Create quotes',
    description: 'Generate personalized quotes for wholesale customers with custom prices and terms.',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=500&fit=crop',
  },
  {
    number: '03',
    title: 'Track orders',
    description: 'Monitor quote acceptance, conversions, and revenue with detailed analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=500&fit=crop',
  },
];

export function Dashboard() {
  const [activeStep, setActiveStep] = useState(2);
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
    <section ref={sectionRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Dashboard Mockup */}
        <div className="reveal mb-16">
          <div className="glass-card-strong rounded-3xl overflow-hidden shadow-floating">
            <div className="w-full aspect-[16/10] bg-gray-100 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Dashboard Screenshot Placeholder</p>
            </div>
          </div>
        </div>

        {/* Step Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="reveal cursor-pointer transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setActiveStep(index)}
            >
              <div
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 h-full ${
                  activeStep === index
                    ? 'glass-card-strong shadow-floating border-2 border-white'
                    : 'glass-card shadow-soft hover:shadow-floating'
                }`}
              >
                <div className="p-6">
                  <span className="text-sm font-medium mb-4 block text-gray-400">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                <div className="relative h-48 mx-4 mb-4 rounded-xl overflow-hidden">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
