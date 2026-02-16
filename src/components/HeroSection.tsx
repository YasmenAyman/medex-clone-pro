import { ArrowLeft, ArrowRight, ArrowRight as ArrowRightIcon, Star, Heart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import MedexLogo from "@/components/MedexLogo";
import heroBg from "@/assets/hero-bg.png";
import heroTop from "@/assets/hero-top.png";
import heroBottom from "@/assets/hero-bottom.png";

const statCards = [
  {
    icon: <Star className="h-4 w-4 text-primary-foreground" />,
    iconBg: "bg-primary",
    position: "left-6 sm:left-10 lg:left-16 top-1/2 -translate-y-1/2",
  },
  {
    icon: <Heart className="h-4 w-4 text-primary-foreground" />,
    iconBg: "bg-primary",
    position: "left-1/2 -translate-x-1/2 bottom-[30%] sm:bottom-[25%]",
  },
  {
    icon: <ShieldCheck className="h-4 w-4 text-primary-foreground" />,
    iconBg: "bg-primary",
    position: "right-6 sm:right-10 lg:right-16 top-1/2 -translate-y-1/2",
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background min-h-[600px] lg:min-h-[700px] flex flex-col">
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6,
        }}
      />

      {/* Top teeth image */}
      <div className="absolute top-0 left-0 right-0 z-[1] pointer-events-none">
        <img src={heroTop} alt="" className="w-full object-cover object-bottom" style={{ maxHeight: "120px" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 pb-48 sm:pb-56 lg:pb-64">
        <MedexLogo className="h-10 sm:h-12 mb-6" />

        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight max-w-3xl mb-8">
          <span className="text-primary">Medex</span>{" "}
          <span className="text-foreground">offers the latest technologies and</span>
          <br />
          <span className="text-foreground">medical products for </span>
          <span className="text-primary">dental implants</span>
        </h1>

        <div className="flex gap-3">
          <Button className="rounded-full gap-2 px-6 h-10">
            Discover our products
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="rounded-full px-6 h-10 border-foreground/30">
            Contact Us
          </Button>
        </div>

        {/* Stat cards */}
        {statCards.map((card, i) => (
          <div
            key={i}
            className={`absolute ${card.position} z-20 bg-card rounded-xl p-3 sm:p-4 shadow-md border border-border/50 hidden sm:block`}
            style={{ maxWidth: "170px" }}
          >
            <div className={`w-7 h-7 rounded-full ${card.iconBg} flex items-center justify-center mb-2`}>
              {card.icon}
            </div>
            <p className="text-sm font-bold text-foreground">98.5% Success Rate</p>
            <p className="text-[10px] text-muted-foreground leading-tight mt-1">
              FDA approved and CE marked. Meeting the highest international quality standards.
            </p>
          </div>
        ))}
      </div>

      {/* Left/Right arrows */}
      <button className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-secondary transition-colors shadow-sm">
        <ArrowLeft className="h-4 w-4 text-foreground" />
      </button>
      <button className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-secondary transition-colors shadow-sm">
        <ArrowRight className="h-4 w-4 text-foreground" />
      </button>

      {/* Bottom dental implants image */}
      <div className="absolute bottom-0 left-0 right-0 z-[5] pointer-events-none">
        <img src={heroBottom} alt="Dental implants" className="w-full object-cover object-top" style={{ maxHeight: "280px" }} />
      </div>
    </section>
  );
};

export default HeroSection;
