import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { siteConfig } from '@/config/site.ts';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: `Professional Window Cleaning in ${siteConfig.city} | ${siteConfig.name}`,
  description: siteConfig.description,
  keywords: ['window cleaning', 'pressure washing', siteConfig.city],
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: 'https://clearlinewindows.com',
    siteName: siteConfig.name,
    images: [
      {
        url: 'https://clearlinewindows.com/og.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B2545" />
        <link rel="canonical" href="https://clearlinewindows.com" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans`}>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
