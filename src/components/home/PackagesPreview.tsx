import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const packages = [
  {
    booth: "Selfie Booth",
    name: "The Spark",
    description: "Everything you need for a stylish, share-worthy experience.",
    price: "$400",
    duration: "2 Hours",
    features: ["Salsa Booth (iPad-based)", "Photos, GIFs & Boomerangs", "Digital Sharing — Text, Email & QR"],
  },
  {
    booth: "Selfie Booth",
    name: "The Lumière",
    description: "Our signature selfie experience with prints, filters, and full customization.",
    price: "$600",
    duration: "3 Hours",
    features: ["2×6 & 4×6 Print Strips", "Custom Branded Template", "Glam Filter & AR Masks", "All Standard Backdrops"],
    featured: true,
  },
  {
    booth: "360° Booth",
    name: "360° Gold",
    description: "The immersive experience that turns every guest into content.",
    price: "$600",
    duration: "2 Hours",
    features: ["4K Ultra HD (GoPro)", "Slow-Motion 360° Video", "Custom Audio & Overlay"],
  },
];

const PackagesPreview = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Packages</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold mb-4">
              Our Packages
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Flexible experiences designed for every event. From intimate celebrations to grand affairs — there's a perfect package for you.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <AnimateOnScroll key={i} delay={i * 150}>
              <div
                className={`relative rounded-lg p-8 h-full flex flex-col border transition-all duration-300 hover:shadow-gold ${
                  pkg.featured
                    ? "border-primary/50 bg-primary/5"
                    : "border-border/30 bg-card"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <p className="text-xs tracking-[0.2em] uppercase text-primary mb-1">{pkg.booth}</p>
                <h3 className="font-heading text-2xl text-foreground font-bold mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{pkg.description}</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-heading text-2xl text-primary font-bold">{pkg.price}</span>
                  <span className="text-sm text-muted-foreground">· {pkg.duration}</span>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-sm text-foreground/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/packages">
                  <Button
                    variant={pkg.featured ? "gold" : "gold-outline"}
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={500}>
          <div className="text-center mt-12">
            <Link to="/packages">
              <Button variant="gold-outline" size="lg">
                View All Packages →
              </Button>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PackagesPreview;
