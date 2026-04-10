import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/dancing-clouds.jpg";

const DancingCloudsPage = () => (
  <>
    <SEOHead
      title="Dancing on the Clouds South Florida | Photo Booth Legends"
      description="Create a dreamy first dance with our Dancing on the Clouds low-lying fog effect. Safe, cinematic & unforgettable. Available for South Florida weddings & events."
      canonical="https://photoboothlegends.com/dancing-on-the-clouds"
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Dancing on the Clouds",
        "provider": { "@type": "LocalBusiness", "name": "Photo Booth Legends" },
        "areaServed": { "@type": "Place", "name": "South Florida" },
        "description": "Dancing on the Clouds creates a thick, rolling blanket of pure white fog that hugs the floor using dry ice and hot water. The effect typically lasts 3-5 minutes — perfectly timed for a full first dance song. It leaves no residue, no staining, and no cleanup required."
      }}
    />
    <ServicePageLayout
      tag="Dancing on the Clouds"
      title="Dancing on the Clouds in South Florida"
      subtitle="Float Into Your Most Magical Moment — a sea of silky, low-lying clouds for the ultimate romantic experience."
      heroImage={heroImg}
      heroAlt="Dancing on the clouds low-lying fog effect at wedding first dance — Photo Booth Legends South Florida"
      introParagraphs={[
        "How does it work? Dancing on the Clouds uses professional-grade equipment with dry ice and hot water to create a thick, rolling blanket of pure white fog that hugs the floor. The fog stays at ankle height without ever rising into your guests' faces — making it look and feel like you're floating on air.",
        "How long does it last? The effect typically lasts 3-5 minutes — perfectly timed for a full first dance song. We coordinate the fog release to coincide precisely with your music for maximum impact.",
        "Does it leave residue? No. The fog dissipates naturally within minutes after the effect ends. There is no chemical residue, no staining of floors or dresses, and absolutely no cleanup required. It's completely safe for all venues, all floors, and all formal attire.",
        "There's a reason this is the most requested special effect for first dances across South Florida. The result is a dreamy, ethereal atmosphere that photographs and films beautifully, giving you and your partner a first dance that looks like it belongs in a fairy tale. Photo Booth Legends is a photo booth rental and event experience company based in South Florida."
      ]}
      features={[
        { title: "Low-Lying Fog", description: "Dense, floor-hugging clouds that never rise above ankle height — no haze, no visibility issues." },
        { title: "Safe & Clean", description: "Uses dry ice and hot water — no chemicals, no residue, no staining of floors or dresses." },
        { title: "Adjustable Coverage", description: "Covers up to 2,000 sq ft of dance floor for a wall-to-wall cloud effect." },
        { title: "Timed to Your Song", description: "We coordinate the fog release to coincide perfectly with your first dance timing. Lasts 3-5 minutes." },
        { title: "Quick Setup", description: "Equipment is positioned discreetly and ready to go without disrupting your reception flow." },
        { title: "Professional Technicians", description: "Our team manages every detail so you can focus entirely on the moment." },
      ]}
      highlights={[
        "The #1 most-requested first dance effect in South Florida weddings",
        "Creates breathtaking photo and video moments your photographer will love",
        "Pairs perfectly with Cold Sparks for the ultimate cinematic experience",
        "Completely safe for all venues, floors, and formal attire",
        "Fog dissipates naturally within minutes — no cleanup required",
        "Available as a standalone add-on or part of our premium packages",
      ]}
      idealFor={[
        "First Dances", "Weddings", "Engagement Parties", "Quinceañeras",
        "Anniversary Celebrations", "Romantic Proposals", "Gala Entrances", "Sweet 16s",
      ]}
      ctaText="Ready to Dance on the Clouds?"
    />
  </>
);

export default DancingCloudsPage;
