import CityPageLayout from "@/components/CityPageLayout";

const DoralPage = () => (
  <CityPageLayout
    city="Doral"
    county="Miami-Dade"
    slug="photo-booth-rental-doral"
    title="Photo Booth Rental Doral FL | Photo Booth Legends"
    metaDescription="Photo booth rental in Doral, FL. Corporate photo booths, branded experiences, 360° booths & selfie booths for Doral events. Book Photo Booth Legends."
    neighborhoods={["Doral", "Downtown Doral", "CityPlace Doral"]}
    eventAngle="Doral is South Florida's corporate hub — with a strong international business presence and a thriving Latin wedding and quinceañera market."
    uniqueParagraphs={[
      "Photo Booth Legends proudly serves events throughout Doral and Miami-Dade County. As South Florida's premier corporate hub, Doral hosts a high volume of corporate events, brand activations, and business celebrations — and our custom branded photo booth experiences are the perfect fit.",
      "Beyond corporate events, Doral's vibrant Latin community celebrates with style. From elegant quinceañeras with dancing on the clouds to luxury weddings with cold sparks — Photo Booth Legends brings the premium experience that Doral events demand.",
      "We serve all areas throughout Doral, FL including Downtown Doral, CityPlace Doral, and surrounding Miami-Dade communities near PortMiami.",
    ]}
    popularEvents={["Corporate Events", "Brand Activations", "Weddings", "Quinceañeras", "Holiday Parties", "Product Launches", "Birthday Parties"]}
    faqs={[
      { q: "Do you serve Doral?", a: "Yes! Photo Booth Legends serves events throughout Doral and all of Miami-Dade County. We're the go-to photo booth company for Doral corporate events and celebrations." },
      { q: "Do you offer branded corporate photo booths in Doral?", a: "Absolutely. Photo Booth Legends creates fully branded photo booth experiences for corporate events — custom overlays, branded prints, lead capture mode, and a 43-inch TV sharing station displaying your brand." },
      { q: "Can you serve events at Doral hotels and conference centers?", a: "Yes. Our professional team has experience at Doral's major event venues and conference centers. We coordinate all logistics to ensure a seamless setup." },
    ]}
  />
);

export default DoralPage;
