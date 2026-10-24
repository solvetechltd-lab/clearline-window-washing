import Link from 'next/link';
import { Facebook, Instagram, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-gray-300">
              Professional window cleaning for homes and businesses. Spotless glass. Zero streaks. Guaranteed.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-sky-blue transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-sky-blue transition">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-blue transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-sky-blue transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>
                <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="hover:text-sky-blue transition">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-sky-blue transition">
                  {siteConfig.email}
                </a>
              </p>
              <p className="text-gray-300">
                {siteConfig.hours.mon_fri}<br />
                {siteConfig.hours.sat}<br />
                {siteConfig.hours.sun}
              </p>
            </div>
          </div>

          {/* Service Area & Social */}
          <div>
            <h3 className="font-bold mb-4">Service Area</h3>
            <p className="text-sm text-gray-300 mb-4">
              {siteConfig.city} and surrounding areas
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-blue transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-blue transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteConfig.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-blue transition"
                aria-label="Google Business"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-sun-yellow rounded" />
            <span>Licensed & Insured</span>
          </div>
          <p>
            © {currentYear} Clearline Window Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
