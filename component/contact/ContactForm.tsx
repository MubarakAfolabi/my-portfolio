import { ChevronDown, MoveRight } from "lucide-react";

const fieldClass =
  "w-full rounded-xl bg-white p-4 outline-none ring-[1.5px] ring-foreground/25 placeholder:text-foreground/40 focus:ring-2 focus:ring-primary";

export default function ContactForm() {
  return (
    <section className="mx-auto max-w-300 flex flex-col gap-10 px-6 mb-20">
      <div className="flex flex-col gap-4">
        <div className="text-primary text-sm font-semibold">CONTACT</div>
        <h1 className="text-4xl lg:text-6xl">
          Let&apos;s build something{" "}
          <span className="text-primary">together.</span>
        </h1>
        <p>
          Have an idea, a project or just a question? Send a message and I'll
          get back to you soon.
        </p>
      </div>

      <form className="flex flex-col gap-5">
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
            required
            className={fieldClass}
          />
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
            required
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="topic" className="text-sm font-semibold">
            What would you like to talk about?
          </label>
          <div className="relative">
            <select
              id="topic"
              name="topic"
              defaultValue="web-app"
              className={`${fieldClass} appearance-none pr-12`}
            >
              <option value="web-app">Web app</option>
              <option value="website">Website</option>
              <option value="other">Something else</option>
            </select>
            <ChevronDown
              size={20}
              aria-hidden
              className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
            />
          </div>
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
            required
            className={`${fieldClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 font-bold text-background transition-transform hover:-translate-y-0.5"
        >
          Send message <MoveRight size={20} aria-hidden />
        </button>

        <p className="text-center text-sm text-foreground/70">
          Prefer email?{" "}
          <a
            href="mailto:mubarakbolu150@gmail.com"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            mubarakbolu150@gmail.com
          </a>
        </p>
      </form>
    </section>
  );
}
