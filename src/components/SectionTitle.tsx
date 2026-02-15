interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
}

const SectionTitle = ({ title, subtitle, className = "", titleClassName = "" }: SectionTitleProps) => (
  <div className={`mb-8 ${className}`}>
    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-primary ${titleClassName}`}>
      {title}
    </h2>
    {subtitle && <p className="text-muted-foreground mt-2 max-w-2xl">{subtitle}</p>}
  </div>
);

export default SectionTitle;
