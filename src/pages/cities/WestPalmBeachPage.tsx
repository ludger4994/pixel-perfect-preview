import CityPageLayout from "@/components/CityPageLayout";

const WestPalmBeachPage = () => (
  <CityPageLayout
    city="West Palm Beach"
    county="Palm Beach"
    slug="photo-booth-rental-west-palm-beach"
    title="Photo Booth Rental West Palm Beach | Photo Booth Legends"
    metaDescription="Photo booth rental in West Palm Beach & Palm Beach County. Selfie booths, 360° booths & special effects for weddings, birthdays & corporate events."
    neighborhoods={["Downtown West Palm Beach", "CityPlace", "Palm Beach Gardens"]}
    eventAngle="As our northern service area anchor, West Palm Beach hosts some of Palm Beach County's most elegant events — and Photo Booth Legends is there for every one."
    uniqueParagraphs={[
      "Photo Booth Legends proudly serves events throughout West Palm Beach and Palm Beach County. From downtown corporate events near the Kravis Center to elegant weddings in Palm Beach Gardens — we travel from Homestead to West Palm Beach to bring the full luxury experience to your event.",
      "West Palm Beach in Palm Beach County is the northern anchor of our South Florida service area. The city's growing event scene, beautiful venues, and diverse celebrations make it a perfect match for Photo Booth Legends' premium photo booth experiences.",
      "We serve all areas throughout West Palm Beach including Downtown, CityPlace, Palm Beach Gardens, Jupiter, and surrounding Palm Beach County communities.",
    ]}
    popularEvents={["Weddings", "Corporate Events", "Birthday Parties", "Galas", "Charity Fundraisers", "Holiday Parties", "Quinceañeras"]}
    faqs={[
      { q: "Do you serve West Palm Beach?", a: "Yes! West Palm Beach is the northern anchor of Photo Booth Legends' South Florida service area. We serve events throughout West Palm Beach and all of Palm Beach County — from Jupiter south to Boca Raton." },
      { q: "Is there a travel fee for West Palm Beach events?", a: "No additional travel fees. Photo Booth Legends serves the entire tri-county area — Miami-Dade, Broward, and Palm Beach County — with delivery, setup, and breakdown included in every package." },
      { q: "What venues in West Palm Beach have you worked at?", a: "Our team has experience setting up at venues across West Palm Beach and Palm Beach County. We coordinate with every venue to ensure seamless logistics and a premium experience." },
    ]}
  />
);

export default WestPalmBeachPage;
