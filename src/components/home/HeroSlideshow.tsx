import { useState, useEffect, useRef, useCallback } from "react";

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

const SLIDE_DURATION = 3000;
const TRANSITION_DURATION = 800;

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
      style={{ height: "clamp(250px, 45vh, 480px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((src, i) => {
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
              src={src}
              alt={`Photo Booth Legends event ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center center",
                transform: isActive ? "scale(1.03)" : "scale(1.0)",
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
            "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.6) 100%)",
          zIndex: 3,
        }}
      />

      {/* Dot navigation */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5"
        style={{ zIndex: 10 }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="slideshow-dot"
            style={{
              width: i === current ? "18px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background:
                i === current
                  ? "hsl(42, 72%, 42%)"
                  : "rgba(255,255,255,0.35)",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div
        className="absolute top-3 right-4 flex items-center gap-1"
        style={{ zIndex: 10, opacity: 0.6 }}
      >
        <span style={{ color: "hsl(42, 72%, 42%)", fontSize: "11px", fontWeight: 500 }}>
          {String(current + 1).padStart(2, "0")}
        </span>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px" }}>/</span>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "10px" }}>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default HeroSlideshow;
