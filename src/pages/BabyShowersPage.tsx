import EventPageLayout from "@/components/EventPageLayout";

const BabyShowersPage = () => (
  <EventPageLayout
    eventType="Baby Shower"
    slug="baby-showers"
    title="Baby Shower Photo Booth Rental South Florida | Photo Booth Legends"
    metaDescription="Capture every precious moment at your baby shower with a luxury photo booth rental. Custom themed prints, backdrops & instant sharing. Serving South Florida."
    introParagraphs={[
      "A baby shower is all about celebrating new beginnings — and what better way to capture the joy than with a luxury photo booth experience? Photo Booth Legends creates beautiful, personalized photo booth setups designed specifically for baby shower celebrations across South Florida.",
      "From elegant floral backdrops to custom gender-reveal themed prints, our selfie booth captures every precious moment — the excited grandparents, the adorable onesie decorating station, and the happy parents-to-be. Every guest walks away with a personalized keepsake.",
      "Photo Booth Legends is a photo booth rental and event experience company based in South Florida. We serve baby shower celebrations from Miami to West Palm Beach.",
    ]}
    boothRecommendations={[
      { name: "Selfie Booth", description: "Custom baby shower-themed prints with the parents' names, baby's name, and due date. Soft glam filter for beautiful, shareable photos.", href: "/selfie-booth", best: "Best for: intimate, elegant baby showers" },
      { name: "360° Photo Booth", description: "Fun, energetic slow-motion video content. Perfect for larger baby shower celebrations with a party vibe.", href: "/360-booth", best: "Best for: larger, lively celebrations" },
      { name: "TXR20 Luxury Booth", description: "Studio-quality portraits — the most elegant option. Guest book mode creates a beautiful keepsake album for the parents.", href: "/txr20-booth", best: "Best for: upscale garden party baby showers" },
    ]}
    packages={[
      {
        name: "Bundle of Joy",
        price: "$400",
        duration: "2 Hours",
        features: ["Lumière Selfie Booth (2 hours)", "Custom baby shower themed template", "Instant prints + digital sharing", "Soft glam filter", "Curated baby-themed props", "Professional on-site attendant"],
      },
    ]}
    specialEffectsNote="For a touch of magic, add dancing on the clouds to create a dreamy, whimsical atmosphere that matches the joy of welcoming a new baby."
    tips={[
      "Book 2–3 weeks in advance for baby shower dates",
      "Custom prints can include the baby's name, gender reveal colors, or nursery theme",
      "Guest book mode on the TXR20 creates a beautiful keepsake album for the parents",
      "Our White Rose Flower Wall is the most popular backdrop for baby showers",
      "Coordinate with your host — we handle all setup and breakdown seamlessly",
    ]}
    faqs={[
      { q: "What's the best photo booth for a baby shower?", a: "The Lumière Selfie Booth is our most popular choice for baby showers. It creates beautiful, intimate photos with a soft glam filter and custom themed prints that guests love taking home." },
      { q: "Can you match the baby shower theme?", a: "Absolutely. Photo Booth Legends designs custom templates that match your baby shower's color scheme, theme, and style — from pastel florals to safari adventures." },
      { q: "How many guests can use the booth?", a: "Our selfie booth can accommodate groups of 1–8 people per photo. For a typical 2-hour baby shower rental, we can serve 40–60 guests comfortably." },
    ]}
    ctaHeadline="Plan Your Baby Shower With Photo Booth Legends"
  />
);

export default BabyShowersPage;
