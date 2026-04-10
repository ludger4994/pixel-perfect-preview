import { Link } from "react-router-dom";
import { Phone, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/30">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <img src={logo} alt="Photo Booth Legends" className="w-[100px] h-auto" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              South Florida's premier luxury event experience brand. Transforming celebrations into unforgettable memories.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Packages", href: "/packages" },
                { label: "Backdrops", href: "/backdrops" },
                { label: "Gallery", href: "/gallery" },
                { label: "Reviews", href: "/reviews" },
                { label: "FAQ", href: "/faq" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">Our Services</h4>
            <div className="space-y-2">
              {[
                { label: "Selfie Booth", href: "/selfie-booth" },
                { label: "360° Booth", href: "/360-booth" },
                { label: "TXR20 Luxury Booth", href: "/txr20-booth" },
                { label: "Cold Sparks", href: "/cold-sparks" },
                { label: "Dancing on the Clouds", href: "/dancing-on-the-clouds" },
              ].map((s) => (
                <Link key={s.href} to={s.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a href="tel:9545485809" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (954) 548-5809
              </a>
              <a href="tel:7863844038" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (786) 384-4038
              </a>
              <a
                href="https://www.instagram.com/photoboothlegends"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @photoboothlegends
              </a>
              <p className="text-sm text-muted-foreground pt-2">
                Serving all of South Florida — Miami, Fort Lauderdale, Boca Raton & beyond
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Photo Booth Legends. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
