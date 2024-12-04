import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { selectedOption, selectedProducts, formData } = await req.json();

    // Construct the email content
    const emailContent = EmailTemplate({
      firstName: formData.firstName,
    });

    const { data, error } = await resend.emails.send({
      from: 'Your Name <your-email@example.com>',
      to: [formData.email],
      subject: `Request Received: ${selectedOption === 'quote' ? 'Quote' : 'Help'} Inquiry`,
      react: emailContent,
    });

    if (error) {
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    console.error('Error in POST /api/sendEmail:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
