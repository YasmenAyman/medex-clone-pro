interface HeroBannerProps {
  title: string;
  backgroundImage?: string;
}

const HeroBanner = ({ title, backgroundImage }: HeroBannerProps) => (
  <section
    className="relative mx-4 sm:mx-8 lg:mx-12 rounded-2xl overflow-hidden bg-muted h-[200px] sm:h-[260px] lg:h-[320px] flex items-center justify-center"
    style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
  >
    <div className="absolute inset-0 bg-foreground/30 rounded-2xl" />
    <h1 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
      {title}
    </h1>
  </section>
);

export default HeroBanner;
