export default function ProjectCard() {
  return (
    <li className="flex flex-col gap-2">
      <div className="aspect-4/3 w-full rounded-2xl bg-primary" />
      <p className="mt-3 font-heading text-2xl font-bold tracking-tight">
        Project Name
      </p>
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        sapiente voluptatem voluptates nesciunt exr.
      </p>
    </li>
  );
}
