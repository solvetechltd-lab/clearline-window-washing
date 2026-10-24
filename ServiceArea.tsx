import { MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function ServiceArea() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 flex items-center justify-center gap-2">
            <MapPin className="text-sky-blue" />
            Our Service Area
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
          {siteConfig.serviceAreas.map((area, index) => (
            <div
              key={index}
              className="rounded-lg bg-aqua p-4 text-center text-navy font-semibold"
            >
              {area}
            </div>
          ))}
        </div>

        <div className="text-center text-slate max-w-2xl mx-auto">
          <p>
            Don't see your town listed? No problem! We may still be able to help. Give us a call to ask about service to your area.
          </p>
        </div>

        {/* Google Maps embed placeholder */}
        <div className="mt-12 rounded-2xl bg-aqua p-8 max-w-2xl mx-auto">
          <p className="text-center text-slate font-semibold">
            📍 Service area map
          </p>
          <p className="text-center text-sm text-slate mt-2">
            To add Google Maps embed: Replace this with your map embed code in the component or use the Google Maps Embed API.
          </p>
        </div>
      </div>
    </section>
  );
}
