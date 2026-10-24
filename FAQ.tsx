'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How much does window cleaning cost?',
    a: 'Costs depend on your home size and the services you need. Typical prices range from $150 for small homes to $400+ for large homes. We always provide free quotes with no obligation.',
  },
  {
    q: 'Do I need to be home?',
    a: 'For exterior cleaning, you don\'t need to be home. For interior window cleaning, we need access to your home to clean inside safely.',
  },
  {
    q: 'How long does it take?',
    a: 'An average home takes 1.5 to 3 hours, depending on the number of windows and property size. We\'ll give you a time estimate in your quote.',
  },
  {
    q: 'What if it rains?',
    a: 'We reschedule for free or can clean at your convenience. Light rain is no problem—we use professional techniques to dry everything.',
  },
  {
    q: 'Are you insured?',
    a: 'Yes, we are fully licensed and insured. Your home and belongings are completely protected.',
  },
  {
    q: 'What products do you use?',
    a: 'We use eco-friendly, pet-safe, and kid-safe solutions. We also offer pure-water system cleaning where applicable.',
  },
  {
    q: 'Do you clean screens and tracks?',
    a: 'Absolutely! We can add screen and track cleaning to any package or include it in our full service.',
  },
  {
    q: 'What\'s your guarantee?',
    a: 'We guarantee 100% streak-free results. If we miss a spot, we\'ll come back and clean it for free within 7 days.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left font-semibold text-navy hover:bg-aqua transition-colors"
                aria-expanded={openIndex === index}
              >
                {faq.q}
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 bg-aqua text-slate border-t border-gray-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
