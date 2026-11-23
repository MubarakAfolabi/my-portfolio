export default function ChatWrap() {
  return (
    <div className="w-full h-fit lg:max-w-lg relative bg-secondary text-background rounded-lg">
      <div className="absolute top-6 -right-4 -bottom-6 left-4 -z-10 rounded-3xl bg-primary"></div>
      <div className="flex items-center gap-4 p-4">
        <div className="flex items-center justify-center font-semibold text-secondary bg-accent h-10 w-10 rounded-full">
          M
        </div>
        <div>
          <p className="font-semibold">Mubarak</p>
          <p className="text-xs text-mint">Usually replies within a day</p>
        </div>
      </div>

      <hr className="border border-code-comment" />

      <div className="flex flex-col gap-4 p-4">
        <p className="w-fit bg-background text-foreground self-end max-w-xs p-4 rounded-l-xl rounded-tr-xl">
          Hey, I need a website for my business.
        </p>
        <p className="w-fit bg-background/10 text-background max-w-xs p-4 rounded-tl-xl rounded-r-xl">
          Happy to help! Tell me a bit about what you have in mind.
        </p>
        <p className="w-fit bg-background text-foreground self-end max-w-xs p-4 rounded-l-xl rounded-tr-xl">
          A simple site to showcase our work and take bookings.
        </p>
        <div className="flex items-center gap-1 w-fit bg-background/10 text-background max-w-xs p-4 rounded-tl-xl rounded-r-xl">
          <div className="bg-background/50 h-2 w-2 rounded-full"></div>
          <div className="bg-background/50 h-2 w-2 rounded-full"></div>
          <div className="bg-background/50 h-2 w-2 rounded-full"></div>
        </div>
      </div>

      <hr className="border border-code-comment" />

      <div className="flex flex-col gap-2 p-4">
        <p className="text-sm">What would you like to discuss?</p>
        <div className="flex items-center gap-4">
          <div className="w-fit text-sm bg-accent text-secondary font-semibold py-2 px-2 rounded-full cursor-pointer">
            Web app
          </div>
          <div className="w-fit text-sm border border-background text-background py-2 px-2 rounded-full cursor-pointer">
            Website
          </div>
          <div className="w-fit text-sm border border-background text-background py-2 px-2 rounded-full cursor-pointer">
            Something else
          </div>
        </div>
      </div>
    </div>
  );
}
