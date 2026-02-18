import { useCallback } from "react";
import { ArrowLeft, ArrowRight, ArrowRight as ArrowRightIcon, Star, Heart, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import heroBg from "@/assets/hero-bg.png";
import heroTop from "@/assets/hero-top.png";
import heroBottom from "@/assets/hero-bottom.png";
import heroLogo from "@/assets/hero-logo-full.png";

const slides = [
  {
    title: {
      part1: "Medex",
      part2: "offers the latest technologies and",
      part3: "medical products for ",
      part4: "dental implants"
    },
    cta: "Discover our products",
    secondaryCta: "Contact Us"
  },
  {
    title: {
      part1: "Innovation",
      part2: "in medical distribution and",
      part3: "state of the art ",
      part4: "healthcare solutions"
    },
    cta: "Learn More",
    secondaryCta: "Services"
  }
];

const statCards = [
  {
    icon: <Star className="h-4 w-4 text-white fill-current" />,
    iconBg: "bg-red-500",
    position: "",
    label: "98.5% Success Rate"
  },
  {
    icon: <ShieldCheck className="h-4 w-4 text-white fill-current" />,
    iconBg: "bg-red-500",
    position: "mt-[150px]",
    label: "98.5% Success Rate"
  },
  {
    icon: <Heart className="h-4 w-4 text-white fill-current" />,
    iconBg: "bg-red-500",
    position: "",
    label: "98.5% Success Rate"
  },
];

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden bg-white min-h-[600px] lg:min-h-[1000px] flex flex-col">
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />

      {/* Top teeth image */}
      <div className="absolute top-0 left-0 right-0 z-[2] pointer-events-none">
        <img src={heroTop} alt="" className="w-full object-cover object-top" />
      </div>
      <div className="container">

        {/* Slider */}
        <div className="relative z-10 flex-1 flex flex-col pt-[200px] pb-[10px]">
          <div className="overflow-hidden h-full" ref={emblaRef}>
            <div className="flex h-full">
              {slides.map((slide, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 flex flex-col items-center justify-center text-center px-4">
                  <div className="mb-6 lg:mb-8">
                    <img src={heroLogo} alt="Medex" className="h-8 lg:h-12 w-auto object-contain" />
                  </div>

                  <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold leading-tight max-w-5xl mb-10 tracking-tight">
                    <span className="text-primary italic">{slide.title.part1}</span>{" "}
                    <span className="text-foreground">{slide.title.part2}</span>
                    <br />
                    <span className="text-foreground">{slide.title.part3}</span>
                    <span className="text-primary italic">{slide.title.part4}</span>
                  </h1>

                  <div className="flex items-center gap-4 lg:gap-6">
                    <Button className="rounded-full bg-primary hover:bg-primary/90 text-white gap-3 px-8 h-12 lg:h-14 text-sm font-bold shadow-lg shadow-primary/20">
                      {slide.cta}
                      <div className="bg-white rounded-full p-1 border border-primary/20">
                        <ArrowRightIcon className="h-4 w-4 text-primary" />
                      </div>
                    </Button>
                    <Button variant="outline" className="rounded-full px-8 h-12 lg:h-14 text-sm font-bold border-primary text-primary hover:bg-primary/5 transition-all">
                      {slide.secondaryCta}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between gap-4" style={{ alignItems: "flex-start" }}>
            {/* Floating Stat cards - Absolute to the whole section for design consistency */}
            {statCards.map((card, i) => (
              <div
                key={i}
                className={`${card.position} z-20 bg-white rounded-2xl p-4 lg:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-primary/5 hidden sm:flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300`}
                style={{ maxWidth: "220px" }}
              >
                <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full ${card.iconBg} flex items-center justify-center mb-3 shadow-lg shadow-red-500/30 w-fit mx-auto`}>
                  <div className="bg-white/20 p-2 rounded-full">
                    {card.icon}
                  </div>
                </div>
                <p className="text-[13px] lg:text-[15px] font-bold text-foreground mb-1">{card.label}</p>
                <p className="text-[10px] lg:text-[11px] text-muted-foreground leading-relaxed">
                  FDA approved and CE marked. Meeting the highest international quality standards.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-primary/20 bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-xl group"
        >
          <ChevronLeft className="h-6 w-6 lg:h-8 lg:w-8 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-primary/20 bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-xl group"
        >
          <ChevronRight className="h-6 w-6 lg:h-8 lg:w-8 group-hover:scale-110 transition-transform" />
        </button>
      </div>
      {/* Bottom dental implants image */}
      <div className=" z-[5] pointer-events-none">
        <img src={heroBottom} alt="Dental implants" className="w-full object-100% object-top" />
      </div>
    </section>
  );
};

export default HeroSection;
