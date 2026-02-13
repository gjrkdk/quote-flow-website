'use client';

import { useState } from 'react';
import { ArrowRight, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  pages: [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Case Studies', href: '#' },
  ],
};

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Sign up for our newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all"
                required
              />
              <button
                type="submit"
                className="px-4 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Pages</h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Contact</h3>
            <a
              href="mailto:hello@quoteflow.app"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              hello@quoteflow.app
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200/50">
          <p className="text-sm text-gray-500">© 2026 QuoteFlow. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Twitter className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Instagram className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-gray-600" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
