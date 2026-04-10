import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import glamBoothImg from "@/assets/glam-booth-main.jpg";
import threeSixtyImg from "@/assets/360-booth-main.jpg";
import coldSparksImg from "@/assets/cold-sparks.jpg";
import dancingCloudsImg from "@/assets/dancing-clouds.jpg";

const heroImages = [glamBoothImg, threeSixtyImg, coldSparksImg, dancingCloudsImg];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Photo booth event experience ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center ken-burns transition-opacity duration-1000 ${
              i === currentImage ? "opacity-100" : "opacity-0"
            }`}
            width={1920}
            height={1080}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-4xl pt-20">
        <div className="reveal visible reveal-delay-1">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              South Florida's Premier{" "}
              <span className="text-gradient-gold">Luxury Photo Booth</span>{" "}
              Experience
            </h1>
        </div>
        <div className="reveal visible reveal-delay-2">
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            Photo Booth Legends is South Florida's premier photo booth and event experience company — selfie booths, 360° booths, cold sparks &amp; dancing on the clouds for weddings, birthdays, quinceañeras &amp; corporate events. Serving Miami, Fort Lauderdale, Boca Raton &amp; West Palm Beach.
          </p>
        </div>
        <div className="reveal visible reveal-delay-3">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button variant="gold" size="xl" className="btn-premium">
                Book Now
              </Button>
            </Link>
            <Link to="/packages">
              <Button variant="outline" size="xl" className="btn-premium">
                View Our Packages
              </Button>
            </Link>
          </div>
        </div>
        <div className="reveal visible reveal-delay-4">
          <p className="mt-10 text-sm text-primary/80 tracking-widest uppercase">
            ★ Serving South Florida's Most Unforgettable Events ★
          </p>
        </div>
      </div>

      {/* Scroll chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span className="text-[10px] tracking-[0.15em] uppercase text-primary/60">
          Scroll
        </span>
        <svg
          className="chevron-bounce w-5 h-5 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
