// app/api/quote/route.js - Emails quote requests to sales
import { Resend } from 'resend';

export async function POST(req) {
  try {
    const { name, email, phone, comments, atm } = await req.json();

    if (!name || !email || !phone) {
      return Response.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: 'OSO ATM Website <quotes@osoatm.com>',
      to: 'sales@osoatm.com',
      replyTo: email,
      subject: `Quote Request: ${atm || 'General'} — ${name}`,
      text: [
        `Product: ${atm || 'Not specified'}`,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        '',
        'Comments:',
        comments || '(none)',
      ].join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Could not send quote request.' }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Quote email error:', err);
    return Response.json({ error: 'Could not send quote request.' }, { status: 500 });
  }
}
