import logo from "@/assets/logo.png";

const MedexLogo = ({ className = "h-10" }: { className?: string }) => (
  <img
    src={logo}
    alt="Medex Logo"
    className={className}
    onError={(e) => {
      (e.target as HTMLImageElement).src = "/src/assets/logo.png";
    }}
  />
);

export default MedexLogo;
