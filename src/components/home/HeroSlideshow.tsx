import { useState, useEffect, useRef, useCallback } from "react";

import slide01 from "@/assets/hero-selfie-booth.jpg";
import slide02 from "@/assets/glam-booth-main.jpg";
import slide03 from "@/assets/hero-party.jpg";
import slide04 from "@/assets/silver-sequin-backdrop.jpg";
import slide05 from "@/assets/360-booth.jpg";
import slide06 from "@/assets/360-booth-main.jpg";

const slides = [
  {
    src: slide01,
    alt: "Luxury photo booth experience South Florida — Photo Booth Legends",
    position: "center 30%",
  },
  {
    src: slide02,
    alt: "Selfie booth rental South Florida wedding — Photo Booth Legends",
    position: "center center",
  },
  {
    src: slide03,
    alt: "Photo booth party experience South Florida",
    position: "center top",
  },
  {
    src: slide04,
    alt: "Silver sequin backdrop with neon sign photo booth rental",
    position: "center center",
  },
  {
    src: slide05,
    alt: "360 photo booth guests South Florida event",
    position: "center center",
  },
  {
    src: slide06,
    alt: "360 photo booth red carpet setup South Florida",
    position: "center 40%",
  },
];

const SLIDE_DURATION = 5000;
const TRANSITION_DURATION = 1200;

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const goTo = useCallback(
    (index: number) => {
      if (transitioning) return;
      setPrev(current);
      setCurrent(index);
      setTransitioning(true);
      setTimeout(() => {
        setPrev(null);
        setTransitioning(false);
      }, TRANSITION_DURATION);
    },
    [current, transitioning]
  );

  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo]
  );

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, SLIDE_DURATION);
    return () => clearTimeout(timerRef.current);
  }, [current, transitioning, paused, next]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(400px, 70vh, 800px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => {
        const isActive = i === current;
        const isPrev = i === prev;

        return (
          <div
            key={i}
            aria-hidden={!isActive}
            className="slideshow-img"
            style={{
              position: "absolute",
              inset: 0,
              opacity: isActive ? 1 : isPrev ? 0 : 0,
              transition: `opacity ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
            }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              loading={i === 0 ? "eager" : "lazy"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: slide.position,
                transform: isActive ? "scale(1.04)" : "scale(1.0)",
                transition: isActive
                  ? `transform ${SLIDE_DURATION + TRANSITION_DURATION}ms ease-in-out`
                  : "none",
              }}
            />
          </div>
        );
      })}

      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.65) 100%)",
          zIndex: 3,
        }}
      />

      {/* Dot navigation */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2"
        style={{ zIndex: 10 }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="slideshow-dot"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background:
                i === current
                  ? "hsl(42, 72%, 42%)"
                  : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div
        className="absolute top-5 right-6 flex items-center gap-1.5"
        style={{ zIndex: 10, opacity: 0.7 }}
      >
        <span
          className="font-body"
          style={{ color: "hsl(42, 72%, 42%)", fontSize: "13px", fontWeight: 500 }}
        >
          {String(current + 1).padStart(2, "0")}
        </span>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>
          /
        </span>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px" }}>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default HeroSlideshow;
