import Footer from "@/component/layout/Footer";
import ProjectCard from "@/component/ui/ProjectCard";
import { MoveLeft, MoveRight, MoveUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectDetails() {
  return (
    <main className="flex flex-col gap-14 mt-30">
      <section className="flex flex-col gap-4 w-full mx-auto max-w-300 px-6">
        <Link href="/projects" className="text-sm flex items-center gap-2">
          <MoveLeft size={14} />
          All Projects
        </Link>

        <div className="h-100 w-full rounded-3xl bg-muted md:mx-0">
          {/* <Image src="/me.jpg" alt="Mubarak" fill className="rounded-3xl object-cover" /> */}
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center md:flex-wrap md:mt-5 gap-4">
          <div>
            <div className="text-xs text-foreground/60 font-semibold">ROLE</div>
            <p className="text-lg">Front-end Dev</p>
          </div>
          <div>
            <div className="text-xs text-foreground/60 font-semibold">YEAR</div>
            <p className="text-lg">2024</p>
          </div>
          <div>
            <div className="text-xs text-foreground/60 font-semibold">
              TOOLS
            </div>
            NEXT.js
            <p className="text-lg"></p>
          </div>
          <div>
            <div className="text-xs text-foreground/60 font-semibold">
              LINKS
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 text-lg border-b-2 border-primary w-fit"
              >
                Live Site <MoveUpRight size={14} />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-lg border-b-2 border-primary w-fit"
              >
                Code <MoveUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            <h2 className="flex-1 text-4xl lg:text-5xl">
              The problem, and how I solved it.
            </h2>
            <div className="flex-1">
              <p className="text-secondary text-lg">
                [Describe what the system does and who uses it.]
              </p>
              <p className="text-secondary text-lg">
                [Explain the main challenge and what you built to solve it.]
              </p>
            </div>
          </div>

          <div className="aspect-4/2 w-full rounded-3xl bg-muted md:mx-0">
            {/* <Image src="/me.jpg" alt="Mubarak" fill className="rounded-3xl object-cover" /> */}
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl lg:text-4xl">[Feature name]</h3>
              <p className="text-secondary text-lg">
                [Short note on this feature and the decision behind it.]
              </p>
            </div>

            <div className="flex-1 aspect-4/2 w-full rounded-3xl bg-muted md:mx-0">
              {/* <Image src="/me.jpg" alt="Mubarak" fill className="rounded-3xl object-cover" /> */}
            </div>
          </div>

          <div className="aspect-4/2 w-full rounded-3xl bg-muted md:mx-0">
            {/* <Image src="/me.jpg" alt="Mubarak" fill className="rounded-3xl object-cover" /> */}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-300 flex flex-col gap-10 px-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-5">
            <h1 className="text-2xl lg:text-4xl">My other projects</h1>
            <Link
              href="#"
              className="flex shrink-0 whitespace-nowrap items-center gap-2 font-semibold border border-foreground text-foreground w-fit py-4 px-6 rounded-full cursor-pointer"
            >
              View all projects
              <MoveRight size={20} />
            </Link>
          </div>
        </div>

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </ul>
      </section>

      <Footer />
    </main>
  );
}
