import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import WorldMap from "@/components/WorldMap";
import PartnersGrid from "@/components/PartnersGrid";
import HeroSection from "@/components/HeroSection";
import teamPhoto from "@/assets/team-photo.png";
import academyCourse1 from "@/assets/academy-course1.jpg";
import academyCourse2 from "@/assets/academy-course2.jpg";
import academyCourse3 from "@/assets/academy-course3.jpg";
import dentalImplant from "@/assets/dental-implant.png";
import toothVideo from "@/assets/tooth-video.mp4";
import serviceStore from "@/assets/service-store.jpg";
import serviceAcademy from "@/assets/service-academy.jpg";
import serviceDental from "@/assets/service-dental.jpg";
import productsHero from "@/assets/products-hero.jpg";
import medexBox from "@/assets/medex-box.png";

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

      {/* Our Services Section - Zigzag cards */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16">
            <div>
              <span className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-medium mb-4">
                Medex
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Our services
              </h2>
            </div>
            <p className="text-muted-foreground mt-4 lg:mt-8 max-w-xs text-sm leading-relaxed">
              We offer a comprehensive range of specialized services for clinics and medical centers.
            </p>
          </div>

          {/* Zigzag Service Cards */}
          <div className="relative max-w-4xl mx-auto">
            {/* Dashed connecting line (desktop only) */}
            <svg className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 800 1200">
              <path
                d="M 200 60 C 350 100, 450 150, 550 200 C 400 280, 300 320, 200 400 C 350 480, 450 500, 550 540 C 400 620, 300 660, 200 720 C 350 800, 450 840, 550 900"
                fill="none"
                stroke="hsl(0 0% 85%)"
                strokeWidth="1.5"
                strokeDasharray="8 6"
              />
            </svg>

            {/* Cards */}
            <div className="relative z-10 space-y-8 lg:space-y-10">
              {[
                { title: "Supply and distribution", desc: "Supply and distribution services for medical equipment, dental materials, and all medical products with speed and high efficiency.", icon: "📦", align: "left" as const },
                { title: "Maintenance and Technical Support", desc: "Regular and emergency maintenance services for all types of medical equipment and dental devices, with the provision of original spare parts, repair...", icon: "🔧", align: "right" as const },
                { title: "Clinic equipment", desc: "Design and equipping services for dental clinics and medical centers with the latest technologies and design of medical environments.", icon: "🏥", align: "left" as const },
                { title: "Training and qualification", desc: "Training courses and workshops for dentists on the latest treatment technologies, equipment and the use of modern medical devices.", icon: "🎓", align: "right" as const },
                { title: "Technical consultations", desc: "Expert technical consulting services in the field of dental materials, equipment selection and selection of appropriate materials.", icon: "💡", align: "left" as const },
                { title: "Guarantee programs", desc: "Inclusive warranty programs for equipment and medical devices to ensure continuity.", icon: "🛡️", align: "right" as const },
              ].map((service, i) => (
                <div key={i} className={`flex ${service.align === "right" ? "lg:justify-end justify-start" : "justify-start"}`}>
                  <div className="relative w-full max-w-[280px] sm:max-w-[300px]">
                    {/* Red pushpin */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-primary shadow-md flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                    </div>
                    {/* Card */}
                    <div className="bg-primary/5 rounded-2xl p-5 pt-7 border border-primary/10">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <span className="text-sm">{service.icon}</span>
                      </div>
                      <h3 className="font-bold text-foreground text-sm mb-2">{service.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10">
            <div>
              <span className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-medium mb-4">
                Medex
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Our medical products<br />are suit everyone
              </h2>
            </div>
            <p className="text-muted-foreground mt-4 lg:mt-8 max-w-xs text-sm leading-relaxed">
              A wide range of high-quality medical products are suit everyone
            </p>
          </div>

          {/* Product Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                title: "Advanced dental implants",
                desc: "Made from high quality titanium to ensure the highest success rates and longevity",
                active: true,
              },
              {
                title: "CAD/CAM systems",
                desc: "Advanced digital technologies for designing and manufacturing dental implants with high accuracy",
                active: false,
              },
              {
                title: "Specialized laser devices",
                desc: "Specialized laser devices for delicate treatments and cosmetic procedures. Advanced",
                active: false,
              },
              {
                title: "Advanced filling materials",
                desc: "Specialized laser devices for delicate treatments and cosmetic procedures. Advanced",
                active: false,
              },
            ].map((p, i) => (
              <div key={i} className="flex flex-col">
                <div className={`flex items-center gap-2 mb-3 px-3 py-2 rounded-full text-sm font-medium ${p.active ? "bg-primary text-primary-foreground" : "text-foreground"}`}>
                  {p.active && <span className="w-2 h-2 rounded-full bg-primary-foreground" />}
                  {p.title}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Product Image */}
          <div className="rounded-2xl overflow-hidden">
            <img src={productsHero} alt="Dental products" className="w-full h-[300px] lg:h-[450px] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="container">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-medium mb-4">
                Medex
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Medex Academy
              </h2>
            </div>
            <p className="text-muted-foreground mt-4 lg:mt-8 max-w-sm text-sm leading-relaxed">
              Specialized training programs offered by a select group of international experts in the field of dental implants and cosmetic dentistry.
            </p>
          </div>

          {/* Course Cards - Horizontal scroll */}
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {[
              {
                img: academyCourse1,
                badge: "Accredited Certificate",
                date: "August 5-7, 2023",
                title: "Advanced course in dental implants",
                desc: "A specialized practical course in the latest dental implant techniques and integrated solutions.",
              },
              {
                img: academyCourse2,
                badge: "Scientific conference",
                date: "August 5-7, 2023",
                title: "Advanced cosmetic and smile techniques",
                desc: "The latest methods and techniques in cosmetic dentistry and designing the perfect smile.",
              },
              {
                img: academyCourse3,
                badge: "Workshop",
                date: "August 5-7, 2023",
                title: "Digital dentistry masterclass",
                desc: "Practical training on digital scanning, CAD/CAM and modern dental technologies.",
              },
            ].map((course, i) => (
              <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow min-w-[340px] sm:min-w-[380px] flex-shrink-0 snap-start">
                <img src={course.img} alt={course.title} className="w-full h-[200px] object-cover" />
                <div className="p-5">
                  {/* Badge & date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex items-center gap-1.5 text-primary text-xs font-medium">
                      <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </span>
                      {course.badge}
                    </span>
                    <span className="text-primary text-xs font-medium">{course.date}</span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{course.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{course.desc}</p>
                  {/* Avatars + View course */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex -space-x-2">
                        {[0,1,2].map(a => (
                          <div key={a} className="w-7 h-7 rounded-full bg-muted border-2 border-card" />
                        ))}
                      </div>
                      <span className="ml-1 text-[10px] bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 font-bold">+100</span>
                    </div>
                    <Button size="sm" variant="outline" className="rounded-full text-xs h-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      View course
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation & View all */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                ‹
              </button>
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                ›
              </button>
            </div>
            {/* Progress dots */}
            <div className="flex items-center gap-1.5">
              <div className="w-8 h-1 rounded-full bg-primary" />
              <div className="w-2 h-1 rounded-full bg-border" />
              <div className="w-2 h-1 rounded-full bg-border" />
            </div>
            <a href="#" className="text-primary text-sm font-medium underline underline-offset-4 hover:no-underline">
              View all courses
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <div>
              <span className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-medium mb-4">
                Medex
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Testimonials
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-8">
                What doctors and specialists say about their experience with Medix products and services
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <p className="font-bold text-foreground text-sm mb-2">Trusted Partners</p>
                  <div className="flex -space-x-2">
                    {[0, 1, 2, 3].map((a) => (
                      <div key={a} className="w-8 h-8 rounded-full bg-muted border-2 border-background" />
                    ))}
                  </div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="font-bold text-foreground text-sm mb-2">Rated Excellent: 5 / 5</p>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Box with floating cards */}
            <div className="relative flex justify-center">
              <img src={medexBox} alt="Medex Box" className="w-[380px] lg:w-[450px] h-auto mt-24" />
              {/* Floating testimonial cards */}
              {[
                { top: "-top-4 right-0 lg:right-4", delay: "" },
                { top: "top-20 -right-4 lg:right-0", delay: "" },
                { top: "top-44 right-8 lg:right-12", delay: "" },
              ].map((pos, i) => (
                <div key={i} className={`absolute ${pos.top} bg-card rounded-xl p-4 shadow-lg border max-w-[280px] z-10`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-muted" />
                      <div>
                        <p className="font-semibold text-xs">Dr. Muhammad Al-Ahmad</p>
                        <p className="text-[10px] text-muted-foreground">Consultant in Oral and Dental Surgery</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className="text-amber-400 text-[10px]">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    "I have been dealing with Medex for over 10 years, and I have complete confidence in the quality of their products and services"
                  </p>
                </div>
              ))}
            </div>
          </div>
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
