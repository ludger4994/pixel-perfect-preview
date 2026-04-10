import CityPageLayout from "@/components/CityPageLayout";

const MiamiPage = () => (
  <CityPageLayout
    city="Miami"
    county="Miami-Dade"
    slug="photo-booth-rental-miami"
    title="Photo Booth Rental Miami | Photo Booth Legends"
    metaDescription="Looking for a photo booth rental in Miami? Photo Booth Legends offers luxury selfie booths, 360° booths, cold sparks & more for Miami events. Book today."
    neighborhoods={["Coral Gables", "Brickell", "Wynwood", "South Beach", "Downtown Miami"]}
    eventAngle="Miami's vibrant event scene and diverse celebration culture make it one of our busiest service areas. From quinceañeras in Coral Gables to corporate events in Brickell — we bring the energy."
    uniqueParagraphs={[
      "Photo Booth Legends proudly serves events throughout Miami and Miami-Dade County. Whether you're celebrating a quinceañera in Coral Gables, hosting a brand activation in Wynwood, or planning a luxury wedding in South Beach — we bring the premium photo booth experience to you.",
      "Miami's vibrant, diverse celebration culture is at the heart of what we do. From the energy of Brickell's corporate scene to the glamour of Downtown Miami's event venues, Photo Booth Legends is the go-to photo booth rental company for Miami events of every kind.",
      "We serve all neighborhoods across Miami including Coral Gables, Brickell, Wynwood, South Beach, Downtown Miami, Little Havana, Coconut Grove, and surrounding Miami-Dade areas.",
    ]}
    popularEvents={["Weddings", "Quinceañeras", "Birthday Parties", "Corporate Events", "Brand Activations", "Sweet 16", "Baby Showers", "School Events"]}
    faqs={[
      { q: "Do you serve all of Miami?", a: "Yes! Photo Booth Legends serves events throughout all of Miami and Miami-Dade County, including Coral Gables, Brickell, Wynwood, South Beach, Downtown Miami, Little Havana, Coconut Grove, Doral, Kendall, and Homestead." },
      { q: "How far in advance should I book for a Miami event?", a: "We recommend booking 2–4 weeks in advance for most events, and 3–6 months in advance for weddings during peak season. Miami weekends fill up fast, so earlier is always better." },
      { q: "Is there a travel fee for Miami events?", a: "Photo Booth Legends is based in South Florida and serves Miami without additional travel fees. We include delivery, setup, and breakdown in all our packages." },
    ]}
  />
);

export default MiamiPage;
