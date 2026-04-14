import { Instagram } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import img1 from "@/assets/glam-booth-main.jpg";
import img2 from "@/assets/360-booth-main.jpg";
import img3 from "@/assets/silver-sequin-backdrop.jpg";
import img4 from "@/assets/hero-party.jpg";
import img5 from "@/assets/flower-wall-backdrop.jpg";
import img6 from "@/assets/360-booth.jpg";
import img7 from "@/assets/cold-sparks.jpg";
import img8 from "@/assets/dancing-clouds.jpg";

const igImages = [
  { src: img1, alt: "Selfie booth experience South Florida event" },
  { src: img2, alt: "360 photo booth rental South Florida" },
  { src: img3, alt: "Silver sequin backdrop birthday party" },
  { src: img4, alt: "Photo booth party experience South Florida" },
  { src: img5, alt: "White flower wall backdrop wedding" },
  { src: img6, alt: "360 booth guests with props" },
  { src: img7, alt: "Cold sparks first dance effect" },
  { src: img8, alt: "Dancing on the clouds wedding" },
];

const InstagramSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-heading text-primary/[0.04] whitespace-nowrap select-none"
          style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', fontWeight: '600', letterSpacing: '-0.02em' }}
        >
          @photoboothlegends
        </span>
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`}>
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Follow Along</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold mb-4">
              @photoboothlegends
            </h2>
            <p className="text-muted-foreground">Behind-the-scenes and event highlights from our latest celebrations.</p>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 max-w-4xl mx-auto">
          {igImages.map((item, i) => (
            <div key={i} className={`reveal reveal-delay-${(i % 6) + 1} ${isVisible ? 'visible' : ''}`}>
              <a
                href="https://www.instagram.com/photoboothlegends"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label="View @photoboothlegends on Instagram"
              >
                <div className="aspect-square overflow-hidden rounded-md img-zoom-wrap">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className={`reveal reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/photoboothlegends"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <Instagram className="w-5 h-5" />
              Follow @photoboothlegends
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
