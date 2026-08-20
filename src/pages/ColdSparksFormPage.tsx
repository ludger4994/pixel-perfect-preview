import { useRef, useState } from "react";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import "./cold-sparks-form.css";

type Fields = {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  venueName: string;
  venueAddress: string;
  eventStart: string;
  sparkTime: string;
  machines: string;
  machinesOther: string;
  momentOther: string;
  approval: string;
  venueContactName: string;
  venueContactInfo: string;
  signature: string;
  signDate: string;
};

const initial: Fields = {
  fullName: "",
  phone: "",
  email: "",
  eventType: "",
  eventDate: "",
  venueName: "",
  venueAddress: "",
  eventStart: "",
  sparkTime: "",
  machines: "",
  machinesOther: "",
  momentOther: "",
  approval: "",
  venueContactName: "",
  venueContactInfo: "",
  signature: "",
  signDate: "",
};

const MOMENTS = [
  "Grand Entrance",
  "First Dance",
  "Cake Cutting",
  "Grand Exit",
  "Special Performance",
  "Other",
];

const ColdSparksFormPage = () => {
  const [f, setF] = useState<Fields>(initial);
  const [moments, setMoments] = useState<string[]>([]);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});
  const [agreeError, setAgreeError] = useState(false);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  const cls = (k: string) => `field${invalid[k] ? " invalid" : ""}`;

  const toggleMoment = (v: string) =>
    setMoments((p) => (p.includes(v) ? p.filter((x) => x !== v) : [...p, v]));

  const validate = () => {
    const inv: Record<string, boolean> = {};
    const required: (keyof Fields)[] = [
      "fullName",
      "phone",
      "email",
      "eventType",
      "eventDate",
      "venueName",
      "venueAddress",
      "eventStart",
      "sparkTime",
      "signature",
      "signDate",
    ];
    required.forEach((k) => {
      if (!f[k].trim()) inv[k] = true;
    });
    if (!f.machines) inv.machines = true;
    if (moments.length === 0) inv.moments = true;
    if (!f.approval) inv.approval = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) inv.email = true;

    const allAgreed = agree1 && agree2 && agree3;
    setAgreeError(!allAgreed);
    setInvalid(inv);
    return Object.keys(inv).length === 0 && allAgreed;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    if (!validate()) {
      setStatus("Please complete all required fields.");
      requestAnimationFrame(() => {
        const el = formRef.current?.querySelector(".field.invalid, .agree-error-visible");
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      return;
    }

    setSubmitting(true);
    const refId = "CS-" + Date.now().toString(36).toUpperCase();

    const { error } = await supabase.functions.invoke("cold-sparks-booking", {
      body: {
        ...f,
        moments,
        agree1,
        agree2,
        agree3,
        reference: refId,
      },
    });

    if (error) {
      console.error("Submit error:", error);
      setSubmitting(false);
      setStatus("Something went wrong. Please try again or call (786) 384-4038.");
      return;
    }

    // Mirror the submission to FormSubmit.co for instant email delivery (same flow as /booking).
    const fd = new FormData();
    fd.append("_subject", `New Cold Sparks Rental Inquiry — ${refId}`);
    fd.append("_template", "table");
    fd.append("_captcha", "false");
    fd.append("_honey", "");
    fd.append("Reference", refId);
    fd.append("Full Name", f.fullName);
    fd.append("Phone", f.phone);
    fd.append("Email", f.email);
    fd.append("Event Type", f.eventType);
    fd.append("Event Date", f.eventDate);
    fd.append("Venue Name", f.venueName);
    fd.append("Venue Address", f.venueAddress);
    fd.append("Event Start Time", f.eventStart);
    fd.append("Cold Spark Requested Time", f.sparkTime);
    fd.append("Machines", f.machines === "Other" ? f.machinesOther : f.machines);
    fd.append("Moments", moments.join(", "));
    if (moments.includes("Other") && f.momentOther) fd.append("Other Moment", f.momentOther);
    fd.append("Venue Approval", f.approval);
    fd.append("Venue Contact Name", f.venueContactName || "—");
    fd.append("Venue Contact Info", f.venueContactInfo || "—");
    fd.append("Client Signature", f.signature);
    fd.append("Date Signed", f.signDate);

    try {
      await fetch("https://formsubmit.co/photoboothlegends@gmail.com", {
        method: "POST",
        body: fd,
        mode: "no-cors",
      });
    } catch (err) {
      console.error("Email notification error:", err);
    }

    setSubmitting(false);
    setDone(refId);
  };

  return (
    <div className="pbl-sparks">
      <SEOHead
        title="Cold Sparks Rental Form | Photo Booth Legends"
        description="Authorize Cold Spark use at your South Florida event. Share venue details, timing, and approval status — Photo Booth Legends confirms placement before your date."
        canonical="https://photoboothlegends.com/booking/cold-sparks"
      />
      <div style={{ position: "fixed", inset: 0, background: "#000000", zIndex: -1 }} />

      <div className="wrap">
        <header>
          <div className="brand">Photo Booth Legends</div>
          <h1>Cold Sparks Rental</h1>
          <p className="sub">
            Fill out the details below to authorize Cold Spark use at your event. We'll confirm venue
            approval and final placement before your date.
          </p>
        </header>
        <div className="hr"></div>

        <form ref={formRef} id="sparkForm" noValidate className={done ? "hide" : ""} onSubmit={onSubmit}>
          <div className="section">
            <div className="section-label"><h2>Your Info</h2><div className="rule"></div></div>

            <div className={cls("fullName")}>
              <label htmlFor="fullName">Full name<span className="req">*</span></label>
              <input type="text" id="fullName" name="fullName" placeholder="Jane Rodriguez" autoComplete="name" value={f.fullName} onChange={set("fullName")} />
              <div className="error-msg">Enter your full name.</div>
            </div>
            <div className={cls("phone")}>
              <label htmlFor="phone">Phone<span className="req">*</span></label>
              <input type="tel" id="phone" name="phone" placeholder="(954) 555-0123" autoComplete="tel" value={f.phone} onChange={set("phone")} />
              <div className="error-msg">Enter a phone number.</div>
            </div>
            <div className={cls("email")}>
              <label htmlFor="email">Email<span className="req">*</span></label>
              <input type="email" id="email" name="email" placeholder="jane@email.com" autoComplete="email" value={f.email} onChange={set("email")} />
              <div className="error-msg">Enter a valid email.</div>
            </div>
          </div>

          <div className="section">
            <div className="section-label"><h2>Event Details</h2><div className="rule"></div></div>

            <div className={cls("eventType")}>
              <label htmlFor="eventType">Event type<span className="req">*</span></label>
              <select id="eventType" name="eventType" required value={f.eventType} onChange={set("eventType")}>
                <option value="" disabled>Select one</option>
                <option>Wedding</option>
                <option>Quinceañera</option>
                <option>Prom</option>
                <option>Corporate Event</option>
                <option>Birthday</option>
                <option>Other</option>
              </select>
              <div className="error-msg">Select an event type.</div>
            </div>
            <div className={cls("eventDate")}>
              <label htmlFor="eventDate">Event date<span className="req">*</span></label>
              <input type="date" id="eventDate" name="eventDate" value={f.eventDate} onChange={set("eventDate")} />
              <div className="error-msg">Select the event date.</div>
            </div>
            <div className={cls("venueName")}>
              <label htmlFor="venueName">Venue name<span className="req">*</span></label>
              <input type="text" id="venueName" name="venueName" placeholder="The Diplomat Beach Resort" value={f.venueName} onChange={set("venueName")} />
              <div className="error-msg">Enter the venue name.</div>
            </div>
            <div className={cls("venueAddress")}>
              <label htmlFor="venueAddress">Venue address<span className="req">*</span></label>
              <input type="text" id="venueAddress" name="venueAddress" placeholder="3555 S Ocean Dr, Hollywood, FL" value={f.venueAddress} onChange={set("venueAddress")} />
              <div className="error-msg">Enter the venue address.</div>
            </div>
            <div className={cls("eventStart")}>
              <label htmlFor="eventStart">Event start time<span className="req">*</span></label>
              <input type="time" id="eventStart" name="eventStart" value={f.eventStart} onChange={set("eventStart")} />
              <div className="error-msg">Enter the event start time.</div>
            </div>
            <div className={cls("sparkTime")}>
              <label htmlFor="sparkTime">Cold spark requested time<span className="req">*</span></label>
              <input type="time" id="sparkTime" name="sparkTime" value={f.sparkTime} onChange={set("sparkTime")} />
              <div className="error-msg">Enter the requested time.</div>
            </div>
          </div>

          <div className="section">
            <div className="section-label"><h2>Rental Selection</h2><div className="rule"></div></div>

            <div className={cls("machines")}>
              <label>Number of Cold Spark machines<span className="req">*</span></label>
              <div className="chip-group" id="machineGroup">
                {["1 Machine", "2 Machines", "4 Machines", "Other"].map((v) => (
                  <label className="chip" key={v}>
                    <input type="radio" name="machines" value={v} checked={f.machines === v} onChange={set("machines")} />
                    <span>{v}</span>
                  </label>
                ))}
              </div>
              <input
                type="text"
                className={`other-input${f.machines === "Other" ? " show" : ""}`}
                id="machinesOther"
                placeholder="Specify quantity"
                value={f.machinesOther}
                onChange={set("machinesOther")}
              />
              <div className="error-msg">Select a machine count.</div>
            </div>

            <div className={cls("moments")}>
              <label>When would you like the Cold Sparks activated?<span className="req">*</span></label>
              <div className="chip-group" id="momentGroup">
                {MOMENTS.map((v) => (
                  <label className="chip" key={v}>
                    <input type="checkbox" name="moment" value={v} checked={moments.includes(v)} onChange={() => toggleMoment(v)} />
                    <span>{v}</span>
                  </label>
                ))}
              </div>
              <input
                type="text"
                className={`other-input${moments.includes("Other") ? " show" : ""}`}
                id="momentOther"
                placeholder="Describe the moment"
                value={f.momentOther}
                onChange={set("momentOther")}
              />
              <div className="error-msg">Select at least one moment.</div>
            </div>
          </div>

          <div className="section">
            <div className="section-label"><h2>Venue Approval</h2><div className="rule"></div></div>

            <div className={cls("approval")}>
              <label>Has the venue approved Cold Spark use?<span className="req">*</span></label>
              <div className="chip-group" id="approvalGroup">
                {["Yes", "No", "Waiting for approval"].map((v) => (
                  <label className="chip" key={v}>
                    <input type="radio" name="approval" value={v} checked={f.approval === v} onChange={set("approval")} />
                    <span>{v}</span>
                  </label>
                ))}
              </div>
              <div className="error-msg">Select an approval status.</div>
            </div>
            <div className="field">
              <label htmlFor="venueContactName">
                Venue contact name <span style={{ color: "var(--placeholder)", fontWeight: 500 }}>(optional)</span>
              </label>
              <input type="text" id="venueContactName" name="venueContactName" placeholder="Optional" value={f.venueContactName} onChange={set("venueContactName")} />
            </div>
            <div className="field">
              <label htmlFor="venueContactInfo">
                Venue contact phone / email <span style={{ color: "var(--placeholder)", fontWeight: 500 }}>(optional)</span>
              </label>
              <input type="text" id="venueContactInfo" name="venueContactInfo" placeholder="Optional" value={f.venueContactInfo} onChange={set("venueContactInfo")} />
            </div>
          </div>

          <div className="section">
            <div className="section-label"><h2>Safety &amp; Rental Terms</h2><div className="rule"></div></div>
            <div className="notice">
              Cold Spark machines will only be operated by Photo Booth Legends or an authorized attendant. Guests
              may not move, touch, activate, or operate the equipment.
              <li>Final placement is determined by Photo Booth Legends based on safety, venue requirements, space, and power access.</li>
              <li>Venue permission is the client's responsibility. If the venue refuses use on the event date, Photo Booth Legends is not responsible for the inability to provide the effect.</li>
              <li>Cold Sparks must be kept clear of guests, children, decorations, fabrics, and flammable materials.</li>
            </div>

            <div className="terms">
              <label className="term">
                <input type="checkbox" id="agree1" checked={agree1} onChange={(e) => setAgree1(e.target.checked)} />
                <span><strong>I confirm</strong> that the information provided in this form is accurate.</span>
              </label>
              <label className="term">
                <input type="checkbox" id="agree2" checked={agree2} onChange={(e) => setAgree2(e.target.checked)} />
                <span><strong>I understand</strong> that venue approval is required before Cold Spark use.</span>
              </label>
              <label className="term">
                <input type="checkbox" id="agree3" checked={agree3} onChange={(e) => setAgree3(e.target.checked)} />
                <span><strong>I agree</strong> to follow all safety instructions provided by Photo Booth Legends.</span>
              </label>
            </div>
            <div
              className={`error-msg${agreeError ? " agree-error-visible" : ""}`}
              id="agreeError"
              style={{ marginTop: 14, display: agreeError ? "block" : "none" }}
            >
              All three agreements are required to submit.
            </div>
          </div>

          <div className="section">
            <div className="section-label"><h2>Client Signature</h2><div className="rule"></div></div>
            <div className={cls("signature")}>
              <label htmlFor="signature">Type your full name to sign<span className="req">*</span></label>
              <input
                type="text"
                id="signature"
                name="signature"
                placeholder="Full legal name"
                style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: 22, fontStyle: "italic" }}
                value={f.signature}
                onChange={set("signature")}
              />
              <div className="error-msg">Type your full name to sign.</div>
            </div>
            <div className={cls("signDate")}>
              <label htmlFor="signDate">Date<span className="req">*</span></label>
              <input type="date" id="signDate" name="signDate" value={f.signDate} onChange={set("signDate")} />
              <div className="error-msg">Select today's date.</div>
            </div>
          </div>

          <div className="submit-row">
            <button type="submit" id="submitBtn" disabled={submitting}>
              {submitting ? "Submitting…" : "Submit Form"}
            </button>
            <div className="status-msg" id="statusMsg">{status}</div>
            <p className="fineprint">
              Submitting this form confirms your acknowledgement of the information and terms above.
            </p>
          </div>
        </form>

        <div className={`success${done ? " show" : ""}`} id="successState">
          <div className="icon">
            <svg viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="28.5" stroke="#c9a24b" strokeWidth="1.5" />
              <path d="M18 31l8 8 16-17" stroke="#d9b876" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2>Form Received</h2>
          <p>
            Your Cold Sparks rental request has been submitted. Photo Booth Legends will follow up to confirm
            details and venue approval.
          </p>
          <div className="ref" id="refLine">{done ? `Reference: ${done}` : ""}</div>
        </div>
      </div>
    </div>
  );
};

export default ColdSparksFormPage;
