const gear = [
  {
    icon: "💻",
    name: "MacBook Pro",
    desc: "M5 Max · 128GB memory · 4TB.",
  },
  {
    icon: "🖥️",
    name: "Apple Studio Display",
    desc: "5K display for the desk.",
  },
  {
    icon: "⌨️",
    name: "Magic Keyboard",
    desc: "Compact, white — with Touch ID.",
  },
  {
    icon: "🖱️",
    name: "Magic Mouse",
    desc: "White, for everyday work.",
  },
  {
    icon: "💡",
    name: "Monitor Light Bar",
    desc: "Even, glare-free desk lighting.",
  },
  {
    icon: "🪑",
    name: "Standing Desk",
    desc: "Motorized sit/stand setup.",
  },
];

export default function Gear() {
  return (
    <section id="gear" className="py-20 border-t border-line">
      <div className="max-w-container mx-auto px-8 relative z-[1]">
        <div className="fade-up">
          <p className="font-mono text-[0.7rem] text-text-dim tracking-[0.12em] uppercase mb-3">
            // 05 — gear
          </p>
          <h2 className="text-[2.2rem] font-bold tracking-[-0.02em] leading-[1.1] mb-4">
            The tools behind my work.
          </h2>
        </div>
        <div className="fade-up grid grid-cols-3 gap-4 mt-10 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
          {gear.map((item) => (
            <div
              key={item.name}
              className="group bg-base-2 border border-line rounded-[4px] p-6 transition-[border-color,background] relative overflow-hidden hover:border-[rgba(200,240,96,0.25)] hover:bg-base-3 after:content-['↗'] after:absolute after:top-5 after:right-5 after:text-[0.85rem] after:text-text-dim after:transition-[color,transform] group-hover:after:text-accent group-hover:after:translate-x-[2px] group-hover:after:-translate-y-[2px]"
            >
              <div className="aspect-[4/3] w-full bg-base border border-line rounded-[3px] flex items-center justify-center mb-5 text-[2.4rem] transition-transform group-hover:scale-[1.03]">
                {item.icon}
              </div>
              <div className="text-[1.05rem] font-bold text-text mb-[0.4rem] pr-6">
                {item.name}
              </div>
              <div className="text-[0.8rem] text-text-muted leading-[1.6]">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
