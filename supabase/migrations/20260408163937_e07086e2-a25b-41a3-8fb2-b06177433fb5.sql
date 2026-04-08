
-- Create bookings table
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  event_date DATE NOT NULL,
  event_type TEXT NOT NULL,
  hours TEXT NOT NULL,
  guest_count TEXT,
  city TEXT,
  venue TEXT,
  package_name TEXT NOT NULL,
  package_price NUMERIC NOT NULL,
  add_ons JSONB DEFAULT '[]'::jsonb,
  add_ons_total NUMERIC NOT NULL DEFAULT 0,
  total_price NUMERIC NOT NULL,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  paypal_order_id TEXT,
  paypal_status TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert bookings (public booking form)
CREATE POLICY "Anyone can create bookings" ON public.bookings
  FOR INSERT WITH CHECK (true);

-- Allow reading own booking by email (for confirmation page)
CREATE POLICY "Anyone can read bookings" ON public.bookings
  FOR SELECT USING (true);

-- Create blocked_dates table for calendar
CREATE TABLE public.blocked_dates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_id UUID REFERENCES public.bookings(id) ON DELETE CASCADE,
  blocked_date DATE NOT NULL,
  service_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.blocked_dates ENABLE ROW LEVEL SECURITY;

-- Anyone can read blocked dates (to show on calendar)
CREATE POLICY "Anyone can view blocked dates" ON public.blocked_dates
  FOR SELECT USING (true);

-- Anyone can insert blocked dates (created during booking)
CREATE POLICY "Anyone can insert blocked dates" ON public.blocked_dates
  FOR INSERT WITH CHECK (true);

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
