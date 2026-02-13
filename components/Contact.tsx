'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, Send, Star, Users } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="reveal text-3xl sm:text-4xl font-medium text-gray-900 mb-4">Get started with QuoteFlow</h2>
              <p className="reveal text-gray-600" style={{ transitionDelay: '100ms' }}>
                Have questions about custom pricing for your Shopify store? We're here to help.
              </p>
            </div>

            {/* Rating Badge */}
            <div
              className="reveal inline-flex items-center gap-4 px-6 py-4 glass-card rounded-2xl"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">4.9 / 5 Rated</p>
                <p className="text-xs text-gray-500">Trusted by 500+ stores</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="reveal space-y-4" style={{ transitionDelay: '300ms' }}>
              <a
                href="mailto:hello@quoteflow.app"
                className="flex items-center gap-4 p-4 glass-card rounded-2xl hover:bg-white/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-900 font-medium">hello@quoteflow.app</p>
                </div>
              </a>
            </div>

            {/* Team Avatars */}
            <div className="reveal flex items-center gap-4" style={{ transitionDelay: '400ms' }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${1494790108377 + i * 100000}?w=40&h=40&fit=crop&crop=face`}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-cream object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                <span>Our team is ready to help</span>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="reveal glass-card-strong rounded-3xl p-8 shadow-floating" style={{ transitionDelay: '300ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your store and pricing needs..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-black text-white px-6 py-4 rounded-xl text-sm font-medium hover:bg-gray-800 transition-all duration-200 group"
              >
                <span>Submit</span>
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
