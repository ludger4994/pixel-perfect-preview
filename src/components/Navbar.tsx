import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const photoBoothLinks = [
  { label: "Selfie Booth", href: "/selfie-booth" },
  { label: "360 Booth", href: "/360-booth" },
  { label: "TXR20 Luxury Booth", href: "/txr20-booth" },
];

const specialEffectsLinks = [
  { label: "Cold Sparks", href: "/cold-sparks" },
  { label: "Dancing on the Clouds", href: "/dancing-on-the-clouds" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Photo Booths", href: "/photo-booths", children: photoBoothLinks },
  { label: "Special Effects", href: "/special-effects", children: specialEffectsLinks },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold text-primary">
            Photo Booth
          </span>
          <span className="font-heading text-2xl font-light text-foreground">
            Legends
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={link.href}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="w-3 h-3" />}
              </Link>

              {link.children && openDropdown === link.label && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-lg p-2 min-w-[220px] shadow-gold">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-3 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-md transition-colors duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden lg:block">
            <Button variant="gold" size="default">
              Book Now
            </Button>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-background/98 backdrop-blur-xl z-40 flex flex-col">
          <div className="flex items-center justify-between px-4 py-5">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold text-primary">Photo Booth</span>
              <span className="font-heading text-2xl font-light text-foreground">Legends</span>
            </Link>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-foreground" aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col px-6 py-8 gap-1 overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href}
                  className={`block py-3 text-lg font-medium transition-colors ${
                    location.pathname === link.href ? "text-primary" : "text-foreground/70"
                  }`}
                  onClick={() => !link.children && setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 border-l border-border/30">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block py-2 text-base text-foreground/50 hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <Button variant="gold" size="lg" className="w-full">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
