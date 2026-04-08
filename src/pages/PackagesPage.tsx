import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Check, Minus, Star, Sparkles, Heart } from "lucide-react";

/* ── Package Data ── */

interface PackageData {
  id: string;
  name: string;
  price: number;
  duration: string;
  badge?: string;
  badgeColor?: string;
  tagline: string;
  features: string[];
  exclusive?: { title: string; description: string };
  grayNotes?: string[];
  cta: string;
  accentClass?: string;
}

const selfiePackages: PackageData[] = [
  {
    id: "spark",
    name: "The Spark",
    price: 400,
    duration: "2 Hours",
    tagline: "Starter Experience",
    features: [
      "Salsa Booth (iPad-based selfie booth)",
      "Photos, GIFs & Boomerangs",
      "Digital sharing — text, email, QR code & AirDrop",
      "Custom start screen",
      "Live online guest gallery",
      "Props table included",
      "Choice of standard backdrop",
      "Professional on-site attendant",
      "Setup & breakdown included",
    ],
    grayNotes: ["No prints — digital sharing only", "Premium backdrops: +$75 add-on"],
    cta: "Select The Spark",
  },
  {
    id: "lumiere",
    name: "The Lumière",
    price: 600,
    duration: "3 Hours",
    badge: "Most Popular",
    badgeColor: "bg-gradient-gold text-primary-foreground",
    tagline: "Signature Experience",
    features: [
      "Salsa Booth (iPad-based selfie booth)",
      "2×6 print strips included",
      "4×6 prints included",
      "Custom branded print template",
      "Custom start screen design",
      "Custom branded guest gallery",
      "Photos, GIFs, Boomerangs & Video",
      "Digital sharing — text, email & QR code",
      "Live online guest gallery",
      "Glam skin-smoothing filter",
      "AR filters & face masks",
      "Full props table included",
      "All standard backdrops included",
      "Professional on-site attendant",
      "Setup & breakdown included",
    ],
    grayNotes: ["Premium backdrops: +$75 add-on"],
    cta: "Select The Lumière",
  },
  {
    id: "ultimate",
    name: "The Ultimate Experience",
    price: 700,
    duration: "4 Hours",
    badge: "Ultimate",
    badgeColor: "bg-amber-600/80 text-foreground",
    tagline: "Premium Experience",
    features: [
      "Everything in The Lumière",
      "2×6 & 4×6 print strips",
      "Custom branded print template",
      "Custom start screen & branded guest gallery",
      "Photos, GIFs, Boomerangs & Video",
      "Glam skin-smoothing filter",
      "AR filters & face masks",
      "All standard backdrops included",
      "Full props table included",
      "Professional on-site attendant",
      "Setup & breakdown included",
    ],
    exclusive: {
      title: "Shout-Out Video Station",
      description: "Grab the mic and make it personal. Guests step up and record a heartfelt 20–30 second video message — birthday wishes, congratulations, words of love — creating a one-of-a-kind keepsake reel the guest of honor will treasure forever.",
    },
    grayNotes: ["Premium backdrops: +$75 add-on"],
    cta: "Select The Ultimate Experience",
  },
];

const threeSixtyPackages: PackageData[] = [
  {
    id: "360-gold",
    name: "360° Gold",
    price: 600,
    duration: "2 Hours",
    badge: "Gold",
    badgeColor: "bg-gradient-gold text-primary-foreground",
    tagline: "Viral Experience",
    features: [
      "360° video booth platform",
      "12MP 4K Ultra HD quality (GoPro camera)",
      "Slow-motion cinematic 360° video output",
      "Custom audio — 2 songs of your choice",
      "Custom branded video overlay",
      '43" TV sharing station on-site',
      "QR code instant sharing",
      "Live online guest gallery",
      "20+ word props (feather boas, light wands, money gun, bubble gun, stick props & more)",
      "LED lighting ring",
      "Professional on-site attendant",
      "Setup & breakdown included",
    ],
    grayNotes: ["+$150 per additional hour"],
    cta: "Select 360° Gold",
  },
  {
    id: "360-diamond",
    name: "360° Diamond",
    price: 750,
    duration: "3 Hours",
    badge: "Diamond",
    badgeColor: "bg-[hsl(200,60%,65%)] text-primary-foreground",
    tagline: "Elite Experience",
    accentClass: "border-[hsl(200,60%,65%)]/40",
    features: [
      "Everything in 360° Gold",
      "12MP 4K Ultra HD quality (GoPro camera)",
      "Slow-motion cinematic 360° video output",
      "Custom audio — songs of your choice",
      "Custom branded video overlay",
      '43" TV sharing station on-site',
      "QR code instant sharing",
      "Live online guest gallery",
      "20+ word props, feather boas & more",
      "LED lighting ring",
      "Professional on-site attendant",
      "Setup & breakdown included",
    ],
    exclusive: {
      title: "Event Highlight Montage",
      description: "Receive a professionally edited video montage of your best 360° moments from the night — set to music, beautifully sequenced, and ready to post, share, and relive long after the last song plays.",
    },
    grayNotes: ["+$150 per additional hour"],
    cta: "Select 360° Diamond",
  },
];

