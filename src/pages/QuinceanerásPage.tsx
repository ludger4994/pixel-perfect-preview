import EventPageLayout from "@/components/EventPageLayout";

const QuinceanerásPage = () => (
  <EventPageLayout
    eventType="Quinceañera"
    slug="quinceaneras"
    title="Quinceañera Photo Booth Rental South Florida | Photo Booth Legends"
    metaDescription="Elevate your quinceañera with a luxury photo booth rental in South Florida. 360° booths, cold sparks, dancing on the clouds & custom themed prints. Miami to West Palm Beach."
    introParagraphs={[
      "A quinceañera is one of the most important celebrations in a young woman's life — and every moment deserves to be captured beautifully. Photo Booth Legends creates premium photo booth experiences designed specifically for quinceañera celebrations across South Florida.",
      "From the court entrance framed by dancing on the clouds to cold sparks lighting up the grand entrance — we add the magic that makes your quinceañera truly unforgettable. Our custom quinceañera-themed print templates capture the elegance and joy of this milestone celebration.",
      "Servimos eventos en todo el sur de la Florida. Photo Booth Legends is a photo booth rental and event experience company based in South Florida, proudly serving quinceañera celebrations from Miami to West Palm Beach.",
    ]}
    boothRecommendations={[
      { name: "Selfie Booth", description: "Custom quinceañera-themed prints with the guest of honor's name and date. Glam filter makes every photo flawless. GIFs and boomerangs for the court.", href: "/selfie-booth", best: "Best for: fun, shareable moments with the court" },
      { name: "360° Photo Booth", description: "Cinematic slow-motion video from every angle. The court entrance, the father-daughter dance — every moment captured in stunning 4K.", href: "/360-booth", best: "Best for: creating viral quinceañera content" },
      { name: "TXR20 Luxury Booth", description: "Studio-quality portraits with professional umbrella lighting. Magazine-worthy formal photos of the quinceañera and her court.", href: "/txr20-booth", best: "Best for: elegant formal quinceañera portraits" },
    ]}
    packages={[
      {
        name: "La Celebración",
        price: "$600",
        duration: "3 Hours",
        features: ["Lumière Selfie Booth (3 hours)", "Custom quinceañera-themed template", "Dancing on the Clouds for court entrance", "Instant prints + digital sharing", "Glam filter & themed overlays", "Professional on-site attendant"],
      },
      {
        name: "La Gran Fiesta",
        price: "$1,200",
        duration: "4 Hours",
        features: ["Ultimate Selfie Booth + 360° Gold", "Cold Sparks for grand entrance", "Dancing on the Clouds", "Shout-Out Video Station", "Custom themed start screen & prints", "Two professional on-site attendants"],
      },
    ]}
    specialEffectsNote="Dancing on the clouds is the perfect effect for the court entrance, and cold sparks create a dramatic grand entrance that your guests will never forget."
    tips={[
      "Book 2–3 months in advance for quinceañera peak season (September–November)",
      "Dancing on the clouds pairs beautifully with the court entrance and father-daughter dance",
      "Custom quinceañera-themed print templates can match your color scheme and invitations",
      "The 360° booth captures the court entrance from every angle — perfect for social media",
      "Coordinate with your DJ and event planner — we handle all setup seamlessly",
    ]}
    faqs={[
      { q: "How far in advance should I book for a quinceañera?", a: "We recommend booking 2–3 months in advance for quinceañeras, especially during peak season (September through November). Weekend dates fill up quickly." },
      { q: "Can the print templates be customized in Spanish?", a: "Absolutely. Photo Booth Legends creates custom templates that can include Spanish text, the guest of honor's name, date, and theme colors to match your quinceañera's style." },
      { q: "What effects work best for a quinceañera?", a: "Dancing on the clouds is the most popular effect for quinceañeras — it creates a dreamy, fairytale atmosphere for the court entrance. Cold sparks add a dramatic flair to the grand entrance." },
      { q: "Does the booth fit into the traditional quinceañera timeline?", a: "Yes. Our professional attendant coordinates with your DJ and event planner to ensure the booth runs during cocktail hour, reception, or at key moments without disrupting the event flow." },
    ]}
    ctaHeadline="Plan Your Quinceañera With Photo Booth Legends"
  />
);

export default QuinceanerásPage;
