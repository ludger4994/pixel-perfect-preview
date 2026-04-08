import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/360-booth.jpg";

const ThreeSixtyBoothPage = () => (
  <ServicePageLayout
    tag="360 Booth"
    title="The 360 Booth"
    subtitle="Where Every Angle Tells the Story — slow-motion, social-media-ready content your guests will share instantly."
    heroImage={heroImg}
    heroAlt="360 photo booth rental Fort Lauderdale event"
    introParagraphs={[
      "Step onto the platform and let the camera spin. Our 360 Booth captures every angle of your best moments in stunning slow-motion video, creating the kind of cinematic content that dominates social media feeds. It's not just a photo booth — it's a viral experience.",
      "From flowing dresses to confetti cannons, the 360 Booth transforms ordinary movements into extraordinary, shareable moments. Your guests won't just remember your event — they'll relive it every time they watch their video.",
    ]}
    features={[
      { title: "Slow-Motion Video", description: "Cinematic slow-motion capture that makes every movement look like a music video." },
      { title: "Instant Social Sharing", description: "Videos are rendered in real time and shared directly to guests' phones within seconds." },
      { title: "Custom Overlays & Music", description: "Branded video overlays with your choice of music track to match your event's vibe." },
      { title: "LED Platform", description: "An illuminated spinning platform that adds visual drama and doubles as a stage." },
      { title: "Props & Effects", description: "Confetti cannons, wind machines, and curated prop collections to elevate every take." },
      { title: "Professional Attendant", description: "A dedicated team member to guide guests and ensure every capture is flawless." },
    ]}
    highlights={[
      "The #1 most-requested experience at events across South Florida",
      "4K video quality with professional-grade rendering",
      "Customizable speed — from dramatic slow-mo to full-speed energy",
      "Accommodates up to 4 guests on the platform simultaneously",
      "Perfect for red carpet entrances and grand celebrations",
      "All videos saved to a private gallery for post-event sharing",
    ]}
    idealFor={[
      "Weddings", "Sweet 16s", "Quinceañeras", "Proms",
      "Corporate Galas", "Product Launches", "Birthday Milestones", "Award Ceremonies",
    ]}
    ctaText="Ready to Go Viral?"
  />
);

export default ThreeSixtyBoothPage;
