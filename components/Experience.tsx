const timeline = [
  {
    year: "2024 — Present",
    role: "BS Information Technology",
    company: "Angeles University Foundation",
    desc: "Developing full-stack web applications and academic software projects using modern web technologies.",
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
