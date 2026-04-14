import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";

const reviews = [
  {
    stars: 5,
    quote: "Photo Booth Legends made our wedding reception absolutely unforgettable. Every guest was raving about the 360 booth — the slow-motion videos were incredible!",
    name: "Maria & Carlos",
    event: "Wedding — Fort Lauderdale",
    source: "Google",
  },
  {
    stars: 5,
    quote: "The cold sparks during our first dance were breathtaking. I've watched the video a hundred times. The cloud effect made it feel like a fairy tale.",
    name: "Jessica T.",
    event: "Wedding — Boca Raton",
    source: "Google",
  },
  {
    stars: 5,
    quote: "Professional, fun, and the booth quality was unmatched. Our corporate event was a huge hit thanks to Photo Booth Legends. The custom branded overlays were a nice touch.",
    name: "Daniel R.",
    event: "Corporate Event — Doral",
    source: "Google",
  },
  {
    stars: 5,
    quote: "We booked the Grand Affair package for our daughter's quinceañera and it was EVERYTHING. The selfie booth, 360 booth, cold sparks, and clouds — her friends are still talking about it!",
    name: "Luz M.",
    event: "Quinceañera — Coral Springs",
    source: "Google",
  },
  {
    stars: 5,
    quote: "The TXR20 booth is on another level. The umbrella lighting made everyone look like a model. My guests kept going back for more photos!",
    name: "Stephanie W.",
    event: "Birthday — Miami",
    source: "Google",
  },
  {
    stars: 5,
    quote: "From the first call to the event, Photo Booth Legends was incredible. They arrived early, set up everything perfectly, and the attendant was friendly and professional.",
    name: "Rachel & David",
    event: "Wedding — West Palm Beach",
    source: "Google",
  },
];

const ReviewsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Reviews & Testimonials | Photo Booth Legends South Florida"
        description="Read what South Florida clients say about Photo Booth Legends. Real reviews from weddings, birthdays, corporate events, and quinceañeras."
        canonical="https://photoboothlegends.com/reviews"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Photo Booth Legends",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "6",
            "bestRating": "5",
            "worstRating": "5"
          }
        }}
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Testimonials</p>
              <h1 className="font-heading text-4xl md:text-6xl text-foreground font-bold mb-4">
                What Our Clients Are Saying
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Real experiences from real celebrations across South Florida.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="bg-card border border-border/30 rounded-lg p-8 h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: review.stars }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed italic mb-6 flex-1">
                      "{review.quote}"
                    </p>
                    <div>
                      <p className="text-foreground font-medium text-sm">{review.name}</p>
                      <p className="text-muted-foreground text-xs">{review.event}</p>
                      <span className="inline-block mt-2 text-xs text-muted-foreground border border-border/30 rounded-full px-3 py-1">
                        {review.source}
                      </span>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll>
              <div className="text-center mt-16">
                <h2 className="font-heading text-2xl md:text-3xl text-foreground font-bold mb-6">
                  Ready to Create Your Own Unforgettable Experience?
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/book">
                    <Button variant="gold" size="lg">Book Now</Button>
                  </Link>
                  <Link to="/packages">
                    <Button variant="gold-outline" size="lg">View Packages</Button>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewsPage;
