import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

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
  { src: heroSelfieBooth, alt: "Luxury selfie booth at upscale South Florida venue", category: ["selfie", "events"], featured: true },
  { src: glamMain, alt: "Glam selfie booth rental Miami", category: ["selfie"], featured: true },
  { src: silverSequin, alt: "Silver sequin backdrop with neon sign", category: ["backdrops"], featured: true },
  { src: threeSixtyMain, alt: "360 photo booth red carpet setup South Florida", category: ["360"] },
  { src: heroParty, alt: "High energy photo booth party experience", category: ["selfie", "events"] },
  { src: flowerWall, alt: "White flower wall backdrop wedding South Florida", category: ["backdrops"] },
  { src: threeSixtyAction, alt: "360 photo booth guests with props", category: ["360", "events"] },
  { src: featureGopro, alt: "360 booth GoPro camera detail", category: ["360"] },
  { src: featureLighting, alt: "360 booth LED lighting ring", category: ["360"] },
  { src: featureOverlay, alt: "360 booth custom overlay example", category: ["360"] },
  { src: featureProps, alt: "Photo booth props table display", category: ["360", "selfie"] },
  { src: glamScreen, alt: "Selfie booth custom face screen feature", category: ["selfie"] },
  { src: glamPrints, alt: "Selfie booth instant prints feature", category: ["selfie"] },
  { src: glamModes, alt: "Selfie booth photos GIF video boomerang", category: ["selfie"] },
  { src: glamSharing, alt: "Selfie booth instant sharing station", category: ["selfie"] },
  { src: eventSequin, alt: "Real client event silver sequin backdrop", category: ["backdrops", "events"] },
  { src: luxBooth, alt: "TXR20 luxury photo booth product shot", category: ["selfie"] },
];

const tabs = [
  { key: "all", label: "All" },
  { key: "360", label: "360° Experience" },
  { key: "selfie", label: "Selfie Booth" },
  { key: "backdrops", label: "Premium Backdrops" },
  { key: "events", label: "Event Moments" },
];

const GalleryPreview = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeTab === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category.includes(activeTab));

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={headerRef} className={`reveal ${headerVisible ? "visible" : ""}`}>
          <div className="text-center mb-6">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Our Work</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold">
              Moments We've Created
            </h2>
            <p className="text-foreground/50 mt-3 text-sm max-w-lg mx-auto">
              Real events. Real moments. Real people. This is what we create.
            </p>
          </div>
        </div>

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
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
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

        <div className="text-center mt-4">
          <p className="text-xs text-muted-foreground italic">Real South Florida Events</p>
        </div>

        <div className={`reveal reveal-delay-4 ${isVisible ? "visible" : ""}`}>
          <div className="text-center mt-8">
            <Link to="/gallery">
              <Button variant="gold-outline" size="lg" className="btn-premium group inline-flex items-center gap-2">
                View Full Gallery
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox &&
        createPortal(
          <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close lightbox">
              <X size={28} />
            </button>
            <img
              src={lightbox}
              alt="Gallery full view"
              className="lightbox-img"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </section>
  );
};

export default GalleryPreview;
