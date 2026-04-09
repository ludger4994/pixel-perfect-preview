import { Award, Users, Palette, Zap, MapPin, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const values = [
  { icon: Award, title: "Premium Equipment, Flawless Delivery", description: "Top-tier booths and effects, meticulously maintained for every event." },
  { icon: Users, title: "Professional On-Site Attendants", description: "Our team handles everything so you can focus on celebrating." },
  { icon: Palette, title: "Custom Branded Overlays & Prints", description: "Every detail matches your event theme perfectly." },
  { icon: Zap, title: "Instant Digital Sharing", description: "Guests share photos, GIFs, and videos instantly via text, email, or QR." },
  { icon: MapPin, title: "Serving All of South Florida", description: "Miami, Fort Lauderdale, Boca Raton, and everywhere in between." },
  { icon: Sparkles, title: "Luxury Experience, Every Time", description: "Not just a service — an unforgettable moment for your guests." },
];

const WhyChooseUs = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Why Choose Us</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold">
              The Photo Booth Legends Difference
            </h2>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((item, i) => (
            <div key={item.title} className={`reveal reveal-delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
              <div className="text-center p-6 group">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
