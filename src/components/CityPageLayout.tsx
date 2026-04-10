import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";
import { Check, MapPin, Camera, Sparkles, Star } from "lucide-react";

import glamMain from "@/assets/glam-booth-main.jpg";
import threeSixtyMain from "@/assets/360-booth-main.jpg";
import luxBooth from "@/assets/lux-booth.jpg";
import coldSparksImg from "@/assets/cold-sparks.jpg";

interface CityPageProps {
  city: string;
  county: string;
  slug: string;
  title: string;
  metaDescription: string;
  neighborhoods?: string[];
  eventAngle: string;
  uniqueParagraphs: string[];
  popularEvents: string[];
  faqs: { q: string; a: string }[];
}

const CityPageLayout = ({
  city,
  county,
  slug,
  title,
  metaDescription,
  neighborhoods = [],
  eventAngle,
  uniqueParagraphs,
  popularEvents,
  faqs,
}: CityPageProps) => {
  const canonical = `https://photoboothlegends.com/${slug}`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={title}
        description={metaDescription}
        canonical={canonical}
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Photo Booth Legends",
          "areaServed": { "@type": "Place", "name": `${city}, Florida` },
          "description": `Photo Booth Legends provides luxury photo booth rentals, 360° booths, cold sparks, and dancing on the clouds for events in ${city}, ${county} County, Florida.`,
          "telephone": "954-548-5809",
          "url": canonical,
        }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end">
          <img src={glamMain} alt={`Photo booth rental ${city} Florida — Photo Booth Legends`} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="relative container mx-auto px-4 lg:px-8 pb-16 pt-32">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">{county} County</p>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground font-bold mb-4 max-w-4xl">
                Photo Booth Rental in {city}, Florida
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
                Premium selfie booths, 360° photo booths, cold sparks & dancing on the clouds for {city} events. Packages starting at $400.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-8">
                Serving {city} Events With Premium Photo Booth Experiences
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                {uniqueParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p>
                  Photo Booth Legends is a photo booth rental and event experience company based in South Florida. All services are available in {city} and surrounding {county} County areas.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold">
                  Our Photo Booth Services Available in {city}
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  image: glamMain,
                  title: "Selfie Booth",
                  description: `Our most popular booth for ${city} events. Custom branded prints, GIF mode, glam filter, and instant digital sharing.`,
                  href: "/selfie-booth",
                  anchor: `selfie booth rental in ${city}`,
                },
                {
                  image: threeSixtyMain,
                  title: "360° Photo Booth",
                  description: `Cinematic slow-motion video from every angle. 4K GoPro capture, custom overlays, and a 43-inch TV sharing station.`,
                  href: "/360-booth",
                  anchor: `360 photo booth in ${city}`,
                },
                {
                  image: luxBooth,
                  title: "TXR20 Luxury Booth",
                  description: `Studio-quality portraits with our signature white umbrella diffuser. Magazine-worthy images for upscale ${city} events.`,
                  href: "/txr20-booth",
                  anchor: `luxury photo booth ${city}`,
                },
              ].map((booth, i) => (
                <AnimateOnScroll key={booth.title} delay={i * 100}>
                  <Link to={booth.href} className="group block">
                    <div className="rounded-lg overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-300">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={booth.image} alt={`${booth.title} rental ${city} — Photo Booth Legends`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading text-xl text-foreground font-bold mb-2">{booth.title}</h3>
                        <p className="text-foreground/60 text-sm mb-3">{booth.description}</p>
                        <span className="text-primary text-sm font-medium">Learn about {booth.anchor} →</span>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Special Effects */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-8 text-center">
                Special Effects and Backdrops for {city} Events
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <Link to="/cold-sparks" className="group p-6 rounded-lg border border-border/30 hover:border-primary/30 transition-all">
                  <Sparkles className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading text-lg text-foreground font-bold mb-2">Cold Sparks</h3>
                  <p className="text-foreground/60 text-sm">Towering fountains of shimmering sparkles — 100% safe indoors. Perfect for grand entrances and first dances.</p>
                </Link>
                <Link to="/dancing-on-the-clouds" className="group p-6 rounded-lg border border-border/30 hover:border-primary/30 transition-all">
                  <Star className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading text-lg text-foreground font-bold mb-2">Dancing on the Clouds</h3>
                  <p className="text-foreground/60 text-sm">Dreamy low-lying fog that hugs the floor. The most requested wedding special effect in South Florida.</p>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Popular Events */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-4">
                Popular Event Types in {city} We Serve
              </h2>
              <p className="text-foreground/60 mb-12">{eventAngle}</p>
            </AnimateOnScroll>
            <div className="flex flex-wrap justify-center gap-4">
              {popularEvents.map((event, i) => (
                <AnimateOnScroll key={i} delay={i * 60}>
                  <span className="px-6 py-3 rounded-full border border-primary/30 text-foreground/80 text-sm hover:bg-primary/5 transition-colors">
                    {event}
                  </span>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-12 text-center">
                Frequently Asked Questions for {city} Clients
              </h2>
            </AnimateOnScroll>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="p-6 rounded-lg border border-border/30">
                    <h3 className="font-heading text-lg text-foreground font-bold mb-2">{faq.q}</h3>
                    <p className="text-foreground/60 leading-relaxed">{faq.a}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-gradient-radial-gold">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold mb-6">
                Book Your {city} Photo Booth Experience
              </h2>
              <p className="text-foreground/60 text-lg mb-10">
                Ready to bring Photo Booth Legends to your {city} event? Contact us today for a custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book">
                  <Button variant="gold" size="xl">Book Now</Button>
                </Link>
                <Link to="/packages">
                  <Button variant="outline" size="xl">View Packages Available in {city}</Button>
                </Link>
              </div>
              <p className="mt-6 text-foreground/50 text-sm">
                Call us: <a href="tel:9545485809" className="text-primary hover:underline">(954) 548-5809</a>
              </p>
              <Link to="/service-areas" className="text-primary text-sm hover:underline mt-4 inline-block">
                View all South Florida service areas →
              </Link>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CityPageLayout;
