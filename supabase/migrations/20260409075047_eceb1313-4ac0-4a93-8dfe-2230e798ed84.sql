
-- Business-wide settings
CREATE TABLE public.business_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  business_name TEXT DEFAULT 'Photo Booth Legends',
  service_area TEXT DEFAULT 'Homestead to West Palm Beach, South Florida',
  setup_policy TEXT DEFAULT 'We arrive 1 hour before your event start time for full setup at no extra charge.',
  booking_link TEXT DEFAULT '/booking',
  support_phone TEXT DEFAULT '954-548-5809',
  instagram TEXT DEFAULT '@photoboothlegends',
  sms_from_number TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.business_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read business settings"
ON public.business_settings FOR SELECT
TO public
USING (true);

-- Booth offerings
CREATE TABLE public.booths (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  booth_name TEXT NOT NULL,
  booth_type TEXT NOT NULL,
  short_description TEXT,
  ideal_for TEXT,
  premium_level TEXT,
  one_hour_flat_rate INTEGER,
  personality TEXT,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.booths ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read booths"
ON public.booths FOR SELECT
TO public
USING (true);

-- Packages (multi-hour tiers per booth)
CREATE TABLE public.packages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  booth_id UUID REFERENCES public.booths(id) ON DELETE CASCADE,
  package_name TEXT NOT NULL,
  hours INTEGER NOT NULL,
  price INTEGER NOT NULL,
  features JSONB,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read packages"
ON public.packages FOR SELECT
TO public
USING (true);

-- Backdrops for chatbot knowledge (separate from the visual backdrops page)
CREATE TABLE public.chatbot_backdrops (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  backdrop_name TEXT NOT NULL,
  description TEXT,
  size TEXT DEFAULT '10x10',
  style TEXT,
  category TEXT,
  premium_notes TEXT,
  included_with TEXT,
  addon_price INTEGER DEFAULT 75,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.chatbot_backdrops ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read chatbot backdrops"
ON public.chatbot_backdrops FOR SELECT
TO public
USING (true);

-- FAQ knowledge base
CREATE TABLE public.faq_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.faq_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read faq items"
ON public.faq_items FOR SELECT
TO public
USING (true);

-- Leads captured by chatbot
CREATE TABLE public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT,
  phone TEXT,
  email TEXT,
  event_type TEXT,
  event_date DATE,
  location TEXT,
  guest_count TEXT,
  preferred_booth TEXT,
  requested_hours TEXT,
  backdrop_interest BOOLEAN DEFAULT FALSE,
  vibe_preference TEXT,
  recommendation TEXT,
  notes TEXT,
  sms_sent BOOLEAN DEFAULT FALSE,
  source TEXT DEFAULT 'chatbot',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
ON public.leads FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Anyone can read leads"
ON public.leads FOR SELECT
TO public
USING (true);

-- SMS templates
CREATE TABLE public.sms_templates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  template_name TEXT NOT NULL,
  template_body TEXT NOT NULL,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.sms_templates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read sms templates"
ON public.sms_templates FOR SELECT
TO public
USING (true);
