const timeline = [
  {
    year: "2024 — Present",
    role: "Senior Software Engineer",
    company: "NovaBuild Labs",
    desc: "Leading full-stack development for a SaaS platform serving 15k+ users. Architected a microservices migration that cut response times by 40%.",
  },
  {
    year: "2022 — 2024",
    role: "Full-Stack Developer",
    company: "Orbit Digital",
    desc: "Built and maintained multiple client products using React, TypeScript, and Laravel. Introduced automated testing pipelines and reduced bugs in production by 60%.",
  },
  {
    year: "2021 — 2022",
    role: "Frontend Developer",
    company: "Stackline Creative",
    desc: "Crafted pixel-precise UI implementations for brand-focused clients. Collaborated directly with design teams to ensure a high-quality final product.",
  },
  {
    year: "2019 — 2021",
    role: "Junior Developer",
    company: "CodeForge PH",
    desc: "Started career building internal tools and client websites. First exposure to agile workflows, code reviews, and production-grade deployments.",
  },
  {
    year: "2019",
    role: "BS Computer Science",
    company: "Technological University",
    desc: "Graduated with honors. Capstone project: an AI-assisted scheduling system deployed for the university's department offices.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-line">
      <div className="max-w-container mx-auto px-8 relative z-[1]">
        <div className="fade-up">
          <p className="font-mono text-[0.7rem] text-text-dim tracking-[0.12em] uppercase mb-3">
            // 02 — experience
          </p>
          <h2 className="text-[2.2rem] font-bold tracking-[-0.02em] leading-[1.1] mb-4">
            Where I&apos;ve been.
          </h2>
        </div>
        <div className="fade-up mt-10 relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-line">
          {timeline.map((item) => (
            <div
              key={item.year + item.role}
              className="group pl-8 pb-10 relative last:pb-0"
            >
              <div className="absolute left-[-4px] top-[6px] w-[9px] h-[9px] rounded-full bg-base-3 border border-line-mid transition-[background,border-color] group-hover:bg-accent group-hover:border-accent" />
              <div className="font-mono text-[0.7rem] text-text-dim tracking-[0.08em] mb-[0.3rem]">
                {item.year}
              </div>
              <div className="text-base font-semibold text-text mb-[0.15rem]">
                {item.role}
              </div>
              <div className="text-[0.85rem] text-text-muted mb-2">
                {item.company}
              </div>
              <div className="text-[0.82rem] text-text-dim leading-[1.7] max-w-[520px]">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
