import { describe, expect, it } from 'vitest';
import { canSelectBackdrop, experiences, serviceFields, visibleQuestions } from './booking-experiences';
describe('booking experience rules', () => {
  it('offers all eleven services and preserves multiple selections in submission', () => {
    expect(experiences).toHaveLength(11);
    expect(serviceFields(['selfie', 'sparks'], { selfie: { 'Photo Delivery': 'Digital only' }, sparks: { 'Venue Approval': 'Yes' } })).toEqual({ 'Selfie Booth: Photo Delivery': 'Digital only', 'Cold Sparks: Venue Approval': 'Yes' });
  });
  it('allows traditional backdrops for compatible photo services', () => {
    expect(['selfie', 'lux', 'photo-keychain'].map(id => canSelectBackdrop(id))).toEqual([true, true, true]);
  });
  it('never offers traditional backdrops for 360, special effects or standalone services', () => {
    expect(['360', 'sparks', 'clouds', 'flower-wall', 'standalone-keychain', 'telephone', 'video-guestbook'].map(id => canSelectBackdrop(id))).toEqual([false, false, false, false, false, false, false]);
    expect(serviceFields(['360'], { '360': { Backdrop: 'Gold Sequin' } })).toEqual({});
  });
  it('offers retro backdrops only for compatible open setups', () => {
    expect(canSelectBackdrop('retro', { Setup: 'Open setup with backdrop' })).toBe(true);
    expect(canSelectBackdrop('retro', { Setup: 'Standalone without backdrop' })).toBe(false);
  });
  it('excludes answers for deselected services', () => {
    expect(serviceFields(['selfie'], { sparks: { 'Venue Approval': 'Yes' } })).toEqual({});
  });
  it('only includes conditional charm details when charms are selected', () => {
    const service = experiences.find(item => item.id === 'photo-keychain');
    if (!service) throw new Error('Missing keychain service');
    expect(visibleQuestions(service, { Charms: 'No' }).some(q => q.key === 'Charm Details')).toBe(false);
    expect(serviceFields(['photo-keychain'], { 'photo-keychain': { Charms: 'Yes', 'Charm Details': 'Heart' } })['Photobooth Keychain Station: Charm Details']).toBe('Heart');
  });
});