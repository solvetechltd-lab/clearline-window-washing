import { siteConfig } from '@/config/site';

export interface EmailData {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(email: EmailData): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log('No RESEND_API_KEY found. Email not sent (dev mode):', email);
    return true;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL || `noreply@${process.env.VERCEL_URL || 'clearlinewindows.com'}`,
        to: email.to,
        subject: email.subject,
        html: email.html,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
}

export function generateQuoteEmailHtml(data: any): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #0B2545; font-size: 24px; margin-bottom: 20px; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          td { padding: 12px; border-bottom: 1px solid #eee; }
          .label { font-weight: 600; color: #0B2545; width: 150px; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New Quote Request</h1>
          <table>
            <tr>
              <td class="label">Name:</td>
              <td>${escapeHtml(data.fullName)}</td>
            </tr>
            <tr>
              <td class="label">Email:</td>
              <td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td>
            </tr>
            <tr>
              <td class="label">Phone:</td>
              <td><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></td>
            </tr>
            <tr>
              <td class="label">Address:</td>
              <td>${escapeHtml(data.address)}, ${escapeHtml(data.city)}, ${escapeHtml(data.zip)}</td>
            </tr>
            <tr>
              <td class="label">Property Type:</td>
              <td>${escapeHtml(data.propertyType)}</td>
            </tr>
            <tr>
              <td class="label">Services:</td>
              <td>${escapeHtml(data.services.join(', '))}</td>
            </tr>
            <tr>
              <td class="label">Windows:</td>
              <td>${escapeHtml(data.windows)}</td>
            </tr>
            <tr>
              <td class="label">Stories:</td>
              <td>${escapeHtml(data.stories)}</td>
            </tr>
            <tr>
              <td class="label">Frequency:</td>
              <td>${escapeHtml(data.frequency)}</td>
            </tr>
            <tr>
              <td class="label">Timeframe:</td>
              <td>${escapeHtml(data.timeframe)}</td>
            </tr>
            <tr>
              <td class="label">Best Time:</td>
              <td>${escapeHtml(data.bestTime)}</td>
            </tr>
            <tr>
              <td class="label">Contact Method:</td>
              <td>${escapeHtml(data.contactMethod)}</td>
            </tr>
            ${data.notes ? `
            <tr>
              <td class="label">Notes:</td>
              <td>${escapeHtml(data.notes)}</td>
            </tr>
            ` : ''}
          </table>
          <div class="footer">
            <p>Reply to this email to contact the customer directly.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function generateQuoteConfirmationEmailHtml(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #0B2545; font-size: 24px; margin-bottom: 10px; }
          .highlight { color: #1E90FF; font-weight: 600; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Thanks for reaching out, ${escapeHtml(name)}!</h1>
          <p>We received your quote request and will get back to you within <span class="highlight">2 business hours</span>, usually sooner.</p>

          <h2 style="color: #0B2545; font-size: 16px; margin-top: 20px;">What happens next:</h2>
          <ol>
            <li>We'll review your request and prepare an accurate quote</li>
            <li>You'll receive a call or text with your personalized quote and scheduling options</li>
            <li>Pick a time that works for you—we're flexible!</li>
          </ol>

          <p style="margin-top: 20px;">In the meantime, feel free to call us at <a href="tel:${siteConfig.phone.replace(/\D/g, '')}">${siteConfig.phone}</a> if you have any questions.</p>

          <div class="footer">
            <p><strong>Clearline Window Co.</strong></p>
            <p>${siteConfig.phone} | ${siteConfig.email}</p>
            <p>Spotless glass. Zero streaks. Guaranteed.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function generateContactEmailHtml(data: any): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #0B2545; font-size: 24px; margin-bottom: 20px; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          td { padding: 12px; border-bottom: 1px solid #eee; }
          .label { font-weight: 600; color: #0B2545; width: 150px; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New Contact Form Submission</h1>
          <table>
            <tr>
              <td class="label">Name:</td>
              <td>${escapeHtml(data.name)}</td>
            </tr>
            <tr>
              <td class="label">Email:</td>
              <td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td>
            </tr>
            ${data.phone ? `
            <tr>
              <td class="label">Phone:</td>
              <td><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></td>
            </tr>
            ` : ''}
            <tr>
              <td class="label">Topic:</td>
              <td>${escapeHtml(data.topic)}</td>
            </tr>
            <tr>
              <td class="label" style="vertical-align: top;">Message:</td>
              <td style="white-space: pre-wrap;">${escapeHtml(data.message)}</td>
            </tr>
          </table>
          <div class="footer">
            <p>Reply to this email to contact the customer directly.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function generateContactConfirmationEmailHtml(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #0B2545; font-size: 24px; margin-bottom: 10px; }
          .highlight { color: #1E90FF; font-weight: 600; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>We got your message, ${escapeHtml(name)}!</h1>
          <p>Thanks for reaching out. We'll get back to you as soon as possible.</p>

          <p style="margin-top: 20px;">For immediate assistance, call us at <a href="tel:${siteConfig.phone.replace(/\D/g, '')}">${siteConfig.phone}</a>.</p>

          <div class="footer">
            <p><strong>Clearline Window Co.</strong></p>
            <p>${siteConfig.phone} | ${siteConfig.email}</p>
            <p>Spotless glass. Zero streaks. Guaranteed.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
