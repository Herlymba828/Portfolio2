import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(3, "Le sujet doit contenir au moins 3 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Send email with Resend
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured, logging message instead");
      console.log("Contact form submission:", validatedData);
    } else {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        await resend.emails.send({
          from: "Portfolio <onboarding@resend.dev>",
          to: "herlymba828@gmail.com",
          subject: `[Portfolio] ${validatedData.subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
                Nouveau message depuis votre portfolio
              </h2>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Nom:</strong> ${validatedData.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
                <p><strong>Sujet:</strong> ${validatedData.subject}</p>
              </div>
              <div style="background: #ffffff; padding: 20px; border-left: 4px solid #06b6d4; margin: 20px 0;">
                <h3 style="color: #0f172a; margin-top: 0;">Message:</h3>
                <p style="line-height: 1.6; color: #475569;">${validatedData.message.replace(/\n/g, '<br>')}</p>
              </div>
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="color: #64748b; font-size: 14px;">
                  Message envoyé depuis <a href="https://mamboundou-herly.vercel.app" style="color: #7c3aed;">votre portfolio</a>
                </p>
              </div>
            </div>
          `,
        });
        
        console.log("Email sent successfully to herlymba828@gmail.com");
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Continue execution - don't fail the request if email fails
      }
    }

    return NextResponse.json(
      { message: "Message envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
