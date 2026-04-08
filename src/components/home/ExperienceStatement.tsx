import AnimateOnScroll from "@/components/AnimateOnScroll";

const ExperienceStatement = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-radial-gold">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <AnimateOnScroll>
          <div className="space-y-2 mb-8">
            <div className="w-16 h-px bg-primary mx-auto" />
            <p className="text-sm tracking-[0.3em] uppercase text-primary">Our Philosophy</p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground leading-snug font-light italic">
            "Photo Booth Legends is not just a vendor.{" "}
            <span className="text-gradient-gold font-medium not-italic">We are an experience.</span>{" "}
            We bring the energy, the elegance, and the excitement that transforms your event into something your guests will talk about long after the last song plays."
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ExperienceStatement;
