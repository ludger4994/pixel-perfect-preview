import CityPageLayout from "@/components/CityPageLayout";

const HollywoodPage = () => (
  <CityPageLayout
    city="Hollywood"
    county="Broward"
    slug="photo-booth-rental-hollywood-fl"
    title="Photo Booth Rental Hollywood FL | Photo Booth Legends"
    metaDescription="Photo booth rental in Hollywood, Florida. Selfie booths, 360° booths & special effects for events in Hollywood FL and Broward County. Book Photo Booth Legends."
    neighborhoods={["Hollywood Beach", "ArtsPark", "Downtown Hollywood", "Hollywood Broadwalk"]}
    eventAngle="Hollywood, Florida brings a unique coastal vibe to events — from beachside celebrations on the Broadwalk to arts and cultural events at ArtsPark."
    uniqueParagraphs={[
      "Photo Booth Legends proudly serves events throughout Hollywood, Florida and Broward County. Hollywood's unique blend of beach culture, arts, and diverse community events makes it one of our most exciting service areas.",
      "From beachside celebrations along the Hollywood Broadwalk to cultural events at ArtsPark at Young Circle — Hollywood FL offers stunning venues that pair perfectly with our premium photo booth experiences. We bring the full luxury experience to every Hollywood event.",
      "We serve all areas throughout Hollywood, Florida including Hollywood Beach, ArtsPark, Downtown Hollywood, and surrounding Broward County communities.",
    ]}
    popularEvents={["Beach Weddings", "Birthday Parties", "Corporate Events", "Quinceañeras", "Community Events", "Sweet 16", "Holiday Parties"]}
    faqs={[
      { q: "Do you serve Hollywood, Florida?", a: "Yes! Photo Booth Legends serves events throughout Hollywood, Florida and all of Broward County. We handle all logistics including delivery, setup, and breakdown — no travel fees." },
      { q: "Can you set up at beach venues in Hollywood?", a: "Our team has experience with both indoor and covered outdoor setups. For beach venues, we coordinate with your event planner to ensure our equipment is properly positioned and protected." },
      { q: "How do I book for a Hollywood FL event?", a: "Contact Photo Booth Legends at (954) 548-5809 or visit our booking page. Share your event date, venue, and guest count — we'll put together a custom package for your Hollywood event." },
    ]}
  />
);

export default HollywoodPage;
