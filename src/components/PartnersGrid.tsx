import SectionTitle from "./SectionTitle";

const partners = [
  { name: "Iconic", logo: "/src/assets/logo.png" }, // Using logo.png as placeholder or if I have actual ones
  { name: "MICROWAVE", logo: "/src/assets/logo.png" },
  { name: "Smile", logo: "/src/assets/logo.png" },
  { name: "THE RETRO", logo: "/src/assets/logo.png" },
  { name: "natural", logo: "/src/assets/logo.png" },
  { name: "hipster", logo: "/src/assets/logo.png" },
];

const PartnersGrid = () => (
  <section className="py-24 container overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="max-w-md">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D96666] leading-tight mb-8">
          Our Business<br />Partners
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We collaborate with the best global brands to offer exceptional quality products.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-primary/5">
        {partners.map((p, i) => (
          <div
            key={i}
            className="h-40 flex items-center justify-center p-8 border-r border-b border-primary/5 hover:bg-primary/[0.02] transition-colors group"
          >
            {/* Logo Placeholder - Using provided logo or text for now */}
            <div className="flex flex-col items-center gap-3">
              <img
                src="/src/assets/logo.png"
                alt={p.name}
                className="w-12 h-12 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50 group-hover:text-primary transition-colors">
                {p.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersGrid;
