import { siteConfig } from '@/config/site';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: 'https://clearlinewindows.com',
    areaServed: siteConfig.city,
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '07:00',
        closes: '18:00',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does window cleaning cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Costs depend on your home size and the services you need. Typical prices range from $150 for small homes to $400+ for large homes. We always provide free quotes with no obligation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to be home?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For exterior cleaning, you don\'t need to be home. For interior window cleaning, we need access to your home to clean inside safely.',
        },
      },
      {
        '@type': 'Question',
        name: 'What\'s your guarantee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We guarantee 100% streak-free results. If we miss a spot, we\'ll come back and clean it for free within 7 days.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
