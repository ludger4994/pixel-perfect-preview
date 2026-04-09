import { useScrollReveal } from "@/hooks/useScrollReveal";

const ExperienceStatement = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-radial-gold">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="space-y-2 mb-8">
            <div className="w-16 h-px bg-primary mx-auto" />
            <p className="text-sm tracking-[0.3em] uppercase text-primary">Our Philosophy</p>
          </div>
        </div>
        <span className={`gold-line-draw ${isVisible ? 'visible' : ''}`} />
        <div className={`reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
          <p
            className="font-heading text-foreground leading-snug font-light italic mx-auto"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.3, letterSpacing: '0.02em', maxWidth: '780px' }}
          >
            "Photo Booth Legends is not just a vendor.{" "}
            <span className="text-gradient-gold font-medium not-italic">We are an experience.</span>{" "}
            We bring the energy, the elegance, and the excitement that transforms your event into something your guests will talk about long after the last song plays."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceStatement;
