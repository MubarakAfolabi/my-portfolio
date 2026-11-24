export default function AboutMe() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-300 items-center gap-10 px-6 py-16 md:grid-cols-[2fr_3fr] md:gap-16 md:py-28"
    >
      <div className="relative mx-auto aspect-4/5 w-full max-w-sm rounded-3xl bg-muted md:mx-0">
        {/* <Image src="/me.jpg" alt="Mubarak" fill className="rounded-3xl object-cover" /> */}
        <div className="absolute right-3 bottom-3 grid size-20 place-items-center rounded-full bg-primary text-lg font-bold text-primary-foreground md:-right-4 md:-bottom-4 md:size-24">
          Hello
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm font-bold tracking-[0.14em] text-primary uppercase">
          About me
        </p>
        <h2 className="text-4xl leading-[1.08] md:text-5xl lg:text-6xl">
          A little about the person behind the code.
        </h2>
        <p className="text-lg">
          I&apos;m <span className="font-bold">Mubarak</span>, a full-stack
          developer focused on building web applications that combine great
          performance, sensible design and maintainable code.
        </p>
        <p className="text-lg text-muted-foreground">
          I enjoy turning complicated problems into simple, dependable products,
          from the first idea to the final deploy.
        </p>
      </div>
    </section>
  );
}
