import Link from 'next/link';
import { Star, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-aqua to-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Glass shine graphic */}
        <div className="mb-8 flex justify-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            className="opacity-20"
          >
            <rect x="15" y="15" width="70" height="70" rx="4" stroke="#1E90FF" strokeWidth="2" />
            <circle cx="50" cy="50" r="25" fill="#E8F4FD" opacity="0.3" />
            <line x1="30" y1="30" x2="70" y2="70" stroke="#FFC93C" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 text-center leading-tight">
          Crystal-Clear Windows, Cleaned Right the First Time.
        </h1>

        <p className="text-lg md:text-xl text-slate mb-8 text-center max-w-2xl mx-auto leading-relaxed">
          Family-owned window cleaning for homes and businesses in {siteConfig.city} and surrounding areas. Fast quotes, fair prices, and a streak-free guarantee.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/quote"
            className="px-8 py-4 bg-sky-blue text-white rounded-lg font-semibold hover:opacity-90 transition text-center"
          >
            Get Your Free Quote
          </Link>
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
            className="px-8 py-4 border-2 border-navy text-navy rounded-lg font-semibold hover:bg-navy hover:text-white transition text-center"
          >
            Call {siteConfig.phone}
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Star size={20} className="text-sun-yellow fill-sun-yellow" />
            <span className="text-navy font-semibold">5-Star Service</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-navy rounded-full" />
          <div className="flex items-center gap-2">
            <CheckCircle size={20} className="text-sky-blue" />
            <span className="text-navy font-semibold">Licensed & Insured</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-navy rounded-full" />
          <div className="flex items-center gap-2">
            <CheckCircle size={20} className="text-sky-blue" />
            <span className="text-navy font-semibold">100% Satisfaction</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-navy rounded-full" />
          <div className="flex items-center gap-2">
            <CheckCircle size={20} className="text-sky-blue" />
            <span className="text-navy font-semibold">Same-Week Availability</span>
          </div>
        </div>
      </div>
    </section>
  );
}
