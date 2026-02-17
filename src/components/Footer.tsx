import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Send, Facebook, Linkedin, MessageCircle } from "lucide-react";
import MedexLogo from "./MedexLogo";
import { Input } from "./ui/input";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "#" },
  { label: "Medex Academy", path: "#" },
  { label: "News and events", path: "#" },
  { label: "Join US", path: "#" },
];

const productLinks = [
  "Dental implants",
  "CAD/CAM systems",
  "Laser devices",
  "Cosmetics",
  "Clinic equipment",
  "Medical consumables",
  "Disinfectants and protection",
];

const Footer = () => (
  <footer className="bg-[#FF89891A] pt-16 pb-6">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Column 1 - Logo & info */}
        <div>
          <MedexLogo className="h-10 mb-4" />
          <p className="text-sm text-foreground/70 leading-relaxed mb-6">
            Medix is a leading distributor of medical supplies and dental implants in the Middle East. We provide the latest global technologies for medical centers and dental clinics.
          </p>
          <div className="flex gap-2 mb-5">
            <a href="#" className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-lg border border-black hover:bg-black/80 transition-all transition-colors">
              <AppleIcon className="h-6 w-6" />
              <div className="flex flex-col">
                <span className="text-[10px] leading-tight opacity-70">Download on the</span>
                <span className="text-xs font-semibold leading-tight">App Store</span>
              </div>
            </a>
            <a href="#" className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-lg border border-black hover:bg-black/80 transition-all transition-colors">
              <PlayIcon className="h-6 w-6" />
              <div className="flex flex-col">
                <span className="text-[10px] leading-tight opacity-70">GET IT ON</span>
                <span className="text-xs font-semibold leading-tight">Google Play</span>
              </div>
            </a>
          </div>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 flex items-center justify-center text-foreground hover:text-primary transition-colors">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center text-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center text-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-primary font-bold text-lg mb-6">Quick links</h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.path} className="text-sm text-foreground hover:text-primary transition-colors font-medium">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Products */}
        <div>
          <h4 className="text-primary font-bold text-lg mb-6">Products</h4>
          <ul className="space-y-3">
            {productLinks.map((p) => (
              <li key={p}>
                <Link to="/products" className="text-sm text-foreground hover:text-primary transition-colors font-medium">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h4 className="text-primary font-bold text-lg mb-6">Newsletter</h4>
          <p className="text-sm text-foreground/70 mb-5">
            Subscribe to our newsletter to receive all the latest news about our products and exclusive offers.
          </p>
          <div className="relative flex items-center mb-6">
            <Input 
              placeholder="Email" 
              className="pr-12 py-6 rounded-xl border-none shadow-sm focus-visible:ring-primary/20 bg-white" 
            />
            <button className="absolute right-1 w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
              <Send className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm font-medium">
              <Phone className="h-5 w-5 text-primary" /> 01158150888
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
              <MapPin className="h-5 w-5 text-primary" /> القاهره - التجمع الاول- ف15
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
              <Mail className="h-5 w-5 text-primary" /> info@medex.com
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary/10 pt-6 mt-12 flex justify-center items-center gap-2 text-primary font-medium text-sm">
        <span>© 2023 Development By</span>
        <span className="font-bold flex items-center gap-1">
          T<span className="text-foreground">Q</span>NIA
        </span>
        <span>All Right Reserved</span>
      </div>
    </div>
  </footer>
);

// App Store Icon
const AppleIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

// Play Store Icon
const PlayIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5,19.03V4.97c0-0.74,0.79-1.18,1.41-0.78l11.13,7.03c0.55,0.35,0.55,1.2,0,1.55L6.41,19.81C5.79,20.21,5,19.77,5,19.03z"/>
  </svg>
);

export default Footer;
