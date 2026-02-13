'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg'
          : 'bg-white/60 backdrop-blur-md'
      } rounded-full px-2 py-2 flex items-center gap-1 border border-white/80`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 px-4 py-2 hover:opacity-80 transition-opacity">
        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className="font-semibold text-sm text-gray-900">QuoteFlow</span>
      </a>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-1">
        <a
          href="#about"
          className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-full transition-all duration-200"
        >
          About
        </a>
        <a
          href="#features"
          className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-full transition-all duration-200"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-full transition-all duration-200"
        >
          Pricing
        </a>
      </div>

      {/* CTA Button */}
      <a
        href="#contact"
        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 group"
      >
        <span>Contact us</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </a>
    </nav>
  );
}
