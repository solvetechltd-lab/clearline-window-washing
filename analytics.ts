export function track(eventName: string, data?: Record<string, any>) {
  // No-op by default. Ready for GA4/Meta Pixel integration
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, data);
  }
  console.log('Track:', eventName, data);
}
