import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";
import { BookOpen } from "lucide-react";

const blogTopics = [
  {
    title: "How Much Does a Photo Booth Rental Cost in South Florida?",
    excerpt: "A complete pricing breakdown for selfie booths, 360° booths, and luxury booth experiences across Miami-Dade, Broward, and Palm Beach County.",
    category: "Pricing",
    href: "/packages",
  },
  {
    title: "What Is a 360 Photo Booth and How Does It Work?",
    excerpt: "Everything you need to know about the 360° photo booth experience — from GoPro 4K capture to slow-motion video output and instant sharing.",
    category: "Education",
    href: "/360-booth",
  },
  {
    title: "Are Cold Sparks Safe for Indoor Events?",
    excerpt: "Cold sparks produce no heat, no fire, and no smoke — making them 100% safe for any indoor venue. Here's the science behind the effect.",
    category: "FAQ",
    href: "/cold-sparks",
  },
  {
    title: "The Best Photo Booth for Weddings in South Florida",
    excerpt: "Comparing selfie booths, 360° booths, and the TXR20 luxury booth — which one is right for your wedding day?",
    category: "Weddings",
    href: "/weddings",
  },
  {
    title: "How Far in Advance Should I Book a Photo Booth?",
    excerpt: "Peak season fills up fast. Here's when to book to guarantee your date — and what happens if you wait too long.",
    category: "Planning",
    href: "/faq",
  },
  {
    title: "What Is Dancing on the Clouds at a Wedding?",
    excerpt: "The CO2 low-fog effect explained — how it works, how long it lasts, and why it's the most requested wedding special effect in South Florida.",
    category: "Effects",
    href: "/dancing-on-the-clouds",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Photo Booth Blog | Tips & Guides | Photo Booth Legends"
        description="Photo booth rental tips, event planning guides, and inspiration from Photo Booth Legends. Learn about 360 booths, cold sparks, wedding planning, and more."
        canonical="https://photoboothlegends.com/blog"
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Blog</p>
              <h1 className="font-heading text-4xl md:text-6xl text-foreground font-bold mb-4">
                Photo Booth Tips & Event Inspiration
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Guides, tips, and behind-the-scenes insights from South Florida's premier photo booth company.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogTopics.map((post, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <Link to={post.href} className="group block h-full">
                    <div className="bg-card border border-border/30 rounded-lg p-6 h-full flex flex-col hover:border-primary/30 transition-colors">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-xs text-primary font-medium uppercase tracking-wider">{post.category}</span>
                      </div>
                      <h2 className="font-heading text-lg text-foreground font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-foreground/60 text-sm leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <span className="text-primary text-sm font-medium mt-4 inline-block">Read more →</span>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll>
              <div className="text-center mt-16 p-8 rounded-lg border border-primary/20 bg-primary/5">
                <h2 className="font-heading text-2xl text-foreground font-bold mb-3">
                  More Content Coming Soon
                </h2>
                <p className="text-foreground/60 mb-6">
                  We're building a library of helpful guides, event inspiration, and photo booth tips. Check back soon — or contact us with your questions today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="gold" size="lg">Ask Us a Question</Button>
                  </Link>
                  <Link to="/faq">
                    <Button variant="gold-outline" size="lg">Browse FAQ</Button>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="mt-12 text-center">
              <p className="text-foreground/50 text-sm">
                Photo Booth Legends is a photo booth rental and event experience company based in South Florida, proudly serving events from Miami to West Palm Beach.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
