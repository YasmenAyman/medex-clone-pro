import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Send } from "lucide-react";
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
  <footer className="bg-secondary pt-16 pb-6">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Column 1 - Logo & info */}
        <div>
          <MedexLogo className="h-10 mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Medix is a leading distributor of medical supplies and dental implants in the Middle East. We provide the latest global technologies for medical centers and dental clinics.
          </p>
          <div className="flex gap-2 mb-5">
            <div className="h-9 px-3 rounded-md bg-foreground text-primary-foreground flex items-center gap-1.5 text-xs font-medium">
              <Apple className="h-4 w-4" /> App Store
            </div>
            <div className="h-9 px-3 rounded-md bg-foreground text-primary-foreground flex items-center gap-1.5 text-xs font-medium">
              <Play className="h-4 w-4" /> Google Play
            </div>
          </div>
          <div className="flex gap-3">
            {["whatsapp", "facebook", "linkedin"].map((s) => (
              <a key={s} href="#" className="w-8 h-8 rounded-full bg-foreground text-primary-foreground flex items-center justify-center text-xs hover:opacity-80 transition-opacity">
                {s[0].toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-primary font-semibold mb-4">Quick links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.path} className="text-sm text-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Products */}
        <div>
          <h4 className="text-primary font-semibold mb-4">Products</h4>
          <ul className="space-y-2.5">
            {productLinks.map((p) => (
              <li key={p}>
                <Link to="/products" className="text-sm text-foreground hover:text-primary transition-colors">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h4 className="text-primary font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Subscribe to our newsletter to receive all the latest news about our products and exclusive offers.
          </p>
          <div className="relative">
            <Input placeholder="Email" className="pr-12 rounded-lg bg-background" />
            <button className="absolute right-1 top-1 bottom-1 w-10 rounded-md bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
              <Send className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-primary" /> 01158150888
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-primary" /> القاهره - التجمع الاول- ف15
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-primary" /> info@medex.com
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-5 text-center text-xs text-muted-foreground">
        © 2023 Development By <span className="text-primary font-semibold">TONIA</span> All Right Reserved
      </div>
    </div>
  </footer>
);

// Need these icons inline since they're special
const Apple = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
);

const Play = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M3 22V2l18 10L3 22z"/></svg>
);

export default Footer;
