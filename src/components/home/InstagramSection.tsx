import { Instagram } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={`reveal reveal-delay-${(i % 6) + 1} ${isVisible ? 'visible' : ''}`}>
              <div className="aspect-square bg-secondary rounded-md overflow-hidden group cursor-pointer relative img-zoom-wrap">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                  <div className="text-center text-[10px]">
                    <Instagram className="w-4 h-4 mx-auto mb-1" />
                    <p>IG Post</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
              </div>
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
