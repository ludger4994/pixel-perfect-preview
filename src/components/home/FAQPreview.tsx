import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 4–6 weeks in advance to secure your preferred date, especially during peak wedding and event season. Popular dates book quickly — reach out early to guarantee availability.",
  },
  {
    question: "What is the difference between the Selfie Booth, 360 Booth, and TXR20?",
    answer: "Each booth offers a unique experience. The Selfie Booth is perfect for sleek, instant digital captures. The 360 Booth creates immersive, slow-motion video content. The TXR20 Luxury Booth delivers studio-quality photos with our signature white umbrella lighting — ideal for upscale events.",
  },
  {
    question: "Do attendants stay during the event?",
    answer: "Absolutely. Every booking includes a professional on-site attendant who manages the booth, assists guests, and ensures a flawless experience from setup to breakdown.",
  },
  {
    question: "Are Cold Sparks safe for indoor venues?",
    answer: "Yes. Cold sparks are not traditional pyrotechnics. They produce no heat, no fire, and no smoke — just a brilliant, safe visual effect that photographs beautifully. They are approved for most indoor venues.",
  },
  {
    question: "How do guests receive their content?",
    answer: "Guests can instantly receive their photos, GIFs, and videos via text message, email, QR code, or AirDrop — making it easy to share and relive the moment immediately.",
  },
];

const FAQPreview = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">FAQ</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground font-bold">
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        <div ref={ref} className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
              <div className={`faq-item border border-border/30 rounded-lg overflow-hidden ${openIndex === i ? 'open' : ''}`}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-primary/5 transition-colors"
                >
                  <span className="text-foreground font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div className={`faq-item-body ${openIndex === i ? 'open' : ''}`}>
                  <div className="px-5 pb-5">
                    <p className="text-foreground/60 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal reveal-delay-6 ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mt-10">
            <Link to="/faq">
              <Button variant="gold-outline" size="lg" className="btn-premium">
                See All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;
