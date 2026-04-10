import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin } from "lucide-react";

const ServiceArea = () => {
  const { ref, isVisible } = useScrollReveal();

  const cities = [
    "Miami", "Fort Lauderdale", "Hollywood", "Boca Raton", "Delray Beach",
    "Boynton Beach", "West Palm Beach", "Coral Springs",
    "Pembroke Pines", "Miramar", "Doral", "Kendall", "Homestead",
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <p className="text-sm tracking-[0.3em] uppercase text-primary">Service Area</p>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-6">
            Proudly Serving South Florida — Miami to West Palm Beach
          </h2>
          <p className="text-foreground/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Photo Booth Legends proudly serves events throughout South Florida, including Miami, Fort Lauderdale, Hollywood, Boca Raton, Delray Beach, Boynton Beach, West Palm Beach, Coral Springs, Pembroke Pines, Miramar, Doral, Kendall, and Homestead. From Miami-Dade County north through Broward County and into Palm Beach County — if you're planning an event in South Florida, we're here for you.
          </p>
        </div>
        <div className={`reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <span
                key={city}
                className="inline-block px-3 py-1 text-xs border border-primary/25 rounded-full text-foreground/70 tracking-wider hover:border-primary/50 hover:text-primary transition-colors duration-300"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
