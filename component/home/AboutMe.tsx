export default function AboutMe() {
  return (
    <section className="flex flex-col gap-10 px-6">
      <div className="relative bg-[hsl(38,38%,82%)] h-120 w-full rounded-lg">
        <div className="absolute -right-2.5 -bottom-2.5 flex items-center justify-center bg-primary text-primary-foreground text-lg font-semibold h-20 w-20 rounded-full">
          Hello
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-primary text-sm font-semibold">ABOUT ME</div>
        <h1 className="text-4xl">A little about the person behind the code.</h1>
        <p className="text-secondary text-lg">
          I'm <span className="font-semibold">Mubarak</span>, a full-stack
          developer focused on building web applications that combine great
          performance, sensible design and maintainable code. I enjoy turning
          complicated problems into simple, dependable products, from the first
          idea to the final deploy.
        </p>
      </div>
    </section>
  );
}
