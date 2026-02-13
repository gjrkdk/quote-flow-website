'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Edit2, Star, MessageCircle, MoreHorizontal } from 'lucide-react';

export function Hero() {
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
    <section ref={sectionRef} className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-start">
          {/* Left Content */}
          <div className="space-y-8 pt-8">
            <h1 className="reveal text-4xl sm:text-5xl lg:text-[3.5rem] font-normal text-gray-900 leading-[1.1] tracking-tight">
              Custom pricing
              <br />
              for your
              <br />
              Shopify store
            </h1>
            <p className="reveal text-base text-gray-600 max-w-md leading-relaxed" style={{ transitionDelay: '100ms' }}>
              QuoteFlow empowers merchants to set custom prices for products, create personalized quotes, and streamline
              pricing workflows for wholesale and B2B customers.
            </p>
            <div className="reveal flex flex-wrap gap-3" style={{ transitionDelay: '200ms' }}>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 group shadow-lg shadow-black/20"
              >
                <span>Get started</span>
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-black group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-transparent text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium border border-gray-900 hover:bg-gray-100 transition-all duration-200"
              >
                <span>Contact us</span>
              </a>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative h-[450px] lg:h-[500px]">
            {/* Customers Card */}
            <div
              className="reveal absolute top-0 right-0 lg:right-8 w-[320px] glass-card rounded-3xl p-5 shadow-floating"
              style={{
                transitionDelay: '300ms',
                transform: 'rotate(-1deg)'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-base font-medium text-gray-900">Customers</span>
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                  Sort by Newest
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                {/* Customer Item 1 - Highlighted in yellow */}
                <div className="flex items-center gap-3 p-3 bg-[#FFF9C4] rounded-xl">
                  <img
                    src="https://framerusercontent.com/images/DpVLrc4ydDENH7Z3XC0cKzA6Y8.png"
                    alt="Maggie"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">Maggie Johnson</p>
                    <p className="text-xs text-gray-500 truncate">Oasis Organic Inc.</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 hover:bg-black/5 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-1.5 hover:bg-black/5 rounded-lg transition-colors">
                      <Star className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-1.5 hover:bg-black/5 rounded-lg transition-colors">
                      <MessageCircle className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-1.5 hover:bg-black/5 rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
                {/* Customer Item 2 */}
                <div className="flex items-center gap-3 p-3 hover:bg-white/50 rounded-xl transition-colors">
                  <img
                    src="https://framerusercontent.com/images/yH9xkXhZMdMzsKt4c6ybgHCFhsI.png"
                    alt="Chris"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">Chris Friedkly</p>
                    <p className="text-xs text-gray-500 truncate">Supermarket Villanova</p>
                  </div>
                </div>
                {/* Customer Item 3 */}
                <div className="flex items-center gap-3 p-3 hover:bg-white/50 rounded-xl transition-colors">
                  <img
                    src="https://framerusercontent.com/images/5JOZsibBgQ896ZHozxgNAzUBVR4.png"
                    alt="Gael"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">Gael Harry</p>
                    <p className="text-xs text-gray-500 truncate">New York Finest Fruits</p>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 mt-4 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                All customers
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Analytics Card */}
            <div
              className="reveal absolute top-[260px] right-[20px] lg:right-0 w-[280px] glass-card rounded-3xl p-5 shadow-floating"
              style={{
                transitionDelay: '400ms',
                transform: 'rotate(2deg)'
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Daily Average</p>
                  <p className="text-2xl font-semibold text-gray-900">2h 20m</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-red-500 font-medium">+30m</p>
                  <p className="text-xs text-gray-500">this week</p>
                </div>
              </div>
              {/* Bar Chart */}
              <div className="flex items-end justify-between gap-2 h-24">
                {[
                  { day: 'M', segments: [12, 16, 8] },
                  { day: 'T', segments: [20, 24, 12] },
                  { day: 'W', segments: [16, 20, 10] },
                  { day: 'T', segments: [24, 28, 14] },
                  { day: 'F', segments: [18, 22, 11] },
                  { day: 'S', segments: [14, 18, 9] },
                  { day: 'S', segments: [16, 20, 10] },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
                    <div className="w-full flex flex-col-reverse rounded-md overflow-hidden gap-[2px]" style={{ height: `${Math.max(...item.segments) * 2}px` }}>
                      <div className="w-full bg-[#FFD93D] rounded-sm" style={{ height: `${item.segments[0]}%` }} />
                      <div className="w-full bg-[#FF6B9D] rounded-sm" style={{ height: `${item.segments[1] - item.segments[0]}%` }} />
                      <div className="w-full bg-[#6BCBFF] rounded-sm" style={{ height: `${item.segments[2]}%` }} />
                    </div>
                    <span className="text-xs font-medium text-gray-600">{item.day}</span>
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
