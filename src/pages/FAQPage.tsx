import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";

const faqs = [
  {
    category: "General",
    items: [
      {
        question: "What is Photo Booth Legends?",
        answer: "Photo Booth Legends is a photo booth rental and event experience company based in South Florida. We offer luxury selfie booth rentals, 360° photo booth rentals, and our signature TXR20 Luxury Booth with studio-quality umbrella lighting — plus cold sparks, dancing on the clouds, and a stunning 10+ backdrop collection. We serve weddings, birthdays, quinceañeras, corporate events, brand activations, school events, and private parties from Miami to West Palm Beach."
      },
      {
        question: "What areas do you serve?",
        answer: "Photo Booth Legends proudly serves events throughout South Florida, including Miami, Fort Lauderdale, Hollywood, Boca Raton, Delray Beach, Boynton Beach, West Palm Beach, Coral Springs, Pembroke Pines, Miramar, Doral, Kendall, and Homestead — covering Miami-Dade, Broward, and Palm Beach County."
      },
      {
        question: "How far in advance should I book a photo booth?",
        answer: "We recommend booking at least 4–6 weeks in advance to secure your preferred date, especially during peak wedding and event season (March through June and October through December). For weddings specifically, booking 3–6 months in advance is ideal. Popular dates book quickly — reach out early to guarantee availability."
      },
      {
        question: "How much does a photo booth rental cost in South Florida?",
        answer: "Photo Booth Legends offers packages starting at $400 for a 2-hour selfie booth experience. Our 360° booth packages start at $600, and wedding packages start at $800. Pricing depends on the booth type, duration, and any add-ons like cold sparks or dancing on the clouds. Visit our packages page for full pricing details, or contact us for a custom quote."
      },
    ],
  },
  {
    category: "Our Booths",
    items: [
      {
        question: "What is the difference between the Selfie Booth, 360° Booth, and TXR20?",
        answer: "Each booth offers a unique experience. The Selfie Booth (powered by Salsa Booth / Fiesta software) captures photos, GIFs, boomerangs, and video with instant digital sharing and optional prints. The 360° Photo Booth creates immersive slow-motion video content using a GoPro 4K camera with a 43-inch TV sharing station on-site. The TXR20 Luxury Booth features a professional white umbrella diffuser that creates studio-quality, soft, flattering light for magazine-quality portraits — ideal for luxury weddings and black-tie events."
      },
      {
        question: "What is a 360 photo booth and how does it work?",
        answer: "A 360 photo booth is an open platform that guests stand on while a GoPro camera mounted on a rotating arm spins around them, capturing every angle in stunning slow-motion video. Photo Booth Legends' 360° Photo Booth uses a 12MP 4K Ultra HD GoPro camera and renders cinematic slow-motion videos with custom overlays and music in real time. Guests receive their video instantly via QR code to share on social media."
      },
      {
        question: "What is included in a photo booth rental?",
        answer: "Every Photo Booth Legends rental includes a professional on-site attendant, setup and breakdown, a custom start screen, digital sharing (text, email, QR code), and a live online guest gallery. Depending on your package, you may also receive prints, custom branded templates, premium backdrops, props, and special effects. Visit our packages page for full details on what's included in each tier."
      },
      {
        question: "Do you offer photo booth rental with prints included?",
        answer: "Yes. Our Lumière and Ultimate Experience selfie booth packages include unlimited 2×6 and 4×6 prints with custom branded templates for all guests. Our TXR20 Luxury Booth also includes premium dye-sublimation prints. The Spark package and 360° booth packages are digital-only, but print add-ons are available."
      },
    ],
  },
  {
    category: "Special Effects",
    items: [
      {
        question: "Are cold sparks safe for indoor events in South Florida?",
        answer: "Cold sparks are 100% safe for indoor venues. Unlike traditional pyrotechnics, cold sparks produce no heat, no open flame, and no smoke — they are a purely visual effect and are approved for use inside any standard event venue. Traditional pyrotechnics are not allowed indoors — cold sparks are the safe alternative. Photo Booth Legends' cold sparks are operated by a trained professional attendant."
      },
      {
        question: "What is dancing on the clouds at a wedding?",
        answer: "Dancing on the Clouds is a special effect that creates a thick, rolling blanket of pure white fog that hugs the floor, making it look and feel like you're floating on air. It uses dry ice and hot water — no chemicals, no residue. The effect typically lasts 3–5 minutes, perfectly timed for a first dance. Photo Booth Legends provides this service throughout South Florida for weddings, quinceañeras, and other celebrations."
      },
      {
        question: "How long does the dancing on the clouds effect last?",
        answer: "The Dancing on the Clouds fog effect typically lasts 3–5 minutes — enough to cover an entire first dance song. Photo Booth Legends coordinates the fog release to coincide precisely with your music. The fog dissipates naturally within minutes after the effect ends with no cleanup required."
      },
      {
        question: "Does the dancing on the clouds effect leave residue?",
        answer: "No. Dancing on the Clouds uses dry ice and hot water, producing no chemical residue, no staining of floors or dresses, and requiring absolutely no cleanup. It is completely safe for all venues, all floor types, and all formal attire."
      },
      {
        question: "Can I combine cold sparks and dancing on the clouds?",
        answer: "Absolutely — and we highly recommend it. Combining cold sparks with dancing on the clouds creates the ultimate cinematic first dance experience. Photo Booth Legends offers a Full Effect Bundle that includes both effects at a discounted rate. This combination is our most popular wedding add-on."
      },
    ],
  },
  {
    category: "Booking & Events",
    items: [
      {
        question: "Do attendants stay during the event?",
        answer: "Yes, absolutely. Every Photo Booth Legends booking includes a professional on-site attendant who manages the booth, assists guests, coordinates timing for special effects, and ensures a flawless experience from setup to breakdown. For larger events and wedding packages, two attendants are provided."
      },
      {
        question: "How do guests receive their content?",
        answer: "Guests can instantly receive their photos, GIFs, and videos via text message, email, QR code, or AirDrop — making it easy to share and relive the moment immediately. All content is also saved to a private online gallery that you can share with all your guests after the event."
      },
      {
        question: "What types of events do you serve?",
        answer: "Photo Booth Legends serves weddings, birthday parties, quinceañeras, sweet 16s, baby showers, corporate events, brand activations, school events, proms, graduations, and private parties throughout South Florida. We customize each experience to match the style and energy of your specific event."
      },
      {
        question: "Can I customize the photo booth experience for my event?",
        answer: "Yes. Photo Booth Legends offers full customization including custom branded start screens, personalized photo overlays and print templates, choice of backdrop, custom music for 360° videos, and themed props. For corporate events, we offer branded experiences with custom overlays and lead capture functionality."
      },
      {
        question: "What is the best photo booth for weddings?",
        answer: "For weddings, Photo Booth Legends recommends our wedding-specific packages: The Romance ($800) includes the Lumière Selfie Booth with Dancing on the Clouds and a White Rose Flower Wall, or The Grand Affair ($1,200) which includes both a Selfie Booth and 360° Booth plus cold sparks and dancing on the clouds. The TXR20 Luxury Booth is also an excellent choice for couples who want studio-quality portraits with its signature umbrella diffuser lighting."
      },
      {
        question: "How does 360 photo booth work at an event?",
        answer: "At your event, guests step onto the 360° booth platform. A GoPro 4K camera on a rotating arm spins around them, capturing slow-motion video from every angle. Custom overlays and music are added in real time. Guests can watch their video on a 43-inch TV sharing station on-site and receive it instantly via QR code to share on social media. A professional attendant manages the experience and provides props like feather boas, money guns, and bubble guns."
      },
    ],
  },
  {
    category: "Pricing & Logistics",
    items: [
      {
        question: "Do you charge for travel?",
        answer: "Photo Booth Legends includes travel at no additional cost for events within our standard South Florida service area, covering Miami-Dade, Broward, and Palm Beach County — from Homestead to West Palm Beach. Contact us for events outside this area."
      },
      {
        question: "How long does setup take?",
        answer: "Our team arrives 60–90 minutes before your event start time to set up all equipment. Setup is handled entirely by our professional attendants and requires no effort from you or your venue. Breakdown after the event takes approximately 30–45 minutes."
      },
      {
        question: "Can I add extra hours to my package?",
        answer: "Yes. Additional hours can be added to any package at $150 per hour. This is a popular option for longer events like weddings and corporate galas."
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.flatMap(cat => cat.items.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  }))),
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Photo Booth FAQ | Photo Booth Legends South Florida"
        description="Answers to common questions about photo booth rental in South Florida — pricing, packages, setup, services, and how to book Photo Booth Legends."
        canonical="https://photoboothlegends.com/faq"
        schema={faqSchema}
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">FAQ</p>
              <h1 className="font-heading text-4xl md:text-6xl text-foreground font-bold mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Everything you need to know about Photo Booth Legends' services, pricing, and booking process.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            {faqs.map((cat) => (
              <div key={cat.category} className="mb-10">
                <AnimateOnScroll>
                  <h2 className="font-heading text-xl md:text-2xl text-foreground font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-primary" />
                    {cat.category}
                  </h2>
                </AnimateOnScroll>
                <div className="space-y-3">
                  {cat.items.map((faq) => {
                    const key = `${cat.category}-${faq.question}`;
                    const isOpen = openIndex === key;
                    return (
                      <AnimateOnScroll key={key}>
                        <div className={`border border-border/30 rounded-lg overflow-hidden ${isOpen ? "border-primary/30" : ""}`}>
                          <button
                            onClick={() => setOpenIndex(isOpen ? null : key)}
                            className="w-full flex items-center justify-between p-5 text-left hover:bg-primary/5 transition-colors"
                          >
                            <span className="text-foreground font-medium pr-4">{faq.question}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5">
                              <p className="text-foreground/60 text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      </AnimateOnScroll>
                    );
                  })}
                </div>
              </div>
            ))}

            <AnimateOnScroll>
              <div className="text-center mt-12 p-8 rounded-lg border border-primary/20 bg-primary/5">
                <h2 className="font-heading text-2xl text-foreground font-bold mb-3">
                  Still Have Questions?
                </h2>
                <p className="text-foreground/60 mb-6">
                  We're here to help. Reach out and we'll respond within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="gold" size="lg">Contact Us</Button>
                  </Link>
                  <a href="tel:9545485809">
                    <Button variant="gold-outline" size="lg">Call (954) 548-5809</Button>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