const weddingPackages: PackageData[] = [
  {
    id: "romance",
    name: "The Romance",
    price: 800,
    duration: "3 Hours",
    badge: "Wedding",
    badgeColor: "bg-[hsl(350,30%,70%)] text-primary-foreground",
    tagline: "Wedding Selfie Experience",
    accentClass: "border-[hsl(350,30%,70%)]/40",
    features: [
      "The Lumière Selfie Booth package (3 hours)",
      "2×6 & 4×6 custom print strips",
      "Custom wedding-branded print template",
      "Custom start screen & branded guest gallery",
      "Dancing on the Clouds for the first dance",
      "White Rose Flower Wall backdrop included",
      "Glam skin-smoothing filter",
      "AR filters & face masks",
      "Digital sharing + prints for all guests",
      "Professional on-site attendant",
      "Setup & breakdown included",
    ],
    cta: "Book The Romance",
  },
  {
    id: "grand-affair",
    name: "The Grand Affair",
    price: 1200,
    duration: "4 Hours",
    badge: "Wedding Premium",
    badgeColor: "bg-[hsl(350,30%,65%)] text-primary-foreground",
    tagline: "Full Wedding Experience",
    accentClass: "border-[hsl(350,30%,65%)]/40",
    features: [
      "Salsa Booth — The Ultimate Experience (4 hours)",
      "360° Booth — Gold Package included",
      "Cold Sparks (first dance / grand entrance)",
      "Dancing on the Clouds",
      "2×6 & 4×6 custom print strips",
      "Custom wedding overlay & branded template",
      "Shout-Out Video Station for wedding guests",
      "White Rose Flower Wall backdrop included",
      "Premium backdrop of your choice",
      "Glam filter, AR filters, full props table",
      "Two professional on-site attendants",
      "Full setup, coordination & breakdown",
    ],
    cta: "Book The Grand Affair",
  },
];

const addOns = [
  { name: "Cold Sparks", price: 150, description: "Cinematic indoor-safe spark showers" },
  { name: "Dancing on the Clouds", price: 150, description: "Low-lying ethereal fog effect" },
  { name: "Full Effect Bundle", price: 275, description: "Both effects — save $25" },
  { name: "Premium Backdrop Upgrade", price: 75, description: "Silver sequin, flower wall & more" },
  { name: "Additional Hour", price: 150, description: "Extend your experience" },
];

