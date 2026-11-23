import { MoveRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../ui/ProjectCard";

export default function SelectedWork() {
  return (
    <section className="flex flex-col gap-10 px-6">
      <div className="flex flex-col gap-4">
        <div className="text-primary text-sm font-semibold">SELECTED WORK</div>
        <h1 className="text-4xl">
          Things I've built, shaped by curiosity and care.
        </h1>
        <Link
          href="#"
          className="flex items-center gap-2 font-semibold border border-foreground text-foreground w-fit py-4 px-6 rounded-full cursor-pointer"
        >
          View all projects
          <MoveRight size={20} />
        </Link>
      </div>

      <ul className="flex flex-col gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ul>
    </section>
  );
}
