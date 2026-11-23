import Link from "next/link";
import CodeWrap from "./CodeWrap";
import SkillsStrip from "./SkillsStrip";

export default function Hero() {
  return (
    <section className="lg:min-h-[calc(100svh-7.5rem)] flex flex-col justify-between gap-10">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 mx-auto max-w-300 px-6">
        <div className="flex flex-col gap-8">
          <div className="font-mono font-semibold text-xs">
            Full-stack developer · Available for work
          </div>
          <h1 className="flex flex-col text-5xl lg:text-8xl">
            Hi there,
            <span>
              I build digital
              <span className="text-primary"> experiences</span> for the web.
            </span>
          </h1>
          <p className="text-secondary text-lg">
            I design and ship fast, reliable web products, from clean interfaces
            to solid back ends.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="font-semibold bg-foreground text-background py-4 px-6 rounded-full cursor-pointer"
            >
              View projects
            </Link>
            <Link
              href="#"
              className="font-semibold border border-foreground text-foreground py-4 px-6 rounded-full cursor-pointer"
            >
              Contact me
            </Link>
          </div>
        </div>

        <CodeWrap />
      </div>

      <SkillsStrip />
    </section>
  );
}
