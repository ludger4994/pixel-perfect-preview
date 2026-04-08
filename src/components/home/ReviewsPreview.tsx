import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const reviews = [
  {
    stars: 5,
    quote: "[Insert real review text here — e.g., 'Photo Booth Legends made our wedding reception absolutely unforgettable. Every guest was raving about the 360 booth!']",
    name: "Client Name",
    event: "Wedding",
    source: "Google",
  },
  {
    stars: 5,
    quote: "[Insert real review text here — e.g., 'The cold sparks during our first dance were breathtaking. The photos and videos are incredible. Highly recommend!']",
    name: "Client Name",
    event: "Birthday",
    source: "Yelp",
  },
  {
    stars: 5,
    quote: "[Insert real review text here — e.g., 'Professional, fun, and the booth quality was unmatched. Our corporate event was a huge hit thanks to Photo Booth Legends.']",
    name: "Client Name",
    event: "Corporate Event",
    source: "Google",
  },
];

const ReviewsPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold">
              What Our Clients Say
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <AnimateOnScroll key={i} delay={i * 150}>
              <div className="bg-surface-elevated border border-border/30 rounded-lg p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed italic mb-6 flex-1">
                  "{review.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-medium text-sm">{review.name}</p>
                    <p className="text-muted-foreground text-xs">{review.event}</p>
                  </div>
                  <span className="text-xs text-muted-foreground border border-border/30 rounded-full px-3 py-1">
                    {review.source}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={500}>
          <div className="text-center mt-12">
            <Link to="/reviews">
              <Button variant="gold-outline" size="lg">
                Read All Reviews
              </Button>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ReviewsPreview;
