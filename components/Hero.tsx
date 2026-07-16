export default function Hero() {
  const tags = [
    "Full-Stack Dev",
    "React / Next.js",
    "Node.js",
    "TypeScript",
    "Cloud & DevOps",
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 border-t-0"
    >
      <div className="max-w-container mx-auto px-8 relative z-[1] w-full">
        <div className="hero-inner fade-up visible w-full">
          <p className="font-mono text-[0.75rem] text-accent tracking-[0.1em] uppercase mb-6 flex items-center gap-[0.6rem] before:content-[''] before:inline-block before:w-6 before:h-px before:bg-accent">
            Available for work
          </p>
          <h1 className="text-[clamp(3.2rem,8vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.03em] mb-6 text-text max-[640px]:text-[3rem]">
            Raleigh
            <br />
            Tracer.
          </h1>
          <p className="text-base text-text-muted max-w-[460px] leading-[1.7] mb-10 font-normal">
            Full-stack developer building thoughtful, performant digital
            products. Focused on clean architecture, great UX, and code that
            lasts.
          </p>
          <div className="flex flex-wrap gap-2 mb-12">
            <span className="font-mono text-[0.7rem] px-3 py-[0.3rem] rounded-[2px] tracking-[0.06em] border border-[rgba(200,240,96,0.3)] text-accent bg-accent-dim">
              {tags[0]}
            </span>
            {tags.slice(1).map((tag) => (
              <span
                key={tag}
                className="font-mono text-[0.7rem] px-3 py-[0.3rem] border border-line-mid rounded-[2px] text-text-muted tracking-[0.06em] bg-base-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[0.78rem] tracking-[0.06em] no-underline rounded-[2px] transition-all cursor-pointer bg-accent text-[#0a0a0a] font-medium hover:bg-[#d4f570]"
            >
              View Projects
            </a>
            <a
              href="mailto:hello@raleightracer.dev"
              className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[0.78rem] tracking-[0.06em] no-underline rounded-[2px] transition-all cursor-pointer bg-transparent text-text-muted border border-line-mid hover:text-text hover:border-[rgba(255,255,255,0.25)]"
            >
              Send Email
            </a>
          </div>
          <div className="mt-20 flex items-center gap-3 font-mono text-[0.7rem] text-text-dim tracking-[0.06em]">
            <span className="w-10 h-px bg-text-dim animate-scrollline" />
            scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}
