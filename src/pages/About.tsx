import HeroBanner from "@/components/HeroBanner";
import PartnersGrid from "@/components/PartnersGrid";
import aboutHero from "@/assets/about-hero.png";
import aboutValue1 from "@/assets/about-value1.png";
import valuesBox from "@/assets/values-box.png";
import teamPhoto from "@/assets/team-photo.png";

const values = [
  {
    text: "Supporting the continuing professional development of medical personnel",
    img: aboutValue1,
  },
  {
    text: "Commitment to the highest international quality standards",
    img: aboutValue1,
  },
  {
    text: "Honesty and transparency in all our dealings",
    img: aboutHero,
  },
  {
    text: "Continuous innovation in providing medical solutions",
    img: aboutValue1,
  },
];

const About = () => (
  <div>
    <HeroBanner title="About Us" backgroundImage={teamPhoto} />

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
      <div className="rounded-2xl h-[300px] lg:h-[450px] overflow-hidden">
        <img src={aboutHero} alt="Dental clinic" className="w-full h-full object-cover rounded-2xl" />
      </div>
    </section>

    {/* Our Values */}
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/4 flex-shrink-0">
            <img src={valuesBox} alt="Our values" className="w-full max-w-[280px]" />
          </div>
          <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-20 h-20 rounded-xl overflow-hidden">
                    <img src={val.img} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">{val.text}</p>
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

export default About;
