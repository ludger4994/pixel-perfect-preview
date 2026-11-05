// Venue and timing are optional; only the five first-step essentials are required.
export function hasRequiredBookingFields(fields: Record<string, string>): boolean {
  return Boolean(
    fields['Full Name']?.trim() &&
    fields.Phone?.trim() &&
    fields.Email?.trim() &&
    fields['Event Type']?.trim() &&
    /^\d{4}-\d{2}-\d{2}$/.test(fields['Event Date'] || '')
  );
}