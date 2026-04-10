import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/cold-sparks.jpg";

const ColdSparksPage = () => (
  <>
    <SEOHead
      title="Cold Sparks Rental South Florida | Photo Booth Legends"
      description="Add breathtaking cold sparks to your event — no heat, no fire, 100% safe indoors. Perfect for first dances & grand entrances in South Florida."
      canonical="https://photoboothlegends.com/cold-sparks"
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Cold Sparks Rental",
        "provider": { "@type": "LocalBusiness", "name": "Photo Booth Legends" },
        "areaServed": { "@type": "Place", "name": "South Florida" },
        "description": "Cold sparks are 100% safe for indoor venues. Unlike traditional pyrotechnics, cold sparks produce no heat, no open flame, and no smoke — they are a purely visual effect and are approved for use inside any standard event venue. Photo Booth Legends' cold sparks are operated by a trained professional attendant."
      }}
    />
    <ServicePageLayout
      tag="Cold Sparks"
      title="Cold Sparks Rental in South Florida"
      subtitle="Turn Your Most Important Moments Into Pure Magic — a breathtaking cascade of brilliant, ice-cold sparkles. 100% safe for indoor venues."
      heroImage={heroImg}
      heroAlt="Cold sparks effect at first dance — wedding photo booth South Florida — Photo Booth Legends"
      introParagraphs={[
        "Are cold sparks safe? Absolutely. Cold sparks are 100% safe for indoor venues. Unlike traditional pyrotechnics, cold sparks produce no heat, no open flame, and no smoke — they are a purely visual effect and are approved for use inside any standard event venue. Traditional pyrotechnics are not allowed indoors — cold sparks are the safe alternative.",
        "What exactly is a cold spark? Cold sparks use titanium powder heated in a controlled machine to produce brilliant, fountain-like columns of sparkling light. The sparks are cool to the touch within inches of the machine — making them safe for guests, venues, dresses, and décor. Photo Booth Legends' cold sparks are operated by a trained professional attendant.",
        "Imagine your first dance framed by towering fountains of shimmering, golden sparkles. Our cold spark machines produce stunning columns of light up to 15 feet tall, perfectly timed to your music and choreography. Whether it's a grand entrance, a first dance, or the climax of a corporate reveal, cold sparks guarantee gasps from every guest in the room."
      ]}
      features={[
        { title: "Completely Safe", description: "Cold spark technology produces no heat, flames, or smoke — safe for any indoor or outdoor venue. No fire permits typically required." },
        { title: "Adjustable Height", description: "Spark fountains adjustable from 3 to 15 feet to match your venue's ceiling height and your vision." },
        { title: "DMX Controlled", description: "Precision timing with professional DMX controllers for perfectly choreographed moments." },
        { title: "Multiple Machines", description: "Package includes 2 machines — 6 fires total for a dramatic, symmetrical arrangement." },
        { title: "Music Sync", description: "Timed to the beat of your chosen song for maximum emotional impact." },
        { title: "Professional Operators", description: "Trained technicians handle all setup, operation, and teardown." },
      ]}
      highlights={[
        "100% venue-friendly — no fire permits typically required",
        "Golden, silver, or custom-colored spark effects available",
        "Pairs beautifully with Dancing on the Clouds for the ultimate cinematic experience",
        "Perfect for photo and video — creates stunning visual backdrops",
        "Setup in under 30 minutes with zero disruption to your event",
        "Used by top wedding and event professionals across South Florida",
      ]}
      idealFor={[
        "First Dances", "Grand Entrances", "Weddings", "Quinceañeras",
        "Concert Performances", "Product Reveals", "Award Ceremonies", "Corporate Events",
      ]}
      ctaText="Ready to Add Cold Sparks to Your Event?"
    />
  </>
);

export default ColdSparksPage;
