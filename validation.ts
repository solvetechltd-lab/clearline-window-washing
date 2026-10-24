import { z } from 'zod';

export const quoteFormSchema = z.object({
  propertyType: z.enum(['home', 'business', 'other']),
  services: z.array(z.string()).min(1, 'Select at least one service'),
  windows: z.enum(['1-10', '11-20', '21-30', '31-50', '50+', 'unsure']),
  stories: z.enum(['1', '2', '3+']),
  frequency: z.enum(['onetime', 'quarterly', 'twice-yearly', 'monthly', 'unsure']),
  timeframe: z.enum(['this-week', 'next-2weeks', 'flexible']),
  notes: z.string().max(500).optional(),
  fullName: z.string().min(2, 'Name required'),
  phone: z.string().regex(/^\+?[\d\s\-()]+$/, 'Valid phone required'),
  email: z.string().email('Valid email required'),
  address: z.string().min(5, 'Address required'),
  city: z.string().min(2, 'City required'),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/, 'Valid ZIP required'),
  bestTime: z.enum(['morning', 'afternoon', 'evening']),
  contactMethod: z.enum(['call', 'text', 'email']),
  consent: z.boolean().refine(v => v === true, 'You must agree to be contacted'),
  honeypot: z.string().max(0).optional(),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().regex(/^\+?[\d\s\-()]*$/, 'Valid phone').optional().or(z.literal('')),
  topic: z.enum(['general', 'commercial', 'existing', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  honeypot: z.string().max(0).optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
