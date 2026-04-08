import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/selfie-booth.jpg";

const SelfieBoothPage = () => (
  <ServicePageLayout
    tag="Selfie Booth"
    title="The Selfie Booth Experience"
    subtitle="Fun, Stylish, and Instantly Shareable — the modern photo booth your guests actually want."
    heroImage={heroImg}
    heroAlt="Selfie photo booth rental South Florida wedding"
    introParagraphs={[
      "Forget the old-school curtain booth. Our Selfie Booth — affectionately called the Salsa Booth — brings a sleek, open-air experience that's as stylish as it is fun. Guests step up, strike their best pose, and walk away with gorgeous, high-resolution photos they'll actually want to share.",
      "With a stunning digital interface, professional studio lighting, and real-time social sharing, it's the centerpiece that keeps your guests coming back for more. Whether it's a wedding, birthday, or corporate gala, the Selfie Booth adds a layer of entertainment that feels effortless and elevated.",
    ]}
    features={[
      { title: "Instant Sharing", description: "Guests can text, email, or AirDrop their photos in seconds. No waiting, no apps to download." },
      { title: "Custom Overlays", description: "Personalized photo frames and overlays designed to match your event theme, colors, and branding." },
      { title: "Studio-Quality Lighting", description: "Ring light and softbox technology ensures every guest looks their absolute best." },
      { title: "GIF & Boomerang Mode", description: "Beyond static photos — capture animated GIFs and boomerangs for maximum social media engagement." },
      { title: "Digital Gallery", description: "Every photo is saved to a private online gallery you can share with all your guests after the event." },
      { title: "Professional Attendant", description: "A friendly, trained team member manages the booth and keeps the energy high all night." },
    ]}
    highlights={[
      "Sleek, modern design that complements any venue aesthetic",
      "Touchscreen interface with intuitive, guest-friendly operation",
      "Unlimited photo sessions throughout your event",
      "Customizable backdrops available for a cohesive look",
      "Compact footprint — works in spaces of all sizes",
      "Props and accessories included to spark creativity",
    ]}
    idealFor={[
      "Weddings", "Birthday Parties", "Quinceañeras", "Corporate Events",
      "Brand Activations", "Holiday Parties", "Baby Showers", "Graduations",
    ]}
    ctaText="Ready to Make Every Selfie Legendary?"
  />
);

export default SelfieBoothPage;
