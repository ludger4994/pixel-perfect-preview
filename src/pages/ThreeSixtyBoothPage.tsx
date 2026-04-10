import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/360-booth-main.jpg";

const ThreeSixtyBoothPage = () => (
  <>
    <SEOHead
      title="360 Photo Booth Rental South Florida | Photo Booth Legends"
      description="Book South Florida's premium 360° photo booth — 4K GoPro, slow-motion video, custom overlays & 43-inch sharing station. Weddings, birthdays & corporate events. Miami to West Palm Beach."
      canonical="https://photoboothlegends.com/360-booth"
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "360° Photo Booth Rental",
        "provider": { "@type": "LocalBusiness", "name": "Photo Booth Legends" },
        "areaServed": { "@type": "Place", "name": "South Florida" },
        "description": "Photo Booth Legends' 360° Photo Booth captures cinematic slow-motion video with a GoPro 4K camera, custom overlays, and a 43-inch TV sharing station. Confetti cannon and red carpet setup available."
      }}
    />
    <ServicePageLayout
      tag="360° Photo Booth"
      title="360° Photo Booth Rental in South Florida"
      subtitle="Where Every Angle Tells the Story — slow-motion, social-media-ready content your guests will share instantly. Packages starting at $600."
      heroImage={heroImg}
      heroAlt="360 photo booth rental South Florida — Photo Booth Legends event"
      introParagraphs={[
        "Step onto the platform and let the camera spin. Our 360° Photo Booth captures every angle of your best moments in stunning slow-motion video using a GoPro 4K camera, creating the kind of cinematic content that dominates social media feeds. It's not just a photo booth — it's a viral experience.",
        "From flowing dresses to confetti cannons, the 360° Booth transforms ordinary movements into extraordinary, shareable moments. With a 43-inch TV sharing station on-site — something no competitor offers — guests can preview and share their videos instantly. Red carpet and gold stanchion setup available for a true VIP entrance.",
        "Photo Booth Legends is a photo booth rental and event experience company based in South Florida, proudly serving events from Miami to West Palm Beach."
      ]}
      features={[
        { title: "Slow-Motion Video", description: "Cinematic slow-motion video output (not just photos) that makes every movement look like a music video." },
        { title: "GoPro 4K Camera", description: "12MP 4K Ultra HD quality ensures crystal-clear, professional-grade video every time." },
        { title: "43-Inch TV Sharing Station", description: "An on-site 43-inch TV sharing station where guests can preview, watch, and share their 360° videos instantly." },
        { title: "Custom Overlays & Music", description: "Branded video overlays with your choice of music track to match your event's vibe." },
        { title: "Confetti Cannon & Effects", description: "Confetti cannons, wind machines, and curated prop collections to elevate every take." },
        { title: "Professional Attendant", description: "A dedicated team member to guide guests and ensure every capture is flawless." },
      ]}
      highlights={[
        "The #1 most-requested experience at events across South Florida",
        "4K video quality with professional-grade rendering",
        "Customizable speed — from dramatic slow-mo to full-speed energy",
        "Accommodates up to 4 guests on the platform simultaneously",
        "Red carpet and gold stanchion setup available for grand entrances",
        "All videos saved to a private gallery for post-event sharing",
      ]}
      idealFor={[
        "Weddings", "Sweet 16s", "Quinceañeras", "Proms",
        "Corporate Galas", "Product Launches", "Birthday Milestones", "Award Ceremonies",
      ]}
      ctaText="Ready to Book Your 360° Booth?"
    />
  </>
);

export default ThreeSixtyBoothPage;
