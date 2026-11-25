"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: { name?: string; email?: string; message?: string };
  values?: { name: string; email: string; topic: string; message: string };
};

async function verifyTurnstile(token: string) {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY!,
        response: token,
      }),
    },
  );
  const data = await res.json();
  return data.success === true;
}

export async function sendMessage(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  // Honeypot: real people never fill this hidden field, bots do
  if (formData.get("company")) {
    return { status: "success", message: "Message sent!" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const topic = String(formData.get("topic") ?? "other");
  const message = String(formData.get("message") ?? "").trim();
  const values = { name, email, topic, message };

  const token = String(formData.get("cf-turnstile-response") ?? "");

  if (!token || !(await verifyTurnstile(token))) {
    return {
      status: "error",
      message: "Verification failed. Please try again.",
      values,
    };
  }

  const errors: NonNullable<FormState["errors"]> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please enter a valid email address.";
  if (message.length < 10)
    errors.message = "Your message should be at least 10 characters.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the errors below.",
      errors,
      values,
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email, // hitting Reply in your inbox goes to the visitor
      subject: `New message from ${name} (${topic})`,
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
    });

    if (error) throw error;

    return { status: "success", message: "Thanks! I'll get back to you soon." };
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please try again or email me directly.",
      values,
    };
  }
}
