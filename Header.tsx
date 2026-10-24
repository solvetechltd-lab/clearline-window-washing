'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '@/config/site';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center flex-1 justify-center">
            <Link href="/" className="text-navy hover:text-sky-blue transition">
              Home
            </Link>
            <Link href="/quote" className="text-navy hover:text-sky-blue transition">
              Get a Quote
            </Link>
            <Link href="/contact" className="text-navy hover:text-sky-blue transition">
              Contact Us
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
              className="px-4 py-2 text-sky-blue border border-sky-blue rounded-lg hover:bg-sky-blue hover:text-white transition"
            >
              Call Now
            </a>
            <Link
              href="/quote"
              className="px-4 py-2 bg-sky-blue text-white rounded-lg hover:opacity-90 transition"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-navy"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-navy hover:text-sky-blue transition py-2"
              >
                Home
              </Link>
              <Link
                href="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="text-navy hover:text-sky-blue transition py-2"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-navy hover:text-sky-blue transition py-2"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="flex gap-2 p-3">
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
            className="flex-1 px-3 py-3 border border-sky-blue text-sky-blue rounded-lg text-center text-sm font-semibold hover:bg-sky-blue hover:text-white transition"
          >
            Call
          </a>
          <Link
            href="/quote"
            className="flex-1 px-3 py-3 bg-sky-blue text-white rounded-lg text-center text-sm font-semibold hover:opacity-90 transition"
          >
            Free Quote
          </Link>
        </div>
      </div>

      {/* Spacer for mobile bottom bar */}
      <div className="md:hidden h-16" />
    </>
  );
}
