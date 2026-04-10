import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";
import { Check, Sparkles } from "lucide-react";

import glamMain from "@/assets/glam-booth-main.jpg";
import threeSixtyMain from "@/assets/360-booth-main.jpg";
import luxBooth from "@/assets/lux-booth.jpg";
import coldSparksImg from "@/assets/cold-sparks.jpg";
import dancingCloudsImg from "@/assets/dancing-clouds.jpg";

interface EventPageProps {
  eventType: string;
  slug: string;
  title: string;
  metaDescription: string;
  heroImage?: string;
  introParagraphs: string[];
  boothRecommendations: { name: string; description: string; href: string; best: string }[];
  packages: { name: string; price: string; duration: string; features: string[] }[];
  specialEffectsNote: string;
  tips: string[];
  faqs: { q: string; a: string }[];
  ctaHeadline: string;
}

const EventPageLayout = ({
  eventType,
  slug,
  title,
  metaDescription,
  heroImage,
  introParagraphs,
  boothRecommendations,
  packages,
  specialEffectsNote,
  tips,
  faqs,
  ctaHeadline,
}: EventPageProps) => {
  const canonical = `https://photoboothlegends.com/${slug}`;
  const hero = heroImage || glamMain;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={title}
        description={metaDescription}
        canonical={canonical}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${eventType} Photo Booth Rental`,
          "provider": { "@type": "LocalBusiness", "name": "Photo Booth Legends" },
          "areaServed": { "@type": "Place", "name": "South Florida" },
          "description": metaDescription,
        }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end">
          <img src={hero} alt={`${eventType} photo booth rental South Florida — Photo Booth Legends`} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="relative container mx-auto px-4 lg:px-8 pb-16 pt-32">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">{eventType}</p>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground font-bold mb-4 max-w-4xl">
                {eventType} Photo Booth Rental in South Florida
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
                Photo Booth Legends creates premium, personalized photo booth experiences for {eventType.toLowerCase()} celebrations across South Florida. Packages starting at $400.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-8">
                Make Your {eventType} Unforgettable
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                {introParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Booth Recommendations */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold">
                  Which Photo Booth Is Best for a {eventType}?
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {boothRecommendations.map((booth, i) => (
                <AnimateOnScroll key={booth.name} delay={i * 100}>
                  <Link to={booth.href} className="group block">
                    <div className="rounded-lg overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-300">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={booth.name.includes("Selfie") ? glamMain : booth.name.includes("360") ? threeSixtyMain : luxBooth}
                          alt={`${booth.name} for ${eventType.toLowerCase()} South Florida`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading text-xl text-foreground font-bold mb-2">{booth.name}</h3>
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

        {/* Packages */}
        {packages.length > 0 && (
          <section className="py-20 lg:py-28">
            <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
              <AnimateOnScroll>
                <div className="text-center mb-16">
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold">
                    Our Most Popular {eventType} Packages
                  </h2>
                </div>
              </AnimateOnScroll>
              <div className="grid md:grid-cols-2 gap-8">
                {packages.map((pkg, i) => (
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
        )}

        {/* Special Effects */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold">
                  Special Effects for Your {eventType}
                </h2>
                <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">{specialEffectsNote}</p>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-8">
              <AnimateOnScroll>
                <Link to="/cold-sparks" className="group block rounded-lg overflow-hidden border border-border/30 hover:border-primary/30 transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img src={coldSparksImg} alt={`Cold sparks at ${eventType.toLowerCase()} South Florida`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-foreground font-bold mb-2">Cold Sparks</h3>
                    <p className="text-foreground/60 text-sm">Dramatic fountains of shimmering sparkles — 100% safe for indoor venues. No heat, no fire, no smoke.</p>
                  </div>
                </Link>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <Link to="/dancing-on-the-clouds" className="group block rounded-lg overflow-hidden border border-border/30 hover:border-primary/30 transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img src={dancingCloudsImg} alt={`Dancing on the clouds ${eventType.toLowerCase()} South Florida`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-foreground font-bold mb-2">Dancing on the Clouds</h3>
                    <p className="text-foreground/60 text-sm">A dreamy, low-lying fog that hugs the floor — the most requested special effect in South Florida.</p>
                  </div>
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-8 text-center">
                {eventType} Planning Tips
              </h2>
              <div className="space-y-4">
                {tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-border/30">
                    <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/70">{tip}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="py-20 lg:py-28 bg-card/50">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <AnimateOnScroll>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-12 text-center">
                  Frequently Asked Questions
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
        )}

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-gradient-radial-gold">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold mb-6">
                {ctaHeadline}
              </h2>
              <p className="text-foreground/60 text-lg mb-10">
                Photo Booth Legends is a photo booth rental and event experience company based in South Florida. Let's create something extraordinary for your {eventType.toLowerCase()}.
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

export default EventPageLayout;
