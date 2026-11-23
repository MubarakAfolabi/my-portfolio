export default function CodeWrap() {
  return (
    <section className="relative bg-secondary font-mono text-background rounded-lg">
      <div className="absolute top-6 -right-4 -bottom-6 left-4 -z-10 rounded-3xl bg-primary"></div>

      <div className="flex items-center gap-6 p-4 relative overflow-hidden rounded-3xl bg-secondary text-secondary-foreground shadow-[0_30px_60px_-20px_var(--code-shadow)]">
        <div className="flex items-center gap-2">
          <div className="bg-dot-red h-3 w-3 rounded-full"></div>
          <div className="bg-dot-yellow h-3 w-3 rounded-full"></div>
          <div className="bg-dot-green h-3 w-3 rounded-full"></div>
        </div>
        <div className="text-code-comment text-xs">server.js</div>
      </div>

      <hr className="border border-code-border" />
      <div className="flex flex-col gap-2 p-4">
        <p className="text-code-comment text-sm">{"//"}mubarak.dev</p>
        <p>
          <span className="text-accent">const</span> app = express();
        </p>
        <div className="mt-4">
          <p>
            app.get(<span className="text-mint">'/projects'</span>, (req, res)
            =&gt; {"{"}
          </p>
          <p className="ml-4">
            <span className="text-accent">const</span> list ={" "}
            <span className="text-accent">await </span>
            db.projects.find();
          </p>
          <p className="ml-4">res.json(list);</p>
          <p>{"}"});</p>
        </div>
        <p className="mt-4">
          app.listen(<span className="text-code-number">3000</span>);
        </p>
      </div>
    </section>
  );
}
