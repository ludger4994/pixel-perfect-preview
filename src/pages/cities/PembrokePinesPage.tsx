import CityPageLayout from "@/components/CityPageLayout";

const PembrokePinesPage = () => (
  <CityPageLayout
    city="Pembroke Pines"
    county="Broward"
    slug="photo-booth-rental-pembroke-pines"
    title="Photo Booth Rental Pembroke Pines | Photo Booth Legends"
    metaDescription="Photo booth rental in Pembroke Pines, FL. Selfie booths, 360° booths & special effects for weddings, birthdays & events in Pembroke Pines. Book Photo Booth Legends."
    neighborhoods={["Pembroke Pines", "Pembroke Lakes", "Chapel Trail"]}
    eventAngle="Pembroke Pines' family-friendly community and growing event venues make it a popular location for celebrations of all kinds."
    uniqueParagraphs={[
      "Photo Booth Legends proudly serves events throughout Pembroke Pines and Broward County. Pembroke Pines is one of South Florida's fastest-growing communities, and our premium photo booth experiences match the energy of this vibrant city.",
      "From birthday parties at local event halls to wedding receptions and quinceañeras — Pembroke Pines families and event planners trust Photo Booth Legends for a professional, memorable experience every time.",
      "We serve all areas throughout Pembroke Pines including Pembroke Lakes, Chapel Trail, and surrounding Broward County communities.",
    ]}
    popularEvents={["Birthday Parties", "Weddings", "Quinceañeras", "Sweet 16", "Corporate Events", "School Events", "Baby Showers"]}
    faqs={[
      { q: "Do you serve Pembroke Pines?", a: "Yes! Photo Booth Legends serves events throughout Pembroke Pines and all of Broward County. Delivery, setup, and breakdown are included in every package — no travel fees." },
      { q: "What are the most popular services in Pembroke Pines?", a: "Our selfie booth and 360° photo booth are the most requested services for Pembroke Pines events. Birthday parties and quinceañeras are especially popular in this community." },
      { q: "How do I book for a Pembroke Pines event?", a: "Call Photo Booth Legends at (954) 548-5809 or visit our booking page. Share your event details and we'll create a custom package for your Pembroke Pines celebration." },
    ]}
  />
);

export default PembrokePinesPage;
