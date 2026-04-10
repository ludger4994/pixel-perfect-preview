import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";

import heroSelfieBooth from "@/assets/hero-selfie-booth.jpg";
import glamMain from "@/assets/glam-booth-main.jpg";
import silverSequin from "@/assets/silver-sequin-backdrop.jpg";
import threeSixtyMain from "@/assets/360-booth-main.jpg";
import heroParty from "@/assets/hero-party.jpg";
import flowerWall from "@/assets/flower-wall-backdrop.jpg";
import threeSixtyAction from "@/assets/360-booth.jpg";
import featureGopro from "@/assets/360-feature-gopro.jpg";
import featureLighting from "@/assets/360-feature-lighting.jpg";
import featureOverlay from "@/assets/360-feature-overlay.jpg";
import featureProps from "@/assets/feature-props.jpg";
import glamScreen from "@/assets/glam-feature-screen.jpg";
import glamPrints from "@/assets/glam-feature-prints.jpg";
import glamModes from "@/assets/glam-feature-modes.jpg";
import glamSharing from "@/assets/glam-feature-sharing.jpg";
import eventSequin from "@/assets/event-sequin-backdrop.jpg";
import luxBooth from "@/assets/lux-booth.jpg";

type GalleryImage = {
  src: string;
  alt: string;
  category: string[];
  featured?: boolean;
};

const galleryImages: GalleryImage[] = [
  { src: heroSelfieBooth, alt: "Luxury selfie booth at upscale South Florida venue — Photo Booth Legends", category: ["selfie", "events"], featured: true },
  { src: glamMain, alt: "Glam selfie booth rental Miami — Photo Booth Legends", category: ["selfie"], featured: true },
  { src: silverSequin, alt: "Silver sequin backdrop with neon sign — photo booth backdrop South Florida", category: ["backdrops"], featured: true },
  { src: threeSixtyMain, alt: "360 photo booth red carpet setup South Florida — Photo Booth Legends", category: ["360"] },
  { src: heroParty, alt: "High energy photo booth party experience South Florida", category: ["selfie", "events"] },
  { src: flowerWall, alt: "White flower wall backdrop wedding South Florida — Photo Booth Legends", category: ["backdrops"] },
  { src: threeSixtyAction, alt: "360 photo booth guests with props — Photo Booth Legends event", category: ["360", "events"] },
  { src: featureGopro, alt: "360 booth GoPro 4K camera detail — Photo Booth Legends", category: ["360"] },
  { src: featureLighting, alt: "360 booth LED lighting ring — Photo Booth Legends", category: ["360"] },
  { src: featureOverlay, alt: "360 booth custom overlay example — Photo Booth Legends", category: ["360"] },
  { src: featureProps, alt: "Photo booth props table display — Photo Booth Legends event", category: ["360", "selfie"] },
  { src: glamScreen, alt: "Selfie booth custom start screen feature — Photo Booth Legends", category: ["selfie"] },
  { src: glamPrints, alt: "Selfie booth instant prints — Photo Booth Legends", category: ["selfie"] },
  { src: glamModes, alt: "Selfie booth photos GIF video boomerang modes — Photo Booth Legends", category: ["selfie"] },
  { src: glamSharing, alt: "Selfie booth instant sharing station — Photo Booth Legends", category: ["selfie"] },
  { src: eventSequin, alt: "Real client event silver sequin backdrop — Photo Booth Legends South Florida", category: ["backdrops", "events"] },
  { src: luxBooth, alt: "TXR20 luxury photo booth with umbrella diffuser — Photo Booth Legends", category: ["selfie"] },
];

const tabs = [
  { key: "all", label: "All" },
  { key: "360", label: "360° Experience" },
  { key: "selfie", label: "Selfie Booth" },
  { key: "backdrops", label: "Premium Backdrops" },
  { key: "events", label: "Event Moments" },
];

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeTab === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category.includes(activeTab));

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Event Gallery | Photo Booth Legends South Florida"
        description="Browse real event photos from Photo Booth Legends — selfie booths, 360° booths, premium backdrops, and special effects at weddings, birthdays, and corporate events across South Florida."
        canonical="https://photoboothlegends.com/gallery"
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-8">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Gallery</p>
              <h1 className="font-heading text-4xl md:text-6xl text-foreground font-bold mb-4">
                Real Events. Real Moments.
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-4">
                Every photo is from a real Photo Booth Legends event across South Florida. This is what we create.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA above gallery */}
        <section className="pb-4">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <Link to="/book">
              <Button variant="gold-outline" size="lg">Love what you see? Book your experience →</Button>
            </Link>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Filter Tabs */}
            <div className="flex justify-center gap-1 mb-10 overflow-x-auto pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`gallery-tab ${activeTab === tab.key ? "active" : ""}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Masonry Grid */}
            <div className="gallery-masonry max-w-5xl mx-auto">
              {filtered.map((item, i) => (
                <div
                  key={item.src + i}
                  className={`gallery-masonry-item ${item.featured ? "featured" : ""}`}
                  onClick={() => setLightbox(item.src)}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-gallery CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground font-bold mb-4">
                Ready to Create Moments Like These?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book">
                  <Button variant="gold" size="lg">Book Now</Button>
                </Link>
                <Link to="/packages">
                  <Button variant="gold-outline" size="lg">View Packages</Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      {lightbox &&
        createPortal(
          <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close lightbox">
              <X size={28} />
            </button>
            <img
              src={lightbox}
              alt="Gallery full view — Photo Booth Legends"
              className="lightbox-img"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </div>
  );
};

export default GalleryPage;
