import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Crown } from "lucide-react";

import silverSequinShimmer from "@/assets/silver-sequin-backdrop.jpg";
import flowerWall from "@/assets/flower-wall-backdrop.jpg";
import eventSequin from "@/assets/event-sequin-backdrop.jpg";

import silverSequin from "@/assets/backdrops/silver-sequin.jpg";
import silverCrystal from "@/assets/backdrops/silver-crystal.jpg";
import goldSequin from "@/assets/backdrops/gold-sequin.jpg";
import pinkFloralWall from "@/assets/backdrops/pink-floral-wall.jpg";
import greenBoxwood from "@/assets/backdrops/green-boxwood.jpg";
import grayGoldMarble from "@/assets/backdrops/gray-gold-marble.jpg";
import tealGoldMarble from "@/assets/backdrops/teal-gold-marble.jpg";
import colorSplash from "@/assets/backdrops/color-splash.jpg";

interface Backdrop {
  label: string;
  image: string;
  badge?: string;
}

const premiumBackdrops: Backdrop[] = [
  { label: "Silver Sequin Shimmer Wall", image: silverSequinShimmer, badge: "Most Popular" },
  { label: "White Rose Flower Wall", image: flowerWall, badge: "Wedding Favorite" },
  { label: "Gold Sequin Wall", image: goldSequin, badge: "Luxe" },
];

const regularBackdrops: Backdrop[] = [
  { label: "Silver Sequin Wall", image: silverSequin },
  { label: "Silver Crystal Curtain", image: silverCrystal },
  { label: "Pink Floral Wall", image: pinkFloralWall },
  { label: "Green Boxwood Hedge Wall", image: greenBoxwood },
  { label: "Gray & Gold Marble", image: grayGoldMarble },
  { label: "Teal & Gold Marble", image: tealGoldMarble },
  { label: "Color Splash Backdrop", image: colorSplash },
];

const BackdropsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Backdrop Collection</p>
              <h1 className="font-heading text-4xl md:text-6xl text-foreground font-bold mb-4">
                Elevate Your Setup
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Every backdrop is designed to make your guests look amazing and your event feel extraordinary.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Premium Backdrops */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimateOnScroll>
              <div className="flex items-center gap-3 mb-2">
                <Crown className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl text-foreground font-bold">Premium Backdrops</h2>
              </div>
              <p className="text-primary font-semibold text-lg mb-8">+$150 add-on with any package</p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumBackdrops.map((bd, i) => (
                <AnimateOnScroll key={bd.label} delay={i * 100}>
                  <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                    <div className="aspect-square overflow-hidden rounded-lg border border-primary/20">
                      <img
                        src={bd.image}
                        alt={`${bd.label} photo booth backdrop rental South Florida`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    {bd.badge && (
                      <span className="absolute top-3 right-3 bg-gradient-gold text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {bd.badge}
                      </span>
                    )}
                    <p className="mt-3 text-sm text-foreground font-medium text-center">{bd.label}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Standard Backdrops */}
        <section className="py-12 lg:py-16 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimateOnScroll>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground font-bold mb-2">Standard Backdrops</h2>
              <p className="text-muted-foreground mb-8">Included with The Lumière, The Ultimate Experience, and above</p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {regularBackdrops.map((bd, i) => (
                <AnimateOnScroll key={bd.label} delay={i * 100}>
                  <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <img
                        src={bd.image}
                        alt={`${bd.label} photo booth backdrop rental South Florida`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-3 text-sm text-foreground font-medium text-center">{bd.label}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Real event photo */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <AnimateOnScroll>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={eventSequin}
                  alt="Real event setup — Silver Sequin Wall in action South Florida"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4 italic">
                Real event setup — Silver Sequin Wall in action
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <AnimateOnScroll>
              <p className="text-foreground/70 text-sm leading-relaxed mb-8">
                Premium backdrops (Silver Sequin Shimmer, White Rose Flower Wall, Gold Sequin) are available as an add-on for <span className="text-primary font-semibold">+$150</span> with any package.
                Standard backdrops are included in The Lumière, The Ultimate Experience, and above.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg">Add a Backdrop to Your Package</Button>
              </Link>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BackdropsPage;