/* ── Comparison Table ── */
const comparisonFeatures = [
  { section: "BOOTH & HARDWARE" },
  { feature: "Booth type", values: ["Salsa iPad", "Salsa iPad", "Salsa iPad", "360° Platform", "360° Platform"] },
  { feature: "Camera", values: ["iPad HD", "iPad HD", "iPad HD", "4K GoPro", "4K GoPro"] },
  { feature: "Built-in LED lighting", values: ["✓", "✓", "✓", "✓", "✓"] },
  { feature: "360° video platform", values: ["—", "—", "—", "✓", "✓"] },
  { feature: '43" TV sharing station', values: ["—", "—", "—", "✓", "✓"] },
  { section: "CAPTURE MODES" },
  { feature: "Photos", values: ["✓", "✓", "✓", "—", "—"] },
  { feature: "GIFs", values: ["✓", "✓", "✓", "—", "—"] },
  { feature: "Boomerangs", values: ["✓", "✓", "✓", "—", "—"] },
  { feature: "Video captures", values: ["✓", "✓", "✓", "—", "—"] },
  { feature: "Slow-motion 360° video", values: ["—", "—", "—", "✓", "✓"] },
  { feature: "Green screen", values: ["—", "✓", "✓", "—", "—"] },
  { section: "PRINTS & OUTPUT" },
  { feature: "2×6 print strips", values: ["—", "✓", "✓", "—", "—"] },
  { feature: "4×6 prints", values: ["—", "✓", "✓", "—", "—"] },
  { feature: "Custom print template", values: ["—", "✓", "✓", "—", "—"] },
  { section: "CUSTOMIZATION" },
  { feature: "Custom start screen", values: ["✓", "✓", "✓", "✓", "✓"] },
  { feature: "Custom branded gallery", values: ["—", "✓", "✓", "✓", "✓"] },
  { feature: "Custom video overlay", values: ["—", "—", "—", "✓", "✓"] },
  { feature: "AR filters & face masks", values: ["—", "✓", "✓", "—", "—"] },
  { feature: "Glam skin-smoothing filter", values: ["—", "✓", "✓", "—", "—"] },
  { section: "SHARING & DELIVERY" },
  { feature: "QR code sharing", values: ["✓", "✓", "✓", "✓", "✓"] },
  { feature: "Text & email sharing", values: ["✓", "✓", "✓", "✓", "✓"] },
  { feature: "AirDrop sharing", values: ["✓", "✓", "✓", "—", "—"] },
  { feature: "Live online guest gallery", values: ["✓", "✓", "✓", "✓", "✓"] },
  { feature: "Event highlight montage", values: ["—", "—", "—", "—", "✓"] },
  { section: "SIGNATURE EXCLUSIVES" },
  { feature: "Shout-Out Video Station", values: ["—", "—", "✓", "—", "—"] },
  { feature: "Event Highlight Montage", values: ["—", "—", "—", "—", "✓"] },
  { section: "EVENT EXPERIENCE" },
  { feature: "Props table", values: ["✓", "✓", "✓", "—", "—"] },
  { feature: "20+ word props", values: ["—", "—", "—", "✓", "✓"] },
  { feature: "Standard backdrop", values: ["✓", "✓", "✓", "—", "—"] },
  { feature: "Premium backdrop", values: ["+ add-on", "+ add-on", "+ add-on", "+ add-on", "+ add-on"] },
  { feature: "Professional attendant", values: ["✓", "✓", "✓", "✓", "✓"] },
  { feature: "Setup & breakdown", values: ["✓", "✓", "✓", "✓", "✓"] },
  { feature: "Additional hours", values: ["+$150/hr", "+$150/hr", "+$150/hr", "+$150/hr", "+$150/hr"] },
];

const colHeaders = [
  { name: "Spark", price: "$400", dur: "2hr" },
  { name: "Lumière", price: "$600", dur: "3hr" },
  { name: "Ultimate", price: "$700", dur: "4hr" },
  { name: "360° Gold", price: "$600", dur: "2hr" },
  { name: "360° Diamond", price: "$750", dur: "3hr" },
];

