import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Instagram } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-gold" />
      <div ref={ref} className="relative container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground font-bold mb-6">
            Ready to Create an{" "}
            <span className="text-gradient-gold">Unforgettable Experience?</span>
          </h2>
          <p className="text-foreground/60 text-lg mb-10 max-w-xl mx-auto">
            Book your experience today and let Photo Booth Legends handle the magic.
          </p>
        </div>

        <div className={`reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/book">
              <Button variant="gold" size="xl" className="btn-premium">
                Book Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="xl" className="btn-premium">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        <div className={`reveal reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-foreground/50">
            <a href="tel:9545485809" className="flex items-center gap-2 hover:text-primary transition-colors font-heading tracking-[0.05em]" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}>
              <Phone className="w-4 h-4" />
              954-548-5809
            </a>
            <a
              href="https://www.instagram.com/photoboothlegends"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @photoboothlegends
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
