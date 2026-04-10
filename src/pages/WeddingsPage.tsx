import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";
import { Check, Heart, Sparkles, Camera, Music } from "lucide-react";

import glamMain from "@/assets/glam-booth-main.jpg";
import threeSixtyMain from "@/assets/360-booth-main.jpg";
import coldSparksImg from "@/assets/cold-sparks.jpg";
import dancingCloudsImg from "@/assets/dancing-clouds.jpg";
import luxBooth from "@/assets/lux-booth.jpg";

const WeddingsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Wedding Photo Booth Rental South Florida | Photo Booth Legends"
        description="Elevate your South Florida wedding with a luxury photo booth experience. Selfie booth, 360 booth, cold sparks & dancing on the clouds for your perfect day."
        canonical="https://photoboothlegends.com/weddings"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Wedding Photo Booth Rental",
          "provider": { "@type": "LocalBusiness", "name": "Photo Booth Legends" },
          "areaServed": { "@type": "Place", "name": "South Florida" },
          "description": "Photo Booth Legends offers luxury wedding photo booth packages including selfie booths, 360° booths, cold sparks, dancing on the clouds, and premium backdrops. Serving weddings from Miami to West Palm Beach."
        }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end">
          <img src={glamMain} alt="Wedding photo booth rental South Florida — Photo Booth Legends" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="relative container mx-auto px-4 lg:px-8 pb-16 pt-32">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Weddings</p>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground font-bold mb-4 max-w-4xl">
                Wedding Photo Booth Rental in South Florida
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
                Make your wedding day unforgettable with Photo Booth Legends' luxury photo booth experiences, cold sparks, and dancing on the clouds. Packages starting at $800.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-8">
                Make Your Wedding Unforgettable
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Your wedding day deserves more than a standard photo booth. Photo Booth Legends creates premium, personalized photo booth experiences designed specifically for South Florida weddings — from elegant first dances framed by cold sparks to cinematic cloud effects that make every moment feel like a fairy tale.
                </p>
                <p>
                  We recommend booking 3–6 months in advance for weddings to ensure your preferred date is available. Our team coordinates seamlessly with your venue and wedding planner, handling all setup and breakdown so you can focus entirely on celebrating.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Which Booth */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold">
                  Which Photo Booth Is Best for a Wedding?
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  image: glamMain,
                  title: "Selfie Booth",
                  description: "Perfect for capturing fun, shareable moments. Custom branded prints with your wedding date and names. Glam filter makes every guest look flawless.",
                  href: "/selfie-booth",
                  best: "Best for: casual, fun reception entertainment",
                },
                {
                  image: threeSixtyMain,
                  title: "360° Photo Booth",
                  description: "Cinematic slow-motion video from every angle. Guests go viral with their content. 43-inch TV sharing station on-site.",
                  href: "/360-booth",
                  best: "Best for: creating viral social media content",
                },
                {
                  image: luxBooth,
                  title: "TXR20 Luxury Booth",
                  description: "Studio-quality portraits with a professional umbrella diffuser. Magazine-worthy images. Guest book mode for a personal keepsake.",
                  href: "/txr20-booth",
                  best: "Best for: elegant, upscale wedding photography",
                },
              ].map((booth, i) => (
                <AnimateOnScroll key={booth.title} delay={i * 100}>
                  <Link to={booth.href} className="group block">
                    <div className="rounded-lg overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-300">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={booth.image} alt={`${booth.title} for weddings South Florida`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading text-xl text-foreground font-bold mb-2">{booth.title}</h3>
                        <p className="text-foreground/60 text-sm mb-3">{booth.description}</p>
                        <p className="text-primary text-xs font-medium">{booth.best}</p>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Wedding Packages */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold">
                  Our Most Popular Wedding Packages
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "The Romance",
                  price: "$800",
                  duration: "3 Hours",
                  features: [
                    "Lumière Selfie Booth (3 hours)",
                    "Dancing on the Clouds for first dance",
                    "White Rose Flower Wall backdrop included",
                    "2×6 & 4×6 custom wedding prints",
                    "Custom wedding-branded template",
                    "Glam filter & AR masks",
                    "Professional on-site attendant",
                  ],
                },
                {
                  name: "The Grand Affair",
                  price: "$1,200",
                  duration: "4 Hours",
                  features: [
                    "Ultimate Selfie Booth + 360° Gold",
                    "Cold Sparks (first dance / grand entrance)",
                    "Dancing on the Clouds",
                    "Shout-Out Video Station",
                    "White Rose Flower Wall + premium backdrop",
                    "Two professional on-site attendants",
                    "Full setup, coordination & breakdown",
                  ],
                },
              ].map((pkg, i) => (
                <AnimateOnScroll key={pkg.name} delay={i * 100}>
                  <div className="rounded-lg border border-primary/30 p-8 bg-primary/5">
                    <h3 className="font-heading text-2xl text-foreground font-bold mb-1">{pkg.name}</h3>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="font-heading text-3xl text-primary font-bold">{pkg.price}</span>
                      <span className="text-sm text-muted-foreground">· {pkg.duration}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-foreground/70">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/book?package=${pkg.name === "The Romance" ? "romance" : "grand-affair"}`}>
                      <Button variant="gold" className="w-full">Book {pkg.name}</Button>
                    </Link>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/packages">
                <Button variant="gold-outline" size="lg">View All Packages →</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Special Effects for Weddings */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold">
                  Special Effects for Your Wedding
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-8">
              <AnimateOnScroll>
                <Link to="/cold-sparks" className="group block rounded-lg overflow-hidden border border-border/30 hover:border-primary/30 transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img src={coldSparksImg} alt="Cold sparks at wedding first dance South Florida" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-foreground font-bold mb-2">Cold Sparks</h3>
                    <p className="text-foreground/60 text-sm">Frame your first dance or grand entrance with towering fountains of shimmering sparkles. 100% safe for indoor venues — no heat, no fire, no smoke.</p>
                  </div>
                </Link>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <Link to="/dancing-on-the-clouds" className="group block rounded-lg overflow-hidden border border-border/30 hover:border-primary/30 transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img src={dancingCloudsImg} alt="Dancing on the clouds first dance wedding South Florida" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-foreground font-bold mb-2">Dancing on the Clouds</h3>
                    <p className="text-foreground/60 text-sm">A dreamy, low-lying fog that hugs the floor. Perfect for your first dance — the most requested wedding special effect in South Florida.</p>
                  </div>
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Wedding Tips */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-8 text-center">
                Wedding Planning Tips
              </h2>
              <div className="space-y-4">
                {[
                  "Book 3–6 months in advance for peak wedding season dates",
                  "Pair cold sparks with dancing on the clouds for the ultimate first dance",
                  "The White Rose Flower Wall is our most popular wedding backdrop",
                  "Coordinate with your wedding planner — we handle all setup and breakdown",
                  "Ask about custom-branded print templates matching your wedding stationery",
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-border/30">
                    <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">{tip}</span>
                  </div>
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
                Plan Your Wedding With Photo Booth Legends
              </h2>
              <p className="text-foreground/60 text-lg mb-10">
                Ready to make your wedding day unforgettable? Contact us today and let's start creating your perfect experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book">
                  <Button variant="gold" size="xl">Book Now</Button>
                </Link>
                <Link to="/packages#wedding">
                  <Button variant="outline" size="xl">View Wedding Packages</Button>
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

export default WeddingsPage;
