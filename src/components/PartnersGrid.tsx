import SectionTitle from "./SectionTitle";

const partners = ["Iconic", "MICROWAVE", "Smile", "THE RETRO", "natural", "hipster"];

const PartnersGrid = () => (
  <section className="py-16 container">
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      <div className="lg:w-1/3">
        <SectionTitle
          title="Our Business Partners"
          subtitle="We collaborate with the best global brands to offer exceptional quality products."
        />
      </div>
      <div className="lg:w-2/3 grid grid-cols-3 gap-4">
        {partners.map((p) => (
          <div
            key={p}
            className="h-20 rounded-xl border bg-card flex items-center justify-center text-lg font-bold text-muted-foreground hover:shadow-md transition-shadow"
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersGrid;
