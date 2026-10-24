'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { quoteFormSchema, type QuoteFormData } from '@/lib/validation';
import { track } from '@/lib/analytics';
import { siteConfig } from '@/config/site';

interface QuoteFormProps {
  initialService?: string;
}

export function QuoteForm({ initialService }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      services: initialService ? [initialService] : [],
    },
  });

  const services = watch('services');
  const windows = watch('windows');

  // Calculate estimate
  const getEstimate = () => {
    if (windows === 'unsure' || !windows) return null;

    const windowCount = {
      '1-10': 5,
      '11-20': 15,
      '21-30': 25,
      '31-50': 40,
      '50+': 60,
    }[windows as string] || 0;

    const basePrice = siteConfig.pricing.medium;
    const perWindow = 10;

    const low = Math.round(siteConfig.pricing.small + (windowCount - 15) * (perWindow / 10));
    const high = Math.round(siteConfig.pricing.large + (windowCount - 30) * (perWindow / 10));

    return { low: Math.max(low, siteConfig.pricing.small), high: Math.max(high, siteConfig.pricing.medium) };
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit quote request');
      }

      track('quote_submitted', {
        service: data.services,
        propertyType: data.propertyType,
      });

      setIsSuccess(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">✓</div>
        <h2 className="text-3xl font-bold text-navy mb-4">Request Received!</h2>
        <p className="text-lg text-slate mb-6">
          Thanks for reaching out. We'll contact you within 2 business hours with your personalized quote.
        </p>
        <div className="bg-aqua rounded-lg p-6 mb-6">
          <h3 className="font-bold text-navy mb-3">What Happens Next</h3>
          <ol className="text-left space-y-2 text-sm">
            <li>1. We review your request and prepare an accurate quote</li>
            <li>2. We'll call or text you with pricing and scheduling options</li>
            <li>3. Pick a time that works for you—we're flexible!</li>
          </ol>
        </div>
        <p className="text-slate mb-4">
          In the meantime, feel free to call us at{' '}
          <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="text-sky-blue font-semibold">
            {siteConfig.phone}
          </a>
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-sky-blue text-white rounded-lg font-semibold hover:opacity-90"
        >
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Progress bar */}
      <div className="flex gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-2 flex-1 rounded-full ${s <= step ? 'bg-sky-blue' : 'bg-gray-200'}`}
          />
        ))}
      </div>

      {/* Step 1: Services */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <label className="block text-navy font-semibold mb-4">Property Type</label>
            <div className="space-y-3">
              {['home', 'business', 'other'].map((type) => (
                <label key={type} className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-sky-blue">
                  <input
                    type="radio"
                    {...register('propertyType')}
                    value={type}
                    className="w-4 h-4"
                  />
                  <span className="font-semibold text-navy capitalize">{type}</span>
                </label>
              ))}
            </div>
            {errors.propertyType && <p className="text-red-600 text-sm mt-2">{errors.propertyType.message}</p>}
          </div>

          <div>
            <label className="block text-navy font-semibold mb-4">Services Needed</label>
            <div className="space-y-3">
              {siteConfig.services.map((svc) => (
                <label key={svc.id} className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-sky-blue">
                  <input
                    type="checkbox"
                    {...register('services')}
                    value={svc.id}
                    className="w-4 h-4 mt-1"
                  />
                  <div>
                    <span className="font-semibold text-navy">{svc.name}</span>
                    <p className="text-sm text-slate">{svc.description}</p>
                  </div>
                </label>
              ))}
            </div>
            {errors.services && <p className="text-red-600 text-sm mt-2">{errors.services.message}</p>}
          </div>
        </div>
      )}

      {/* Step 2: Property Details */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <label className="block text-navy font-semibold mb-2">Approximate number of windows</label>
            <select {...register('windows')} className="w-full p-3 border-2 border-gray-200 rounded-lg">
              <option value="">Select...</option>
              {['1-10', '11-20', '21-30', '31-50', '50+', 'unsure'].map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {errors.windows && <p className="text-red-600 text-sm">{errors.windows.message}</p>}
          </div>

          <div>
            <label className="block text-navy font-semibold mb-2">Number of stories</label>
            <select {...register('stories')} className="w-full p-3 border-2 border-gray-200 rounded-lg">
              <option value="">Select...</option>
              <option value="1">1 story</option>
              <option value="2">2 stories</option>
              <option value="3+">3+ stories</option>
            </select>
            {errors.stories && <p className="text-red-600 text-sm">{errors.stories.message}</p>}
          </div>

          <div>
            <label className="block text-navy font-semibold mb-2">Preferred frequency</label>
            <select {...register('frequency')} className="w-full p-3 border-2 border-gray-200 rounded-lg">
              <option value="">Select...</option>
              <option value="onetime">One-time</option>
              <option value="quarterly">Quarterly</option>
              <option value="twice-yearly">Twice a year</option>
              <option value="monthly">Monthly</option>
              <option value="unsure">Not sure yet</option>
            </select>
            {errors.frequency && <p className="text-red-600 text-sm">{errors.frequency.message}</p>}
          </div>

          <div>
            <label className="block text-navy font-semibold mb-2">Preferred timeframe</label>
            <select {...register('timeframe')} className="w-full p-3 border-2 border-gray-200 rounded-lg">
              <option value="">Select...</option>
              <option value="this-week">This week</option>
              <option value="next-2weeks">Next 2 weeks</option>
              <option value="flexible">Flexible</option>
            </select>
            {errors.timeframe && <p className="text-red-600 text-sm">{errors.timeframe.message}</p>}
          </div>

          <div>
            <label className="block text-navy font-semibold mb-2">Additional notes (optional)</label>
            <textarea
              {...register('notes')}
              placeholder="Tell us anything else we should know..."
              maxLength={500}
              className="w-full p-3 border-2 border-gray-200 rounded-lg min-h-24"
            />
            {errors.notes && <p className="text-red-600 text-sm">{errors.notes.message}</p>}
          </div>

          {/* Estimate */}
          {getEstimate() && (
            <div className="bg-aqua rounded-lg p-4">
              <p className="text-sm text-slate mb-2">💡 Ballpark Estimate</p>
              <p className="text-2xl font-bold text-navy">
                ${getEstimate()?.low} – ${getEstimate()?.high}
              </p>
              <p className="text-xs text-slate mt-2">Estimate only. Final quote confirmed by our team.</p>
            </div>
          )}
        </div>
      )}

      {/* Step 3: Contact Info */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <label className="block text-navy font-semibold mb-2">Full Name</label>
            <input
              {...register('fullName')}
              type="text"
              placeholder="John Doe"
              className="w-full p-3 border-2 border-gray-200 rounded-lg"
            />
            {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block text-navy font-semibold mb-2">Phone</label>
            <input
              {...register('phone')}
              type="tel"
              placeholder="(555) 123-4567"
              className="w-full p-3 border-2 border-gray-200 rounded-lg"
            />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-navy font-semibold mb-2">Email</label>
            <input
              {...register('email')}
              type="email"
              placeholder="john@example.com"
              className="w-full p-3 border-2 border-gray-200 rounded-lg"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-navy font-semibold mb-2">Address</label>
            <input
              {...register('address')}
              type="text"
              placeholder="123 Main St"
              className="w-full p-3 border-2 border-gray-200 rounded-lg"
            />
            {errors.address && <p className="text-red-600 text-sm">{errors.address.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-navy font-semibold mb-2">City</label>
              <input
                {...register('city')}
                type="text"
                placeholder="Your City"
                className="w-full p-3 border-2 border-gray-200 rounded-lg"
              />
              {errors.city && <p className="text-red-600 text-sm">{errors.city.message}</p>}
            </div>
            <div>
              <label className="block text-navy font-semibold mb-2">ZIP</label>
              <input
                {...register('zip')}
                type="text"
                placeholder="12345"
                className="w-full p-3 border-2 border-gray-200 rounded-lg"
              />
              {errors.zip && <p className="text-red-600 text-sm">{errors.zip.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-navy font-semibold mb-2">Best time to contact</label>
            <select {...register('bestTime')} className="w-full p-3 border-2 border-gray-200 rounded-lg">
              <option value="">Select...</option>
              <option value="morning">Morning (7am-12pm)</option>
              <option value="afternoon">Afternoon (12pm-5pm)</option>
              <option value="evening">Evening (5pm-9pm)</option>
            </select>
            {errors.bestTime && <p className="text-red-600 text-sm">{errors.bestTime.message}</p>}
          </div>

          <div>
            <label className="block text-navy font-semibold mb-2">Preferred contact method</label>
            <select {...register('contactMethod')} className="w-full p-3 border-2 border-gray-200 rounded-lg">
              <option value="">Select...</option>
              <option value="call">Call</option>
              <option value="text">Text</option>
              <option value="email">Email</option>
            </select>
            {errors.contactMethod && <p className="text-red-600 text-sm">{errors.contactMethod.message}</p>}
          </div>

          {/* Honeypot */}
          <input {...register('honeypot')} type="hidden" />

          <label className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-sky-blue">
            <input
              {...register('consent')}
              type="checkbox"
              className="w-4 h-4 mt-1"
            />
            <span className="text-sm text-navy">
              I agree to be contacted about my quote. We'll follow up within 2 business hours.
            </span>
          </label>
          {errors.consent && <p className="text-red-600 text-sm">{errors.consent.message}</p>}
        </div>
      )}

      {/* Error message */}
      {submitError && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {submitError}. Please try again or call {siteConfig.phone}.
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex gap-4">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="flex-1 px-6 py-3 border-2 border-navy text-navy rounded-lg font-semibold hover:bg-navy hover:text-white transition"
          >
            Back
          </button>
        )}
        {step < 3 ? (
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            className="flex-1 px-6 py-3 bg-sky-blue text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-6 py-3 bg-sky-blue text-white rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
          </button>
        )}
      </div>
    </form>
  );
}
