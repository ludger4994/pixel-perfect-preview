import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import glamBoothImg from "@/assets/glam-booth-main.jpg";
import threeSixtyImg from "@/assets/360-booth-main.jpg";
import luxBoothImg from "@/assets/lux-booth.jpg";
import coldSparksImg from "@/assets/cold-sparks.jpg";
import dancingCloudsImg from "@/assets/dancing-clouds.jpg";

const services = [
  {
    title: "Selfie Booth",
    subtitle: "Salsa Booth",
    description: "Sleek, digital, and endlessly fun. Instant sharing that keeps your guests coming back for more.",
    image: glamBoothImg,
    href: "/selfie-booth",
    alt: "Glam selfie photo booth rental South Florida",
  },
  {
    title: "360° Booth",
    subtitle: "The Viral Experience",
    description: "Every angle tells the story. Slow-motion, social-media-ready content your guests will share instantly.",
    image: threeSixtyImg,
    href: "/360-booth",
    alt: "360 photo booth rental Fort Lauderdale event",
  },
  {
    title: "TXR20 Luxury Booth",
    subtitle: "Premium Elegance",
    description: "Studio-quality lighting meets effortless sophistication. The choice for weddings and upscale events.",
    image: luxBoothImg,
    href: "/txr20-booth",
    alt: "TXR20 luxury photo booth rental Miami wedding",
  },
  {
    title: "Cold Sparks",
    subtitle: "Pure Magic",
    description: "A breathtaking cascade of brilliant, ice-cold sparkles that transforms any moment into cinema.",
    image: coldSparksImg,
    href: "/cold-sparks",
    alt: "Cold sparks rental South Florida wedding first dance",
  },
  {
    title: "Dancing on the Clouds",
    subtitle: "Dreamlike Atmosphere",
    description: "Glide through a sea of silky, low-lying clouds. The ultimate romantic first dance experience.",
    image: dancingCloudsImg,
    href: "/dancing-on-the-clouds",
    alt: "Dancing on the clouds rental South Florida wedding",
  },
];

const FeaturedServices = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Our Experiences</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold">
              Elevate Every Moment
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.href} service={service} delay={i * 100} fixedHeight />
          ))}
        </div>
        <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.slice(3).map((service, i) => (
            <ServiceCard key={service.href} service={service} delay={(i + 3) * 100} />
          ))}
        </div>

        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {services.map((service) => (
            <div key={service.href} className="snap-start flex-shrink-0 w-[80vw]">
              <ServiceCard service={service} delay={0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: typeof services[number];
  delay: number;
  fixedHeight?: boolean;
}

const ServiceCard = ({ service, delay, fixedHeight }: ServiceCardProps) => (
  <AnimateOnScroll delay={delay}>
    <Link to={service.href} className={`group block relative overflow-hidden rounded-2xl border-2 border-primary/40 transition-all duration-500 hover:scale-[1.02] ${fixedHeight ? 'h-[500px]' : 'aspect-[4/5]'}`} style={{ boxShadow: 'inset 0 1px 0 0 hsl(45 65% 54% / 0.5), inset 0 -2px 4px 0 hsl(38 70% 30% / 0.4), 0 4px 16px hsl(42 72% 42% / 0.2), 0 8px 32px hsl(42 72% 42% / 0.15), 0 1px 3px hsl(0 0% 0% / 0.4)' }}>
      <img
        src={service.image}
        alt={service.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        width={800}
        height={1000}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
        <p className="text-xs tracking-[0.2em] uppercase text-primary mb-1">{service.subtitle}</p>
        <h3 className="font-heading text-2xl text-foreground font-bold mb-2">{service.title}</h3>
        <p className="text-sm text-foreground/60 mb-4 line-clamp-2">{service.description}</p>
        <span className="text-primary text-sm font-medium group-hover:underline">
          Explore →
        </span>
      </div>
    </Link>
  </AnimateOnScroll>
);

export default FeaturedServices;
