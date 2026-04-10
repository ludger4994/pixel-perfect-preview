import EventPageLayout from "@/components/EventPageLayout";

const BirthdaysPage = () => (
  <EventPageLayout
    eventType="Birthday & Private Party"
    slug="birthdays-private-parties"
    title="Birthday Photo Booth Rental South Florida | Photo Booth Legends"
    metaDescription="Make your birthday party unforgettable with a luxury photo booth rental in South Florida. Selfie booths, 360° booths, props & instant sharing. Serving Miami to West Palm Beach."
    introParagraphs={[
      "Whether it's a milestone 30th, a fabulous 40th, or a legendary 50th — your birthday party deserves more than just a cake and balloons. Photo Booth Legends brings the energy, the fun, and the content to every birthday celebration across South Florida.",
      "Our Shout-Out Video Station from the Ultimate Experience package is the perfect birthday surprise — guests record personal video messages that become an unforgettable keepsake. Add our bubble gun props, money gun props, and custom birthday-branded start screens to make your party one for the books.",
      "Photo Booth Legends is a photo booth rental and event experience company based in South Florida. We handle all setup and breakdown so you can focus on celebrating.",
    ]}
    boothRecommendations={[
      { name: "Selfie Booth", description: "The life of the party. GIF mode, boomerangs, glam filter, and custom branded prints with your name and age. Guests go wild.", href: "/selfie-booth", best: "Best for: fun, shareable party moments" },
      { name: "360° Photo Booth", description: "Cinematic slow-motion video from every angle. Confetti cannon available. Red carpet & gold stanchion setup available.", href: "/360-booth", best: "Best for: creating viral birthday content" },
      { name: "TXR20 Luxury Booth", description: "Studio-quality portraits with professional umbrella lighting. Magazine-worthy images for milestone celebrations.", href: "/txr20-booth", best: "Best for: elegant milestone birthdays" },
    ]}
    packages={[
      {
        name: "The Celebration",
        price: "$400",
        duration: "2 Hours",
        features: ["Lumière Selfie Booth (2 hours)", "Custom birthday-branded template", "Instant prints + digital sharing", "Glam filter & AR masks", "Fun props collection", "Professional on-site attendant"],
      },
      {
        name: "The Ultimate Birthday",
        price: "$900",
        duration: "3 Hours",
        features: ["Ultimate Selfie Booth + 360° Booth", "Shout-Out Video Station", "Bubble gun & money gun props", "Custom birthday start screen", "Two professional attendants", "Full setup & breakdown"],
      },
    ]}
    specialEffectsNote="Add cold sparks to your grand entrance or dancing on the clouds to your birthday dance. These effects turn any venue into a cinematic celebration."
    tips={[
      "Book 2–4 weeks in advance for weekend birthday parties",
      "The Shout-Out Video Station makes the perfect birthday keepsake",
      "Money gun and bubble gun props are guest favorites at birthdays",
      "Custom branded start screens can match your party theme and colors",
      "Milestone birthdays (30th, 40th, 50th) pair perfectly with the TXR20 for elegant portraits",
    ]}
    faqs={[
      { q: "How far in advance should I book a birthday photo booth?", a: "We recommend booking 2–4 weeks in advance for birthday parties, especially for weekend dates. Peak season (October–December) fills up fast, so earlier is better." },
      { q: "Can the photo booth match my party theme?", a: "Absolutely. Photo Booth Legends creates custom branded templates, start screens, and overlays that match your party's theme, colors, and style. Just share your vision with us." },
      { q: "What props are included?", a: "Every Photo Booth Legends rental includes a curated props collection. For birthdays, we offer fun additions like bubble guns, money guns, and themed accessories." },
      { q: "Is the photo booth suitable for kids' parties?", a: "Yes! Our selfie booth is family-friendly with fun filters and kid-safe props. A professional attendant manages everything so parents can enjoy the party." },
    ]}
    ctaHeadline="Plan Your Birthday Party With Photo Booth Legends"
  />
);

export default BirthdaysPage;
