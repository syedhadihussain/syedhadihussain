import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  type: "new_message" | "agreement_request" | "agreement_signed" | "project_update" | "payment_approved" | "payment_rejected";
  recipientEmail: string;
  recipientName: string;
  data: {
    senderName?: string;
    messagePreview?: string;
    conversationTitle?: string;
    agreementTitle?: string;
    projectName?: string;
    updateType?: string;
    details?: string;
    invoiceAmount?: string;
    invoiceCurrency?: string;
    reviewNotes?: string;
  };
}

const getEmailContent = (type: string, recipientName: string, data: NotificationRequest["data"]) => {
  switch (type) {
    case "new_message":
      return {
        subject: `New message from ${data.senderName || "your team"}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">📩 New Message</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
              <p style="margin-top: 0;">Hi ${recipientName},</p>
              <p>You have a new message${data.conversationTitle ? ` in "${data.conversationTitle}"` : ""}:</p>
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 20px 0;">
                <p style="margin: 0; font-weight: 600;">${data.senderName || "Team Member"}</p>
                <p style="margin: 10px 0 0 0; color: #6b7280;">${data.messagePreview || "New message received"}</p>
              </div>
              <a href="https://syedhadihussain.com/portal/messages" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 10px;">View Message</a>
              <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">Best regards,<br>Syed Hadi Hussain</p>
            </div>
          </body>
          </html>
        `,
      };

    case "agreement_request":
      return {
        subject: `Action Required: Agreement "${data.agreementTitle}" needs your signature`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">📝 Agreement Request</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
              <p style="margin-top: 0;">Hi ${recipientName},</p>
              <p>An agreement requires your review and signature:</p>
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
                <p style="margin: 0; font-weight: 600; font-size: 18px;">${data.agreementTitle}</p>
                <p style="margin: 10px 0 0 0; color: #6b7280;">Project: ${data.projectName || "Your Project"}</p>
              </div>
              <a href="https://syedhadihussain.com/portal/agreements" style="display: inline-block; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 10px;">Review & Sign</a>
              <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">Best regards,<br>Syed Hadi Hussain</p>
            </div>
          </body>
          </html>
        `,
      };

    case "agreement_signed":
      return {
        subject: `Agreement "${data.agreementTitle}" has been signed`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">✅ Agreement Signed</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
              <p style="margin-top: 0;">Hi ${recipientName},</p>
              <p>Great news! The following agreement has been signed:</p>
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin: 20px 0;">
                <p style="margin: 0; font-weight: 600; font-size: 18px;">${data.agreementTitle}</p>
                <p style="margin: 10px 0 0 0; color: #6b7280;">Project: ${data.projectName || "Your Project"}</p>
              </div>
              <a href="https://syedhadihussain.com/portal/agreements" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 10px;">View Agreement</a>
              <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">Best regards,<br>Syed Hadi Hussain</p>
            </div>
          </body>
          </html>
        `,
      };

    case "project_update":
      return {
        subject: `Project Update: ${data.projectName}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">🚀 Project Update</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
              <p style="margin-top: 0;">Hi ${recipientName},</p>
              <p>There's an update on your project:</p>
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 20px 0;">
                <p style="margin: 0; font-weight: 600; font-size: 18px;">${data.projectName}</p>
                <p style="margin: 10px 0 0 0; color: #6b7280;"><strong>Update:</strong> ${data.updateType || "Status changed"}</p>
                ${data.details ? `<p style="margin: 10px 0 0 0; color: #6b7280;">${data.details}</p>` : ""}
              </div>
              <a href="https://syedhadihussain.com/portal/projects" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 10px;">View Project</a>
              <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">Best regards,<br>Syed Hadi Hussain</p>
            </div>
          </body>
          </html>
        `,
      };

    case "payment_approved":
      return {
        subject: `✅ Payment Approved - ${data.invoiceCurrency} ${data.invoiceAmount}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">✅ Payment Approved</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
              <p style="margin-top: 0;">Hi ${recipientName},</p>
              <p>Great news! Your payment has been verified and approved.</p>
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin: 20px 0;">
                <p style="margin: 0; font-weight: 600; font-size: 18px;">Amount: ${data.invoiceCurrency} ${data.invoiceAmount}</p>
                <p style="margin: 10px 0 0 0; color: #10b981; font-weight: 600;">Status: Approved ✓</p>
                ${data.reviewNotes ? `<p style="margin: 10px 0 0 0; color: #6b7280;">Notes: ${data.reviewNotes}</p>` : ""}
              </div>
              <p style="color: #374151;">You now have access to sign your agreement. Please proceed to complete your onboarding.</p>
              <a href="https://syedhadihussain.com/portal/agreements" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 10px;">View Agreements</a>
              <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">Best regards,<br>Syed Hadi Hussain</p>
            </div>
          </body>
          </html>
        `,
      };

    case "payment_rejected":
      return {
        subject: `⚠️ Payment Review Required - ${data.invoiceCurrency} ${data.invoiceAmount}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">⚠️ Payment Issue</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
              <p style="margin-top: 0;">Hi ${recipientName},</p>
              <p>Unfortunately, we couldn't verify your payment proof. Please review the details below.</p>
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 20px 0;">
                <p style="margin: 0; font-weight: 600; font-size: 18px;">Amount: ${data.invoiceCurrency} ${data.invoiceAmount}</p>
                <p style="margin: 10px 0 0 0; color: #ef4444; font-weight: 600;">Status: Requires Attention</p>
                ${data.reviewNotes ? `<p style="margin: 10px 0 0 0; color: #6b7280;"><strong>Reason:</strong> ${data.reviewNotes}</p>` : ""}
              </div>
              <p style="color: #374151;">Please upload a new payment proof or contact us if you believe this is an error.</p>
              <a href="https://syedhadihussain.com/portal/invoices" style="display: inline-block; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 10px;">View Invoices</a>
              <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">Best regards,<br>Syed Hadi Hussain</p>
            </div>
          </body>
          </html>
        `,
      };

    default:
      return {
        subject: "Notification from Syed Hadi Hussain",
        html: `<p>You have a new notification. Please check your portal.</p>`,
      };
  }
};

const handler = async (req: Request): Promise<Response> => {
  console.log("Notification email function invoked");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, recipientEmail, recipientName, data }: NotificationRequest = await req.json();

    console.log(`Sending ${type} notification to ${recipientEmail}`);

    const { subject, html } = getEmailContent(type, recipientName, data);

    const emailResponse = await resend.emails.send({
      from: "Syed Hadi Hussain <syedhadihussain.seo@gmail.com>",
      to: [recipientEmail],
      subject,
      html,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, data: emailResponse }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error sending notification email:", error);
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
