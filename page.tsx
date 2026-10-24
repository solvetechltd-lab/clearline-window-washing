import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { HowItWorks } from '@/components/HowItWorks';
import { WhyUs } from '@/components/WhyUs';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { ServiceArea } from '@/components/ServiceArea';
import { FAQ } from '@/components/FAQ';
import { CTABand } from '@/components/CTABand';
import { LocalBusinessSchema, FAQSchema } from '@/components/JsonLd';

export const metadata = {
  title: 'Professional Window Cleaning | Clearline Window Co.',
  description: 'Family-owned window cleaning service. Fast quotes, fair prices, and a 100% streak-free guarantee.',
};

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <CTABand />
    </>
  );
}
