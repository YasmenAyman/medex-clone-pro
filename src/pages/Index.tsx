import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import WorldMap from "@/components/WorldMap";
import PartnersGrid from "@/components/PartnersGrid";
import HeroSection from "@/components/HeroSection";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import teamPhoto from "@/assets/team-photo.png";
import academyCourse1 from "@/assets/academy-course1.jpg";
import academyCourse2 from "@/assets/academy-course2.jpg";
import academyCourse3 from "@/assets/academy-course3.jpg";
import dentalImplant from "@/assets/dental-implant.png";
import toothVideo from "@/assets/tooth-video.mp4";
import toothimg from "@/assets/toothimg.png";
import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import icon3 from "@/assets/icon3.png";
import icon4 from "@/assets/icon4.png";
import serviceStore from "@/assets/service-store.jpg";
import serviceAcademy from "@/assets/service-academy.jpg";
import serviceDental from "@/assets/service-dental.jpg";
import productsHero from "@/assets/products-hero.png";
import tab_icon1 from "@/assets/tab_icon1.png";
import tab_icon2 from "@/assets/tab_icon2.png";
import tab_icon3 from "@/assets/tab_icon3.png";
import tab_icon4 from "@/assets/tab_icon4.png";
import medexBox from "@/assets/medex-box.png";
import news1 from "@/assets/news1.jpg";
import news2 from "@/assets/news2.jpg";
import news3 from "@/assets/news3.jpg";
import pushpin from "@/assets/pushpin.png";

