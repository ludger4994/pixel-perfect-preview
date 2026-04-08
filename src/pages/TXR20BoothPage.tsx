import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/lux-booth.jpg";

const TXR20BoothPage = () => (
  <ServicePageLayout
    tag="TXR20 Luxury Booth"
    title="TXR20 Luxury Booth"
    subtitle="Where Elegance Meets the Art of the Moment — studio-quality portraits for your most refined celebrations."
    heroImage={heroImg}
    heroAlt="TXR20 luxury photo booth rental Miami wedding"
    introParagraphs={[
      "The TXR20 is not your average photo booth. It's a premium, studio-grade portrait experience designed for couples and hosts who demand perfection. With its sophisticated lighting system and ultra-high-resolution camera, every photo looks like it belongs in a magazine.",
      "Wrapped in a sleek, modern enclosure that blends seamlessly into upscale venues, the TXR20 delivers an experience that feels exclusive — because it is. This is the booth you choose when every detail of your event must be nothing short of extraordinary.",
    ]}
    features={[
      { title: "DSLR Camera System", description: "Professional-grade camera with precision autofocus for sharp, stunning portraits every time." },
      { title: "Studio Lighting", description: "Multi-point lighting system that sculpts and flatters, eliminating harsh shadows." },
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
);

export default TXR20BoothPage;
