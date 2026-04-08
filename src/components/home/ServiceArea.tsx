import AnimateOnScroll from "@/components/AnimateOnScroll";
import { MapPin } from "lucide-react";

const ServiceArea = () => {
  const cities = [
    "Miami", "Fort Lauderdale", "Boca Raton", "Coral Springs",
    "Pembroke Pines", "Doral", "Hialeah", "Miramar", "Hollywood",
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <AnimateOnScroll>
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <p className="text-sm tracking-[0.3em] uppercase text-primary">Service Area</p>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-6">
            Proudly Serving South Florida
          </h2>
          <p className="text-foreground/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Proudly serving weddings, birthdays, corporate events, quinceañeras, and private parties across South Florida — including Miami, Fort Lauderdale, Boca Raton, Coral Springs, Pembroke Pines, Doral, Hialeah, Miramar, Hollywood, and surrounding areas.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <span
                key={city}
                className="px-4 py-2 text-sm border border-border/40 rounded-full text-foreground/60 hover:border-primary/50 hover:text-primary transition-colors duration-300"
              >
                {city}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ServiceArea;
