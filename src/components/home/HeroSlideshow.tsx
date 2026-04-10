import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img01 from "@/assets/slideshow/asset_015_CpK2ZazATnx.jpg";
import img02 from "@/assets/slideshow/asset_019_CfyfPqjAA2s.jpg";
import img03 from "@/assets/slideshow/asset_024_C9YDrF1xvUB.jpg";
import img04 from "@/assets/slideshow/asset_025_DHRxqKbRsd8.jpg";
import img05 from "@/assets/slideshow/asset_028_C5bi7RUxPix.jpg";
import img06 from "@/assets/slideshow/asset_043_CrdqpD7AqwR.jpg";
import img07 from "@/assets/slideshow/asset_049_CzjiAL_r_le.jpg";
import img08 from "@/assets/slideshow/asset_059_CwyDpC_OpAj.jpg";
import img09 from "@/assets/slideshow/asset_060_DGivoL_Rajt.jpg";
import img10 from "@/assets/slideshow/asset_068_DGszExjxQk4.jpg";
import img11 from "@/assets/slideshow/asset_070_Ck-pXuDgDCE.jpg";
import img12 from "@/assets/slideshow/asset_078_CmUNogiAkBh.jpg";
import img13 from "@/assets/slideshow/asset_081_Cro6efLrWjn.jpg";
import img14 from "@/assets/slideshow/asset_087_CrapZbFg4zR.jpg";
import img15 from "@/assets/slideshow/asset_098_C_B0NdAx4FW.jpg";
import img16 from "@/assets/slideshow/asset_099_DGZXYLERMef.jpg";

const slides = [
  img01, img02, img03, img04, img05, img06, img07, img08,
  img09, img10, img11, img12, img13, img14, img15, img16,
];

// Double the slides for seamless infinite scroll
const allSlides = [...slides, ...slides];

const SCROLL_SPEED = 0.6; // pixels per frame
const CARD_WIDTH = 280;
const CARD_GAP = 16;
const ITEM_WIDTH = CARD_WIDTH + CARD_GAP;

const HeroSlideshow = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const directionRef = useRef<1 | -1>(1); // 1 = left, -1 = right
  const animRef = useRef<number>(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Keep pausedRef in sync
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  const totalWidth = slides.length * ITEM_WIDTH;

  const animate = useCallback(() => {
    if (!pausedRef.current && trackRef.current) {
      offsetRef.current += SCROLL_SPEED * directionRef.current;

      // Seamless loop: reset when we've scrolled one full set
      if (offsetRef.current >= totalWidth) {
        offsetRef.current -= totalWidth;
      } else if (offsetRef.current <= 0) {
        offsetRef.current += totalWidth;
      }

      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
    }
    animRef.current = requestAnimationFrame(animate);
  }, [totalWidth]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  const jumpBy = (dir: number) => {
    // Smooth jump by 3 cards
    const jumpDistance = ITEM_WIDTH * 3;
    const startOffset = offsetRef.current;
    const targetOffset = startOffset + jumpDistance * dir;
    const startTime = performance.now();
    const duration = 600;

    const animateJump = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      offsetRef.current = startOffset + (targetOffset - startOffset) * ease;

      if (offsetRef.current >= totalWidth) offsetRef.current -= totalWidth;
      if (offsetRef.current <= 0) offsetRef.current += totalWidth;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }

      if (progress < 1) {
        requestAnimationFrame(animateJump);
      }
    };
    requestAnimationFrame(animateJump);
  };

  const changeDirection = (dir: 1 | -1) => {
    directionRef.current = dir;
  };

  return (
    <section className="relative py-12 overflow-hidden bg-background">
      {/* Section heading */}
      <div className="text-center mb-8 px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-2 font-body">
          Our Events
        </p>
        <h2 className="font-heading text-2xl md:text-3xl text-foreground">
          Moments We've Captured
        </h2>
        <div className="w-12 h-px bg-gold/30 mx-auto mt-4" />
      </div>

      {/* Marquee track */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)), transparent)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, hsl(var(--background)), transparent)",
          }}
        />

        {/* Arrow buttons */}
        <button
          onClick={() => { changeDirection(-1); jumpBy(-1); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all duration-300 hover:scale-110"
          style={{
            background: "rgba(13,13,13,0.35)",
            borderColor: "rgba(201,168,76,0.25)",
          }}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-gold/80" />
        </button>
        <button
          onClick={() => { changeDirection(1); jumpBy(1); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all duration-300 hover:scale-110"
          style={{
            background: "rgba(13,13,13,0.35)",
            borderColor: "rgba(201,168,76,0.25)",
          }}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-gold/80" />
        </button>

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ gap: `${CARD_GAP}px` }}
        >
          {allSlides.map((src, i) => (
            <div
              key={i}
              className="shrink-0 cursor-pointer group"
              style={{ width: `${CARD_WIDTH}px` }}
              onClick={() => setSelectedImage(i % slides.length)}
            >
              <div
                className="relative overflow-hidden rounded-lg border transition-all duration-500 group-hover:border-gold/40 group-hover:shadow-lg"
                style={{
                  borderColor: "rgba(201,168,76,0.1)",
                  aspectRatio: "9/14",
                }}
              >
                <img
                  src={src}
                  alt={`Photo Booth Legends event ${(i % slides.length) + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle gold shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all hover:scale-110"
            style={{ background: "rgba(13,13,13,0.5)", borderColor: "rgba(201,168,76,0.3)" }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((selectedImage - 1 + slides.length) % slides.length);
            }}
          >
            <ChevronLeft className="w-5 h-5 text-gold/80" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all hover:scale-110"
            style={{ background: "rgba(13,13,13,0.5)", borderColor: "rgba(201,168,76,0.3)" }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((selectedImage + 1) % slides.length);
            }}
          >
            <ChevronRight className="w-5 h-5 text-gold/80" />
          </button>
          <img
            src={slides[selectedImage]}
            alt={`Photo Booth Legends event ${selectedImage + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default HeroSlideshow;
