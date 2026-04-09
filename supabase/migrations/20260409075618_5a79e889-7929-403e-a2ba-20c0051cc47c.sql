
CREATE POLICY "Anyone can update business settings"
ON public.business_settings FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

CREATE POLICY "Anyone can update leads"
ON public.leads FOR UPDATE
TO public
USING (true)
WITH CHECK (true);
