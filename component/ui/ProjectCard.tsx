import { Project } from "@/data/projects";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  showTools: boolean;
}

export default function ProjectCard({ project, showTools }: ProjectCardProps) {
  return (
    <li>
      <Link href={`/projects/${project.slug}`} className="flex flex-col gap-3">
        <div className="aspect-4/3 w-full rounded-2xl bg-primary" />
        {showTools && (
          <ul className="flex items-center gap-2">
            {project.tools.map((tool) => {
              return (
                <li
                  key={tool}
                  className="text-xs font-semibold border border-foreground p-2 w-fit rounded-full cursor-pointer"
                >
                  {tool}
                </li>
              );
            })}
          </ul>
        )}

        <p className="font-heading text-2xl font-bold tracking-tight">
          {project.title}
        </p>
        <p className="text-muted-foreground">{project.description}</p>
      </Link>
    </li>
  );
}
