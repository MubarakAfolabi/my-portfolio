import { MoveRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../ui/ProjectCard";
import { Project, projects } from "@/data/projects";

export default function SelectedWork() {
  return (
    <section className="mx-auto max-w-300 flex flex-col gap-10 px-6">
      <div className="flex flex-col gap-4">
        <div className="text-primary text-sm font-semibold">SELECTED WORK</div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-5">
          <h1 className="text-4xl lg:text-6xl">
            Things I&apos;ve built, shaped by curiosity and care.
          </h1>
          <Link
            href="/projects"
            className="flex shrink-0 whitespace-nowrap items-center gap-2 font-semibold border border-foreground text-foreground w-fit py-4 px-6 rounded-full cursor-pointer"
          >
            View all projects
            <MoveRight size={20} />
          </Link>
        </div>
      </div>

      <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
        {projects.slice(0, 3).map((project: Project) => {
          return (
            <ProjectCard
              key={project.slug}
              project={project}
              showTools={false}
            />
          );
        })}
      </ul>
    </section>
  );
}
