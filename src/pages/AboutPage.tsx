import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Heart, MapPin, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Photo Booth Legends | South Florida's Premier Event Experience"
        description="Learn about Photo Booth Legends — South Florida's premier photo booth and event experience company. Luxury selfie booths, 360° booths, cold sparks & dancing on the clouds."
        canonical="https://photoboothlegends.com/about"
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-16 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">About Us</p>
              <h1 className="font-heading text-4xl md:text-6xl text-foreground font-bold mb-4">
                About Photo Booth Legends
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                More than a business. A passion for unforgettable moments.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Story */}
        <section className="pb-20 lg:pb-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <AnimateOnScroll>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Photo Booth Legends is a photo booth rental and event experience company based in South Florida. We specialize in creating luxury, memorable experiences for weddings, birthdays, quinceañeras, corporate events, brand activations, and private celebrations from Miami to West Palm Beach.
                </p>
                <p>
                  Photo Booth Legends is a photo booth rental and event experience company based in South Florida, proudly serving events from Miami to West Palm Beach. We offer luxury selfie booth rentals, 360° photo booth rentals, TXR20 Luxury Booth rentals, cold sparks, dancing on the clouds, and a premium backdrop collection for weddings, birthdays, quinceañeras, corporate events, and celebrations of every kind.
                </p>
                <p>
                  We're not just a vendor — we're an experience. Every event we serve gets the same level of care, professionalism, and attention to detail. From the moment we set up to the final breakdown, our goal is to make your guests say "that was incredible."
                </p>
                <p>
                  Photo Booth Legends is South Florida's only photo booth company offering the TXR20 Luxury Booth with a professional white umbrella diffuser for studio-quality lighting, alongside a full selection of 10+ event backdrops, cold sparks, and dancing on the clouds — all operated by trained professional attendants.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold">
                  What Sets Us Apart
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Award, title: "Premium Equipment", description: "Top-tier booths and effects, meticulously maintained. Including the TXR20 with studio-quality umbrella lighting." },
                { icon: Users, title: "Professional Attendants", description: "Trained, friendly team members who manage everything — so you can focus on celebrating." },
                { icon: Heart, title: "Custom Experiences", description: "Every detail matches your event theme — custom overlays, branded prints, personalized galleries." },
                { icon: MapPin, title: "All of South Florida", description: "Serving Miami, Fort Lauderdale, Boca Raton, West Palm Beach, and everywhere in between." },
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

        {/* Services Overview */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-8 text-center">
                Our Services
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Selfie Booth", href: "/selfie-booth", desc: "Photos, GIFs, boomerangs & video with instant digital sharing" },
                  { name: "360° Photo Booth", href: "/360-booth", desc: "Cinematic slow-motion video from every angle" },
                  { name: "TXR20 Luxury Booth", href: "/txr20-booth", desc: "Studio-quality portraits with umbrella diffuser lighting" },
                  { name: "Cold Sparks", href: "/cold-sparks", desc: "Breathtaking indoor-safe spark fountains" },
                  { name: "Dancing on the Clouds", href: "/dancing-on-the-clouds", desc: "Dreamy low-lying fog for first dances" },
                  { name: "Backdrop Collection", href: "/backdrops", desc: "10+ backdrops including flower walls & sequin walls" },
                ].map((service) => (
                  <Link key={service.name} to={service.href} className="flex items-start gap-3 p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">{service.name}</p>
                      <p className="text-sm text-muted-foreground">{service.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-6">
                Serving All of South Florida
              </h2>
              <p className="text-foreground/60 leading-relaxed max-w-2xl mx-auto">
                Photo Booth Legends proudly serves events throughout South Florida, including Miami, Fort Lauderdale, Hollywood, Boca Raton, Delray Beach, Boynton Beach, West Palm Beach, Coral Springs, Pembroke Pines, Miramar, Doral, Kendall, and Homestead — covering Miami-Dade, Broward, and Palm Beach County.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold mb-6">
                Ready to Create an Unforgettable Experience?
              </h2>
              <p className="text-foreground/60 text-lg mb-10">
                Let's make your event legendary. Contact us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book">
                  <Button variant="gold" size="xl">Book Now</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="xl">Contact Us</Button>
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

export default AboutPage;
