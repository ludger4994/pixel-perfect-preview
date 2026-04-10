import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";
import { MapPin } from "lucide-react";

const cities = [
  { name: "Miami", slug: "/photo-booth-rental-miami", county: "Miami-Dade", description: "Vibrant event scene — quinceañeras, weddings, corporate events & brand activations." },
  { name: "Fort Lauderdale", slug: "/photo-booth-rental-fort-lauderdale", county: "Broward", description: "Waterfront venues, corporate galas & celebrations along Las Olas." },
  { name: "Boca Raton", slug: "/photo-booth-rental-boca-raton", county: "Palm Beach", description: "Upscale weddings, luxury events & country club celebrations." },
  { name: "West Palm Beach", slug: "/photo-booth-rental-west-palm-beach", county: "Palm Beach", description: "Northern service area anchor — corporate events & elegant celebrations." },
  { name: "Hollywood", slug: "/photo-booth-rental-hollywood-fl", county: "Broward", description: "Beach events, ArtsPark celebrations & community gatherings." },
  { name: "Coral Springs", slug: "/photo-booth-rental-coral-springs", county: "Broward", description: "Family event hub — quinceañeras, Sweet 16 & birthday celebrations." },
  { name: "Pembroke Pines", slug: "/photo-booth-rental-pembroke-pines", county: "Broward", description: "Family-friendly community events, birthdays & quinceañeras." },
  { name: "Miramar", slug: "/photo-booth-rental-miramar", county: "Broward", description: "Diverse, multicultural celebrations & community events." },
  { name: "Doral", slug: "/photo-booth-rental-doral", county: "Miami-Dade", description: "Corporate hub — brand activations, business events & Latin celebrations." },
  { name: "Kendall", slug: "/photo-booth-rental-kendall", county: "Miami-Dade", description: "Large residential community — birthdays, quinceañeras & weddings." },
  { name: "Homestead", slug: "/photo-booth-rental-homestead", county: "Miami-Dade", description: "Southern service area anchor — family celebrations & community events." },
];

const ServiceAreasPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Photo Booth Rental Service Areas | South Florida | Photo Booth Legends"
        description="Photo Booth Legends serves events across South Florida — Miami, Fort Lauderdale, Boca Raton, West Palm Beach & 8 more cities. Covering Miami-Dade, Broward & Palm Beach County."
        canonical="https://photoboothlegends.com/service-areas"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Photo Booth Legends",
          "areaServed": [
            { "@type": "Place", "name": "Miami-Dade County, Florida" },
            { "@type": "Place", "name": "Broward County, Florida" },
            { "@type": "Place", "name": "Palm Beach County, Florida" },
          ],
          "description": "Photo Booth Legends serves events across South Florida including Miami, Fort Lauderdale, Boca Raton, West Palm Beach, and 8 additional cities covering Miami-Dade, Broward, and Palm Beach County.",
          "telephone": "954-548-5809",
        }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pb-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Service Areas</p>
              <h1 className="font-heading text-4xl md:text-6xl text-foreground font-bold mb-6">
                Proudly Serving South Florida
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Photo Booth Legends delivers luxury photo booth experiences from Homestead to West Palm Beach — covering Miami-Dade, Broward, and Palm Beach County. No travel fees. Professional setup and breakdown included.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Service Area Statement */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <AnimateOnScroll>
              <p className="text-foreground/70 text-lg leading-relaxed text-center">
                Photo Booth Legends proudly serves events throughout South Florida, including Miami, Fort Lauderdale, Hollywood, Boca Raton, Delray Beach, Boynton Beach, West Palm Beach, Coral Springs, Pembroke Pines, Miramar, Doral, Kendall, and Homestead. From Miami-Dade County north through Broward County and into Palm Beach County — if you're planning an event in South Florida, we're here for you.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* City Grid */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-12 text-center">
                Cities We Serve
              </h2>
            </AnimateOnScroll>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {cities.map((city, i) => (
                <AnimateOnScroll key={city.name} delay={i * 60}>
                  <Link to={city.slug} className="group block p-6 rounded-lg border border-border/30 hover:border-primary/30 transition-all bg-background/50">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-heading text-lg text-foreground font-bold group-hover:text-primary transition-colors">{city.name}</h3>
                        <p className="text-xs text-muted-foreground">{city.county} County</p>
                      </div>
                    </div>
                    <p className="text-foreground/60 text-sm">{city.description}</p>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Services Available */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-8">
                Services Available Across All Locations
              </h2>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  { label: "Selfie Booth", href: "/selfie-booth" },
                  { label: "360° Photo Booth", href: "/360-booth" },
                  { label: "TXR20 Luxury Booth", href: "/txr20-booth" },
                  { label: "Cold Sparks", href: "/cold-sparks" },
                  { label: "Dancing on the Clouds", href: "/dancing-on-the-clouds" },
                  { label: "Premium Backdrops", href: "/backdrops" },
                ].map((service) => (
                  <Link key={service.label} to={service.href} className="px-6 py-3 rounded-full border border-primary/30 text-foreground/80 text-sm hover:bg-primary/5 transition-colors">
                    {service.label}
                  </Link>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-gradient-radial-gold">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold mb-6">
                Ready to Book Your South Florida Event?
              </h2>
              <p className="text-foreground/60 text-lg mb-10">
                Photo Booth Legends is a photo booth rental and event experience company based in South Florida. Contact us today for a custom quote — no matter where in South Florida your event is happening.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book">
                  <Button variant="gold" size="xl">Book Now</Button>
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

export default ServiceAreasPage;
