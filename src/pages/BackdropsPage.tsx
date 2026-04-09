import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

import grayGoldMarble from "@/assets/backdrops/gray-gold-marble.jpg";
import pinkFloralWall from "@/assets/backdrops/pink-floral-wall.jpg";
import silverSequin from "@/assets/backdrops/silver-sequin.jpg";
import tealGoldMarble from "@/assets/backdrops/teal-gold-marble.jpg";
import greenBoxwood from "@/assets/backdrops/green-boxwood.jpg";
import silverCrystal from "@/assets/backdrops/silver-crystal.jpg";
import goldSequin from "@/assets/backdrops/gold-sequin.jpg";
import colorSplash from "@/assets/backdrops/color-splash.jpg";
import eventSequin from "@/assets/event-sequin-backdrop.jpg";

interface Backdrop {
  label: string;
  image: string;
  description: string;
  alt: string;
}

const pillowTopBackdrops: Backdrop[] = [
  {
    label: "Gray & Gold Marble",
    image: grayGoldMarble,
    description: "Sophisticated gray marble with gold veining — elegant and timeless",
    alt: "Gray and gold marble photo booth backdrop South Florida",
  },
  {
    label: "Silver Crystal",
    image: silverCrystal,
    description: "Sparkling crystal facets — dazzling and photo-ready",
    alt: "Silver crystal backdrop photo booth rental",
  },
  {
    label: "Teal & Gold Marble",
    image: tealGoldMarble,
    description: "Dreamy teal marble with gold accents — unique and eye-catching",
    alt: "Teal and gold marble photo booth backdrop",
  },
  {
    label: "Green Boxwood Hedge",
    image: greenBoxwood,
    description: "Fresh green boxwood hedge — natural, versatile, and always elegant",
    alt: "Green boxwood hedge wall photo booth backdrop",
  },
  {
    label: "Color Splash",
    image: colorSplash,
    description: "Vibrant ink splash burst — bold, fun, and full of energy",
    alt: "Color splash backdrop photo booth rental",
  },
  {
    label: "Silver Sequin Wall",
    image: silverSequin,
    description: "Classic silver sequin shimmer — catches light beautifully in photos",
    alt: "Silver sequin shimmer wall photo booth backdrop South Florida",
  },
  {
    label: "Gold Sequin Wall",
    image: goldSequin,
    description: "Rich gold sequin shimmer — glamorous and bold",
    alt: "Gold sequin wall photo booth backdrop South Florida",
  },
  {
    label: "Pink Floral Wall",
    image: pinkFloralWall,
    description: "Lush pink and white flower wall — romantic and vibrant",
    alt: "Pink floral flower wall photo booth backdrop",
  },
];

const BackdropsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-12 lg:pb-16">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Backdrop Collection</p>
              <h1 className="font-heading text-4xl md:text-6xl text-foreground font-bold mb-4">
                Elevate Your Setup
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-6">
                Every backdrop is designed to make your guests look stunning and your event feel extraordinary. Included with select packages or available as a premium add-on.
              </p>
              <div className="w-24 h-px bg-primary mx-auto" />
            </AnimateOnScroll>
          </div>
        </section>

        {/* Pillow Top Backdrops */}
        <section className="pb-16 lg:pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimateOnScroll>
              <p className="text-xs tracking-[0.15em] uppercase text-primary font-medium mb-1">
                Pillow Top Backdrops
              </p>
              <div className="w-16 h-px bg-primary/40 mb-6" />
            </AnimateOnScroll>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {pillowTopBackdrops.map((bd, i) => (
                <BackdropCard key={bd.label} backdrop={bd} delay={i * 80} />
              ))}
            </div>
          </div>
        </section>

        {/* Premium Backdrops */}
        <section className="pb-16 lg:pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimateOnScroll>
              <p className="text-xs tracking-[0.15em] uppercase text-primary font-medium mb-1">
                Premium Backdrops
              </p>
              <div className="w-16 h-px bg-primary/40 mb-6" />
            </AnimateOnScroll>
            <div className="rounded-xl border border-dashed border-primary/20 bg-card/30 p-12 text-center">
              <p className="text-foreground/40 text-sm tracking-wide">
                Coming Soon — Premium backdrops will be added here.
              </p>
            </div>
          </div>
        </section>

        {/* Real event photo */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <AnimateOnScroll>
              <p className="text-xs tracking-[0.15em] uppercase text-primary font-medium mb-1 text-center">
                See It In Action
              </p>
              <div className="w-16 h-px bg-primary/40 mx-auto mb-6" />
              <div className="relative rounded-xl overflow-hidden" style={{ maxHeight: 500 }}>
                <img
                  src={eventSequin}
                  alt="Real event setup — Silver Sequin Wall in action South Florida"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-foreground text-sm tracking-[0.1em] uppercase font-medium">
                    Real Event Setup — Silver Sequin Wall
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-2xl md:text-4xl text-foreground font-bold mb-4">
                Don't See What You're Looking For?
              </h2>
              <p className="text-foreground/60 text-sm leading-relaxed mb-8">
                We offer additional backdrop options and can accommodate custom requests for your event. Contact us to discuss your vision.
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

/* ── Card Component ── */
const BackdropCard = ({ backdrop, delay }: { backdrop: Backdrop; delay: number }) => (
  <AnimateOnScroll delay={delay}>
    <div className="group cursor-pointer">
      <div
        className="relative overflow-hidden bg-[hsl(var(--card))] border border-primary/15"
        style={{ borderRadius: 12 }}
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={backdrop.image}
            alt={backdrop.alt}
            className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
      <p className="mt-2.5 text-sm text-foreground font-medium">{backdrop.label}</p>
    </div>
  </AnimateOnScroll>
);

export default BackdropsPage;
