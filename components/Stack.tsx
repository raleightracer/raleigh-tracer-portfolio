const categories = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Python", "Laravel", "PHP"],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL", "Supabase"],
  },
  {
    title: "DevOps & Cloud",
    items: ["Git", "GitHub", "Vercel", "Netlify", "GitHub Actions"],
  },
  {
    title: "Tools",
    items: ["Claude Code", "Codex", "VS Code", "Cursor", "Figma"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="py-20 border-t border-line">
      <div className="max-w-container mx-auto px-8 relative z-[1]">
        <div className="fade-up">
          <p className="font-mono text-[0.7rem] text-text-dim tracking-[0.12em] uppercase mb-3">
            // 03 — tech stack
          </p>
          <h2 className="text-[2.2rem] font-bold tracking-[-0.02em] leading-[1.1] mb-4">
            What I use.
          </h2>
        </div>
        <div className="fade-up grid grid-cols-3 gap-4 mt-10 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-base border border-line rounded-[4px] p-6"
            >
              <div className="font-mono text-[0.68rem] text-accent tracking-[0.1em] uppercase mb-4">
                {cat.title}
              </div>
              <div className="flex flex-col gap-2">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="text-[0.85rem] text-text-muted flex items-center gap-2 transition-colors hover:text-text before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-text-dim before:shrink-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
