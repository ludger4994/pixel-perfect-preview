import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Check, Star } from "lucide-react";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServicePageProps {
  tag: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  introParagraphs: string[];
  features: ServiceFeature[];
  highlights: string[];
  idealFor: string[];
  ctaText?: string;
  galleryImages?: { src: string; alt: string }[];
}

const ServicePageLayout = ({
  tag,
  title,
  subtitle,
  heroImage,
  heroAlt,
  introParagraphs,
  features,
  highlights,
  idealFor,
  ctaText = "Ready to Elevate Your Event?",
  galleryImages,
}: ServicePageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end">
          <img
            src={heroImage}
            alt={heroAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="relative container mx-auto px-4 lg:px-8 pb-16 pt-32">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">{tag}</p>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground font-bold mb-4 max-w-4xl">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">{subtitle}</p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <AnimateOnScroll>
              <div className="space-y-6">
                {introParagraphs.map((p, i) => (
                  <p key={i} className="text-foreground/70 text-lg leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">What's Included</p>
                <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold">
                  The Full Experience
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="p-8 rounded-lg border border-border/50 bg-background/50 hover:border-primary/30 transition-colors duration-300 h-full">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl text-foreground font-semibold mb-3">{feature.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <AnimateOnScroll>
                <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Why It Stands Out</p>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-8">
                  Crafted for Unforgettable Moments
                </h2>
                <ul className="space-y-4">
                  {highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={heroImage}
                    alt={heroAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Ideal For */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Perfect For</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-12">
                Ideal for These Events
              </h2>
            </AnimateOnScroll>
            <div className="flex flex-wrap justify-center gap-4">
              {idealFor.map((event, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <span className="px-6 py-3 rounded-full border border-primary/30 text-foreground/80 text-sm hover:bg-primary/5 transition-colors">
                    {event}
                  </span>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground font-bold mb-8 text-center">
                Explore More
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/weddings" className="p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
                  <p className="text-foreground font-medium">Wedding Photo Booth Rental</p>
                  <p className="text-sm text-muted-foreground">Elevate your wedding with a luxury photo booth experience</p>
                </Link>
                <Link to="/corporate-events" className="p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
                  <p className="text-foreground font-medium">Corporate Event Photo Booth</p>
                  <p className="text-sm text-muted-foreground">Custom branded experiences for corporate events</p>
                </Link>
                <Link to="/photo-booth-rental-miami" className="p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
                  <p className="text-foreground font-medium">Photo Booth Rental Miami</p>
                  <p className="text-sm text-muted-foreground">Serving events throughout Miami-Dade County</p>
                </Link>
                <Link to="/photo-booth-rental-fort-lauderdale" className="p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
                  <p className="text-foreground font-medium">Photo Booth Rental Fort Lauderdale</p>
                  <p className="text-sm text-muted-foreground">Premium booth experiences in Broward County</p>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold mb-6">
                {ctaText}
              </h2>
              <p className="text-foreground/60 text-lg mb-10">
                Let's create something extraordinary together. Reach out and let's start planning your perfect experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book">
                  <Button variant="gold" size="lg">Book This Experience</Button>
                </Link>
                <Link to="/packages">
                  <Button variant="outline" size="lg">View Packages</Button>
                </Link>
              </div>
              <p className="mt-6 text-foreground/50 text-sm">
                Call us: <a href="tel:9545485809" className="text-primary hover:underline">(954) 548-5809</a>
              </p>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
