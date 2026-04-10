import EventPageLayout from "@/components/EventPageLayout";

const BrandActivationsPage = () => (
  <EventPageLayout
    eventType="Brand Activation"
    slug="brand-activations"
    title="Brand Activation Photo Booth South Florida | Photo Booth Legends"
    metaDescription="Custom branded photo booth experiences for South Florida brand activations, product launches & experiential marketing. Data capture, custom overlays & digital sharing."
    introParagraphs={[
      "Brand activations demand more than entertainment — they demand engagement, data capture, and shareable content that extends your brand's reach. Photo Booth Legends creates fully branded, data-driven photo booth experiences for brand activations, product launches, and experiential marketing campaigns across South Florida.",
      "Every touchpoint is customized to your brand: branded start screens, custom overlays with your logo, branded print templates, and a 43-inch TV sharing station displaying your brand to every guest. Our lead capture mode collects names, emails, and phone numbers — turning every photo into a qualified lead.",
      "Photo Booth Legends is a photo booth rental and event experience company based in South Florida. We've supported brand activations for companies across Miami-Dade, Broward, and Palm Beach County.",
    ]}
    boothRecommendations={[
      { name: "Selfie Booth", description: "Fully branded experience with custom overlays, branded prints, and lead capture mode. Digital sharing pushes your brand to every guest's social network.", href: "/selfie-booth", best: "Best for: lead capture & branded content" },
      { name: "360° Photo Booth", description: "The ultimate experiential marketing tool. Slow-motion branded videos go viral on social media. 43-inch TV sharing station maximizes brand visibility.", href: "/360-booth", best: "Best for: viral social media content & experiential" },
      { name: "TXR20 Luxury Booth", description: "Studio-quality branded portraits for premium brand experiences. Professional umbrella lighting ensures every image meets brand standards.", href: "/txr20-booth", best: "Best for: luxury brand activations & premium launches" },
    ]}
    packages={[
      {
        name: "Brand Essentials",
        price: "$600",
        duration: "3 Hours",
        features: ["Lumière Selfie Booth (3 hours)", "Custom branded overlays & templates", "Lead capture mode (name, email, phone)", "Digital sharing to social media", "Professional on-site attendant", "Full setup & breakdown"],
      },
      {
        name: "Brand Experience",
        price: "$1,200",
        duration: "4 Hours",
        features: ["360° Photo Booth + Selfie Booth combo", "Full brand customization on all touchpoints", "Lead capture mode with data export", "43-inch TV sharing station with brand loop", "Custom branded prints", "Two professional attendants"],
      },
    ]}
    specialEffectsNote="Cold sparks and dancing on the clouds add dramatic visual impact to product reveals, stage presentations, and brand moments that need to go viral."
    tips={[
      "Share your brand guidelines (logo, colors, fonts) and we'll create pixel-perfect branded templates",
      "Lead capture mode exports data as CSV — easy to import into your CRM",
      "The 43-inch TV sharing station runs your brand loop between guests",
      "360° booth videos with branded overlays generate the highest social media engagement",
      "Book 2–4 weeks in advance for brand activations to allow time for custom design",
    ]}
    faqs={[
      { q: "Can you fully customize the booth to our brand?", a: "Absolutely. Photo Booth Legends customizes every touchpoint to your brand: start screens, photo overlays, print templates, TV display loops, and even the booth exterior wrapping. Send us your brand kit and we'll handle the rest." },
      { q: "Does the booth capture leads?", a: "Yes. Our lead capture mode collects guest names, emails, and phone numbers before they take their photo. All data is exported as a clean CSV file — ready to import into your CRM or email platform." },
      { q: "What's the best booth for a brand activation?", a: "For maximum social media impact, the 360° photo booth generates the most viral content. For lead capture and branded prints, the selfie booth is the most effective. Many brands combine both for maximum engagement." },
      { q: "Do you support multi-day brand activations?", a: "Yes. Photo Booth Legends supports multi-day activations with special pricing. Contact us with your event schedule and we'll provide a custom proposal." },
    ]}
    ctaHeadline="Elevate Your Brand Activation With Photo Booth Legends"
  />
);

export default BrandActivationsPage;
