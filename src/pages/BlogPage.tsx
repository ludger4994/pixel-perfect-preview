import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";

import threeSixtyImg from "@/assets/360-booth-main.jpg";
import glamBoothImg from "@/assets/glam-booth-main.jpg";
import dancingCloudsImg from "@/assets/dancing-clouds.jpg";
import silverSequinImg from "@/assets/silver-sequin-backdrop.jpg";

const posts = [
  {
    title: "What Is a 360 Photo Booth? Everything You Need to Know",
    slug: "what-is-360-photo-booth",
    excerpt: "360 photo booths have become the most requested event entertainment in South Florida. Here's exactly how they work, what guests experience, and why they go viral every time.",
    category: "Education",
    date: "April 2025",
    image: threeSixtyImg,
  },
  {
    title: "How Much Does a Photo Booth Rental Cost in South Florida?",
    slug: "photo-booth-rental-cost-south-florida",
    excerpt: "Complete pricing guide for photo booth rentals in Miami, Fort Lauderdale, and across South Florida — selfie booths, 360 booths, and luxury options explained.",
    category: "Pricing Guide",
    date: "March 2025",
    image: glamBoothImg,
  },
  {
    title: "Dancing on the Clouds vs Cold Sparks — Which Is Right for Your Wedding?",
    slug: "dancing-clouds-vs-cold-sparks-wedding",
    excerpt: "Both are stunning. Both are in high demand. But which special effect is right for YOUR South Florida wedding? We break down exactly when to use each one.",
    category: "Weddings",
    date: "February 2025",
    image: dancingCloudsImg,
  },
  {
    title: "The Complete Guide to Event Backdrops — Flower Walls, Sequin Walls, and More",
    slug: "event-backdrop-guide",
    excerpt: "From silver sequin shimmer walls to white rose flower walls — here's everything you need to know about choosing the perfect event backdrop in South Florida.",
    category: "Events",
    date: "January 2025",
    image: silverSequinImg,
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
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <Link to={`/blog/${post.slug}`} className="group block h-full">
                    <div className="bg-card border border-border/30 rounded-lg overflow-hidden h-full flex flex-col hover:border-primary/30 transition-colors">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs text-primary font-medium uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">{post.category}</span>
                          <span className="text-xs text-muted-foreground">{post.date}</span>
                        </div>
                        <h2 className="font-heading text-lg text-foreground font-bold mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-foreground/60 text-sm leading-relaxed flex-1">
                          {post.excerpt}
                        </p>
                        <span className="text-primary text-sm font-medium mt-4 inline-block">Read More →</span>
                      </div>
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
