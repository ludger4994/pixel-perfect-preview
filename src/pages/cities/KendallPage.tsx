import CityPageLayout from "@/components/CityPageLayout";

const KendallPage = () => (
  <CityPageLayout
    city="Kendall"
    county="Miami-Dade"
    slug="photo-booth-rental-kendall"
    title="Photo Booth Rental Kendall Miami | Photo Booth Legends"
    metaDescription="Photo booth rental in Kendall, Miami. Selfie booths, 360° booths & special effects for Kendall events. Weddings, birthdays & quinceañeras. Book now."
    neighborhoods={["Kendall", "The Falls", "Dadeland"]}
    eventAngle="Kendall is one of Miami-Dade's largest residential communities, with a strong family celebration culture and diverse events year-round."
    uniqueParagraphs={[
      "Photo Booth Legends proudly serves events throughout Kendall and Miami-Dade County. As one of Miami's largest and most diverse communities, Kendall hosts a constant stream of celebrations — from family birthday parties to elegant quinceañeras and weddings.",
      "Kendall's event venues near The Falls and Dadeland areas are popular settings for celebrations of all sizes. Photo Booth Legends brings the full premium experience — professional attendants, custom templates, and seamless setup — to every Kendall event.",
      "We serve all areas throughout Kendall including The Falls, Dadeland, Pinecrest, and surrounding South Miami-Dade communities.",
    ]}
    popularEvents={["Birthday Parties", "Quinceañeras", "Weddings", "Sweet 16", "Baby Showers", "Corporate Events", "Graduation Parties"]}
    faqs={[
      { q: "Do you serve Kendall?", a: "Yes! Photo Booth Legends serves events throughout Kendall and all of South Miami-Dade County, including The Falls, Dadeland, Pinecrest, and surrounding communities." },
      { q: "What's the most popular booth for Kendall events?", a: "Our selfie booth is the most requested for Kendall birthday parties and quinceañeras, while the 360° booth is the top choice for weddings and Sweet 16 celebrations." },
      { q: "Is there a travel fee for Kendall events?", a: "No. Photo Booth Legends serves all of Miami-Dade County without additional travel fees. Delivery, setup, and complete breakdown are included in every package." },
    ]}
  />
);

export default KendallPage;
