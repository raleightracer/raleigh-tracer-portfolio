type GearItem = {
  name: string;
  desc: string;
  img?: string;
  icon?: string;
};

const gear: GearItem[] = [
  {
    img: "https://dlcdnwebimgs.asus.com/gain/f93bdd99-47d7-4f97-8800-5a83d0bd46a6/",
    name: "ASUS TUF F15",
    desc: "i5 12th Gen · 16GB · 1.5TB",
  },
  {
    img: "https://dlcdnwebimgs.asus.com/gain/1292674f-ed78-43e1-b6f2-573192db5f6b//w184",
    name: "TUF Gaming VG249Q3A",
    desc: "180hz · 1080p",
  },
  {
    img: "https://resource.logitech.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/m575s-ergo-wireless-trackball/gallery/ergo-m575s-m575sp-graphite-blue-ball-gallery-1.png",
    name: "Logitech ERGO M575S",
    desc: "Wireless trackball mouse",
  },
  {
    img: "https://content.ibuypower.com/Images/Components/28242/AULA-F75-2400-01-1.png",
    name: "Aula F75",
    desc: "Wireless mechanical gaming keyboard · Reaper Linear Switches",
  },
  {
    img: "https://fifinemicrophone.com/cdn/shop/files/FIFINE-ampligame-AM8-dynamic-microphone-black-front.png?v=1771991442",
    name: "Fifine AM8",
    desc: "Dynamic Microphone",
  },
  {
    img: "https://ph-test-11.slatic.net/p/72315bfab7b05d2bd9b1efb1cf57a8b8.png",
    name: "QKZ AK6 Pro",
    desc: "IEM",
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
              className="group bg-base-2 border border-line rounded-[4px] p-6 transition-[border-color,background] relative overflow-hidden hover:border-[rgba(200,240,96,0.25)] hover:bg-base-3"
            >
              <div className="aspect-[4/3] w-full bg-base border border-line rounded-[3px] flex items-center justify-center mb-5 overflow-hidden text-[2.4rem] transition-transform group-hover:scale-[1.03]">
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  item.icon
                )}
              </div>
              <div className="text-[1.05rem] font-bold text-text mb-[0.4rem]">
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
