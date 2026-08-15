import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import "./booking-form.css";

import bdBlack from "@/assets/booking/backdrop-black.jpg";
import bdPinkSequin from "@/assets/booking/backdrop-pink-sequin.jpg";
import bdGeometric from "@/assets/booking/backdrop-black-gold-geometric.jpg";
import bdMarble from "@/assets/booking/backdrop-black-gold-marble.jpg";
import bdGoldSequin from "@/assets/booking/backdrop-gold-sequin.jpg";
import bdFloral from "@/assets/booking/backdrop-pink-purple-floral.jpg";
import bdSilverSequin from "@/assets/booking/backdrop-silver-black-sequin.jpg";
import bdHedge from "@/assets/booking/backdrop-hedge.jpg";
import bdTeal from "@/assets/booking/backdrop-teal-gold-marble.jpg";
import bdRainbow from "@/assets/booking/backdrop-rainbow-ink-splash.jpg";
import bdWhiteFloral from "@/assets/booking/backdrop-white-floral-wall.jpg";

const backdrops = [
  { id: "bd0", value: "Black", img: bdBlack, desc: "Sleek matte black — a clean, classic backdrop that works with any theme." },
  { id: "bd1", value: "Pink Sequin", img: bdPinkSequin, desc: "Shimmering pink fringe sequin — playful and eye-catching for celebrations." },
  { id: "bd2", value: "Black & Gold Geometric", img: bdGeometric, desc: "Black backdrop with a gold geometric line pattern — modern and upscale." },
  { id: "bd3", value: "Black & Gold Marble", img: bdMarble, desc: "Dramatic black and gold marbled design — elegant for upscale events." },
  { id: "bd4", value: "Gold Sequin", img: bdGoldSequin, desc: "All-gold fringe sequin — glamorous shimmer for milestone celebrations." },
  { id: "bd5", value: "Pink & Purple Floral", img: bdFloral, desc: "Lush pink and purple flower wall — romantic and soft for weddings and quinceañeras." },
  { id: "bd6", value: "Silver/Black Sequin", img: bdSilverSequin, desc: "Shimmering silver-black fringe sequin — sleek and reflective under lights." },
  { id: "bd7", value: "Hedge", img: bdHedge, desc: "Fresh green hedge wall — a natural, garden-inspired look." },
  { id: "bd8", value: "Teal & Gold Marble", img: bdTeal, desc: "Teal and gold marbled swirl — a colorful, upscale alternative to black and gold." },
  { id: "bd9", value: "Rainbow Ink Splash", img: bdRainbow, desc: "Vivid multicolor ink-splash design — bold and artistic statement piece." },
  { id: "bd10", value: "White Floral Wall", img: bdWhiteFloral, desc: "All-white flower wall — timeless and elegant for bridal and formal events." },
];

