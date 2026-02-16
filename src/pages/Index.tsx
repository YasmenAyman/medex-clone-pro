import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import WorldMap from "@/components/WorldMap";
import PartnersGrid from "@/components/PartnersGrid";
import HeroSection from "@/components/HeroSection";
import teamPhoto from "@/assets/team-photo.png";
import dentalImplant from "@/assets/dental-implant.png";
import toothVideo from "@/assets/tooth-video.mp4";
import serviceStore from "@/assets/service-store.jpg";
import serviceAcademy from "@/assets/service-academy.jpg";
import serviceDental from "@/assets/service-dental.jpg";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Team Photo */}
      <section className="container mt-0">
        <div className="rounded-2xl overflow-hidden">
          <img src={teamPhoto} alt="Medex Team" className="w-full h-[300px] lg:h-[450px] object-cover object-top" />
        </div>
      </section>

      {/* Who Medex Is + Vision */}
      <section className="py-16 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Tooth 3D video */}
          <div className="flex items-center justify-center">
            <video
              src={toothVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-[280px] lg:w-[320px] h-auto"
            />
          </div>
          {/* Text content */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">
              Who <span className="text-primary">Medex</span> is?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
              Medex Company is a leading company in the field of distributing medical supplies
              and dental implants in the Middle East. It was established with the aim of providing
              the latest international technologies to medical centers and dental clinics.
            </p>
            <h3 className="text-lg font-bold text-foreground mb-2">Our vision</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              To be the ideal partner for medical institutions in the field of dental implants and
              specialized medical equipment, by providing integrated solutions of international
              quality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values - Circular design */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="relative flex flex-col items-center">
            {/* Concentric circles */}
            <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px]">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-primary/10" />
              {/* Middle ring */}
              <div className="absolute inset-[10%] rounded-full border border-primary/15" />
              {/* Inner ring */}
              <div className="absolute inset-[20%] rounded-full border border-primary/20" />
              {/* Red filled circle */}
              <div className="absolute inset-[28%] rounded-full bg-primary/80" />

              {/* Dental implant image */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <img
                  src={dentalImplant}
                  alt="Dental Implant"
                  className="w-[160px] sm:w-[220px] lg:w-[300px] h-auto object-contain -mt-8"
                />
              </div>

              {/* "Our values" text */}
              <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 z-10 text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
                  Our<br />values
                </h2>
              </div>

              {/* Value labels positioned around the circle */}
              {/* Top-right */}
              <div className="absolute -top-4 right-0 lg:-right-16 max-w-[180px] text-right">
                <p className="text-xs sm:text-sm text-muted-foreground italic leading-snug">
                  Supporting the continuing professional development of medical personnel
                </p>
              </div>
              {/* Top-left */}
              <div className="absolute top-[20%] -left-4 lg:-left-20 max-w-[180px] text-left">
                <p className="text-xs sm:text-sm text-muted-foreground italic leading-snug">
                  Honesty and transparency in all our dealings
                </p>
              </div>
              {/* Bottom-left */}
              <div className="absolute bottom-[5%] -left-4 lg:-left-20 max-w-[180px] text-left">
                <p className="text-xs sm:text-sm text-muted-foreground italic leading-snug">
                  Continuous innovation in providing medical solutions
                </p>
              </div>
              {/* Bottom-right */}
              <div className="absolute bottom-[5%] right-0 lg:-right-16 max-w-[180px] text-right">
                <p className="text-xs sm:text-sm text-muted-foreground italic leading-snug">
                  Commitment to the highest international quality standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-medium mb-4">
                Medex
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Explore our<br />different services
              </h2>
            </div>
            <p className="text-muted-foreground mt-4 lg:mt-8 max-w-sm text-sm leading-relaxed">
              We offer you a comprehensive package of specialized medical services and products
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                num: "01",
                title: "Medix Store",
                desc: "Shop online from a wide variety of dental products and medical supplies from the most famous international brands",
                img: serviceStore,
              },
              {
                num: "02",
                title: "Scientific Academy",
                desc: "Specialized training courses and workshops in the fields of dental implants and cosmetics provided by a group of international experts",
                img: serviceAcademy,
              },
              {
                num: "03",
                title: "Dental products",
                desc: "Dental implants, cosmetic materials, and the latest cosmetic and restorative dentistry technologies from prestigious international companies",
                img: serviceDental,
              },
            ].map((s, i) => (
              <div key={i} className="bg-card rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative mb-4">
                  <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {s.num}
                  </span>
                  <img src={s.img} alt={s.title} className="w-full h-[180px] object-cover rounded-xl" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom stats */}
          <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-primary text-lg">★</span>
              <span>4.9 on Google reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-primary" />
              </span>
              <span>400+ Happy clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-lg">♥</span>
              <span>Safe & Certified care</span>
            </div>
          </div>
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
