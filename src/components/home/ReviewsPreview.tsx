import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    stars: 5,
    quote: "Photo Booth Legends made our wedding reception absolutely unforgettable. Every single guest was at the 360 booth all night. The slow-motion videos were stunning and everyone is still talking about it weeks later.",
    name: "Melissa R.",
    event: "Wedding · Fort Lauderdale",
    source: "Google",
  },
  {
    stars: 5,
    quote: "We booked the cold sparks for my daughter's quinceañera and it was the highlight of the entire night. Professional, on time, and the photos came out breathtaking. Will absolutely book again.",
    name: "Carmen V.",
    event: "Quinceañera · Miami",
    source: "Google",
  },
  {
    stars: 5,
    quote: "Our corporate event needed something special and Photo Booth Legends delivered beyond expectations. Custom branded overlays, instant sharing, and the attendant was incredible. Highly recommend.",
    name: "James T.",
    event: "Corporate Event · Boca Raton",
    source: "Yelp",
  },
];

const VerifiedBadge = () => (
  <span className="inline-flex items-center gap-1 text-[11px] text-primary tracking-[0.05em]">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
    </svg>
    Verified
  </span>
);

const ReviewsPreview = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold">
              What Our Clients Are Saying
            </h2>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} card-hover-lift ${isVisible ? 'visible' : ''}`}>
              <div className="bg-surface-elevated border border-border/30 rounded-lg p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 fill-primary text-primary ${isVisible ? 'star-animate' : 'opacity-0'}`}
                    />
                  ))}
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed italic mb-6 flex-1">
                  "{review.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-foreground font-medium text-sm">{review.name}</p>
                      <VerifiedBadge />
                    </div>
                    <p className="text-muted-foreground text-xs">{review.event}</p>
                  </div>
                  <span className="text-xs text-muted-foreground border border-border/30 rounded-full px-3 py-1">
                    {review.source}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal reveal-delay-5 ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mt-12">
            <Link to="/reviews">
              <Button variant="gold-outline" size="lg" className="btn-premium">
                Read All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPreview;
