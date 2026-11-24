"use client";

import { FormState, sendMessage } from "@/app/contact/action";
import { MoveRight } from "lucide-react";
import { useActionState } from "react";

const initialState: FormState = { status: "idle", message: "" };

const fieldClass =
  "w-full rounded-xl bg-white p-4 outline-none ring-[1.5px] ring-foreground/25 placeholder:text-foreground/40 focus:ring-2 focus:ring-primary";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendMessage,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl bg-secondary p-8 text-secondary-foreground"
      >
        <h2 className="text-3xl">Message sent ✓</h2>
        <p className="mt-2 text-secondary-foreground/80">{state.message}</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-10 mb-20">
      <div className="flex flex-col gap-4">
        <div className="text-primary text-sm font-semibold">CONTACT</div>
        <h1 className="text-4xl lg:text-6xl">
          Let&apos;s build something{" "}
          <span className="text-primary">together.</span>
        </h1>
        <p>
          Have an idea, a project or just a question? Send a message and
          I&apos;ll get back to you soon.
        </p>
      </div>

      <form action={formAction} className="flex flex-col gap-5" noValidate>
        {/* Honeypot (hidden from people) */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="hidden"
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jane Doe"
            autoComplete="name"
            defaultValue={state.values?.name}
            aria-invalid={!!state.errors?.name}
            className={fieldClass}
          />
          {state.errors?.name && (
            <p className="text-sm text-primary">{state.errors.name}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="janedoe@email.com"
            autoComplete="email"
            defaultValue={state.values?.email}
            aria-invalid={!!state.errors?.email}
            className={fieldClass}
          />
          {state.errors?.email && (
            <p className="text-sm text-primary">{state.errors.email}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="topic" className="text-sm font-semibold">
            What would you like to talk about?
          </label>
          <select
            id="topic"
            name="topic"
            defaultValue={state.values?.topic ?? "web-app"}
            className={fieldClass}
          >
            <option value="web-app">Web app</option>
            <option value="website">Website</option>
            <option value="other">Something else</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-semibold">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me about your project…"
            defaultValue={state.values?.message}
            aria-invalid={!!state.errors?.message}
            className={`${fieldClass} resize-y`}
          />
          {state.errors?.message && (
            <p className="text-sm text-primary">{state.errors.message}</p>
          )}
        </div>

        {state.status === "error" && (
          <p role="alert" className="text-sm font-semibold text-primary">
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 font-bold text-background transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {pending ? (
            "Sending…"
          ) : (
            <>
              Send message <MoveRight size={20} aria-hidden />
            </>
          )}
        </button>

        <p className="text-center text-sm text-foreground/70">
          Prefer email?{" "}
          <a
            href="mailto:mubarakbolu150@gmail.com"
            className="font-semibold text-primary hover:underline"
          >
            mubarakbolu150@gmail.com
          </a>
        </p>
      </form>
    </section>
  );
}
