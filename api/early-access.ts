import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const jsonHeaders = {
  "Cache-Control": "no-store",
  "Content-Type": "application/json; charset=utf-8",
};

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== "POST") {
      return json({ ok: false, error: "method_not_allowed" }, 405);
    }

    let payload: unknown;

    try {
      payload = await request.json();
    } catch {
      return json({ ok: false, error: "invalid_json" }, 400);
    }

    const data = (payload ?? {}) as Record<string, unknown>;
    const email = typeof data.email === "string" ? data.email.trim() : "";
    const language = data.language === "en" ? "English" : "Українська";
    const website = typeof data.website === "string" ? data.website.trim() : "";

    // Hidden field: real visitors leave it empty, while basic form bots often fill it.
    if (website) {
      return json({ ok: true });
    }

    if (!email || email.length > 254 || !emailPattern.test(email)) {
      return json({ ok: false, error: "invalid_email" }, 400);
    }

    const gmailUser = process.env.GMAIL_USER?.trim();
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
    const contactTo = process.env.CONTACT_TO?.trim() || gmailUser;

    if (!gmailUser || !gmailAppPassword || !contactTo) {
      console.error("Early access email is not configured");
      return json({ ok: false, error: "email_not_configured" }, 503);
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    try {
      await transporter.sendMail({
        from: `Zelvyn <${gmailUser}>`,
        to: contactTo,
        replyTo: email,
        subject: "Новий запит на ранній доступ Zelvyn",
        text: [
          "Нова заявка з лендингу Zelvyn.",
          "",
          `Email: ${email}`,
          `Мова сайту: ${language}`,
          `Час: ${new Date().toISOString()}`,
        ].join("\n"),
      });

      return json({ ok: true });
    } catch (error) {
      console.error(
        "Early access email failed:",
        error instanceof Error ? error.message : "Unknown SMTP error",
      );
      return json({ ok: false, error: "send_failed" }, 502);
    }
  },
};
