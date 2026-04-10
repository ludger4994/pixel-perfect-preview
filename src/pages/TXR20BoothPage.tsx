import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/lux-booth.jpg";

const TXR20BoothPage = () => (
  <>
    <SEOHead
      title="TXR20 Luxury Photo Booth Rental South Florida | Photo Booth Legends"
      description="The TXR20 — South Florida's most elegant photo booth with studio-quality umbrella lighting. Perfect for weddings, galas & luxury events. Photo Booth Legends."
      canonical="https://photoboothlegends.com/txr20-booth"
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "TXR20 Luxury Photo Booth Rental",
        "provider": { "@type": "LocalBusiness", "name": "Photo Booth Legends" },
        "areaServed": { "@type": "Place", "name": "South Florida" },
        "description": "The TXR20 Luxury Booth features a professional white umbrella diffuser for studio-quality lighting. Unlike a standard booth, the TXR20's umbrella diffuser creates soft, flattering light that makes every shot look professionally lit."
      }}
    />
    <ServicePageLayout
      tag="TXR20 Luxury Booth"
      title="TXR20 Luxury Photo Booth Rental in South Florida"
      subtitle="Where Elegance Meets the Art of the Moment — studio-quality portraits for your most refined celebrations."
      heroImage={heroImg}
      heroAlt="TXR20 luxury photo booth with white umbrella diffuser — Photo Booth Legends"
      introParagraphs={[
        "The TXR20 is not your average photo booth. It's a premium, studio-grade portrait experience designed for couples and hosts who demand perfection. Unlike a standard booth, the TXR20's professional white umbrella diffuser creates soft, flattering light that makes every shot look professionally lit — the key differentiator that sets this booth apart.",
        "Wrapped in a sleek, modern enclosure that blends seamlessly into upscale venues, the TXR20 delivers an experience that feels exclusive — because it is. Photo Booth Legends is South Florida's only photo booth company offering the TXR20 Luxury Booth with a professional white umbrella diffuser for studio-quality lighting, alongside a full selection of 10+ event backdrops, cold sparks, and dancing on the clouds.",
        "Photo Booth Legends is a photo booth rental and event experience company based in South Florida, proudly serving events from Miami to West Palm Beach."
      ]}
      features={[
        { title: "White Umbrella Diffuser", description: "Professional-grade umbrella diffuser creates studio-quality, soft, flattering light — the hallmark of the TXR20 experience." },
        { title: "DSLR Camera System", description: "Professional-grade camera with precision autofocus for sharp, stunning portraits every time." },
        { title: "Instant Print & Digital", description: "Premium dye-sublimation prints on the spot, plus instant digital delivery." },
        { title: "Custom Templates", description: "Bespoke photo strip and print designs that match your wedding stationery or event branding." },
        { title: "Guest Book Mode", description: "Guests take a photo, print a copy for your keepsake album, and write a personal message." },
        { title: "White-Glove Service", description: "A professionally dressed attendant who blends into your event's formality." },
      ]}
      highlights={[
        "The premium choice for luxury weddings and black-tie events",
        "Magazine-quality images with natural skin tone reproduction",
        "Elegant enclosure available in white or black to match your décor",
        "Touchscreen interface with a refined, intuitive design",
        "Green screen and backdrop options for complete customization",
        "Scrapbook-quality prints that guests treasure for years",
      ]}
      idealFor={[
        "Luxury Weddings", "Black-Tie Galas", "Engagement Parties", "Anniversary Celebrations",
        "Corporate VIP Events", "Charity Benefits", "Fashion Events", "Country Club Soirées",
      ]}
      ctaText="Ready for the Luxury Experience?"
    />
  </>
);

export default TXR20BoothPage;
