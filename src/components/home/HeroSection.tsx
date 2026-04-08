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
      <div className="absolute inset-0">
        {heroImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Photo booth event experience ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              i === currentImage ? "opacity-100" : "opacity-0"
            }`}
            width={1920}
            height={1080}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-4xl pt-20">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up">
          More Than a Photo Booth.{" "}
          <span className="text-gradient-gold">An Experience</span> Your Guests
          Will Never Forget.
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          South Florida's Premier Event Experience Brand — Weddings, Birthdays,
          Corporate Events & More.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Link to="/book">
            <Button variant="gold" size="xl">
              Book Now
            </Button>
          </Link>
          <Link to="/packages">
            <Button variant="outline" size="xl">
              View Our Packages
            </Button>
          </Link>
        </div>
        <p className="mt-10 text-sm text-primary/80 tracking-widest uppercase animate-fade-up" style={{ animationDelay: "0.6s" }}>
          ★ Serving South Florida's Most Unforgettable Events ★
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
