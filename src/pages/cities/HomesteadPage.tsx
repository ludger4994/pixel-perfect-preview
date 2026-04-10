import CityPageLayout from "@/components/CityPageLayout";

const HomesteadPage = () => (
  <CityPageLayout
    city="Homestead"
    county="Miami-Dade"
    slug="photo-booth-rental-homestead"
    title="Photo Booth Rental Homestead FL | Photo Booth Legends"
    metaDescription="Photo booth rental in Homestead, FL. Selfie booths, 360° booths & special effects for events in Homestead and South Miami-Dade. Book Photo Booth Legends."
    neighborhoods={["Homestead", "Florida City", "Redland"]}
    eventAngle="Homestead marks the southern reach of our South Florida service area — from Homestead to West Palm Beach, Photo Booth Legends covers it all."
    uniqueParagraphs={[
      "Photo Booth Legends proudly serves events throughout Homestead and South Miami-Dade County. As the southernmost anchor of our service area, Homestead is where our coverage begins — and from here, we serve events all the way north to West Palm Beach.",
      "Homestead's growing community and family-friendly atmosphere make it a popular location for birthday parties, quinceañeras, weddings, and community events. Photo Booth Legends brings the same premium, luxury experience to Homestead events that we deliver across all of South Florida.",
      "We serve all areas throughout Homestead, FL including Florida City, Redland, and surrounding South Miami-Dade communities.",
    ]}
    popularEvents={["Birthday Parties", "Quinceañeras", "Weddings", "Sweet 16", "Community Events", "School Events", "Baby Showers"]}
    faqs={[
      { q: "Do you serve Homestead, FL?", a: "Yes! Homestead is the southern anchor of Photo Booth Legends' South Florida service area. We serve events throughout Homestead, Florida City, and all of South Miami-Dade County." },
      { q: "Is there a travel fee for Homestead events?", a: "No additional travel fees. Photo Booth Legends serves the entire tri-county area from Homestead to West Palm Beach with delivery, setup, and breakdown included in every package." },
      { q: "How do I book for a Homestead event?", a: "Call Photo Booth Legends at (954) 548-5809 or visit our booking page. Share your event date, venue, and guest count and we'll provide a custom quote for your Homestead celebration." },
    ]}
  />
);

export default HomesteadPage;
