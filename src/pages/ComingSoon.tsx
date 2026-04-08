import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  "/photo-booths": { title: "Our Photo Booths", subtitle: "Premium booth experiences for every celebration" },
  "/selfie-booth": { title: "The Selfie Booth Experience", subtitle: "Fun, Stylish, and Instantly Shareable" },
  "/360-booth": { title: "The 360 Booth", subtitle: "Where Every Angle Tells the Story" },
  "/txr20-booth": { title: "TXR20 Luxury Booth", subtitle: "Where Elegance Meets the Art of the Moment" },
  "/special-effects": { title: "Special Effects", subtitle: "Transform your event into a cinematic experience" },
  "/cold-sparks": { title: "Cold Sparks", subtitle: "Turn Your Most Important Moments Into Pure Magic" },
  "/dancing-on-the-clouds": { title: "Dancing on the Clouds", subtitle: "Float Into Your Most Magical Moment" },
  "/packages": { title: "Packages", subtitle: "Designed for Unforgettable Events" },
  "/gallery": { title: "Gallery", subtitle: "Moments we've captured across South Florida" },
  "/reviews": { title: "What Our Clients Are Saying", subtitle: "Real experiences from real celebrations" },
  "/faq": { title: "Frequently Asked Questions", subtitle: "Everything you need to know" },
  "/about": { title: "About Photo Booth Legends", subtitle: "More Than a Business. A Passion for Unforgettable Moments." },
  "/contact": { title: "Let's Make Your Event Unforgettable", subtitle: "Fill out the form below and we'll be in touch shortly" },
};

const ComingSoon = () => {
  const location = useLocation();
  const info = pageTitles[location.pathname] || { title: "Coming Soon", subtitle: "" };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Coming Soon</p>
          <h1 className="font-heading text-4xl md:text-6xl text-foreground font-bold mb-4">
            {info.title}
          </h1>
          <p className="text-foreground/60 text-lg mb-10">{info.subtitle}</p>
          <p className="text-muted-foreground mb-8">
            This page is being crafted with the same attention to detail we bring to every event. Check back soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="gold" size="lg">Back to Home</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;
