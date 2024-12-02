import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { selectedOption, selectedProducts, formData } = body;

    // Create a transporter using Gmail (or another email provider)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, // Your Gmail email
          pass: process.env.EMAIL_PASSWORD, // Your app-specific password or Gmail password
        },
        tls: {
          rejectUnauthorized: false, // This helps resolve some issues with certificates
        },
      });
      
      

    // Create the email message object
    const message = {
      from: process.env.EMAIL_USER,
      to: 'pratik.b@orangewood.co', 
      subject: `Pricing Request: ${formData.firstName} ${formData.lastName}`,
      text: `
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Company: ${formData.company}
        Phone: ${formData.phone}
        Comments: ${formData.comments}

        Inquiry Type: ${selectedOption}
        Selected Products: ${selectedProducts.join(', ')}
      `,
    };

    // Send the email using the transporter
    await transporter.sendMail(message);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: unknown) {
    // Error handling: ensure error is an instance of Error before accessing message
    if (error instanceof Error) {
      console.error('Error sending email:', error.message);
      return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
    } else {
      // Fallback for non-Error objects
      console.error('Unexpected error:', error);
      return NextResponse.json({ error: 'Failed to send email', details: 'Unexpected error occurred' }, { status: 500 });
    }
  }
}
