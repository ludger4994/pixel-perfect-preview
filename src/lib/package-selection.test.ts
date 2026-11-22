import { describe, expect, it } from 'vitest';
import { bookingSelectionUrl, parseExperienceSelection } from './package-selection';

describe('packages booking handoff', () => {
  it('preselects the experience IDs supplied in the booking URL', () => {
    expect(parseExperienceSelection('?experiences=photo-keychain,lux')).toEqual(['photo-keychain', 'lux']);
  });
  it('omits unknown services and duplicate selections', () => {
    expect(parseExperienceSelection('?experiences=lux,unknown,lux,selfie')).toEqual(['lux', 'selfie']);
  });
  it('passes multiple experiences to the booking form', () => {
    expect(bookingSelectionUrl(['photo-keychain', 'lux'])).toBe('/booking?experiences=photo-keychain,lux');
  });
  it('uses normal booking when no experience is selected', () => {
    expect(bookingSelectionUrl([])).toBe('/booking');
  });
});