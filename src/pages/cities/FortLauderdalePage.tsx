import CityPageLayout from "@/components/CityPageLayout";

const FortLauderdalePage = () => (
  <CityPageLayout
    city="Fort Lauderdale"
    county="Broward"
    slug="photo-booth-rental-fort-lauderdale"
    title="Photo Booth Rental Fort Lauderdale | Photo Booth Legends"
    metaDescription="Photo booth rental in Fort Lauderdale — Photo Booth Legends offers selfie booths, 360° booths, cold sparks & dancing on the clouds for Broward County events."
    neighborhoods={["Downtown", "Las Olas", "Weston", "Davie"]}
    eventAngle="Fort Lauderdale's waterfront venues and growing corporate event scene make it the perfect setting for Photo Booth Legends' premium experiences."
    uniqueParagraphs={[
      "Photo Booth Legends proudly serves events throughout Fort Lauderdale and Broward County. From corporate galas on Las Olas Boulevard to waterfront weddings along the Intracoastal — our premium photo booth experiences elevate every Fort Lauderdale celebration.",
      "Fort Lauderdale in Broward County is home to some of South Florida's most stunning event venues. Whether you're planning a corporate event downtown, a wedding reception in Weston, or a birthday party in Davie — Photo Booth Legends brings the complete experience to your venue.",
      "We serve all areas across Fort Lauderdale including Downtown, Las Olas, Weston, Davie, Plantation, Sunrise, and surrounding Broward County communities.",
    ]}
    popularEvents={["Corporate Events", "Weddings", "Birthday Parties", "Brand Activations", "Galas", "Holiday Parties", "Quinceañeras"]}
    faqs={[
      { q: "Do you serve all of Fort Lauderdale and Broward County?", a: "Yes! Photo Booth Legends serves events throughout Fort Lauderdale and all of Broward County, including Downtown, Las Olas, Weston, Davie, Plantation, Sunrise, Hollywood, Coral Springs, Pembroke Pines, and Miramar." },
      { q: "Can you set up at waterfront venues in Fort Lauderdale?", a: "Absolutely. Our professional team has experience setting up at Fort Lauderdale's waterfront and indoor venues. We coordinate with your venue to ensure a seamless setup." },
      { q: "Is there a travel fee for Fort Lauderdale events?", a: "No. Photo Booth Legends is based in South Florida and serves Fort Lauderdale without additional travel fees. Delivery, setup, and breakdown are included in all packages." },
    ]}
  />
);

export default FortLauderdalePage;
