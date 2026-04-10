import CityPageLayout from "@/components/CityPageLayout";

const CoralSpringsPage = () => (
  <CityPageLayout
    city="Coral Springs"
    county="Broward"
    slug="photo-booth-rental-coral-springs"
    title="Photo Booth Rental Coral Springs | Photo Booth Legends"
    metaDescription="Photo booth rental in Coral Springs, FL. Quinceañera, Sweet 16, birthday & family event photo booths. Selfie booths, 360° booths & special effects. Book now."
    neighborhoods={["Coral Springs", "Parkland", "Margate"]}
    eventAngle="Coral Springs has one of Broward County's strongest family-event cultures — from quinceañeras and Sweet 16 celebrations to milestone birthday parties."
    uniqueParagraphs={[
      "Photo Booth Legends proudly serves events throughout Coral Springs and Broward County. Coral Springs is known for its vibrant family community and celebration culture — and our premium photo booth experiences are the perfect addition to every family event.",
      "From quinceañera celebrations with dancing on the clouds to Sweet 16 parties with our 360° booth — Coral Springs families trust Photo Booth Legends to create unforgettable moments. We specialize in the celebrations that matter most to this community.",
      "We serve all areas throughout Coral Springs including nearby Parkland, Margate, Coconut Creek, and surrounding Broward County communities.",
    ]}
    popularEvents={["Quinceañeras", "Sweet 16", "Birthday Parties", "Family Celebrations", "School Events", "Baby Showers", "Graduation Parties"]}
    faqs={[
      { q: "Do you serve Coral Springs?", a: "Yes! Photo Booth Legends serves events throughout Coral Springs and surrounding Broward County communities including Parkland, Margate, and Coconut Creek. No additional travel fees." },
      { q: "What's the most popular service for Coral Springs quinceañeras?", a: "Our combo packages with the selfie booth, dancing on the clouds, and custom quinceañera-themed prints are the most popular choice for Coral Springs celebrations." },
      { q: "How far in advance should I book for a Coral Springs event?", a: "We recommend booking 2–4 weeks in advance for most events, and 2–3 months for quinceañeras during peak season (September–November)." },
    ]}
  />
);

export default CoralSpringsPage;
