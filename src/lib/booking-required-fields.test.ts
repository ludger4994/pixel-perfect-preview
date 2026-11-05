import { describe, expect, it } from 'vitest';
import { hasRequiredBookingFields } from '../../supabase/functions/_shared/booking-required-fields';

const essentials = {
  'Full Name': 'Booking Test',
  Phone: '9545550100',
  Email: 'booking-check@example.com',
  'Event Type': 'Wedding',
  'Event Date': '2026-12-12',
};

describe('booking essentials', () => {
  it('accepts the five essentials without optional venue or timing details', () => {
    expect(hasRequiredBookingFields(essentials)).toBe(true);
    expect(hasRequiredBookingFields({ ...essentials, 'Venue / Location': '', 'Start Time': '', 'End Time': '' })).toBe(true);
  });

  it.each(Object.keys(essentials))('still requires %s', (field) => {
    expect(hasRequiredBookingFields({ ...essentials, [field]: '' })).toBe(false);
  });
});