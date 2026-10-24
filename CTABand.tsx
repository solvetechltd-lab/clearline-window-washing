import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function CTABand() {
  return (
    <section className="bg-sky-blue text-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready for the clearest view on the block?
        </h2>
        <p className="text-lg mb-8 opacity-95">
          Get your free quote in 60 seconds. No obligation, no fees.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/quote"
            className="px-8 py-4 bg-white text-sky-blue rounded-lg font-semibold hover:shadow-lg transition"
          >
            Get Your Free Quote
          </Link>
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-sky-blue transition"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
