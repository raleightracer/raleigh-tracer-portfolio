const projects = [
  {
    num: "001",
    name: "PulseBoard",
    url: "pulseboard.app",
    desc: "Real-time analytics dashboard for indie developers. Tracks key metrics across platforms with a clean, minimal interface.",
    tags: ["Next.js", "WebSockets", "PostgreSQL"],
  },
  {
    num: "002",
    name: "Forma AI",
    url: "forma.so",
    desc: "AI-powered form builder that generates smart multi-step forms from a plain text description in seconds.",
    tags: ["React", "OpenAI API", "Node.js"],
  },
  {
    num: "003",
    name: "ShiftLog",
    url: "shiftlog.io",
    desc: "Team scheduling and shift management app for small businesses. Handles availability, conflicts, and payroll exports.",
    tags: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    num: "004",
    name: "Codepin",
    url: "codepin.dev",
    desc: "Developer bookmarking tool with tagging, full-text search, and one-click code snippet sharing via short links.",
    tags: ["TypeScript", "Redis", "AWS S3"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-line">
      <div className="max-w-container mx-auto px-8 relative z-[1]">
        <div className="fade-up">
          <p className="font-mono text-[0.7rem] text-text-dim tracking-[0.12em] uppercase mb-3">
            // 04 — projects
          </p>
          <h2 className="text-[2.2rem] font-bold tracking-[-0.02em] leading-[1.1] mb-4">
            Things I built.
          </h2>
        </div>
        <div className="fade-up grid grid-cols-2 gap-4 mt-10 max-[640px]:grid-cols-1">
          {projects.map((project) => (
            <div
              key={project.num}
              className="group bg-base-2 border border-line rounded-[4px] p-6 no-underline block transition-[border-color,background] relative overflow-hidden cursor-pointer hover:border-[rgba(200,240,96,0.25)] hover:bg-base-3 after:content-['↗'] after:absolute after:top-5 after:right-5 after:text-[0.85rem] after:text-text-dim after:transition-[color,transform] group-hover:after:text-accent group-hover:after:translate-x-[2px] group-hover:after:-translate-y-[2px]"
            >
              <div className="font-mono text-[0.65rem] text-text-dim tracking-[0.1em] mb-3">
                {project.num}
              </div>
              <div className="text-[1.05rem] font-bold text-text mb-[0.4rem] pr-6">
                {project.name}
              </div>
              <div className="font-mono text-[0.68rem] text-accent mb-3 opacity-70">
                {project.url}
              </div>
              <div className="text-[0.8rem] text-text-muted leading-[1.6]">
                {project.desc}
              </div>
              <div className="mt-4 flex flex-wrap gap-[0.35rem]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.62rem] px-2 py-[0.2rem] bg-base border border-line rounded-[2px] text-text-dim tracking-[0.04em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