/* ── Package Card Component ── */
const PackageCard = ({
  pkg,
  selected,
  onSelect,
}: {
  pkg: PackageData;
  selected: boolean;
  onSelect: () => void;
}) => (
  <div
    onClick={onSelect}
    className={`relative rounded-lg p-6 lg:p-8 flex flex-col border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-gold ${
      selected ? "border-primary shadow-gold-lg bg-primary/5" : pkg.accentClass || "border-border/30 bg-card"
    }`}
  >
    {pkg.badge && (
      <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap ${pkg.badgeColor}`}>
        {pkg.badge}
      </span>
    )}
    <p className="text-xs tracking-[0.2em] uppercase text-primary mb-1">{pkg.tagline}</p>
    <h3 className="font-heading text-2xl text-foreground font-bold mb-1">{pkg.name}</h3>
    <div className="flex items-baseline gap-2 mb-6">
      <span className="font-heading text-3xl text-primary font-bold">${pkg.price.toLocaleString()}</span>
      <span className="text-sm text-muted-foreground">· {pkg.duration}</span>
    </div>
    <ul className="space-y-2 mb-4 flex-1">
      {pkg.features.map((f) => (
        <li key={f} className="text-sm text-foreground/70 flex items-start gap-2">
          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
          {f}
        </li>
      ))}
    </ul>
    {pkg.exclusive && (
      <div className={`p-4 rounded-lg mb-4 border ${pkg.accentClass ? "border-[hsl(200,60%,65%)]/30 bg-[hsl(200,60%,65%)]/5" : "border-primary/30 bg-primary/5"}`}>
        <p className="text-sm font-semibold text-foreground flex items-center gap-2 mb-1">
          <Sparkles className="w-4 h-4 text-primary" />
          {pkg.exclusive.title}
        </p>
        <p className="text-xs text-foreground/60 leading-relaxed">{pkg.exclusive.description}</p>
      </div>
    )}
    {pkg.grayNotes && (
      <div className="space-y-1 mb-4">
        {pkg.grayNotes.map((n) => (
          <p key={n} className="text-xs text-muted-foreground italic">{n}</p>
        ))}
      </div>
    )}
    <Link to="/contact">
      <Button variant={selected ? "gold" : "gold-outline"} className="w-full">
        {pkg.cta}
      </Button>
    </Link>
  </div>
);

/* ── Main Page Component ── */
const PackagesPage = () => {
  const location = useLocation();
  const [selectedPkg, setSelectedPkg] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  useEffect(() => {
    if (location.hash === "#wedding") {
      setTimeout(() => {
        document.getElementById("wedding")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  const allPackages = [...selfiePackages, ...threeSixtyPackages, ...weddingPackages];
  const selectedPkgData = allPackages.find((p) => p.id === selectedPkg);
  const addOnTotal = selectedAddOns.reduce((sum, name) => {
    const ao = addOns.find((a) => a.name === name);
    return sum + (ao?.price || 0);
  }, 0);
  const total = (selectedPkgData?.price || 0) + addOnTotal;

  const toggleAddOn = (name: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Our Packages</p>
              <h1 className="font-heading text-4xl md:text-6xl text-foreground font-bold mb-4">
                Find Your Perfect Experience
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Every package is designed to deliver a premium, unforgettable experience for your guests — from start to finish.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Selfie Booth Packages */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold text-center mb-4">
                Selfie Booth Packages
              </h2>
              <p className="text-center text-muted-foreground mb-12">Powered by the Salsa Booth</p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {selfiePackages.map((pkg, i) => (
                <AnimateOnScroll key={pkg.id} delay={i * 100}>
                  <PackageCard
                    pkg={pkg}
                    selected={selectedPkg === pkg.id}
                    onSelect={() => setSelectedPkg(pkg.id)}
                  />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* 360° Booth Packages */}
        <section className="py-16 lg:py-20 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold text-center mb-12">
                360° Booth Packages
              </h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {threeSixtyPackages.map((pkg, i) => (
                <AnimateOnScroll key={pkg.id} delay={i * 100}>
                  <PackageCard
                    pkg={pkg}
                    selected={selectedPkg === pkg.id}
                    onSelect={() => setSelectedPkg(pkg.id)}
                  />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Wedding & Special Effects */}
        <section id="wedding" className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold text-center mb-4">
                Wedding & Special Effects
              </h2>
              <p className="text-center text-muted-foreground mb-12">Complete experiences crafted for your special day</p>
            </AnimateOnScroll>

            {/* Special Effects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
              {[
                {
                  name: "Cold Sparks",
                  price: "$150",
                  note: "add-on",
                  features: ["Ice-cold spark showers — no heat, no fire, no smoke", "100% safe for indoor venues and guests", "Operated by professional attendant"],
                },
                {
                  name: "Dancing on the Clouds",
                  price: "$150",
                  note: "add-on",
                  features: ["Low-lying fog effect — stays at floor level", "Safe CO2-based fog — dissipates naturally", "Operated by professional attendant"],
                },
                {
                  name: "The Full Effect Bundle",
                  price: "$275",
                  note: "save $25",
                  badge: "Best Value",
                  features: ["Cold Sparks + Dancing on the Clouds together", "The most cinematic visual moment of your event", "Both effects operated by our professional team"],
                },
              ].map((fx, i) => (
                <AnimateOnScroll key={fx.name} delay={i * 100}>
                  <div className="relative rounded-lg p-6 border border-border/30 bg-card h-full flex flex-col">
                    {fx.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                        {fx.badge}
                      </span>
                    )}
                    <h3 className="font-heading text-xl text-foreground font-bold mb-1">{fx.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="font-heading text-2xl text-primary font-bold">{fx.price}</span>
                      <span className="text-xs text-muted-foreground">{fx.note}</span>
                    </div>
                    <ul className="space-y-2 flex-1">
                      {fx.features.map((f) => (
                        <li key={f} className="text-sm text-foreground/70 flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Wedding Packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {weddingPackages.map((pkg, i) => (
                <AnimateOnScroll key={pkg.id} delay={i * 100}>
                  <PackageCard
                    pkg={pkg}
                    selected={selectedPkg === pkg.id}
                    onSelect={() => setSelectedPkg(pkg.id)}
                  />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Add-Ons */}
        <section className="py-16 lg:py-20 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold text-center mb-12">
                Enhance Your Experience
              </h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {addOns.map((ao, i) => (
                <AnimateOnScroll key={ao.name} delay={i * 80}>
                  <div
                    onClick={() => toggleAddOn(ao.name)}
                    className={`rounded-lg p-5 border cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                      selectedAddOns.includes(ao.name)
                        ? "border-primary bg-primary/5 shadow-gold"
                        : "border-border/30 bg-card"
                    }`}
                  >
                    <p className="font-heading text-lg text-primary font-bold mb-0.5">+${ao.price}</p>
                    <p className="text-sm text-foreground font-medium mb-1">{ao.name}</p>
                    <p className="text-xs text-muted-foreground">{ao.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold text-center mb-12">
                Compare All Packages
              </h2>
            </AnimateOnScroll>
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-4 px-3 text-foreground font-medium">Feature</th>
                    {colHeaders.map((col) => (
                      <th key={col.name} className="text-center py-4 px-3">
                        <p className="text-foreground font-semibold">{col.name}</p>
                        <p className="text-xs text-muted-foreground">{col.price} · {col.dur}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, i) => {
                    if ("section" in row && row.section) {
                      return (
                        <tr key={i} className="border-b border-border/30">
                          <td colSpan={6} className="py-3 px-3 text-xs tracking-[0.2em] uppercase text-primary font-semibold">
                            {row.section}
                          </td>
                        </tr>
                      );
                    }
                    return (
                      <tr key={i} className="border-b border-border/20 hover:bg-card/50">
                        <td className="py-3 px-3 text-foreground/70">{row.feature}</td>
                        {row.values?.map((val, j) => (
                          <td key={j} className="text-center py-3 px-3">
                            {val === "✓" ? (
                              <Check className="w-4 h-4 text-primary mx-auto" />
                            ) : val === "—" ? (
                              <Minus className="w-4 h-4 text-muted-foreground/30 mx-auto" />
                            ) : (
                              <span className="text-xs text-muted-foreground">{val}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Interactive Booking Total Bar */}
        {selectedPkg && (
          <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-xl border-t border-primary/30 py-4">
            <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm text-foreground">
                  <span className="font-semibold text-primary">{selectedPkgData?.name}</span>
                  {selectedAddOns.length > 0 && (
                    <span className="text-muted-foreground"> + {selectedAddOns.join(", ")}</span>
                  )}
                </p>
                <p className="font-heading text-2xl text-foreground font-bold">
                  ${total.toLocaleString()}
                </p>
              </div>
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  Book This Package →
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className={`py-24 lg:py-32 ${selectedPkg ? "pb-40" : ""}`}>
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <AnimateOnScroll>
              <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold mb-6">
                Ready to Book Your Experience?
              </h2>
              <p className="text-foreground/60 text-lg mb-10">
                Contact us today and let's start planning your perfect event.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="gold" size="lg">Get a Quote</Button>
                </Link>
                <a href="tel:9545485809">
                  <Button variant="outline" size="lg">Call (954) 548-5809</Button>
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PackagesPage;
