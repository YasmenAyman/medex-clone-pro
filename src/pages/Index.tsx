import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import WorldMap from "@/components/WorldMap";
import PartnersGrid from "@/components/PartnersGrid";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* About Preview */}
      <section className="py-20 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl bg-muted h-[300px] lg:h-[400px] overflow-hidden flex items-end justify-center">
            {/* Team photo placeholder */}
            <div className="flex gap-2 h-[80%]">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-24 bg-muted-foreground/20 rounded-t-lg" />
              ))}
            </div>
          </div>
          <div>
            <SectionTitle title="About us" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are a leading distributor of medical supplies and dental implants in the Middle East. We provide the latest global technologies for medical centers and dental clinics, with a commitment to quality and excellence.
            </p>
            <h3 className="text-primary font-semibold text-lg mb-2">Our vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the ideal partner for medical institutions in the field of dental implants and specialized medical equipment, by providing integrated solutions of international quality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-primary">Our</h2>
                  <h2 className="text-3xl font-bold text-primary">values</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Supporting the continuing professional development of medical personnel",
              "Commitment to the highest international quality standards",
              "Honesty and transparency in all our dealings",
              "Continuous innovation in providing medical solutions",
            ].map((val, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-full h-24 rounded-xl bg-muted mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed">{val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 container">
        <SectionTitle
          title="Explore our services and ..."
          subtitle="We provide comprehensive medical solutions for dental clinics and medical centers."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Our services", desc: "Comprehensive dental solutions" },
            { title: "Our services", desc: "Advanced medical equipment" },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-muted h-[300px] relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-primary-foreground">
                <p className="text-xs uppercase tracking-wider mb-1 text-primary">Medex</p>
                <h3 className="text-xl font-bold">{s.title}</h3>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <div className="w-3 h-3 border-t-2 border-r-2 border-primary-foreground rotate-45 -ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Medex Academy */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionTitle title="Medex Academy" subtitle="Professional courses and training for medical professionals." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-muted" />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-muted" />
                    <span className="text-xs text-muted-foreground">Dr. Instructor</span>
                  </div>
                  <h4 className="font-semibold text-sm mb-2">Advanced Dental Course {i}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-sm">$99</span>
                    <Button size="sm" variant="outline" className="rounded-full text-xs h-7">
                      Enroll
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 container">
        <SectionTitle title="Testimonials" className="text-center" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-sm border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-muted" />
                <div>
                  <p className="font-semibold text-sm">Dr. Ahmed</p>
                  <p className="text-xs text-muted-foreground">Dental Surgeon</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "Medex provides excellent quality dental implants and equipment. Their customer service is outstanding and delivery is always on time."
              </p>
              <div className="flex gap-1 mt-3">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className="text-primary text-sm">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Partners */}
      <PartnersGrid />

      {/* Join Our Community */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="bg-card rounded-2xl shadow-sm p-8 lg:p-12">
            <span className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-medium mb-4">
              Medex
            </span>
            <h2 className="text-2xl font-bold mb-8">Join to Our Community</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <div>
                <p className="text-muted-foreground mb-6">
                  We are here to answer your questions and provide the necessary assistance.
                </p>
                <WorldMap />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
