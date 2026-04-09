import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  CalendarIcon,
  ShoppingCart,
  X,
  Check,
  CheckCircle,
  Loader2,
  Trash2,
} from "lucide-react";

/* ── Package & Add-On Data ── */
interface CartPackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  serviceType: string;
  features: string[];
}

interface CartAddOn {
  name: string;
  price: number;
}

const allPackages: CartPackage[] = [
  { id: "spark", name: "The Spark", price: 400, duration: "2 Hours", serviceType: "selfie-booth", features: ["Salsa Booth (iPad-based)", "Photos, GIFs & Boomerangs", "Digital sharing — text, email, QR", "Props table & standard backdrop", "On-site attendant"] },
  { id: "lumiere", name: "The Lumière", price: 600, duration: "3 Hours", serviceType: "selfie-booth", features: ["Everything in The Spark", "2×6 & 4×6 print strips", "Custom branded template", "Glam filter & AR masks", "All standard backdrops"] },
  { id: "ultimate", name: "The Ultimate Experience", price: 800, duration: "4 Hours", serviceType: "selfie-booth", features: ["Everything in The Lumière", "Shout-Out Video Station", "Custom start screen & gallery", "Full props table", "4 hours of coverage"] },
  { id: "360-gold", name: "360° Gold", price: 600, duration: "2 Hours", serviceType: "360-booth", features: ["360° video platform", "4K Ultra HD (GoPro)", "Slow-motion 360° video", "Custom audio & overlay", '43" TV sharing station'] },
  { id: "360-diamond", name: "360° Diamond", price: 750, duration: "3 Hours", serviceType: "360-booth", features: ["Everything in 360° Gold", "Event Highlight Montage", "3 hours of coverage", "Custom branded overlay", "LED lighting ring"] },
  { id: "romance", name: "The Romance", price: 800, duration: "3 Hours", serviceType: "wedding", features: ["Lumière Selfie Booth (3 hrs)", "Dancing on the Clouds", "White Rose Flower Wall", "Custom wedding prints", "Glam filter & AR masks"] },
  { id: "grand-affair", name: "The Grand Affair", price: 1200, duration: "4 Hours", serviceType: "wedding", features: ["Ultimate Selfie + 360° Gold", "Cold Sparks + Cloud Effect", "Shout-Out Video Station", "2 on-site attendants", "Premium backdrop included"] },
];

const availableAddOns: CartAddOn[] = [
  { name: "Cold Sparks", price: 150 },
  { name: "Dancing on the Clouds", price: 150 },
  { name: "Full Effect Bundle", price: 275 },
  { name: "Premium Backdrop Upgrade", price: 75 },
  { name: "Additional Hour", price: 150 },
];

const eventTypes = [
  "Wedding", "Birthday Party", "Quinceañera", "Sweet 16", "Baby Shower",
  "Corporate Event", "Brand Activation", "School or Prom", "Graduation", "Private Party", "Other",
];

const guestOptions = ["Under 50", "50–100", "100–200", "200–300", "300+"];

