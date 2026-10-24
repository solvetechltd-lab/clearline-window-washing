import { siteConfig } from '@/config/site';

export function AnnouncementBar() {
  return (
    <div className="bg-sun-yellow text-navy py-2 text-center text-sm font-semibold">
      {siteConfig.promo.text}
    </div>
  );
}
