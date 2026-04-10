import EventPageLayout from "@/components/EventPageLayout";

const SchoolEventsPage = () => (
  <EventPageLayout
    eventType="School Event & Prom"
    slug="school-events"
    title="School Event Photo Booth Rental South Florida | Photo Booth Legends"
    metaDescription="Prom, graduation & school event photo booth rental in South Florida. 360° booths, selfie booths, instant sharing & custom school-branded prints. Book Photo Booth Legends."
    introParagraphs={[
      "From prom nights to graduation celebrations, homecoming dances to school fundraisers — Photo Booth Legends brings premium photo booth experiences to school events across South Florida. We create memories that students will share, save, and cherish for years.",
      "Our 360° booth is the ultimate prom experience — students go viral with cinematic slow-motion videos on TikTok and Instagram. Custom school-branded templates with your school's logo, colors, and event name make every print a keepsake.",
      "Photo Booth Legends is a photo booth rental and event experience company based in South Florida. We work with schools, PTAs, and event committees to create seamless, professional experiences.",
    ]}
    boothRecommendations={[
      { name: "Selfie Booth", description: "Custom school-branded prints, GIF mode, boomerangs, and instant social media sharing. Students love the glam filter and fun overlays.", href: "/selfie-booth", best: "Best for: school dances, fundraisers, spirit events" },
      { name: "360° Photo Booth", description: "The #1 most requested booth for proms and graduations. Slow-motion 4K video, confetti cannon, red carpet — students go viral.", href: "/360-booth", best: "Best for: prom nights & graduation celebrations" },
      { name: "TXR20 Luxury Booth", description: "Studio-quality formal portraits — perfect for prom photos. Professional umbrella lighting for magazine-worthy images.", href: "/txr20-booth", best: "Best for: formal prom & graduation portraits" },
    ]}
    packages={[
      {
        name: "School Spirit",
        price: "$500",
        duration: "3 Hours",
        features: ["Lumière Selfie Booth (3 hours)", "Custom school-branded template", "Instant prints + digital sharing", "Fun props collection", "Professional on-site attendant", "Full setup & breakdown"],
      },
      {
        name: "Prom Night VIP",
        price: "$900",
        duration: "4 Hours",
        features: ["360° Photo Booth (4 hours)", "Red carpet & gold stanchion setup", "Confetti cannon available", "Custom prom-themed overlays", "43-inch TV sharing station", "Professional on-site attendant"],
      },
    ]}
    specialEffectsNote="Cold sparks create an unforgettable prom entrance, and the 360° booth with confetti cannon is the highlight of any school dance."
    tips={[
      "Book 1–2 months in advance for prom season (April–May)",
      "We work directly with school administrators, PTAs, and event committees",
      "Custom school-branded templates include your logo, colors, and event name",
      "The 360° booth generates the most social media engagement at school events",
      "Ask about fundraiser-friendly pricing for school-sponsored events",
    ]}
    faqs={[
      { q: "Do you work with schools and PTAs?", a: "Yes! Photo Booth Legends regularly works with schools, PTAs, and student event committees across South Florida. We coordinate all logistics, provide professional attendants, and handle complete setup and breakdown." },
      { q: "What's the best photo booth for prom?", a: "The 360° photo booth is the most requested booth for prom nights. Students love the slow-motion video content — it goes viral on TikTok and Instagram. The red carpet and gold stanchion setup adds a VIP touch." },
      { q: "Can you include our school logo on the prints?", a: "Absolutely. Photo Booth Legends designs custom templates that include your school's logo, colors, event name, and date. Every print becomes a branded keepsake." },
      { q: "Do you offer special pricing for school events?", a: "We offer competitive packages designed for school events. Contact us with your event details and we'll provide a custom quote that works within your budget." },
    ]}
    ctaHeadline="Book Photo Booth Legends for Your School Event"
  />
);

export default SchoolEventsPage;
