import Link from 'next/link';
import { Droplets, Home, Zap, Building, Wind, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';

const iconMap: Record<string, typeof Home> = {
  exterior: Droplets,
  interior: Home,
  screens: Wind,
  commercial: Building,
  gutters: Zap,
  pressure: Sparkles,
};

export function Services() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Services</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Complete window cleaning and exterior solutions for your home or business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.id] || Home;

            return (
              <div
                key={service.id}
                className="rounded-2xl bg-aqua p-6 hover:shadow-lg transition-shadow"
              >
                <Icon className="text-sky-blue mb-4" size={32} />
                <h3 className="text-xl font-bold text-navy mb-2">{service.name}</h3>
                <p className="text-slate mb-4">{service.description}</p>
                <Link
                  href={`/quote?service=${service.id}`}
                  className="text-sky-blue font-semibold hover:underline"
                >
                  Get a quote →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
