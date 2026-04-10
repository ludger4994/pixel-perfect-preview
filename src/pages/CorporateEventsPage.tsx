import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";
import { Check, Building2, BarChart3, Users, Zap } from "lucide-react";

import glamMain from "@/assets/glam-booth-main.jpg";
import threeSixtyMain from "@/assets/360-booth-main.jpg";

const CorporateEventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Corporate Event Photo Booth South Florida | Photo Booth Legends"
        description="Custom branded photo booth experiences for South Florida corporate events. Digital sharing, custom overlays & professional service. Contact Photo Booth Legends today."
        canonical="https://photoboothlegends.com/corporate-events"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Corporate Event Photo Booth",
          "provider": { "@type": "LocalBusiness", "name": "Photo Booth Legends" },
          "areaServed": { "@type": "Place", "name": "South Florida" },
          "description": "Photo Booth Legends offers custom branded photo booth experiences for corporate events, brand activations, product launches, and company parties across South Florida."
        }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end">
          <img src={threeSixtyMain} alt="Corporate event photo booth rental South Florida — Photo Booth Legends" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="relative container mx-auto px-4 lg:px-8 pb-16 pt-32">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Corporate Events</p>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground font-bold mb-4 max-w-4xl">
                Corporate Event Photo Booth Rental in South Florida
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
                Branded photo booth experiences for corporate events, product launches, and brand activations. Custom overlays, digital sharing & professional service.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-8">
                Elevate Your Corporate Event
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Photo Booth Legends transforms corporate events into memorable brand experiences. Whether it's a product launch, company holiday party, conference activation, or team-building event, our premium photo booths add engagement, entertainment, and shareable branded content that extends your event's reach far beyond the venue.
                </p>
                <p>
                  Every corporate booking includes custom branded photo overlays with your company logo and event branding, instant digital sharing so attendees share branded content on social media in real time, and professional on-site attendants who blend seamlessly into your event's atmosphere.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Corporate Features */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold">
                  Corporate-Specific Features
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Building2, title: "Branded Overlays", description: "Custom overlays featuring your company logo, event name, and brand colors on every photo and video." },
                { icon: BarChart3, title: "Lead Capture Mode", description: "Collect attendee information and generate leads directly through the photo booth experience." },
                { icon: Users, title: "43\" TV Sharing Station", description: "Large-format TV display station — ideal for brand visibility at corporate events and trade shows." },
                { icon: Zap, title: "Analytics & Data", description: "Post-event reporting on sessions, shares, and engagement — valuable data for brand activation ROI." },
              ].map((item, i) => (
                <AnimateOnScroll key={item.title} delay={i * 100}>
                  <div className="text-center p-6">
                    <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg text-foreground font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Which Booth for Corporate */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold">
                  Which Photo Booth Is Best for a Corporate Event?
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-8">
              <AnimateOnScroll>
                <Link to="/selfie-booth" className="group block rounded-lg overflow-hidden border border-border/30 hover:border-primary/30 transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img src={glamMain} alt="Selfie booth for corporate event South Florida" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-foreground font-bold mb-2">Selfie Booth</h3>
                    <p className="text-foreground/60 text-sm">Best for company parties and team events. Custom branded prints, digital sharing, and a fun atmosphere that boosts engagement.</p>
                  </div>
                </Link>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <Link to="/360-booth" className="group block rounded-lg overflow-hidden border border-border/30 hover:border-primary/30 transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img src={threeSixtyMain} alt="360 booth for brand activation South Florida" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-foreground font-bold mb-2">360° Photo Booth</h3>
                    <p className="text-foreground/60 text-sm">Best for brand activations and product launches. Viral content creation with branded video overlays and 43-inch sharing station.</p>
                  </div>
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Corporate Event Types */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-12">
                Corporate Events We Serve
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Product Launches", "Brand Activations", "Trade Shows", "Company Holiday Parties",
                  "Team Building Events", "Award Ceremonies", "Conference After-Parties", "Grand Openings",
                  "Client Appreciation Events", "Fundraisers & Galas",
                ].map((event) => (
                  <span key={event} className="px-6 py-3 rounded-full border border-primary/30 text-foreground/80 text-sm hover:bg-primary/5 transition-colors">
                    {event}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold mb-6">
                Plan Your Corporate Event With Photo Booth Legends
              </h2>
              <p className="text-foreground/60 text-lg mb-10">
                Let's create a branded experience your attendees will remember. Contact us for a custom corporate quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="gold" size="xl">Request a Quote</Button>
                </Link>
                <Link to="/packages">
                  <Button variant="outline" size="xl">View Packages</Button>
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

export default CorporateEventsPage;
