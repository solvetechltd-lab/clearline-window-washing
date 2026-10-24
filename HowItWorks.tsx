import { Clock, CalendarCheck, Eye } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Clock,
      title: 'Request a free quote',
      description: 'Takes 60 seconds online or by phone.',
    },
    {
      icon: CalendarCheck,
      title: 'Pick a time',
      description: 'We confirm within 2 business hours and offer flexible scheduling.',
    },
    {
      icon: Eye,
      title: 'Enjoy the view',
      description: 'We clean, do a final walkthrough, and you only pay when you\'re happy.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-aqua">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                  <span className="text-2xl font-bold text-sky-blue">{index + 1}</span>
                </div>
                <Icon className="mx-auto text-sky-blue mb-3" size={32} />
                <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-slate">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
