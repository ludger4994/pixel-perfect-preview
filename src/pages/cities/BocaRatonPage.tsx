import CityPageLayout from "@/components/CityPageLayout";

const BocaRatonPage = () => (
  <CityPageLayout
    city="Boca Raton"
    county="Palm Beach"
    slug="photo-booth-rental-boca-raton"
    title="Photo Booth Rental Boca Raton | Photo Booth Legends"
    metaDescription="Luxury photo booth rental in Boca Raton. Photo Booth Legends serves upscale weddings, corporate events & celebrations throughout Palm Beach County."
    neighborhoods={["Mizner Park", "Downtown Boca", "West Boca"]}
    eventAngle="Boca Raton's upscale event scene demands premium quality — and Photo Booth Legends delivers with our luxury booth collection and white-glove service."
    uniqueParagraphs={[
      "Photo Booth Legends proudly serves events throughout Boca Raton and Palm Beach County. Boca Raton's upscale celebration culture and world-class venues — from The Boca Raton resort to Mizner Park events — deserve nothing less than a luxury photo booth experience.",
      "We lean into the premium quality that Boca Raton clients expect. Our TXR20 Luxury Booth with its signature white umbrella diffuser delivers studio-quality portraits that match the elegance of Boca Raton's finest venues. Every detail is curated for an upscale experience.",
      "We serve all areas throughout Boca Raton including Mizner Park, Downtown Boca, West Boca, and surrounding Palm Beach County communities including Delray Beach and Boynton Beach.",
    ]}
    popularEvents={["Luxury Weddings", "Corporate Galas", "Charity Events", "Country Club Events", "Birthday Celebrations", "Bar & Bat Mitzvahs"]}
    faqs={[
      { q: "Do you serve Boca Raton and Palm Beach County?", a: "Yes! Photo Booth Legends serves events throughout Boca Raton and all of Palm Beach County, including Delray Beach, Boynton Beach, West Palm Beach, and Jupiter. No additional travel fees." },
      { q: "Which booth is best for a luxury Boca Raton wedding?", a: "The TXR20 Luxury Booth is our most popular choice for upscale Boca Raton weddings. Its professional white umbrella diffuser creates soft, flattering studio-quality light that makes every photo magazine-worthy." },
      { q: "Can you set up at The Boca Raton resort and country clubs?", a: "Absolutely. Photo Booth Legends has experience at premier Boca Raton venues. Our professional team coordinates with venue staff to ensure a seamless setup and premium experience." },
    ]}
  />
);

export default BocaRatonPage;
