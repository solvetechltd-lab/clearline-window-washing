import { Star } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-aqua">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What Our Customers Say</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Real feedback from real customers. Your satisfaction is our priority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-sun-yellow fill-sun-yellow"
                  />
                ))}
              </div>
              <p className="text-slate mb-4 italic">&quot;{testimonial.text}&quot;</p>
              <p className="font-semibold text-navy">— {testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* Note: Don't show fake rating counts */}
        <div className="mt-8 text-center text-sm text-slate">
          <p>
            Trusted by hundreds of homeowners and businesses in {siteConfig.city} and surrounding areas.
          </p>
        </div>
      </div>
    </section>
  );
}
