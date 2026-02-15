import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, Play, Apple } from "lucide-react";
import MedexLogo from "./MedexLogo";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "#" },
  { label: "Scientific Academy", path: "#" },
  { label: "News and events", path: "#" },
  { label: "join us", path: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <MedexLogo className="h-10" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.path ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button className="rounded-full gap-2 px-5">
            Download App
            <Play className="h-3.5 w-3.5 fill-current" />
            <Apple className="h-3.5 w-3.5" />
          </Button>
          <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors">
            <Globe className="h-5 w-5 text-primary" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 ${
                  pathname === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="rounded-full gap-2 mt-2 w-full">
              Download App
              <Play className="h-3.5 w-3.5 fill-current" />
              <Apple className="h-3.5 w-3.5" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
