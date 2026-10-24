import { NextRequest, NextResponse } from 'next/server';
import { quoteFormSchema } from '@/lib/validation';
import {
  sendEmail,
  generateQuoteEmailHtml,
  generateQuoteConfirmationEmailHtml,
} from '@/lib/email';
import { checkRateLimit } from '@/lib/rateLimit';
import { siteConfig } from '@/config/site';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip, 5, 600000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate form data
    const validData = quoteFormSchema.parse(body);

    // Honeypot check
    if (validData.honeypot) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // Send email to owner
    const ownerEmail = process.env.OWNER_EMAIL || 'owner@clearlinewindows.com';
    await sendEmail({
      to: ownerEmail,
      subject: `New Quote Request from ${validData.fullName}`,
      html: generateQuoteEmailHtml(validData),
    });

    // Send confirmation email to customer
    await sendEmail({
      to: validData.email,
      subject: 'Your Quote Request Received - Clearline Window Co.',
      html: generateQuoteConfirmationEmailHtml(validData.fullName),
    });

    return NextResponse.json({
      success: true,
      message: 'Quote request received. We will contact you shortly.',
    });
  } catch (error) {
    console.error('Quote form error:', error);

    if (error instanceof Error && error.message.includes('validation')) {
      return NextResponse.json(
        { error: 'Invalid form data' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
