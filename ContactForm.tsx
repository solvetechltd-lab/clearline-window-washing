'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validation';
import { siteConfig } from '@/config/site';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

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
        <h2 className="text-3xl font-bold text-navy mb-4">Message Sent!</h2>
        <p className="text-lg text-slate mb-6">
          Thanks for reaching out. We'll get back to you as soon as possible.
        </p>
        <p className="text-slate mb-4">
          For immediate assistance, call us at{' '}
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
      <div>
        <label className="block text-navy font-semibold mb-2">Name</label>
        <input
          {...register('name')}
          type="text"
          placeholder="John Doe"
          className="w-full p-3 border-2 border-gray-200 rounded-lg"
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-navy font-semibold mb-2">Email</label>
        <input
          {...register('email')}
          type="email"
          placeholder="john@example.com"
          className="w-full p-3 border-2 border-gray-200 rounded-lg"
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-navy font-semibold mb-2">Phone (optional)</label>
        <input
          {...register('phone')}
          type="tel"
          placeholder="(555) 123-4567"
          className="w-full p-3 border-2 border-gray-200 rounded-lg"
        />
        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-navy font-semibold mb-2">Topic</label>
        <select {...register('topic')} className="w-full p-3 border-2 border-gray-200 rounded-lg">
          <option value="">Select a topic...</option>
          <option value="general">General Question</option>
          <option value="commercial">Commercial Account</option>
          <option value="existing">Existing Customer</option>
          <option value="other">Other</option>
        </select>
        {errors.topic && <p className="text-red-600 text-sm mt-1">{errors.topic.message}</p>}
      </div>

      <div>
        <label className="block text-navy font-semibold mb-2">Message</label>
        <textarea
          {...register('message')}
          placeholder="Your message here..."
          maxLength={2000}
          className="w-full p-3 border-2 border-gray-200 rounded-lg min-h-32"
        />
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {/* Honeypot */}
      <input {...register('honeypot')} type="hidden" />

      {submitError && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {submitError}. Please try again or call {siteConfig.phone}.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-sky-blue text-white rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
