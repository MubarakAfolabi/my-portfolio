import Footer from "@/component/layout/Footer";
import ProjectCard from "@/component/ui/ProjectCard";

export default function Projects() {
  return (
    <main className="flex flex-col gap-14 mt-30">
      <section className="w-full mx-auto max-w-300 px-6 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="text-primary text-sm font-semibold">ALL PROJECTS</div>
          <h1 className="text-4xl lg:text-6xl">
            Everything I&apos;ve <span className="text-primary">built</span>
          </h1>
          <p className="text-lg">
            A collection of things I&apos;ve made, shaped by curiosity,
            problem-solving and care for the details.
          </p>
          <ul className="flex items-center gap-4 flex-wrap">
            <li className="flex shrink-0 whitespace-nowrap items-center gap-2 font-semibold border border-foreground text-foreground w-fit py-2 px-4 rounded-full cursor-pointer">
              All
            </li>
            <li className="flex shrink-0 whitespace-nowrap items-center gap-2 font-semibold border border-foreground text-foreground w-fit py-2 px-4 rounded-full cursor-pointer">
              Web Apps
            </li>
            <li className="flex shrink-0 whitespace-nowrap items-center gap-2 font-semibold border border-foreground text-foreground w-fit py-2 px-4 rounded-full cursor-pointer">
              Websites
            </li>
            <li className="flex shrink-0 whitespace-nowrap items-center gap-2 font-semibold border border-foreground text-foreground w-fit py-2 px-4 rounded-full cursor-pointer">
              APIs
            </li>
          </ul>
        </div>

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </ul>
      </section>

      <Footer />
    </main>
  );
}
