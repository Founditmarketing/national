import { Resend } from 'resend';

export const config = {
  runtime: 'edge',
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const body = await req.json();
    const { formType, firstName, lastName, email, phone, message, vehicle, service } = body;

    // --- Validation ---
    if (!firstName || !lastName || !email || !phone) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: firstName, lastName, email, phone.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // --- Determine email content based on form type ---
    const isQuote = formType === 'quote';

    const subject = isQuote
      ? `New Appointment Request — ${firstName} ${lastName}`
      : `New Contact Message — ${firstName} ${lastName}`;

    const serviceLabel = service || 'Not specified';
    const vehicleLabel = vehicle || 'Not specified';
    const messageLabel = message || 'No message provided.';

    const quoteRows = `
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
          <span style="color:#64748b;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;display:block;margin-bottom:4px;">Vehicle</span>
          <span style="color:#f1f5f9;font-size:16px;font-weight:700;">${vehicleLabel}</span>
        </td>
      </tr>
      <tr>
        <td style="padding:14px 0;">
          <span style="color:#64748b;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;display:block;margin-bottom:4px;">Requested Service</span>
          <span style="color:#f1f5f9;font-size:16px;font-weight:700;">${serviceLabel}</span>
        </td>
      </tr>
    `;

    const contactRows = `
      <tr>
        <td style="padding:14px 0;">
          <span style="color:#64748b;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;display:block;margin-bottom:4px;">Message</span>
          <span style="color:#f1f5f9;font-size:15px;font-weight:500;line-height:1.6;white-space:pre-wrap;">${messageLabel}</span>
        </td>
      </tr>
    `;

    const badgeText = isQuote ? 'Appointment Request' : 'General Inquiry';
    const badgeColor = isQuote ? '#1d4ed8' : '#0f766e';

    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${subject}</title>
      </head>
      <body style="margin:0;padding:0;background-color:#0f172a;font-family:'Segoe UI',Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#1e293b;border-radius:24px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">

                <!-- Header -->
                <tr>
                  <td style="background:#1d4ed8;padding:32px 40px;">
                    <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;letter-spacing:-0.5px;">
                      National Tire &amp; Auto Hub
                    </h1>
                    <p style="margin:8px 0 0;display:inline-block;background:rgba(255,255,255,0.15);color:#ffffff;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:4px 12px;border-radius:999px;">
                      ${badgeText}
                    </p>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:40px;">
                    <p style="margin:0 0 28px;color:#94a3b8;font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;">
                      Customer Details
                    </p>

                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
                          <span style="color:#64748b;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;display:block;margin-bottom:4px;">Full Name</span>
                          <span style="color:#f1f5f9;font-size:16px;font-weight:700;">${firstName} ${lastName}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
                          <span style="color:#64748b;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;display:block;margin-bottom:4px;">Email Address</span>
                          <span style="color:#f1f5f9;font-size:16px;font-weight:700;">${email}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
                          <span style="color:#64748b;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;display:block;margin-bottom:4px;">Phone Number</span>
                          <span style="color:#f1f5f9;font-size:16px;font-weight:700;">${phone}</span>
                        </td>
                      </tr>
                      ${isQuote ? quoteRows : contactRows}
                    </table>

                    <!-- Reply via your email client's Reply button — replyTo header is set -->

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:24px 40px;border-top:1px solid rgba(255,255,255,0.05);">
                    <p style="margin:0;color:#475569;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;text-align:center;">
                      National Tire &amp; Auto Hub · 400 Hwy 165 South, Pineville, LA · (318) 442-2003
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'National Tire and Auto Hub <hello@nattireauto.com>',
      to: ['nattransmission@gmail.com'],
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to send email. Please try again.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: data?.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (err: any) {
    console.error('Contact handler error:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
