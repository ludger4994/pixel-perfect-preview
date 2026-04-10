import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";
import { Sparkles } from "lucide-react";

import coldSparksImg from "@/assets/cold-sparks.jpg";
import dancingCloudsImg from "@/assets/dancing-clouds.jpg";

const SpecialEffectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Special Effects Rental South Florida | Photo Booth Legends"
        description="Breathtaking cold sparks and dancing on the clouds for South Florida weddings and events. Safe, cinematic, unforgettable. Book Photo Booth Legends today."
        canonical="https://photoboothlegends.com/special-effects"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Special Effects Rental",
          "provider": { "@type": "LocalBusiness", "name": "Photo Booth Legends" },
          "areaServed": { "@type": "Place", "name": "South Florida" },
          "description": "Photo Booth Legends offers cold sparks and dancing on the clouds special effects for weddings, quinceañeras, and events throughout South Florida."
        }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Special Effects</p>
              <h1 className="font-heading text-4xl md:text-6xl text-foreground font-bold mb-4">
                Special Effects Rental in South Florida
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Transform your most important moments into cinematic experiences with cold sparks and dancing on the clouds — 100% safe for indoor venues.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Effects Grid */}
        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimateOnScroll>
                <Link to="/cold-sparks" className="group block">
                  <div className="rounded-lg overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={coldSparksImg} alt="Cold sparks rental South Florida — Photo Booth Legends" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <h2 className="font-heading text-2xl text-foreground font-bold">Cold Sparks</h2>
                      </div>
                      <p className="text-foreground/60 mb-4">
                        Towering fountains of shimmering, ice-cold sparkles that transform any moment into pure cinema. No heat, no fire, no smoke — 100% safe for indoor venues. Perfect for first dances, grand entrances, and dramatic reveals.
                      </p>
                      <p className="text-primary text-sm font-medium">Starting at $299 · Learn More →</p>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <Link to="/dancing-on-the-clouds" className="group block">
                  <div className="rounded-lg overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={dancingCloudsImg} alt="Dancing on the clouds rental South Florida — Photo Booth Legends" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <h2 className="font-heading text-2xl text-foreground font-bold">Dancing on the Clouds</h2>
                      </div>
                      <p className="text-foreground/60 mb-4">
                        A thick, rolling blanket of pure white fog that hugs the floor — making it look and feel like you're floating on air. The most requested first dance effect in South Florida. Safe, clean, no residue.
                      </p>
                      <p className="text-primary text-sm font-medium">Starting at $200 · Learn More →</p>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            </div>

            {/* Bundle */}
            <AnimateOnScroll delay={200}>
              <div className="mt-12 p-8 rounded-lg border border-primary/30 bg-primary/5 text-center">
                <h2 className="font-heading text-2xl text-foreground font-bold mb-3">
                  Full Effect Bundle — Save $99
                </h2>
                <p className="text-foreground/60 mb-6 max-w-xl mx-auto">
                  Combine cold sparks and dancing on the clouds for the ultimate cinematic experience. Our most popular wedding add-on — both effects for $400 instead of $499.
                </p>
                <Link to="/book">
                  <Button variant="gold" size="lg">Book the Bundle</Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold mb-6">
                Ready to Add Special Effects to Your Event?
              </h2>
              <p className="text-foreground/60 text-lg mb-10">
                Photo Booth Legends brings cinematic magic to events across South Florida — from Miami to West Palm Beach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="gold" size="xl">Contact Us</Button>
                </Link>
                <Link to="/packages">
                  <Button variant="outline" size="xl">View Packages</Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SpecialEffectsPage;
