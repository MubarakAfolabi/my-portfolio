// app/projects/[projectId]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MoveLeft, MoveRight, MoveUpRight } from "lucide-react";
import Footer from "@/component/layout/Footer";
import ProjectCard from "@/component/ui/ProjectCard";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ projectId: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ projectId: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectId } = await params;
  const project = projects.find((p) => p.slug === projectId);
  if (!project) return {};
  return {
    title: `${project.title} | Mubarak`,
    description: project.description,
  };
}

export default async function ProjectDetails({ params }: Props) {
  const { projectId } = await params;
  const project = projects.find((p) => p.slug === projectId);

  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== projectId).slice(0, 3);

  return (
    <main className="flex flex-col gap-14 mt-30">
      <section className="flex flex-col gap-4 w-full mx-auto max-w-300 px-6">
        <Link href="/projects" className="text-sm flex items-center gap-2">
          <MoveLeft size={14} aria-hidden />
          All Projects
        </Link>

        <h1 className="text-5xl lg:text-7xl">{project.title}</h1>

        <div className="relative h-100 w-full overflow-hidden rounded-3xl bg-muted">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center md:flex-wrap md:mt-5 gap-4">
          <div>
            <div className="text-xs text-foreground/60 font-semibold">ROLE</div>
            <p className="text-lg">{project.role}</p>
          </div>
          <div>
            <div className="text-xs text-foreground/60 font-semibold">YEAR</div>
            <p className="text-lg">{project.year}</p>
          </div>
          <div>
            <div className="text-xs text-foreground/60 font-semibold">
              TOOLS
            </div>
            <p className="text-lg">{project.tools.join(", ")}</p>
          </div>
          <div>
            <div className="text-xs text-foreground/60 font-semibold">
              LINKS
            </div>
            <div className="flex items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg border-b-2 border-primary w-fit"
                >
                  Live Site <MoveUpRight size={14} aria-hidden />
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg border-b-2 border-primary w-fit"
                >
                  Code <MoveUpRight size={14} aria-hidden />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            <h2 className="flex-1 text-4xl lg:text-5xl">
              The problem, and how I solved it.
            </h2>
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-foreground/80 text-lg">
                {project.description}
              </p>
              <p className="text-foreground/80 text-lg">
                [Explain the main challenge and what you built to solve it.]
              </p>
            </div>
          </div>

          <div className="aspect-4/2 w-full rounded-3xl bg-muted" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-1 flex flex-col gap-2">
              <h3 className="text-2xl lg:text-4xl">[Feature name]</h3>
              <p className="text-foreground/80 text-lg">
                [Short note on this feature and the decision behind it.]
              </p>
            </div>
            <div className="flex-1 aspect-4/2 w-full rounded-3xl bg-muted" />
          </div>

          <div className="aspect-4/2 w-full rounded-3xl bg-muted" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-300 flex flex-col gap-10 px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-5">
          <h2 className="text-2xl lg:text-4xl">My other projects</h2>
          <Link
            href="/projects"
            className="flex shrink-0 whitespace-nowrap items-center gap-2 font-semibold border border-foreground w-fit py-4 px-6 rounded-full"
          >
            View all projects
            <MoveRight size={20} aria-hidden />
          </Link>
        </div>

        <ul className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
          {others.map((p) => (
            <ProjectCard key={p.slug} project={p} showTools />
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
}
