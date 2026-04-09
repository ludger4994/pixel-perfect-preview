import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Lock, Settings, Users, MessageSquare, Phone, Package, Image } from "lucide-react";

const ADMIN_PASSWORD = "pbl2024admin"; // Simple password gate

const AdminPage = () => {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("leads");
  const [leads, setLeads] = useState<any[]>([]);
  const [settings, setSettings] = useState<any>(null);
  const [booths, setBooths] = useState<any[]>([]);
  const [packages, setPackages] = useState<any[]>([]);
  const [backdrops, setBackdrops] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);
  const [smsTemplates, setSmsTemplates] = useState<any[]>([]);

  useEffect(() => {
    if (!authed) return;
    loadAll();
  }, [authed]);

  const loadAll = async () => {
    const [l, s, b, p, bd, f, sm] = await Promise.all([
      supabase.from("leads").select("*").order("created_at", { ascending: false }),
      supabase.from("business_settings").select("*").limit(1).single(),
      supabase.from("booths").select("*").order("created_at"),
      supabase.from("packages").select("*, booths(booth_name)").order("created_at"),
      supabase.from("chatbot_backdrops").select("*").order("created_at"),
      supabase.from("faq_items").select("*").order("created_at"),
      supabase.from("sms_templates").select("*").order("created_at"),
    ]);
    if (l.data) setLeads(l.data);
    if (s.data) setSettings(s.data);
    if (b.data) setBooths(b.data);
    if (p.data) setPackages(p.data);
    if (bd.data) setBackdrops(bd.data);
    if (f.data) setFaqs(f.data);
    if (sm.data) setSmsTemplates(sm.data);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
    } else {
      toast.error("Incorrect password");
    }
  };

  const exportCSV = () => {
    if (!leads.length) return;
    const headers = ["Name", "Phone", "Email", "Event Type", "Event Date", "Location", "Booth", "SMS Sent", "Created"];
    const rows = leads.map((l) => [
      l.full_name, l.phone, l.email, l.event_type,
      l.event_date, l.location, l.preferred_booth,
      l.sms_sent ? "Yes" : "No", new Date(l.created_at).toLocaleDateString(),
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c: any) => `"${c || ""}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "leads.csv";
    a.click();
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <form onSubmit={handleLogin} className="w-80 space-y-4">
          <div className="text-center mb-6">
            <Lock className="w-8 h-8 mx-auto mb-2" style={{ color: "hsl(var(--primary))" }} />
            <h1 className="font-heading text-xl text-foreground">Admin Access</h1>
          </div>
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-full" variant="default">
            Enter
          </Button>
        </form>
      </div>
    );
  }

  const tabs = [
    { id: "leads", label: "Leads", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "booths", label: "Booths", icon: Package },
    { id: "backdrops", label: "Backdrops", icon: Image },
    { id: "faqs", label: "FAQs", icon: MessageSquare },
    { id: "sms", label: "SMS Templates", icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border px-6 py-3 flex items-center gap-4">
        <h1 className="font-heading text-lg" style={{ color: "hsl(var(--primary))" }}>
          PBL Admin
        </h1>
        <div className="flex gap-1 ml-4">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-3 py-1.5 text-xs rounded-md flex items-center gap-1.5 transition-colors ${
                activeTab === t.id
                  ? "bg-primary text-black"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <t.icon className="w-3.5 h-3.5" />
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 max-w-6xl mx-auto">
        {activeTab === "leads" && <LeadsTab leads={leads} onExport={exportCSV} />}
        {activeTab === "settings" && settings && <SettingsTab settings={settings} onRefresh={loadAll} />}
        {activeTab === "booths" && <BoothsTab booths={booths} packages={packages} />}
        {activeTab === "backdrops" && <BackdropsTab backdrops={backdrops} />}
        {activeTab === "faqs" && <FaqsTab faqs={faqs} />}
        {activeTab === "sms" && <SmsTab templates={smsTemplates} />}
      </div>
    </div>
  );
};

/* ── Leads Tab ── */
const LeadsTab = ({ leads, onExport }: { leads: any[]; onExport: () => void }) => (
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-heading text-lg text-foreground">
        Leads ({leads.length})
      </h2>
      <Button size="sm" variant="outline" onClick={onExport}>
        Export CSV
      </Button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border text-left text-muted-foreground">
            <th className="pb-2 pr-3">Name</th>
            <th className="pb-2 pr-3">Phone</th>
            <th className="pb-2 pr-3">Email</th>
            <th className="pb-2 pr-3">Event</th>
            <th className="pb-2 pr-3">Date</th>
            <th className="pb-2 pr-3">Booth</th>
            <th className="pb-2 pr-3">SMS</th>
            <th className="pb-2">Created</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((l) => (
            <tr key={l.id} className="border-b border-border/50 text-foreground/80">
              <td className="py-2 pr-3">{l.full_name || "—"}</td>
              <td className="py-2 pr-3">{l.phone || "—"}</td>
              <td className="py-2 pr-3">{l.email || "—"}</td>
              <td className="py-2 pr-3">{l.event_type || "—"}</td>
              <td className="py-2 pr-3">{l.event_date || "—"}</td>
              <td className="py-2 pr-3">{l.preferred_booth || "—"}</td>
              <td className="py-2 pr-3">
                <span className={l.sms_sent ? "text-green-400" : "text-muted-foreground"}>
                  {l.sms_sent ? "✓" : "—"}
                </span>
              </td>
              <td className="py-2">{new Date(l.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
          {!leads.length && (
            <tr>
              <td colSpan={8} className="py-8 text-center text-muted-foreground">
                No leads captured yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);

/* ── Settings Tab ── */
const SettingsTab = ({ settings, onRefresh }: { settings: any; onRefresh: () => void }) => {
  const [form, setForm] = useState(settings);

  const handleSave = async () => {
    const { error } = await supabase
      .from("business_settings")
      .update(form)
      .eq("id", settings.id);
    if (error) {
      toast.error("Failed to save");
    } else {
      toast.success("Settings saved");
      onRefresh();
    }
  };

  return (
    <div className="space-y-4 max-w-lg">
      <h2 className="font-heading text-lg text-foreground">Business Settings</h2>
      {[
        { key: "business_name", label: "Business Name" },
        { key: "service_area", label: "Service Area" },
        { key: "setup_policy", label: "Setup Policy" },
        { key: "booking_link", label: "Booking Link" },
        { key: "support_phone", label: "Support Phone" },
        { key: "instagram", label: "Instagram" },
        { key: "sms_from_number", label: "SMS From Number" },
      ].map((f) => (
        <div key={f.key}>
          <label className="text-xs text-muted-foreground mb-1 block">{f.label}</label>
          <Input
            value={form[f.key] || ""}
            onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
          />
        </div>
      ))}
      <Button onClick={handleSave}>Save Settings</Button>
    </div>
  );
};

/* ── Booths Tab ── */
const BoothsTab = ({ booths, packages }: { booths: any[]; packages: any[] }) => (
  <div className="space-y-6">
    <h2 className="font-heading text-lg text-foreground">Booths & Packages</h2>
    {booths.map((b) => (
      <div key={b.id} className="p-4 rounded-lg border border-border">
        <h3 className="font-medium text-foreground">{b.booth_name}</h3>
        <p className="text-xs text-muted-foreground mt-1">{b.short_description}</p>
        <p className="text-xs mt-1" style={{ color: "hsl(var(--primary))" }}>
          1-Hour Rate: ${b.one_hour_flat_rate}
        </p>
        <div className="mt-3 space-y-2">
          {packages
            .filter((p) => p.booth_id === b.id)
            .map((p) => (
              <div key={p.id} className="pl-4 border-l-2 border-primary/30">
                <p className="text-sm text-foreground">
                  {p.package_name} — {p.hours}hrs — ${p.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    ))}
  </div>
);

/* ── Backdrops Tab ── */
const BackdropsTab = ({ backdrops }: { backdrops: any[] }) => (
  <div>
    <h2 className="font-heading text-lg text-foreground mb-4">Backdrops</h2>
    <div className="space-y-2">
      {backdrops.map((b) => (
        <div key={b.id} className="flex justify-between items-center p-3 rounded-lg border border-border">
          <div>
            <p className="text-sm text-foreground">{b.backdrop_name}</p>
            <p className="text-xs text-muted-foreground">{b.description}</p>
          </div>
          <span className="text-xs" style={{ color: "hsl(var(--primary))" }}>
            {b.addon_price ? `+$${b.addon_price}` : "Included"}
          </span>
        </div>
      ))}
    </div>
  </div>
);

/* ── FAQs Tab ── */
const FaqsTab = ({ faqs }: { faqs: any[] }) => (
  <div>
    <h2 className="font-heading text-lg text-foreground mb-4">FAQ Items</h2>
    <div className="space-y-3">
      {faqs.map((f) => (
        <div key={f.id} className="p-3 rounded-lg border border-border">
          <p className="text-sm font-medium text-foreground">{f.question}</p>
          <p className="text-xs text-muted-foreground mt-1">{f.answer}</p>
          <span className="text-[10px] text-primary mt-1 inline-block">{f.category}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ── SMS Templates Tab ── */
const SmsTab = ({ templates }: { templates: any[] }) => (
  <div>
    <h2 className="font-heading text-lg text-foreground mb-4">SMS Templates</h2>
    <div className="space-y-3">
      {templates.map((t) => (
        <div key={t.id} className="p-3 rounded-lg border border-border">
          <p className="text-sm font-medium text-foreground">{t.template_name}</p>
          <p className="text-xs text-muted-foreground mt-1 whitespace-pre-wrap">{t.template_body}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AdminPage;
