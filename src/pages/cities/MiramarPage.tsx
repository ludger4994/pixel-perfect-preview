import CityPageLayout from "@/components/CityPageLayout";

const MiramarPage = () => (
  <CityPageLayout
    city="Miramar"
    county="Broward"
    slug="photo-booth-rental-miramar"
    title="Photo Booth Rental Miramar FL | Photo Booth Legends"
    metaDescription="Photo booth rental in Miramar, FL. Selfie booths, 360° booths & special effects for events in Miramar and Broward County. Book Photo Booth Legends today."
    neighborhoods={["Miramar", "Miramar Park", "Silver Shores"]}
    eventAngle="Miramar's diverse, multicultural community celebrates with energy and style — and Photo Booth Legends is the perfect match for every Miramar event."
    uniqueParagraphs={[
      "Photo Booth Legends proudly serves events throughout Miramar and Broward County. Miramar's diverse, multicultural community and growing event scene make it one of our most vibrant service areas.",
      "From quinceañera celebrations with custom themed prints to corporate events and birthday parties — Miramar families and businesses trust Photo Booth Legends to deliver a premium, professional experience every time.",
      "We serve all areas throughout Miramar, FL including surrounding Broward County communities like Pembroke Pines, Hollywood, and Hallandale Beach.",
    ]}
    popularEvents={["Birthday Parties", "Quinceañeras", "Weddings", "Corporate Events", "Sweet 16", "Baby Showers", "Community Events"]}
    faqs={[
      { q: "Do you serve Miramar, FL?", a: "Yes! Photo Booth Legends serves events throughout Miramar, Florida and all of Broward County. No additional travel fees — delivery, setup, and breakdown are included." },
      { q: "What events are most popular in Miramar?", a: "Birthday parties, quinceañeras, and wedding receptions are our most requested events in Miramar. The diverse community celebrates with energy, and our photo booths add the perfect entertainment element." },
      { q: "How quickly can I book for a Miramar event?", a: "We can often accommodate events booked 1–2 weeks in advance, depending on availability. For weekends and peak season dates, we recommend booking 3–4 weeks ahead." },
    ]}
  />
);

export default MiramarPage;