const Index = () => {
  // Academy carousel
  const [academyRef, academyApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [academyIndex, setAcademyIndex] = useState(0);
  const [academyCount, setAcademyCount] = useState(0);

  // News carousel
  const [newsRef, newsApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [newsIndex, setNewsIndex] = useState(0);
  const [newsCount, setNewsCount] = useState(0);

  // Products state
  const [activeProduct, setActiveProduct] = useState(0);

  const productCategories = [
    {
      title: "Advanced dental implants",
      desc: "Made from high quality titanium to ensure the highest success rates and longevity",
      img: productsHero,
      icon: tab_icon1,
    },
    {
      title: "CAD/CAM systems",
      desc: "Advanced digital technologies for designing and manufacturing dental implants with high accuracy",
      img: serviceAcademy,
      icon: tab_icon2,
    },
    {
      title: "Specialized laser devices",
      desc: "Specialized laser devices for delicate treatments and cosmetic procedures. Advanced",
      img: serviceDental,
      icon: tab_icon3,
    },
    {
      title: "Advanced filling materials",
      desc: "High-quality restorative materials providing excellent aesthetics and durability for dental fillings",
      img: serviceStore,
      icon: tab_icon4,
    }
  ];

  const onAcademySelect = useCallback(() => {
    if (!academyApi) return;
    setAcademyIndex(academyApi.selectedScrollSnap());
    setAcademyCount(academyApi.scrollSnapList().length);
  }, [academyApi]);

  const onNewsSelect = useCallback(() => {
    if (!newsApi) return;
    setNewsIndex(newsApi.selectedScrollSnap());
    setNewsCount(newsApi.scrollSnapList().length);
  }, [newsApi]);

  useEffect(() => {
    if (!academyApi) return;
    onAcademySelect();
    academyApi.on("select", onAcademySelect);
    academyApi.on("reInit", onAcademySelect);
    return () => { academyApi.off("select", onAcademySelect); };
  }, [academyApi, onAcademySelect]);

  useEffect(() => {
    if (!newsApi) return;
    onNewsSelect();
    newsApi.on("select", onNewsSelect);
    newsApi.on("reInit", onNewsSelect);
    return () => { newsApi.off("select", onNewsSelect); };
  }, [newsApi, onNewsSelect]);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Team Photo */}
      <section className="container mt-20">
        <div className="rounded-2xl overflow-hidden">
          <img src={teamPhoto} alt="Medex Team" className="w-full h-[300px] lg:h-[450px] object-cover object-top" style={{ boxShadow: "0px 0px 20px rgba(218, 103, 103, 0.25)" }} />
        </div>
      </section>

      {/* Who Medex Is + Vision */}
      <section className="py-24 container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-center">
          {/* Tooth 3D video */}
          <div className="flex items-center justify-center lg:justify-start">
            {/* <video
              src={toothVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-[280px] lg:w-[400px] h-auto opacity-80"
              style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))" }}
            /> */}
            <img src={toothimg} alt="Tooth" className="opacity-80" />
          </div>
          {/* Text content */}
          <div className="space-y-10 lg:col-span-3">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Who <span className="text-[#F80000]">Medex</span> is?
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg lg:text-xl font-light">
                Medex Company is a leading company in the field of distributing medical supplies
                and dental implants in the Middle East. It was established with the aim of providing
                the latest international technologies to medical centers and dental clinics.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-muted-foreground/70 mb-4">Our vision</h3>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg lg:text-xl font-light">
                To be the ideal partner for medical institutions in the field of dental implants and
                specialized medical equipment, by providing integrated solutions of international
                quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Circular design */}
      <section className="py-10 bg-background">
        <div className="container">
          <div className="relative flex flex-col items-center">
            {/* Concentric circles */}
            <div className="relative w-full">

              {/* Dental implant image */}
              <div className="flex items-center justify-center z-10">
                <img
                  src={dentalImplant}
                  alt="Dental Implant"
                  className="w-full h-auto object-contain -mt-8"
                />
              </div>

              {/* "Our values" text */}
              <div className="absolute bottom-[20%] left-[35%] -translate-x-1/2 z-10">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary-foreground leading-tight">
                  Our<br />values
                </h2>
              </div>

              {/* Value labels positioned around the circle */}
              {/* Top-right */}
              <div className="absolute top-[18%] right-[5%] lg:right-[2%] max-w-[250px] text-right">
                <img src={icon1} alt="icon1" className="w-6 h-6" />
                <p className="text-xs sm:text-sm text-muted-foreground text-left leading-snug">
                  Supporting the continuing professional development of medical personnel
                </p>
              </div>
              {/* Top-left */}
              <div className="absolute top-[20%] left-[5%] lg:left-[19%] max-w-[180px] text-left">
                <img src={icon2} alt="icon2" className="w-6 h-6" />
                <p className="text-xs sm:text-sm text-muted-foreground text-left leading-snug">
                  Honesty and transparency in all our dealings
                </p>
              </div>
              {/* Bottom-left */}
              <div className="absolute top-[60%] left-[5%] lg:left-[4%] max-w-[180px] text-left">
                <img src={icon3} alt="icon3" className="w-6 h-6" style={{ marginLeft: "auto" }} />
                <p className="text-xs sm:text-sm text-muted-foreground text-left leading-snug">
                  Continuous innovation in providing medical solutions
                </p>
              </div>
              {/* Bottom-right */}
              <div className="absolute top-[60%] right-[5%] lg:right-[2%] max-w-[200px] text-right">
                <img src={icon4} alt="icon4" className="w-6 h-6" />
                <p className="text-xs sm:text-sm text-muted-foreground text-left leading-snug">
                  Commitment to the highest international quality standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10">
        <div className="container bg-card rounded-3xl shadow-card p-8 lg:p-12" style={{ boxShadow: "0px 0px 20px 0px #DA676740" }}>
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8">
            <div>
              <span className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-medium mb-4">
                Medex
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-foreground leading-tight">
                Explore our<br />different services
              </h2>
            </div>
            <p className="text-muted-foreground mt-4 lg:mt-8 max-w-sm text-md leading-relaxed">
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
              <div
                key={i}
                className="bg-white p-6 sm:p-8 transition-shadow relative overflow-hidden group"
                style={{
                  boxShadow: "0px 0px 12px rgba(218, 103, 103, 0.2)",
                  borderRadius: "16px"
                }}
              >
                {/* Background Grid Pattern (Subtle) */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#DA6767 0.5px, transparent 0.5px)", backgroundSize: "20px 20px" }} />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-10 h-10 rounded-full bg-[#DA6767] flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-[#DA6767]/20">
                      {s.num}
                    </div>
                    <div className="w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-3xl shadow-md">
                      <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom stats */}
          <div className="flex flex-wrap items-center gap-10 text-sm sm:text-base font-medium text-muted-foreground">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-star text-[#F80000] text-lg"></i>
              <span>4.9 on Google reviews</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-face-smile text-[#F80000] text-lg"></i>
              <span>400+ Happy clients</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-shield-halved text-[#F80000] text-lg"></i>
              <span>Safe & Certified care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-10">
        <div className="container">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10">
            <div>
              <span className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-medium mb-4">
                Medex
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground leading-tight">
                Our medical products<br />are suit everyone
              </h2>
            </div>
            <p className="text-muted-foreground mt-4 lg:mt-8 max-w-xs text-md leading-relaxed">
              A wide range of high-quality medical products are suit everyone
            </p>
          </div>

          {/* Product Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {productCategories.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveProduct(i)}
                className="flex flex-col text-left group outline-none focus:outline-none"
              >
                <div className={`flex items-center gap-3 mb-4 transition-all duration-300 relative pb-2 ${activeProduct === i ? "text-[#F80000]" : "text-[#B0B0B0] hover:text-foreground/80"
                  }`}>
                  <div className={`transition-transform duration-300 ${activeProduct === i ? "scale-110" : "scale-100 opacity-60"}`}>
                    <img src={p.icon} alt={p.title} className="w-10 h-10 object-contain" />
                  </div>
                  <span className={`text-sm lg:text-base font-bold transition-colors ${activeProduct === i ? "text-[#F80000]" : "text-[#B0B0B0]"}`}>
                    {p.title}
                  </span>
                  {activeProduct === i && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F80000] rounded-full" />
                  )}
                </div>
                <p className={`text-xs lg:text-sm leading-relaxed transition-colors duration-300 ${activeProduct === i ? "text-[#4A4A4A]" : "text-[#B0B0B0]"
                  }`}>
                  {p.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Product Image */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl transition-all duration-700 transform">
            <img
              src={productCategories[activeProduct].img}
              alt={productCategories[activeProduct].title}
              className="w-full h-[350px] lg:h-[550px] object-cover animate-in fade-in zoom-in-95 duration-700"
            />
          </div>
        </div>
      </section>

      {/* Our Services Section - Zigzag cards */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, #e0e0e0 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
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
                stroke="hsl(0 0% 80%)"
                strokeWidth="1.5"
                strokeDasharray="8 6"
              />
            </svg>

            {/* Cards */}
            <div className="relative z-10 space-y-8 lg:space-y-10">
              {[
                {
                  title: "Supply and distribution",
                  desc: "Supply and distribution services for medical equipment, dental materials, and all medical products with speed and high efficiency.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-primary">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  ),
                  align: "left" as const,
                },
                {
                  title: "Maintenance and Technical Support",
                  desc: "Regular and emergency maintenance services for all types of medical equipment and dental devices, with the provision of original spare parts, repair...",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-primary">
                      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                    </svg>
                  ),
                  align: "right" as const,
                },
                {
                  title: "Clinic equipment",
                  desc: "Design and equipping services for dental clinics and medical centers with the latest technologies and design of medical environments.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-primary">
                      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
                    </svg>
                  ),
                  align: "left" as const,
                },
                {
                  title: "Training and qualification",
                  desc: "Training courses and workshops for dentists on the latest treatment technologies, equipment and the use of modern medical devices.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-primary">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  ),
                  align: "right" as const,
                },
                {
                  title: "Technical consultations",
                  desc: "Expert technical consulting services in the field of dental materials, equipment selection and selection of appropriate materials.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-primary">
                      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
                    </svg>
                  ),
                  align: "left" as const,
                },
                {
                  title: "Guarantee programs",
                  desc: "Inclusive warranty programs for equipment and medical devices to ensure continuity.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-primary">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  align: "right" as const,
                },
              ].map((service, i) => (
                <div key={i} className={`flex ${service.align === "right" ? "lg:justify-end justify-start" : "justify-start"}`}>
                  <div className="relative w-full max-w-[280px] sm:max-w-[300px]">
                    {/* Realistic SVG Pushpin */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 w-10 h-10 drop-shadow-lg">
                      <img src={pushpin} alt="Pushpin" style={{ filter: "drop-shadow(0px 3.15655px 3.15655px rgba(225, 44, 55, 0.35))" }} />
                    </div>
                    {/* Card */}
                    <div className="bg-white rounded-2xl p-5 pt-8 border border-primary/10 shadow-sm hover:shadow-md transition-shadow duration-300" style={{ boxShadow: "0px 0px 31.5655px rgba(225, 44, 55, 0.11)" }}>
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        {service.icon}
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

          {/* Course Cards - Embla Carousel */}
          <div className="overflow-hidden" ref={academyRef}>
            <div className="flex -ml-6">
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
                <div key={i} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-card transition-shadow">
                    <img src={course.img} alt={course.title} className="w-full h-[200px] object-cover" />
                    <div className="p-5">
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
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex -space-x-2">
                            {[0, 1, 2].map(a => (
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
                </div>
              ))}
            </div>
          </div>

          {/* Navigation & View all */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              <button onClick={() => academyApi?.scrollPrev()} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => academyApi?.scrollNext()} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: academyCount }).map((_, i) => (
                <button key={i} onClick={() => academyApi?.scrollTo(i)} className={`h-1 rounded-full transition-all ${i === academyIndex ? "w-8 bg-primary" : "w-2 bg-border"}`} />
              ))}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left side */}
            <div className="flex flex-col">
              <span className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-medium mb-4" style={{ width: "fit-content" }}>
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

              {/* Download App Banner */}
              <div className="w-full" style={{ marginTop: "auto" }}>
                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <img src="/src/assets/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm lg:text-base">Try Our Application with alot of features</h4>
                      <p className="text-xs text-muted-foreground">Try Our Application available at app store & play store</p>
                    </div>
                  </div>
                  <Button className="rounded-full bg-primary hover:bg-primary/90 text-white gap-3 px-8 h-12 font-bold shadow-lg shadow-primary/20 whitespace-nowrap">
                    Download App
                    <div className="flex items-center gap-1.5 border-l border-white/20 pl-3 ml-1">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right side - Box with floating cards */}
            <div className="relative flex justify-center min-h-[500px] w-full">
              {/* Vertical auto-scrolling testimonial cards */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2  z-10 h-[450px] overflow-hidden w-full max-w-[350px]">
                <div className="flex flex-col gap-4 animate-testimonial-scroll pt-10">
                  {[...Array(2)].flatMap((_, dupeIdx) =>
                    [
                      {
                        name: "Dr. Muhammad Al-Ahmad",
                        role: "Consultant in Oral and Dental Surgery",
                        text: '"I have been dealing with Medex for over 10 years, and I have complete confidence in the quality of their products and services"',
                      },
                      {
                        name: "Dr. Muhammad Al-Ahmad",
                        role: "Consultant in Oral and Dental Surgery",
                        text: '"I have been dealing with Medex for over 10 years, and I have complete confidence in the quality of their products and services"',
                      },
                      {
                        name: "Dr. Muhammad Al-Ahmad",
                        role: "Consultant in Oral and Dental Surgery",
                        text: '"I have been dealing with Medex for over 10 years, and I have complete confidence in the quality of their products and services"',
                      },
                    ].map((t, i) => (
                      <div
                        key={`${dupeIdx}-${i}`}
                        className={`bg-card rounded-2xl p-4 lg:p-6 shadow-card border border-primary/5 transition-transform duration-500 ${i === 1 ? "-translate-x-8 lg:-translate-x-16" : ""
                          }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold overflow-hidden border border-primary/20">
                              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + dupeIdx}`} alt="Doctor" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="font-bold text-[13px] text-foreground">{t.name}</p>
                              <p className="text-[10px] text-muted-foreground">{t.role}</p>
                            </div>
                          </div>
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <span key={s} className="text-amber-400 text-[10px]">★</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-[11px] lg:text-[12px] text-muted-foreground leading-relaxed italic">{t.text}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* The Box - Positioned to cover the bottom part of cards */}
              <div className="mt-[20rem] z-20 pointer-events-none w-full">
                <img
                  src={medexBox}
                  alt="Medex Box"
                  className="w-full h-auto object-contain"
                  style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))" }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* News and Events */}
      <section className="py-20 bg-secondary/30">
        <div className="container bg-card rounded-3xl shadow-card p-8 lg:p-12" style={{ boxShadow: "0px 0px 20px 0px #DA676740" }}>
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-medium mb-4" style={{ width: "fit-content" }}>
                Medex
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                News and events
              </h2>
            </div>
            <p className="text-muted-foreground mt-4 lg:mt-8 max-w-sm text-sm leading-relaxed">
              Latest news and events related to Medix and its activities
            </p>
          </div>

          {/* News Cards - Embla Carousel */}
          <div className="overflow-hidden" ref={newsRef}>
            <div className="flex -ml-6">
              {[
                { img: news1, title: "Medex sponsors the scientific conference on dental implants", desc: "Medix participated as a platinum sponsor in the International Dental Implant Conference held in Dubai last week." },
                { img: news2, title: "Medex sponsors the scientific conference on dental implants", desc: "Medix participated as a platinum sponsor in the International Dental Implant Conference held in Dubai last week." },
                { img: news3, title: "Medex sponsors the scientific conference on dental implants", desc: "Medix participated as a platinum sponsor in the International Dental Implant Conference held in Dubai last week." },
              ].map((news, i) => (
                <div key={i} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-card transition-shadow">
                    <img src={news.img} alt={news.title} className="w-full h-[200px] object-cover" />
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-primary text-xs font-medium">News</span>
                        <span className="text-primary text-xs font-medium">August 5-7, 2023</span>
                      </div>
                      <h4 className="font-bold text-foreground text-sm mb-2">{news.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">{news.desc}</p>
                      <a href="#" className="text-primary text-xs font-medium hover:underline">Read More...</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation & View all */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              <button onClick={() => newsApi?.scrollPrev()} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => newsApi?.scrollNext()} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: newsCount }).map((_, i) => (
                <button key={i} onClick={() => newsApi?.scrollTo(i)} className={`h-1 rounded-full transition-all ${i === newsIndex ? "w-8 bg-primary" : "w-2 bg-border"}`} />
              ))}
            </div>
            <a href="#" className="text-primary text-sm font-medium hover:underline">
              View all news and events
            </a>
          </div>
        </div>
      </section>

      {/* Business Partners */}
      <PartnersGrid />

      {/* Join Our Community */}
      <section className="py-20">
        <div className="container">
          <div className="bg-card rounded-3xl shadow-card p-8 lg:p-12" style={{ boxShadow: "0px 0px 20px 0px #DA676740" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <span className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-medium mb-4">
                  Medex
                </span>
                <h2 className="text-2xl font-bold mb-8">Join to Our Community</h2>
              </div>
              <div className="flex justify-end items-center">
                <p className="text-muted-foreground mb-6 lg:mb-0 w-[500px] text-lg">
                  We are here to answer your questions and provide the necessary assistance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <div>

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
