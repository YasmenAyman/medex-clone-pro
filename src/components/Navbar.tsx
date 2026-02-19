import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Play, Apple } from "lucide-react";
import MedexLogo from "./MedexLogo";
import { Button } from "./ui/button";
import langIcon from "@/assets/language.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/category" },
  { label: "Services", path: "#" },
  { label: "Scientific Academy", path: "#" },
  { label: "News and events", path: "#" },
  { label: "join us", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-2 lg:top-4 left-0 right-0 z-50 flex justify-center px-4">
      {/* Container for Nav + Language Button */}
      <div className="flex items-center gap-2 lg:gap-4 w-full max-w-7xl justify-center">
        {/* Main Nav Wrapper - Floating White Glassmorphism */}
        <div className="flex-1 flex h-14 items-center justify-between backdrop-blur-md border border-primary/30 rounded-full px-2 py-2 shadow-none">
          <Link to="/" className="flex-shrink-0 pl-2">
            <MedexLogo className="h-6 lg:h-10" />
          </Link>

          {/* Desktop nav - centered */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.path ||
                (link.path === "/category" && (pathname.startsWith("/category") || pathname.endsWith("/products")));
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-[12px] xl:text-[13px] font-medium transition-colors hover:text-primary whitespace-nowrap ${isActive ? "text-primary font-bold" : "text-foreground/70"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center">
              <Button className="rounded-full bg-primary hover:bg-primary/90 text-white gap-2 px-5 h-10 text-[13px] font-semibold border-none">
                Download App
                <div className="w-[1px] h-4 bg-white/30 mx-1" />
                <div className="flex items-center gap-1.5">
                  <Play className="h-3 w-3 fill-current" />
                  <Apple className="h-3.5 w-3.5" />
                </div>
              </Button>
            </div>

            {/* Mobile toggle */}
            <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Language Switcher - Independent Circle next to Nav */}
        <button className="flex-shrink-0 w-12 h-12 p-2 rounded-full overflow-hidden shadow-none border-none group transition-transform hover:scale-105 active:scale-95 flex items-center justify-center bg-primary">
          <img
            src={langIcon}
            alt="Language"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/src/assets/language.png";
            }}
          />
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {open && (
        <div className="absolute top-16 lg:top-20 left-4 right-4 lg:hidden rounded-2xl bg-white/95 backdrop-blur-md border border-primary/30 shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium p-3 rounded-lg transition-colors ${pathname === link.path ? "bg-primary/5 text-primary" : "text-foreground hover:bg-black/5"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 p-2 pt-4 border-t border-primary/10">
              <Button className="rounded-full bg-primary text-white gap-2 w-full h-12 text-sm font-bold">
                Download App
                <div className="w-[1px] h-4 bg-white/30 mx-1" />
                <Play className="h-3.5 w-3.5 fill-current" />
                <Apple className="h-3.5 w-3.5" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