const BookingFormPage = () => {
  const [keychain, setKeychain] = useState(false);
  const [sending, setSending] = useState(false);

  return (
    <div className="pbl-booking">
      <SEOHead
        title="Book Your Photo Booth | Photo Booth Legends"
        description="Book your South Florida photo booth experience. Share your event details, pick a backdrop, and add the Keychain Station — we reply within 24 hours."
        canonical="https://photoboothlegends.com/booking"
      />
      <div className="wrap">
        <div className="brand"><span className="mark">Photo Booth Legends</span></div>
        <h1>Book Your Event</h1>
        <p className="sub">
          Fill out the details below and we'll follow up with pricing and availability. Add the keychain
          station if you want guests to walk away with a wearable print, not just a photo.
        </p>
        <div className="divider"></div>

        <form
          id="bookingForm"
          action="https://formsubmit.co/photoboothlegends@gmail.com"
          method="POST"
          encType="multipart/form-data"
          onSubmit={() => setSending(true)}
        >
          {/* FormSubmit config */}
          <input type="hidden" name="_subject" value="New Photo Booth Legends Booking Inquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" className="hp" tabIndex={-1} autoComplete="off" />

          <fieldset>
            <legend>Your Info</legend>
            <div className="row2">
              <div className="field">
                <label className="req" htmlFor="name">Full name</label>
                <input type="text" id="name" name="Full Name" required autoComplete="name" />
              </div>
              <div className="field">
                <label className="req" htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="Phone" required autoComplete="tel" />
              </div>
            </div>
            <div className="field">
              <label className="req" htmlFor="email">Email</label>
              <input type="email" id="email" name="Email" required autoComplete="email" />
            </div>
          </fieldset>

          <fieldset>
            <legend>Event Details</legend>
            <div className="row2">
              <div className="field">
                <label className="req" htmlFor="eventType">Event type</label>
                <select id="eventType" name="Event Type" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Wedding</option>
                  <option>Quinceañera</option>
                  <option>Prom / School Dance</option>
                  <option>Corporate Event</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field">
                <label className="req" htmlFor="eventDate">Event date</label>
                <input type="date" id="eventDate" name="Event Date" required />
              </div>
            </div>
            <div className="row2">
              <div className="field">
                <label htmlFor="startTime">Start time</label>
                <input type="text" id="startTime" name="Start Time" placeholder="e.g. 7:00 PM" />
              </div>
              <div className="field">
                <label htmlFor="hours">Hours of coverage</label>
                <select id="hours" name="Hours of Coverage" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>2 hours</option>
                  <option>3 hours</option>
                  <option>4 hours</option>
                  <option>5+ hours</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label className="req" htmlFor="venue">Venue / location</label>
              <input type="text" id="venue" name="Venue / Location" required placeholder="Venue name and city" />
            </div>
            <div className="field">
              <label htmlFor="guests">Estimated guest count</label>
              <input type="number" id="guests" name="Estimated Guest Count" min="1" placeholder="e.g. 120" />
            </div>
          </fieldset>

          <fieldset>
            <legend>Choose Your Backdrop</legend>
            <div className="bd-grid">
              {backdrops.map((b) => (
                <label className="bd-card" key={b.id} htmlFor={b.id}>
                  <input type="radio" id={b.id} name="Backdrop Choice" value={b.value} />
                  <img className="bd-thumb" src={b.img} alt={`${b.value} backdrop`} loading="lazy" />
                  <span className="bd-name">{b.value}</span>
                  <span className="bd-desc">{b.desc}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>Add-Ons</legend>
            <label className={`addon${keychain ? " active" : ""}`} id="keychainCard" htmlFor="keychain">
              <input
                type="checkbox"
                id="keychain"
                name="Add-On: Keychain Station"
                value="Yes, add the Keychain Station"
                checked={keychain}
                onChange={(e) => setKeychain(e.target.checked)}
              />
              <span className="txt">
                <strong>Keychain Station</strong>
                <span>
                  Guests print a mini photo on the spot and turn it into a wearable keychain. A popular favor
                  upgrade for weddings, quinceañeras, and school events.
                </span>
              </span>
            </label>

            <div className={`charmPanel${keychain ? " open" : ""}`} id="charmPanel">
              <div className="charmInner">
                <div className="field">
                  <div className="miniLabel">Keyring color</div>
                  <div className="pillrow">
                    <label><input type="radio" name="Keyring Color" value="Gold" /> Gold</label>
                    <label><input type="radio" name="Keyring Color" value="Silver" /> Silver</label>
                  </div>
                </div>
                <div className="field">
                  <div className="miniLabel">Clasp style</div>
                  <div className="pillrow">
                    <label><input type="radio" name="Clasp Style" value="Lobster Claw" /> Lobster claw</label>
                    <label><input type="radio" name="Clasp Style" value="Keychain Clip" /> Keychain clip</label>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="charmDetails">What charm(s) would you like?</label>
                  <textarea
                    id="charmDetails"
                    name="Charm Details"
                    placeholder="e.g. initials, a heart charm, a number for the birthday age, event date charm..."
                  />
                  <div className="helper">Describe shape, wording, or theme — we'll confirm options before your event.</div>
                </div>
              </div>
            </div>

            <div className="field" style={{ marginTop: 18 }}>
              <label>Other add-ons you're interested in</label>
              <div className="pillrow">
                <label><input type="checkbox" name="Add-On: Backdrop Upgrade" value="Yes" /> Backdrop upgrade</label>
                <label><input type="checkbox" name="Add-On: Props" value="Yes" /> Prop set</label>
                <label><input type="checkbox" name="Add-On: Guest Book" value="Yes" /> Photo guest book</label>
                <label><input type="checkbox" name="Add-On: Unlimited Prints" value="Yes" /> Unlimited prints</label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Design Template</legend>
            <div className="field">
              <label htmlFor="designTitle">Design title</label>
              <input type="text" id="designTitle" name="Design Title" placeholder="e.g. Maria &amp; James Wedding Overlay" />
              <div className="helper">What should we call this design/template?</div>
            </div>
            <div className="field">
              <label htmlFor="theme">What theme or style do you want?</label>
              <textarea
                id="theme"
                name="Design Theme"
                placeholder="Describe colors, style, wording, fonts, or vibe you're going for..."
              />
            </div>
            <div className="field" style={{ marginBottom: 0 }}>
              <label htmlFor="inviteFile">Invite attachment (optional)</label>
              <div className="filefield">
                <input type="file" id="inviteFile" name="Invite Attachment" accept="image/*,.pdf" />
              </div>
              <div className="helper">Upload your event invite so we can match the design colors and style.</div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Anything Else</legend>
            <div className="field" style={{ marginBottom: 0 }}>
              <label htmlFor="notes">Notes or questions</label>
              <textarea id="notes" name="Notes" />
            </div>
          </fieldset>

          <button type="submit" id="submitBtn" disabled={sending}>
            {sending ? "Sending…" : "Submit Booking Request"}
          </button>
          <p className="foot">Photo Booth Legends · South Florida · We usually reply within 24 hours</p>
        </form>
      </div>
    </div>
  );
};

export default BookingFormPage;
