import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import threeSixtyMain from "@/assets/360-booth-main.jpg";
import glamMain from "@/assets/glam-booth-main.jpg";
import silverSequin from "@/assets/silver-sequin-backdrop.jpg";
import flowerWall from "@/assets/flower-wall-backdrop.jpg";
import eventSequin from "@/assets/event-sequin-backdrop.jpg";
import luxBooth from "@/assets/lux-booth.jpg";

const galleryImages = [
  { src: threeSixtyMain, alt: "360 photo booth rental South Florida event" },
  { src: glamMain, alt: "Glam selfie booth rental Miami" },
  { src: silverSequin, alt: "Silver sequin backdrop photo booth Miami" },
  { src: flowerWall, alt: "White flower wall backdrop wedding South Florida" },
  { src: eventSequin, alt: "Real South Florida event silver sequin backdrop" },
  { src: luxBooth, alt: "TXR20 luxury photo booth product shot" },
];

const GalleryPreview = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Our Work</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold">
              Moments We've Created
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {galleryImages.map((item, i) => {
            const isLarge = i === 0 || i === 4;
            return (
              <AnimateOnScroll
                key={i}
                delay={i * 80}
                className={isLarge ? "md:col-span-2 md:row-span-2" : ""}
              >
                <div className="relative overflow-hidden rounded-lg bg-secondary group cursor-pointer aspect-square">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <div className="text-center mt-4">
          <p className="text-xs text-muted-foreground italic">Real South Florida Events</p>
        </div>

        <AnimateOnScroll delay={400}>
          <div className="text-center mt-8">
            <Link to="/gallery">
              <Button variant="gold-outline" size="lg">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default GalleryPreview;
