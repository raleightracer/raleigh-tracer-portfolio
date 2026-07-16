export default function About() {
  const stats = [
    ["5+", "years of professional experience"],
    ["30+", "projects shipped across industries"],
    ["∞", "curiosity for new technology"],
  ];

  return (
    <section id="about" className="py-20 border-t border-line">
      <div className="max-w-container mx-auto px-8 relative z-[1]">
        <div className="fade-up">
          <p className="font-mono text-[0.7rem] text-text-dim tracking-[0.12em] uppercase mb-3">
            // 01 — about
          </p>
          <h2 className="text-[2.2rem] font-bold tracking-[-0.02em] leading-[1.1] mb-4">
            Who I am.
          </h2>
        </div>
        <div className="fade-up grid grid-cols-2 gap-12 mt-10 max-[640px]:grid-cols-1">
          <div>
            <p className="text-text-muted text-[0.95rem] leading-[1.8] mb-4">
              I&apos;m a full-stack developer with a strong eye for design and a
              passion for building systems that are both functional and
              beautiful. I specialize in modern JavaScript ecosystems — from
              slick React frontends to scalable Node.js backends.
            </p>
            <p className="text-text-muted text-[0.95rem] leading-[1.8] mb-4">
              Beyond code, I care about the why behind every project. I&apos;ve
              worked with early-stage startups, helped scale products to
              thousands of users, and mentored junior developers along the way.
            </p>
            <p className="text-text-muted text-[0.95rem] leading-[1.8]">
              Lately I&apos;ve been deep in AI integrations — building tools that
              make everyday workflows smarter without getting in the way.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {stats.map(([num, desc]) => (
              <div
                key={desc}
                className="bg-base-2 border border-line rounded-[4px] px-6 py-5 transition-colors hover:border-line-mid"
              >
                <div className="text-[2rem] font-extrabold text-accent leading-none mb-1">
                  {num}
                </div>
                <div className="text-[0.78rem] text-text-muted font-mono">
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
