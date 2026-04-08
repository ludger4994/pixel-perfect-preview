import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/cold-sparks.jpg";

const ColdSparksPage = () => (
  <ServicePageLayout
    tag="Cold Sparks"
    title="Cold Sparks"
    subtitle="Turn Your Most Important Moments Into Pure Magic — a breathtaking cascade of brilliant, ice-cold sparkles."
    heroImage={heroImg}
    heroAlt="Cold sparks rental South Florida wedding first dance"
    introParagraphs={[
      "Imagine your first dance framed by towering fountains of shimmering, golden sparkles. Cold sparks create a cinematic, awe-inspiring effect that transforms any moment into something straight out of a movie. Unlike traditional pyrotechnics, cold sparks are completely safe — no heat, no smoke, no fire hazard.",
      "Our cold spark machines produce stunning columns of light up to 15 feet tall, perfectly timed to your music and choreography. Whether it's a grand entrance, a first dance, or the climax of a corporate reveal, cold sparks guarantee gasps from every guest in the room.",
    ]}
    features={[
      { title: "Completely Safe", description: "Cold spark technology produces no heat, flames, or smoke — safe for any indoor or outdoor venue." },
      { title: "Adjustable Height", description: "Spark fountains adjustable from 3 to 15 feet to match your venue's ceiling height and your vision." },
      { title: "DMX Controlled", description: "Precision timing with professional DMX controllers for perfectly choreographed moments." },
      { title: "Multiple Machines", description: "Packages include 2-6 machines for symmetrical, dramatic arrangements." },
      { title: "Music Sync", description: "Timed to the beat of your chosen song for maximum emotional impact." },
      { title: "Professional Operators", description: "Trained technicians handle all setup, operation, and teardown." },
    ]}
    highlights={[
      "100% venue-friendly — no fire permits typically required",
      "Golden, silver, or custom-colored spark effects available",
      "Pairs beautifully with Dancing on the Clouds for the ultimate effect",
      "Perfect for photo and video — creates stunning visual backdrops",
      "Setup in under 30 minutes with zero disruption to your event",
      "Used by top wedding and event professionals across South Florida",
    ]}
    idealFor={[
      "First Dances", "Grand Entrances", "Weddings", "Quinceañeras",
      "Concert Performances", "Product Reveals", "Award Ceremonies", "Corporate Events",
    ]}
    ctaText="Ready to Add Some Sparkle?"
  />
);

export default ColdSparksPage;
