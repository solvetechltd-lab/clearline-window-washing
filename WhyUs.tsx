import { CheckCircle } from 'lucide-react';

const benefits = [
  'Upfront pricing, no surprise fees',
  'Background-checked, uniformed technicians',
  'Fully insured for your peace of mind',
  'Eco-friendly, pet-safe, and kid-safe products',
  'Shoe covers and drop cloths inside your home',
  '100% streak-free guarantee: if we miss a spot, we come back free within 7 days',
];

export function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Choose Clearline</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            We're not just a service—we're your partners in maintaining beautiful, clean windows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col gap-4">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle className="text-sky-blue flex-shrink-0 mt-1" size={20} />
                <p className="text-navy">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {benefits.slice(3).map((benefit, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle className="text-sky-blue flex-shrink-0 mt-1" size={20} />
                <p className="text-navy">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
