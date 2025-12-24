import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
  language: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, service, message, language }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, service, language });

    // Send notification email to owner
    const ownerEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["contact.syedhadihussain@gmail.com"],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: 600; color: #374151; }
              .value { color: #1f2937; margin-top: 5px; }
              .message-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">📬 New Contact Form Submission</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">You have a new inquiry from your website</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                ${phone ? `
                <div class="field">
                  <div class="label">Phone</div>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                ` : ''}
                ${company ? `
                <div class="field">
                  <div class="label">Company</div>
                  <div class="value">${company}</div>
                </div>
                ` : ''}
                ${service ? `
                <div class="field">
                  <div class="label">Service Interested In</div>
                  <div class="value">${service}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Language</div>
                  <div class="value">${language.toUpperCase()}</div>
                </div>
                <div class="message-box">
                  <div class="label">Message</div>
                  <div class="value" style="white-space: pre-wrap;">${message}</div>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    const ownerEmailData = await ownerEmailRes.json();
    console.log("Owner email sent successfully:", ownerEmailData);

    // Send confirmation email to the user
    const userEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Syed Hadi Hussain <onboarding@resend.dev>",
        to: [email],
        subject: language === 'ar' ? 'شكراً لتواصلك معنا!' : language === 'es' ? '¡Gracias por contactarnos!' : 'Thank you for contacting us!',
        html: `
          <!DOCTYPE html>
          <html dir="${language === 'ar' ? 'rtl' : 'ltr'}">
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.8; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 40px 30px; border-radius: 10px 10px 0 0; text-align: center; }
              .content { background: #f9fafb; padding: 40px 30px; border-radius: 0 0 10px 10px; }
              .btn { display: inline-block; background: #10b981; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 20px; }
              .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 28px;">
                  ${language === 'ar' ? 'شكراً لك، ' : language === 'es' ? '¡Gracias, ' : 'Thank you, '}${name}!
                </h1>
              </div>
              <div class="content">
                <p style="font-size: 16px;">
                  ${language === 'ar' 
                    ? 'لقد تلقيت رسالتك وسأرد عليك في أقرب وقت ممكن، عادةً خلال 24 ساعة عمل.'
                    : language === 'es'
                    ? 'He recibido tu mensaje y te responderé lo antes posible, normalmente dentro de las 24 horas laborables.'
                    : 'I have received your message and will get back to you as soon as possible, usually within 24 business hours.'}
                </p>
                <p style="font-size: 16px;">
                  ${language === 'ar'
                    ? 'في غضون ذلك، لا تتردد في حجز مكالمة استراتيجية مباشرة:'
                    : language === 'es'
                    ? 'Mientras tanto, no dudes en reservar una llamada estratégica directamente:'
                    : 'In the meantime, feel free to book a strategy call directly:'}
                </p>
                <p style="text-align: center;">
                  <a href="https://calendly.com/syedhadihussain" class="btn">
                    ${language === 'ar' ? 'احجز مكالمة' : language === 'es' ? 'Reservar Llamada' : 'Book a Call'}
                  </a>
                </p>
                <div class="footer">
                  <p style="margin-bottom: 10px;">
                    ${language === 'ar' ? 'أطيب التحيات،' : language === 'es' ? 'Saludos cordiales,' : 'Best regards,'}
                  </p>
                  <p style="font-weight: 600; color: #1f2937;">Syed Hadi Hussain</p>
                  <p>Local SEO Specialist</p>
                  <p style="margin-top: 20px; font-size: 12px;">
                    UAE | UK | USA | Australia
                  </p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    const userEmailData = await userEmailRes.json();
    console.log("User confirmation email sent successfully:", userEmailData);

    return new Response(
      JSON.stringify({ success: true, ownerEmail: ownerEmailData, userEmail: userEmailData }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
