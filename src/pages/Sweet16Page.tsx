import EventPageLayout from "@/components/EventPageLayout";

const Sweet16Page = () => (
  <EventPageLayout
    eventType="Sweet 16"
    slug="sweet-16"
    title="Sweet 16 Photo Booth Rental South Florida | Photo Booth Legends"
    metaDescription="Make your Sweet 16 legendary with a luxury photo booth rental in South Florida. 360° booths, selfie booths, cold sparks & custom themed experiences. Miami to West Palm Beach."
    introParagraphs={[
      "A Sweet 16 is a once-in-a-lifetime milestone — and the photos should be just as legendary. Photo Booth Legends brings the glamour, the energy, and the content to Sweet 16 celebrations all over South Florida.",
      "From viral 360° slow-motion videos to custom-branded selfie prints with the birthday girl's name and theme — we create experiences that your guests will be posting about for weeks. Add cold sparks for a dramatic entrance that sets the tone for the entire night.",
      "Photo Booth Legends is a photo booth rental and event experience company based in South Florida. We serve Sweet 16 celebrations from Miami to West Palm Beach.",
    ]}
    boothRecommendations={[
      { name: "Selfie Booth", description: "GIF mode, boomerangs, glam filter, and custom prints with the birthday girl's name and Sweet 16 theme. Instant sharing to social media.", href: "/selfie-booth", best: "Best for: fun, social media-ready moments" },
      { name: "360° Photo Booth", description: "The #1 choice for Sweet 16 parties. Cinematic slow-motion video that guests go viral with. Confetti cannon and red carpet available.", href: "/360-booth", best: "Best for: the most epic Sweet 16 content" },
      { name: "TXR20 Luxury Booth", description: "Studio-quality portraits for an elegant Sweet 16 celebration. Professional umbrella lighting for magazine-worthy photos.", href: "/txr20-booth", best: "Best for: upscale, elegant Sweet 16 parties" },
    ]}
    packages={[
      {
        name: "Sweet Celebration",
        price: "$500",
        duration: "2 Hours",
        features: ["Lumière Selfie Booth or 360° Booth", "Custom Sweet 16 themed template", "Instant prints + digital sharing", "Glam filter & fun props", "Professional on-site attendant"],
      },
      {
        name: "Sweet 16 VIP",
        price: "$1,000",
        duration: "3 Hours",
        features: ["Ultimate Selfie Booth + 360° Gold", "Cold Sparks for grand entrance", "Shout-Out Video Station", "Custom themed start screen", "Premium backdrop included", "Two professional attendants"],
      },
    ]}
    specialEffectsNote="Cold sparks create the most dramatic Sweet 16 entrance imaginable. Dancing on the clouds adds a fairytale touch to the first dance or special moments."
    tips={[
      "The 360° booth is the #1 most requested booth for Sweet 16 parties",
      "Book 1–2 months in advance for weekend Sweet 16 dates",
      "Custom themed start screens and prints can match your party's color scheme",
      "Cold sparks make the grand entrance the most memorable moment of the night",
      "Guests love sharing 360 videos on Instagram and TikTok — it's the ultimate party content",
    ]}
    faqs={[
      { q: "What's the best photo booth for a Sweet 16?", a: "The 360° photo booth is by far the most popular choice for Sweet 16 parties. The slow-motion video content goes viral on social media, and the red carpet setup makes every guest feel like a celebrity." },
      { q: "Can the booth match my Sweet 16 theme?", a: "Yes! Photo Booth Legends creates custom themed templates, start screens, and overlays that match your Sweet 16's colors, style, and theme. Just share your vision with us." },
      { q: "How much space does the photo booth need?", a: "Our selfie booth requires about 8×8 feet of space, and the 360° booth needs approximately 10×10 feet. We'll coordinate with your venue to find the perfect placement." },
    ]}
    ctaHeadline="Plan Your Sweet 16 With Photo Booth Legends"
  />
);

export default Sweet16Page;
