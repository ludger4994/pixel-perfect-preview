import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/glam-booth-main.jpg";

const SelfieBoothPage = () => (
  <>
    <SEOHead
      title="Selfie Booth Rental South Florida | Photo Booth Legends"
      description="Rent South Florida's most stylish selfie booth. Custom overlays, instant sharing, prints, backdrop options & professional attendant included. Serving Miami to West Palm Beach."
      canonical="https://photoboothlegends.com/selfie-booth"
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Selfie Booth Rental",
        "provider": { "@type": "LocalBusiness", "name": "Photo Booth Legends" },
        "areaServed": { "@type": "Place", "name": "South Florida" },
        "description": "Photo Booth Legends' Selfie Booth — powered by Salsa Booth / Fiesta software — delivers photos, GIFs, boomerangs & video with custom branded overlays, glam skin-smoothing filter, instant digital sharing, and professional on-site attendant. Serving Miami to West Palm Beach."
      }}
    />
    <ServicePageLayout
      tag="Selfie Booth"
      title="Selfie Booth Rental in South Florida"
      subtitle="Fun, Stylish, and Instantly Shareable — the modern photo booth your guests actually want. Packages starting at $400."
      heroImage={heroImg}
      heroAlt="Selfie booth rental South Florida — Photo Booth Legends event setup"
      introParagraphs={[
        "Forget the old-school curtain booth. Our Selfie Booth — powered by Salsa Booth / Fiesta software — brings a sleek, open-air experience that's as stylish as it is fun. Guests step up, strike their best pose, and walk away with gorgeous, high-resolution photos, GIFs, boomerangs, and video they'll actually want to share.",
        "With a stunning digital interface, professional studio lighting, a custom branded start screen and gallery, and real-time social sharing, it's the centerpiece that keeps your guests coming back for more. The Glam skin-smoothing filter (available in higher tiers) makes every guest look flawless. Whether it's a wedding, birthday, quinceañera, or corporate gala, the Selfie Booth adds a layer of entertainment that feels effortless and elevated.",
        "Photo Booth Legends is a photo booth rental and event experience company based in South Florida, proudly serving events from Miami to West Palm Beach."
      ]}
      features={[
        { title: "Instant Sharing", description: "Guests can text, email, AirDrop, or scan a QR code to receive their photos in seconds. No waiting, no apps to download." },
        { title: "Custom Overlays & Branding", description: "Personalized photo frames, overlays, and a custom branded start screen designed to match your event theme, colors, and branding." },
        { title: "Studio-Quality Lighting", description: "Ring light and softbox technology ensures every guest looks their absolute best." },
        { title: "GIF, Boomerang & Video Mode", description: "Beyond static photos — capture animated GIFs, boomerangs, and video for maximum social media engagement." },
        { title: "Glam Skin-Smoothing Filter", description: "Available in The Lumière and Ultimate Experience tiers — a professional-grade beauty filter that makes every portrait flawless." },
        { title: "Professional Attendant", description: "A friendly, trained team member manages the booth and keeps the energy high all night. Hands-free mode option also available." },
      ]}
      highlights={[
        "Sleek, modern design that complements any venue aesthetic",
        "Touchscreen interface with intuitive, guest-friendly operation",
        "Unlimited photo sessions throughout your event",
        "Customizable backdrops available for a cohesive look",
        "Compact footprint — works in spaces of all sizes",
        "Props and accessories included to spark creativity",
        "Custom branded digital gallery for post-event sharing",
      ]}
      idealFor={[
        "Weddings", "Birthday Parties", "Quinceañeras", "Corporate Events",
        "Brand Activations", "Holiday Parties", "Baby Showers", "Graduations",
      ]}
      ctaText="Ready to Book Your Selfie Booth?"
    />
  </>
);

export default SelfieBoothPage;
