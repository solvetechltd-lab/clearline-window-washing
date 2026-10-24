export const siteConfig = {
  name: 'Clearline Window Co.',
  tagline: 'Spotless glass. Zero streaks. Guaranteed.',
  description: 'Professional window cleaning for homes and businesses',
  phone: '(555) 010-2030',
  email: 'hello@clearlinewindows.com',
  address: 'Service area business',
  city: '[Your City, ST]',

  // Hours: Mon-Sat 7am-6pm, Closed Sun
  hours: {
    mon_fri: '7:00 AM - 6:00 PM',
    sat: '7:00 AM - 6:00 PM',
    sun: 'Closed',
  },

  // Service areas
  serviceAreas: [
    'Nearby Suburbs',
    'Downtown Area',
    'North Side',
    'South Side',
    'East County',
    'West County',
  ],

  // Social media
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    google: 'https://google.com/business',
  },

  // Pricing (starting from)
  pricing: {
    small: 150,      // 1-2 bed, up to 15 windows
    medium: 250,     // 3-4 bed, 16-30 windows
    large: 400,      // 5+ bed, 30+ windows
    recurringDiscount: 15, // % off recurring plans
  },

  // Services
  services: [
    {
      id: 'exterior',
      name: 'Exterior Window Cleaning',
      description: 'Streak-free glass, frames, and sills, inside reach or by pole.',
    },
    {
      id: 'interior',
      name: 'Interior Window Cleaning',
      description: 'We clean glass, tracks, and sills with drop cloths so your home stays spotless.',
    },
    {
      id: 'screens',
      name: 'Screen & Track Cleaning',
      description: 'Removes dust, pollen, and grime that builds up in tracks and screens.',
    },
    {
      id: 'commercial',
      name: 'Storefront & Commercial Glass',
      description: 'Scheduled weekly, bi-weekly, or monthly cleaning to keep your business looking sharp.',
    },
    {
      id: 'gutters',
      name: 'Gutter Cleaning',
      description: 'Clear debris and flush downspouts to protect your home.',
    },
    {
      id: 'pressure',
      name: 'Pressure Washing',
      description: 'Restore the curb appeal of your whole property: siding, driveways, patios.',
    },
  ],

  // Testimonials (REPLACE WITH REAL REVIEWS)
  testimonials: [
    {
      name: 'Sarah M.',
      text: 'The team arrived on time and cleaned every window perfectly. No streaks, no mess. Highly recommended!',
      stars: 5,
    },
    {
      name: 'James D.',
      text: 'They were professional, thorough, and polite. Will definitely call them again for our quarterly cleaning.',
      stars: 5,
    },
    {
      name: 'Lisa T.',
      text: 'Best window cleaners I\'ve used. Fair pricing and their work is guaranteed. Peace of mind!',
      stars: 5,
    },
  ],

  // Promo
  promo: {
    code: 'FIRST10',
    discount: 10,
    text: 'New customer special: 10% off your first cleaning. Mention code FIRST10.',
  },
};
