const projects = [
  {
    num: "001",
    name: "SchoDex",
    url: "schodex.app",
    link: "https://github.com/raleightracer/library-management-system",
    desc: "A web-based Library Management System designed to efficiently manage books, member records, borrowing, and return transactions.",
    tags: ["HTML", "CSS", "JS", "Bootstrap", "MySQL"],
  },
  {
    num: "002",
    name: "MarcZen",
    url: "marczen.app",
    desc: "A Car Rental Management System designed to simplify vehicle rentals, customer records, reservations, and rental tracking.",
    tags: ["C#", "Visual Studio", "MySQL", "Windows Form App"],
  },
  {
    num: "003",
    name: "Interval",
    url: "interval.io",
    link: "https://pomodorotimer-wine.vercel.app/",
    desc: "A productivity timer application designed to help users manage focus sessions, breaks, and improve time management.",
    tags: ["React", "Tailwind CSS"],
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
        <div className="fade-up grid grid-cols-3 gap-4 mt-10 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
          {projects.map((project) => {
            const Card = project.link ? "a" : "div";
            const linkProps = project.link
              ? {
                  href: project.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};
            return (
            <Card
              key={project.num}
              {...linkProps}
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
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
