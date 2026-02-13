'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Can I try free trial?',
    answer:
      'Yes! Our Free plan includes up to 50 quotes per month with basic features. You can test custom pricing rules before upgrading.',
  },
  {
    question: 'What\'s the pricing?',
    answer:
      'We offer three plans: Free (50 quotes/month), Professional ($29/mo unlimited), and Enterprise ($99/mo with API access).',
  },
  {
    question: 'Is there a refund?',
    answer:
      'Yes, we offer a 30-day money-back guarantee on all paid plans. If you\'re not satisfied, contact us for a full refund.',
  },
  {
    question: 'Where to chat with support?',
    answer:
      'Click the chat icon in the bottom right of your dashboard, or email us at hello@quoteflow.app for assistance.',
  },
  {
    question: 'Can I try demo for free?',
    answer:
      'Absolutely! Schedule a free personalized demo with our team to see how QuoteFlow can work for your business.',
  },
  {
    question: 'Where can I leave feedback?',
    answer:
      'We love feedback! Email us at hello@quoteflow.app or use the feedback form in your dashboard settings.',
  },
];

export function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

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
        <div className="mb-16">
          <span className="reveal inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded mb-4">
            FAQ
          </span>
          <h2 className="reveal text-3xl sm:text-4xl font-medium text-gray-900 mb-4" style={{ transitionDelay: '100ms' }}>
            Frequently Asked Questions
          </h2>
          <p className="reveal text-gray-600 max-w-2xl" style={{ transitionDelay: '200ms' }}>
            Get quick answers to the most common questions about QuoteFlow and custom pricing for Shopify stores.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="reveal"
                style={{ transitionDelay: `${300 + index * 50}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-start justify-between gap-3 group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 mt-0.5 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
