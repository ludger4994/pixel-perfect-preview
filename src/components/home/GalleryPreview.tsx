import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const galleryPlaceholders = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  alt: `Photo booth event gallery image ${i + 1} — South Florida luxury event`,
}));

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
          {galleryPlaceholders.map((item, i) => {
            const isLarge = i === 0 || i === 4;
            return (
              <AnimateOnScroll
                key={item.id}
                delay={i * 80}
                className={isLarge ? "md:col-span-2 md:row-span-2" : ""}
              >
                <div className="relative overflow-hidden rounded-lg bg-secondary group cursor-pointer aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs">
                    <div className="text-center">
                      <p className="text-muted-foreground/50">Client Photo</p>
                      <p className="text-muted-foreground/30 text-[10px]">Placeholder #{item.id}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll delay={400}>
          <div className="text-center mt-12">
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
