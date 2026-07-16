export default function Footer() {
  const links = [
    ["GitHub", "#"],
    ["LinkedIn", "#"],
    ["Twitter", "#"],
    ["Email", "mailto:hello@raleightracer.dev"],
  ];

  return (
    <footer className="border-t border-line py-12">
      <div className="max-w-container mx-auto px-8 relative z-[1]">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <div className="text-base font-bold mb-1">Raleigh Tracer</div>
            <div className="font-mono text-[0.72rem] text-text-dim">
              Full-Stack Developer — Building with intent.
            </div>
          </div>
          <div className="flex gap-5">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="font-mono text-[0.72rem] text-text-dim no-underline tracking-[0.06em] transition-colors hover:text-accent"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 font-mono text-[0.65rem] text-text-dim">
          © 2026 Raleigh Tracer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
