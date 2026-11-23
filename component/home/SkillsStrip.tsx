export default function SkillsStrip() {
  return (
    <div className="flex items-center flex-wrap gap-4 font-heading text-md bg-foreground text-background py-4 px-6">
      <p>Full-stack development</p>
      <div className="text-accent">&#10022;</div>
      <p>Problem solving</p>
      <div className="text-accent">&#10022;</div>
      <p>Clean, scalable code</p>
    </div>
  );
}
