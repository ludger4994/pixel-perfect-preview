import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/dancing-clouds.jpg";

const DancingCloudsPage = () => (
  <ServicePageLayout
    tag="Dancing on the Clouds"
    title="Dancing on the Clouds"
    subtitle="Float Into Your Most Magical Moment — a sea of silky, low-lying clouds for the ultimate romantic experience."
    heroImage={heroImg}
    heroAlt="Dancing on the clouds rental South Florida wedding"
    introParagraphs={[
      "There's a reason this is the most requested special effect for first dances across South Florida. Dancing on the Clouds creates a thick, rolling blanket of pure white fog that hugs the floor, making it look — and feel — like you're floating on air. It's pure romance brought to life.",
      "Using professional-grade equipment and dry ice, our low-lying fog stays at floor level without ever rising into your guests' faces. The result is a dreamy, ethereal atmosphere that photographs and films beautifully, giving you and your partner a first dance that looks like it belongs in a fairy tale.",
    ]}
    features={[
      { title: "Low-Lying Fog", description: "Dense, floor-hugging clouds that never rise above ankle height — no haze, no visibility issues." },
      { title: "Safe & Clean", description: "Uses dry ice and hot water — no chemicals, no residue, no staining of floors or dresses." },
      { title: "Adjustable Coverage", description: "Covers up to 2,000 sq ft of dance floor for a wall-to-wall cloud effect." },
      { title: "Timed to Your Song", description: "We coordinate the fog release to coincide perfectly with your first dance timing." },
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
);

export default DancingCloudsPage;
