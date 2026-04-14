import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";
import { Phone, Instagram, CheckCircle } from "lucide-react";

const eventTypes = [
  "Wedding", "Birthday Party", "Quinceañera", "Sweet 16", "Baby Shower",
  "Corporate Event", "Brand Activation", "School or Prom", "Graduation", "Private Party", "Other",
];

const hourOptions = ["2 Hours", "3 Hours", "4 Hours", "5 Hours", "6+ Hours", "Not Sure Yet"];
const guestOptions = ["Under 50", "50–100", "100–200", "200–300", "300+"];

const serviceOptions = [
  "The Spark — Selfie Booth, 2 hrs ($400)",
  "The Lumière — Selfie Booth + Prints, 3 hrs ($600)",
  "The Ultimate Experience — Selfie Booth + Shout-Out Video, 4 hrs ($700)",
  "360° Gold — 2 hrs ($600)",
  "360° Diamond — 3 hrs + Montage ($750)",
  "Wedding: The Romance ($800)",
  "Wedding: The Grand Affair ($1,200)",
  "Add-On: Cold Sparks (+$150)",
  "Add-On: Dancing on the Clouds (+$150)",
  "Add-On: Full Effect Bundle (+$275)",
  "Add-On: Premium Backdrop Upgrade (+$75)",
  "TXR20 Luxury Booth (Custom Quote)",
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    eventDate: "",
    eventType: "",
    hours: "",
    guestCount: "",
    city: "",
    venue: "",
    services: [] as string[],
    notes: "",
  });

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const toggleService = (s: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const required: Record<string, boolean> = {};
    if (!form.firstName.trim()) required.firstName = true;
    if (!form.phone.trim()) required.phone = true;
    if (!form.email.trim()) required.email = true;
    if (!form.eventDate) required.eventDate = true;
    if (!form.eventType) required.eventType = true;
    if (!form.hours) required.hours = true;

    if (Object.keys(required).length > 0) {
      setErrors(required);
      return;
    }

    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full bg-card border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${
      errors[field] ? "border-destructive" : "border-border/50"
    }`;

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
            <AnimateOnScroll>
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="font-heading text-3xl md:text-5xl text-foreground font-bold mb-4">
                Your Inquiry Has Been Received!
              </h1>
              <p className="text-foreground/60 text-lg mb-8">
                A member of the Photo Booth Legends team will contact you within 24 hours.
                Questions? Call us at{" "}
                <a href="tel:9545485809" className="text-primary hover:underline">(954) 548-5809</a>.
              </p>
            </AnimateOnScroll>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Book Your Experience | Photo Booth Legends | 954-548-5809"
        description="Contact Photo Booth Legends to book your luxury photo booth experience. Tell us about your event and we'll respond within 24 hours. Call 954-548-5809."
        canonical="https://photoboothlegends.com/contact"
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-16 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Book Your Experience</p>
              <h1 className="font-heading text-4xl md:text-6xl text-foreground font-bold mb-4">
                Let's Make Your Event Unforgettable
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Tell us about your event and we'll get back to you within 24 hours to confirm availability and build your perfect package.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <AnimateOnScroll>
                  <div className="space-y-6 lg:sticky lg:top-32">
                    <div>
                      <h3 className="font-heading text-xl text-foreground font-bold mb-4">Get In Touch</h3>
                      <div className="space-y-4">
                        <a href="tel:9545485809" className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors">
                          <Phone className="w-5 h-5 text-primary" />
                          <span>(954) 548-5809</span>
                        </a>
                        <a
                          href="https://www.instagram.com/photoboothlegends"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
                        >
                          <Instagram className="w-5 h-5 text-primary" />
                          <span>@photoboothlegends</span>
                        </a>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                      <p className="text-sm text-foreground/70">
                        <span className="text-primary font-semibold">Response time:</span> Within 24 hours
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <AnimateOnScroll delay={100}>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Contact Info */}
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">Your Contact Information</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-foreground/70 mb-1 block">First Name *</label>
                          <input type="text" className={inputClass("firstName")} value={form.firstName} onChange={(e) => update("firstName", e.target.value)} />
                        </div>
                        <div>
                          <label className="text-sm text-foreground/70 mb-1 block">Last Name</label>
                          <input type="text" className={inputClass("lastName")} value={form.lastName} onChange={(e) => update("lastName", e.target.value)} />
                        </div>
                        <div>
                          <label className="text-sm text-foreground/70 mb-1 block">Phone Number *</label>
                          <input type="tel" className={inputClass("phone")} placeholder="(954) 000-0000" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                        </div>
                        <div>
                          <label className="text-sm text-foreground/70 mb-1 block">Email Address *</label>
                          <input type="email" className={inputClass("email")} value={form.email} onChange={(e) => update("email", e.target.value)} />
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">Your Event Details</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-foreground/70 mb-1 block">Event Date *</label>
                          <input type="date" className={inputClass("eventDate")} value={form.eventDate} onChange={(e) => update("eventDate", e.target.value)} />
                        </div>
                        <div>
                          <label className="text-sm text-foreground/70 mb-1 block">Event Type *</label>
                          <select className={inputClass("eventType")} value={form.eventType} onChange={(e) => update("eventType", e.target.value)}>
                            <option value="">Select...</option>
                            {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="text-sm text-foreground/70 mb-1 block">How Many Hours? *</label>
                          <select className={inputClass("hours")} value={form.hours} onChange={(e) => update("hours", e.target.value)}>
                            <option value="">Select...</option>
                            {hourOptions.map((h) => <option key={h} value={h}>{h}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="text-sm text-foreground/70 mb-1 block">Guest Count</label>
                          <select className={inputClass("guestCount")} value={form.guestCount} onChange={(e) => update("guestCount", e.target.value)}>
                            <option value="">Select...</option>
                            {guestOptions.map((g) => <option key={g} value={g}>{g}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="text-sm text-foreground/70 mb-1 block">Event City</label>
                          <input type="text" className={inputClass("city")} placeholder="Fort Lauderdale, Miami..." value={form.city} onChange={(e) => update("city", e.target.value)} />
                        </div>
                        <div>
                          <label className="text-sm text-foreground/70 mb-1 block">Venue Name</label>
                          <input type="text" className={inputClass("venue")} value={form.venue} onChange={(e) => update("venue", e.target.value)} />
                        </div>
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">Services You're Interested In</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {serviceOptions.map((s) => (
                          <label
                            key={s}
                            className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                              form.services.includes(s)
                                ? "border-primary bg-primary/5"
                                : "border-border/30 hover:border-border/50"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={form.services.includes(s)}
                              onChange={() => toggleService(s)}
                              className="mt-1 accent-[hsl(var(--primary))]"
                            />
                            <span className="text-sm text-foreground/70">{s}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">Additional Notes</p>
                      <textarea
                        className={inputClass("notes")}
                        rows={4}
                        placeholder="Tell us about your event — theme, special requests, venue details, or any questions you have..."
                        value={form.notes}
                        onChange={(e) => update("notes", e.target.value)}
                      />
                    </div>

                    <Button type="submit" variant="gold" size="lg" className="w-full uppercase tracking-widest">
                      Send My Inquiry
                    </Button>
                  </form>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
