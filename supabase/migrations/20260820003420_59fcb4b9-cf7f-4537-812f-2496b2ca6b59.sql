CREATE TABLE public.cold_sparks_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reference text NOT NULL,
  full_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  event_type text NOT NULL,
  event_date date NOT NULL,
  venue_name text NOT NULL,
  venue_address text NOT NULL,
  event_start text NOT NULL,
  spark_time text NOT NULL,
  machines text NOT NULL,
  machines_other text,
  moments text[] NOT NULL DEFAULT '{}',
  moment_other text,
  approval text NOT NULL,
  venue_contact_name text,
  venue_contact_info text,
  agree_accurate boolean NOT NULL DEFAULT false,
  agree_venue_approval boolean NOT NULL DEFAULT false,
  agree_safety boolean NOT NULL DEFAULT false,
  signature text NOT NULL,
  sign_date date NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.cold_sparks_bookings TO service_role;

ALTER TABLE public.cold_sparks_bookings ENABLE ROW LEVEL SECURITY;