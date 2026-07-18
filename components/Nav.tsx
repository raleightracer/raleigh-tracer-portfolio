export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-[1.2rem] bg-[rgba(10,10,10,0.85)] backdrop-blur-[12px] border-b border-line max-[640px]:px-4">
      <a
        href="#hero"
        className="nav-logo font-mono text-[0.85rem] text-accent tracking-[0.04em] no-underline"
      >
        RT_
      </a>
      <ul className="nav-links hidden sm:flex gap-8 list-none">
        {[
          ["#about", "About"],
          ["#experience", "Experience"],
          ["#stack", "Stack"],
          ["#projects", "Projects"],
          ["#gear", "Gear"],
        ].map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              className="text-[0.8rem] text-text-muted no-underline tracking-[0.06em] uppercase transition-colors hover:text-text"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="mailto:hello@raleightracer.dev"
        className="inline-flex items-center gap-2 px-4 py-2 font-mono text-[0.72rem] tracking-[0.06em] no-underline rounded-[2px] transition-all cursor-pointer bg-transparent text-text-muted border border-line-mid hover:text-text hover:border-[rgba(255,255,255,0.25)]"
      >
        Get in touch
      </a>
    </nav>
  );
}
