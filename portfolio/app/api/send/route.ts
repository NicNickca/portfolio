import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["nicolaischirmer22@gmail.com"],
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      const errorMessage =
        error instanceof Object && "message" in error
          ? (error as { message: string }).message
          : "Failed to send email";
      return Response.json({ error: errorMessage }, { status: 500 });
    }

    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
