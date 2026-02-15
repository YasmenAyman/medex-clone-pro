import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import PartnersGrid from "@/components/PartnersGrid";

const values = [
  "Supporting the continuing professional development of medical personnel",
  "Commitment to the highest international quality standards",
  "Honesty and transparency in all our dealings",
  "Continuous innovation in providing medical solutions",
];

const About = () => (
  <div>
    <HeroBanner title="About Us" />

    {/* Large typography headline */}
    <section className="py-20 container text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed max-w-3xl mx-auto">
        We are <span className="font-bold">leading industry</span> in the field
        of <span className="font-bold">distributing medical supplies</span>{" "}
        and we have the best <span className="font-bold">dental implant.</span>
      </h2>
    </section>

    {/* Our Vision */}
    <section className="container text-center mb-12">
      <h3 className="text-3xl font-bold text-primary mb-4">Our vision</h3>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        To be the ideal partner for medical institutions in the field of dental implants and specialized medical equipment, by providing integrated solutions of international quality.
      </p>
    </section>

    {/* Full-width image */}
    <section className="container mb-20">
      <div className="rounded-2xl bg-muted h-[300px] lg:h-[450px] overflow-hidden" />
    </section>

    {/* Our Values */}
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/4">
            <SectionTitle title="Our values" />
            {/* Decorative Medex logo */}
            <div className="opacity-10">
              <MedexLogoLarge />
            </div>
          </div>
          <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-20 h-20 rounded-xl bg-muted" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">{val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Business Partners */}
    <PartnersGrid />
  </div>
);

const MedexLogoLarge = () => (
  <svg viewBox="0 0 80 80" className="w-24 h-24" fill="none">
    <path d="M10 20C10 20 20 50 30 65C40 50 50 20 50 20" stroke="hsl(0, 72%, 51%)" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <path d="M30 20C30 20 40 50 50 65C60 50 70 20 70 20" stroke="hsl(0, 72%, 51%)" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <circle cx="40" cy="25" r="6" fill="hsl(0, 72%, 51%)"/>
  </svg>
);

export default About;
