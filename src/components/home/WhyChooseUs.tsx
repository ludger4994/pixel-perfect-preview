import { useEffect } from "react";
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
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    if (!statsVisible) return;
    const targets = document.querySelectorAll<HTMLElement>('.count-up-target[data-count-target]');
    targets.forEach((el) => {
      const end = parseInt(el.dataset.countTarget || '0');
      const suffix = el.dataset.countSuffix || '';
      let current = 0;
      const step = Math.ceil(end / 50);
      const timer = setInterval(() => {
        current = Math.min(current + step, end);
        el.textContent = current.toLocaleString() + suffix;
        if (current >= end) clearInterval(timer);
      }, 30);
    });
  }, [statsVisible]);

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

        {/* Stats row */}
        <div ref={statsRef} className={`reveal reveal-delay-1 ${statsVisible ? 'visible' : ''} grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16`}>
          {[
            { value: 500, suffix: "+", label: "Events Served" },
            { value: 5, suffix: "★", label: "Average Rating" },
            { value: 3, suffix: "", label: "Booth Types" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="font-heading text-3xl md:text-4xl text-primary font-bold mb-1">
                <span
                  className="count-up-target"
                  data-count-target={stat.value}
                  data-count-suffix={stat.suffix}
                >
                  {stat.value}{stat.suffix}
                </span>
              </div>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
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
