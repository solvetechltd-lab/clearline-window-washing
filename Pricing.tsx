import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Pricing() {
  const packages = [
    {
      name: 'Small Home',
      description: '1-2 bed / up to 15 windows',
      price: siteConfig.pricing.small,
    },
    {
      name: 'Medium Home',
      description: '3-4 bed / 16-30 windows',
      price: siteConfig.pricing.medium,
    },
    {
      name: 'Large Home',
      description: '5+ bed / 30+ windows',
      price: siteConfig.pricing.large,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Simple, Fair Pricing</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Transparent pricing you can trust. No hidden fees, ever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-2xl bg-aqua p-8 text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-navy mb-2">{pkg.name}</h3>
              <p className="text-slate text-sm mb-4">{pkg.description}</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-sky-blue">from ${pkg.price}</span>
              </div>
              <Link
                href={`/quote?service=all`}
                className="inline-block px-6 py-2 bg-sky-blue text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Get Quote
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-navy text-white rounded-2xl p-6 max-w-3xl mx-auto text-center">
          <p className="text-sm mb-3">
            <strong>Typical price ranges. Your exact quote is always free.</strong>
          </p>
          <p className="text-sm">
            Commercial storefronts, gutter, and pressure washing are quoted individually. Recurring plans save up to {siteConfig.pricing.recurringDiscount}%.
          </p>
        </div>
      </div>
    </section>
  );
}