/* ── Component ── */
const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Cart state
  const [selectedPackage, setSelectedPackage] = useState<CartPackage | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<CartAddOn[]>([]);

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState<Date>();
  const [eventType, setEventType] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [city, setCity] = useState("");
  const [venue, setVenue] = useState("");
  const [notes, setNotes] = useState("");

  // UI state
  const [paypalClientId, setPaypalClientId] = useState<string | null>(null);
  const [blockedDates, setBlockedDates] = useState<Date[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [step, setStep] = useState<"cart" | "details" | "payment">("cart");

  // Pre-select package from URL params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pkgId = params.get("package");
    if (pkgId) {
      const pkg = allPackages.find((p) => p.id === pkgId);
      if (pkg) setSelectedPackage(pkg);
    }
  }, [location.search]);

  // Fetch PayPal client ID
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("get-paypal-config");
        if (!error && data?.clientId) {
          setPaypalClientId(data.clientId);
        }
      } catch (e) {
        console.error("Failed to fetch PayPal config:", e);
      }
    };
    fetchConfig();
  }, []);

  // Fetch blocked dates
  useEffect(() => {
    const fetchBlockedDates = async () => {
      const { data } = await supabase
        .from("blocked_dates")
        .select("blocked_date, service_type");
      if (data) {
        // Filter by selected service type
        const serviceType = selectedPackage?.serviceType;
        const dates = data
          .filter((d) => !serviceType || d.service_type === serviceType)
          .map((d) => new Date(d.blocked_date + "T00:00:00"));
        setBlockedDates(dates);
      }
    };
    fetchBlockedDates();
  }, [selectedPackage]);

  const addOnTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const total = (selectedPackage?.price || 0) + addOnTotal;

  const toggleAddOn = (addOn: CartAddOn) => {
    setSelectedAddOns((prev) =>
      prev.find((a) => a.name === addOn.name)
        ? prev.filter((a) => a.name !== addOn.name)
        : [...prev, addOn]
    );
  };

  const isDateBlocked = (date: Date) => {
    return blockedDates.some(
      (d) => d.toDateString() === date.toDateString()
    ) || date < new Date();
  };

  const validateDetails = () => {
    const newErrors: Record<string, boolean> = {};
    if (!firstName.trim()) newErrors.firstName = true;
    if (!email.trim()) newErrors.email = true;
    if (!phone.trim()) newErrors.phone = true;
    if (!eventDate) newErrors.eventDate = true;
    if (!eventType) newErrors.eventType = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitBooking = async (paypalOrderId?: string, paypalStatus?: string) => {
    if (!selectedPackage || !eventDate) return;
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("create-booking", {
        body: {
          firstName,
          lastName,
          email,
          phone,
          eventDate: format(eventDate, "yyyy-MM-dd"),
          eventType,
          hours: selectedPackage.duration,
          guestCount: guestCount || undefined,
          city: city || undefined,
          venue: venue || undefined,
          packageName: selectedPackage.name,
          packagePrice: selectedPackage.price,
          addOns: selectedAddOns.map((a) => ({ name: a.name, price: a.price })),
          addOnsTotal: addOnTotal,
          totalPrice: total,
          notes: notes || undefined,
          paypalOrderId,
          paypalStatus,
          serviceType: selectedPackage.serviceType,
        },
      });
      if (error) throw error;
      setSubmitted(true);
    } catch (e) {
      console.error("Booking error:", e);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-card border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors ${
      errors[field] ? "border-destructive" : "border-border/50"
    }`;

  /* ── Success State ── */
  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
            <AnimateOnScroll>
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="font-heading text-3xl md:text-5xl text-foreground font-bold mb-4">
                Booking Confirmed!
              </h1>
              <p className="text-foreground/60 text-lg mb-4">
                A confirmation email has been sent to <span className="text-primary">{email}</span> with all the details.
              </p>
              <div className="bg-card border border-border/30 rounded-lg p-6 text-left mb-8">
                <p className="text-sm text-foreground/70 mb-2"><strong className="text-foreground">Package:</strong> {selectedPackage?.name}</p>
                <p className="text-sm text-foreground/70 mb-2"><strong className="text-foreground">Date:</strong> {eventDate && format(eventDate, "MMMM d, yyyy")}</p>
                <p className="text-sm text-foreground/70 mb-2"><strong className="text-foreground">Total:</strong> ${total.toLocaleString()}</p>
              </div>
              <p className="text-foreground/60 mb-8">
                Questions? Call us at{" "}
                <a href="tel:9545485809" className="text-primary hover:underline">(954) 548-5809</a>
              </p>
              <Button variant="gold" onClick={() => navigate("/")}>Back to Home</Button>
            </AnimateOnScroll>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
            <AnimateOnScroll>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Book Now</p>
              <h1 className="font-heading text-4xl md:text-6xl text-foreground font-bold mb-4">
                Complete Your Booking
              </h1>
              <p className="text-lg text-foreground/60">
                Select your package, pick your date, and secure your experience.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="pb-8">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="flex items-center justify-center gap-4">
              {[
                { key: "cart", label: "1. Select Package" },
                { key: "details", label: "2. Event Details" },
                { key: "payment", label: "3. Payment" },
              ].map((s, i) => (
                <div key={s.key} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                      step === s.key
                        ? "bg-primary text-primary-foreground"
                        : ["cart", "details", "payment"].indexOf(step) > i
                        ? "bg-primary/20 text-primary"
                        : "bg-card text-muted-foreground border border-border/30"
                    }`}
                  >
                    {["cart", "details", "payment"].indexOf(step) > i ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      i + 1
                    )}
                  </div>
                  <span className="text-sm text-foreground/60 hidden sm:inline">{s.label}</span>
                  {i < 2 && <div className="w-8 lg:w-16 h-px bg-border/50" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 1: Cart */}
        {step === "cart" && (
          <section className="pb-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Package Selection */}
                <div className="lg:col-span-2 space-y-8">
                  <AnimateOnScroll>
                    <h2 className="font-heading text-2xl text-foreground font-bold mb-6">Choose Your Package</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {allPackages.map((pkg) => (
                        <div
                          key={pkg.id}
                          onClick={() => setSelectedPackage(pkg)}
                          className={`rounded-lg p-5 border cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                            selectedPackage?.id === pkg.id
                              ? "border-primary bg-primary/5 shadow-gold"
                              : "border-border/30 bg-card hover:border-border/50"
                          }`}
                        >
                          <h3 className="font-heading text-lg text-foreground font-bold">{pkg.name}</h3>
                          <div className="flex items-baseline gap-2 mt-1">
                            <span className="font-heading text-2xl text-primary font-bold">${pkg.price}</span>
                            <span className="text-xs text-muted-foreground">· {pkg.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AnimateOnScroll>

                  <AnimateOnScroll delay={100}>
                    <h2 className="font-heading text-2xl text-foreground font-bold mb-6">Add Extras</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {availableAddOns.map((ao) => (
                        <div
                          key={ao.name}
                          onClick={() => toggleAddOn(ao)}
                          className={`rounded-lg p-4 border cursor-pointer transition-all duration-300 ${
                            selectedAddOns.find((a) => a.name === ao.name)
                              ? "border-primary bg-primary/5 shadow-gold"
                              : "border-border/30 bg-card hover:border-border/50"
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-sm text-foreground font-medium">{ao.name}</p>
                              <p className="text-primary font-heading font-bold">+${ao.price}</p>
                            </div>
                            {selectedAddOns.find((a) => a.name === ao.name) && (
                              <Check className="w-5 h-5 text-primary" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </AnimateOnScroll>
                </div>

                {/* Cart Summary */}
                <div className="lg:col-span-1">
                  <div className="sticky top-28">
                    <AnimateOnScroll delay={200}>
                      <div className="rounded-lg border border-border/30 bg-card p-6">
                        <h3 className="font-heading text-xl text-foreground font-bold mb-4 flex items-center gap-2">
                          <ShoppingCart className="w-5 h-5 text-primary" />
                          Your Cart
                        </h3>
                        {!selectedPackage ? (
                          <p className="text-sm text-muted-foreground">Select a package to get started.</p>
                        ) : (
                          <div className="space-y-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-sm text-foreground font-medium">{selectedPackage.name}</p>
                                <p className="text-xs text-muted-foreground">{selectedPackage.duration}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-foreground font-semibold">${selectedPackage.price}</span>
                                <button onClick={() => setSelectedPackage(null)} className="text-muted-foreground hover:text-destructive">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            {selectedAddOns.map((ao) => (
                              <div key={ao.name} className="flex justify-between items-center">
                                <p className="text-sm text-foreground/70">{ao.name}</p>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-foreground/70">+${ao.price}</span>
                                  <button onClick={() => toggleAddOn(ao)} className="text-muted-foreground hover:text-destructive">
                                    <X className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            ))}
                            <div className="border-t border-border/30 pt-4">
                              <div className="flex justify-between items-center">
                                <span className="font-heading text-lg text-foreground font-bold">Total</span>
                                <span className="font-heading text-2xl text-primary font-bold">${total.toLocaleString()}</span>
                              </div>
                            </div>
                            <Button
                              variant="gold"
                              className="w-full"
                              onClick={() => setStep("details")}
                            >
                              Continue to Details →
                            </Button>
                          </div>
                        )}
                      </div>
                    </AnimateOnScroll>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Step 2: Event Details */}
        {step === "details" && (
          <section className="pb-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <AnimateOnScroll>
                    <div className="space-y-8">
                      {/* Contact Info */}
                      <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">Your Information</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm text-foreground/70 mb-1 block">First Name *</label>
                            <input type="text" className={inputClass("firstName")} value={firstName} onChange={(e) => { setFirstName(e.target.value); setErrors((p) => ({ ...p, firstName: false })); }} />
                          </div>
                          <div>
                            <label className="text-sm text-foreground/70 mb-1 block">Last Name</label>
                            <input type="text" className={inputClass("lastName")} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                          </div>
                          <div>
                            <label className="text-sm text-foreground/70 mb-1 block">Email *</label>
                            <input type="email" className={inputClass("email")} value={email} onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: false })); }} />
                          </div>
                          <div>
                            <label className="text-sm text-foreground/70 mb-1 block">Phone *</label>
                            <input type="tel" className={inputClass("phone")} placeholder="(954) 000-0000" value={phone} onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: false })); }} />
                          </div>
                        </div>
                      </div>

                      {/* Event Details */}
                      <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">Event Details</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Date Picker with Calendar */}
                          <div>
                            <label className="text-sm text-foreground/70 mb-1 block">Event Date *</label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <button className={cn(inputClass("eventDate"), "flex items-center justify-between")}>
                                  {eventDate ? format(eventDate, "MMMM d, yyyy") : <span className="text-muted-foreground">Select date...</span>}
                                  <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                                </button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                                <Calendar
                                  mode="single"
                                  selected={eventDate}
                                  onSelect={(date) => {
                                    setEventDate(date);
                                    setErrors((p) => ({ ...p, eventDate: false }));
                                  }}
                                  disabled={isDateBlocked}
                                  className="p-3 pointer-events-auto"
                                  modifiers={{ blocked: blockedDates }}
                                  modifiersStyles={{ blocked: { backgroundColor: "hsl(0 84% 60% / 0.2)", color: "hsl(0 84% 60%)", textDecoration: "line-through" } }}
                                />
                                <div className="px-3 pb-3 flex items-center gap-4 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <span className="w-3 h-3 rounded bg-destructive/20 inline-block" /> Booked
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <span className="w-3 h-3 rounded bg-primary inline-block" /> Selected
                                  </span>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>

                          <div>
                            <label className="text-sm text-foreground/70 mb-1 block">Event Type *</label>
                            <select className={inputClass("eventType")} value={eventType} onChange={(e) => { setEventType(e.target.value); setErrors((p) => ({ ...p, eventType: false })); }}>
                              <option value="">Select...</option>
                              {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className="text-sm text-foreground/70 mb-1 block">Guest Count</label>
                            <select className={inputClass("guestCount")} value={guestCount} onChange={(e) => setGuestCount(e.target.value)}>
                              <option value="">Select...</option>
                              {guestOptions.map((g) => <option key={g} value={g}>{g}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className="text-sm text-foreground/70 mb-1 block">City</label>
                            <input type="text" className={inputClass("city")} placeholder="Fort Lauderdale, Miami..." value={city} onChange={(e) => setCity(e.target.value)} />
                          </div>
                          <div className="sm:col-span-2">
                            <label className="text-sm text-foreground/70 mb-1 block">Venue Name</label>
                            <input type="text" className={inputClass("venue")} value={venue} onChange={(e) => setVenue(e.target.value)} />
                          </div>
                          <div className="sm:col-span-2">
                            <label className="text-sm text-foreground/70 mb-1 block">Additional Notes</label>
                            <textarea className={inputClass("notes")} rows={3} placeholder="Theme, special requests, questions..." value={notes} onChange={(e) => setNotes(e.target.value)} />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button variant="outline" onClick={() => setStep("cart")}>← Back</Button>
                        <Button
                          variant="gold"
                          className="flex-1"
                          onClick={() => {
                            if (validateDetails()) setStep("payment");
                          }}
                        >
                          Continue to Payment →
                        </Button>
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>

                {/* Sticky Cart Summary */}
                <div className="lg:col-span-1">
                  <div className="sticky top-28">
                    <div className="rounded-lg border border-border/30 bg-card p-6">
                      <h3 className="font-heading text-lg text-foreground font-bold mb-4">Order Summary</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground/70">{selectedPackage?.name}</span>
                          <span className="text-foreground">${selectedPackage?.price}</span>
                        </div>
                        {selectedAddOns.map((ao) => (
                          <div key={ao.name} className="flex justify-between text-sm">
                            <span className="text-foreground/70">{ao.name}</span>
                            <span className="text-foreground">+${ao.price}</span>
                          </div>
                        ))}
                        <div className="border-t border-border/30 pt-3 mt-3">
                          <div className="flex justify-between">
                            <span className="font-heading text-foreground font-bold">Total</span>
                            <span className="font-heading text-xl text-primary font-bold">${total.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Step 3: Payment */}
        {step === "payment" && (
          <section className="pb-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <AnimateOnScroll>
                    <div className="rounded-lg border border-border/30 bg-card p-6 lg:p-8">
                      <h2 className="font-heading text-2xl text-foreground font-bold mb-2">Secure Payment</h2>
                      <p className="text-sm text-foreground/60 mb-6">Complete your booking with PayPal</p>

                      <div className="bg-background rounded-lg p-6 mb-6">
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-foreground/70">{selectedPackage?.name}</span>
                            <span className="text-foreground">${selectedPackage?.price}</span>
                          </div>
                          {selectedAddOns.map((ao) => (
                            <div key={ao.name} className="flex justify-between text-sm">
                              <span className="text-foreground/70">{ao.name}</span>
                              <span className="text-foreground">+${ao.price}</span>
                            </div>
                          ))}
                          <div className="border-t border-border/30 pt-3">
                            <div className="flex justify-between">
                              <span className="font-heading text-foreground font-bold">Total</span>
                              <span className="font-heading text-2xl text-primary font-bold">${total.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {paypalClientId ? (
                        <PayPalScriptProvider
                          options={{
                            clientId: paypalClientId,
                            currency: "USD",
                          }}
                        >
                          <PayPalButtons
                            style={{ layout: "vertical", color: "gold", shape: "rect", label: "pay" }}
                            createOrder={(_data, actions) => {
                              return actions.order.create({
                                intent: "CAPTURE",
                                purchase_units: [
                                  {
                                    amount: {
                                      currency_code: "USD",
                                      value: total.toString(),
                                    },
                                    description: `Photo Booth Legends - ${selectedPackage?.name}`,
                                  },
                                ],
                              });
                            }}
                            onApprove={async (_data, actions) => {
                              const order = await actions.order?.capture();
                              if (order) {
                                await handleSubmitBooking(order.id, order.status);
                              }
                            }}
                            onError={(err) => {
                              console.error("PayPal error:", err);
                            }}
                          />
                        </PayPalScriptProvider>
                      ) : (
                        <div className="text-center py-8">
                          <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto mb-4" />
                          <p className="text-sm text-muted-foreground">Loading payment options...</p>
                        </div>
                      )}

                      <div className="mt-4">
                        <Button variant="outline" onClick={() => setStep("details")} className="w-full">
                          ← Back to Details
                        </Button>
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="sticky top-28">
                    <div className="rounded-lg border border-border/30 bg-card p-6">
                      <h3 className="font-heading text-lg text-foreground font-bold mb-4">Booking Details</h3>
                      <div className="space-y-3 text-sm">
                        <p className="text-foreground/70"><strong className="text-foreground">Name:</strong> {firstName} {lastName}</p>
                        <p className="text-foreground/70"><strong className="text-foreground">Email:</strong> {email}</p>
                        <p className="text-foreground/70"><strong className="text-foreground">Date:</strong> {eventDate && format(eventDate, "MMMM d, yyyy")}</p>
                        <p className="text-foreground/70"><strong className="text-foreground">Event:</strong> {eventType}</p>
                        {venue && <p className="text-foreground/70"><strong className="text-foreground">Venue:</strong> {venue}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
