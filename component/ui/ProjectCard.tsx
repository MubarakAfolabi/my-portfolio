export default function ProjectCard() {
  return (
    <li className="flex flex-col gap-3">
      <div className="aspect-4/3 w-full rounded-2xl bg-primary" />
      <ul className="flex items-center gap-2">
        <li className="text-xs font-semibold border border-foreground p-2 w-fit rounded-full cursor-pointer">
          tools used
        </li>
        <li className="text-xs font-semibold border border-foreground p-2 w-fit rounded-full cursor-pointer">
          tools used
        </li>
        <li className="text-xs font-semibold border border-foreground p-2 w-fit rounded-full cursor-pointer">
          tools used
        </li>
      </ul>

      <p className="font-heading text-2xl font-bold tracking-tight">
        Project Name
      </p>
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        sapiente voluptatem voluptates nesciunt exr.
      </p>
    </li>
  );
}
