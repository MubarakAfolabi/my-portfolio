export default function SkillsStrip() {
  return (
    <div className="gap-4 font-heading text-md lg:text-xl bg-foreground text-background py-4 lg:py-6 px-6">
      <div className="flex items-center justify-between flex-wrap mx-auto max-w-300">
        <p>Full-stack development</p>
        <div className="text-accent">&#10022;</div>
        <p>Problem solving</p>
        <div className="text-accent">&#10022;</div>
        <p>Clean, scalable code</p>
      </div>
    </div>
  );
}
