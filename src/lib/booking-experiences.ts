import selfie from '@/assets/selfie-booth.jpg';
import lux from '@/assets/lux-booth.jpg';
import booth360 from '@/assets/360-booth-main.jpg';
import sparks from '@/assets/cold-sparks.jpg';
import clouds from '@/assets/dancing-clouds.jpg';
import flowerWall from '@/assets/booking/backdrop-white-floral-wall.jpg';
import black from '@/assets/booking/backdrop-black.jpg';
import pink from '@/assets/booking/backdrop-pink-sequin.jpg';
import geometric from '@/assets/booking/backdrop-black-gold-geometric.jpg';
import marble from '@/assets/booking/backdrop-black-gold-marble.jpg';
import gold from '@/assets/booking/backdrop-gold-sequin.jpg';
import floral from '@/assets/booking/backdrop-pink-purple-floral.jpg';
import silver from '@/assets/booking/backdrop-silver-black-sequin.jpg';
import hedge from '@/assets/booking/backdrop-hedge.jpg';
import teal from '@/assets/booking/backdrop-teal-gold-marble.jpg';
import rainbow from '@/assets/booking/backdrop-rainbow-ink-splash.jpg';

export type BookingQuestion = { key: string; label: string; type?: 'text' | 'number' | 'time' | 'textarea'; options?: string[]; when?: { key: string; value: string } };
export type Experience = { id: string; name: string; category: string; description: string; image?: string; icon: 'camera' | 'key' | 'sparkles' | 'flower' | 'phone' | 'video'; backdrop?: boolean; questions: BookingQuestion[] };
const q = (key: string, label: string, options?: string[]): BookingQuestion => ({ key, label, options });
const yesNo = ['Yes', 'No', 'Not sure yet'];
const decor = [q('Decorative Setup', 'Decorative setup', ['Minimal', 'Floral accents', 'Coordinated with my event', 'Not sure yet'])];
const keychainQuestions: BookingQuestion[] = [
  { key: 'Keychain Quantity', label: 'Estimated keychain quantity', type: 'number' },
  q('Keyring Color', 'Keyring color', ['Gold', 'Silver', 'Not sure yet']),
  q('Clasp Style', 'Clasp style', ['Lobster Claw', 'Keychain Clip', 'Not sure yet']),
  q('Straps', 'Would you like wrist straps?', yesNo),
  { key: 'Strap Details', label: 'Strap color or style', when: { key: 'Straps', value: 'Yes' } },
  q('Charms', 'Would you like charms?', yesNo),
  { key: 'Charm Details', label: 'Charm shapes, initials or event details', type: 'textarea', when: { key: 'Charms', value: 'Yes' } },
];
export const experiences: Experience[] = [
  { id: 'photo-keychain', name: 'Photobooth Keychain Station', category: 'Photo experiences', description: 'Freshly captured photos, turned into keepsakes your guests can carry.', icon: 'key', backdrop: true, questions: keychainQuestions },
  { id: 'standalone-keychain', name: 'Standalone Keychain Station', category: 'Keepsakes & guest books', description: 'A dedicated station for personalized photo keychain favors.', icon: 'key', questions: [...keychainQuestions, q('Photo Source', 'Photos for your keychains', ['Guest-provided photos', 'Pre-selected event photos', 'Not sure yet'])] },
  { id: 'selfie', name: 'Selfie Booth', category: 'Photo experiences', description: 'Beautiful portraits and instant digital memories with your favorite people.', image: selfie, icon: 'camera', backdrop: true, questions: [q('Photo Delivery', 'Digital or printed photos?', ['Digital only', 'Digital & printing', 'Not sure yet']), q('Print Style', 'Print layout', ['Photo strips', '4 × 6 prints', 'Not sure yet']), q('Props', 'Props for your guests?', yesNo)] },
  { id: 'lux', name: 'Lux Booth (DSLR Booth)', category: 'Photo experiences', description: 'Studio-quality DSLR portraits with a polished, editorial finish.', image: lux, icon: 'camera', backdrop: true, questions: [q('Print Style', 'Print style', ['Photo strips', '4 × 6 prints', 'Black & white glam', 'Not sure yet']), q('Photo Finish', 'Photo finish', ['Color', 'Black & white', 'Both']), q('Props', 'Props for your guests?', yesNo)] },
  { id: '360', name: '360 Photo Booth', category: 'Photo experiences', description: 'A full-circle video moment, made to relive and share.', image: booth360, icon: 'video', questions: [q('Music', 'Song or music preference'), q('Overlay', 'Custom video overlay?', yesNo), { key: 'Overlay Details', label: 'Names, logo or wording for the overlay', type: 'textarea', when: { key: 'Overlay', value: 'Yes' } }, q('Sharing', 'Preferred sharing method', ['AirDrop', 'Text', 'Email', 'All three'])] },
  { id: 'sparks', name: 'Cold Sparks', category: 'Special effects', description: 'A spectacular sparkling entrance, first dance or grand finale.', image: sparks, icon: 'sparkles', questions: [{ key: 'Machines', label: 'Number of spark machines', type: 'number' }, q('Activation Moments', 'Which moments should feature sparks?'), { key: 'Activation Count', label: 'Number of activations', type: 'number' }, { key: 'Activation Time', label: 'Activation time', type: 'time' }, q('Venue Approval', 'Has your venue approved cold sparks?', yesNo), q('Setup Location', 'Activation location', ['Indoor', 'Outdoor', 'Not sure yet'])] },
  { id: 'clouds', name: 'Dancing on the Clouds', category: 'Special effects', description: 'A romantic low-lying cloud for an unforgettable dance.', image: clouds, icon: 'sparkles', questions: [q('Event Moment', 'Which moment will feature the clouds?'), { key: 'Activation Time', label: 'Activation time', type: 'time' }, q('Duration', 'Desired duration'), q('Venue Approval', 'Has your venue approved dancing on the clouds?', yesNo), q('Floor Location', 'Dance floor location', ['Indoor', 'Outdoor', 'Not sure yet'])] },
  { id: 'flower-wall', name: 'Flower Wall — Standalone', category: 'Keepsakes & guest books', description: 'A statement floral setting for your celebration.', image: flowerWall, icon: 'flower', questions: [q('Wall Choice', 'Flower wall choice', ['White Floral Wall', 'Pink & Purple Floral', 'Not sure yet']), q('Placement', 'Where will the flower wall be placed?'), q('Signage', 'Would you like decorative signage?', yesNo), ...decor] },
  { id: 'retro', name: 'Retro Photobooth — Standalone', category: 'Photo experiences', description: 'A nostalgic photo experience with timeless character.', icon: 'camera', backdrop: true, questions: [q('Photo Delivery', 'Digital or printed photos?', ['Digital only', 'Digital & printing', 'Not sure yet']), q('Print Style', 'Print style', ['Classic photo strips', '4 × 6 prints', 'Not sure yet']), q('Setup', 'Retro booth setup', ['Open setup with backdrop', 'Standalone without backdrop', 'Not sure yet']), ...decor] },
  { id: 'telephone', name: 'Telephone Audio Guest Book', category: 'Keepsakes & guest books', description: 'Heartfelt messages, familiar voices and memories worth keeping.', icon: 'phone', questions: [q('Greeting', 'Would you like a personalized greeting?', yesNo), { key: 'Greeting Details', label: 'Greeting wording or recording preference', type: 'textarea', when: { key: 'Greeting', value: 'Yes' } }, q('Recording Delivery', 'Recording delivery preference', ['Digital recordings', 'Not sure yet']), q('Telephone Style', 'Telephone color or style preference'), ...decor] },
  { id: 'video-guestbook', name: 'Video Guest Book', category: 'Keepsakes & guest books', description: 'Personal wishes and on-camera stories from the people you love.', icon: 'video', questions: [q('Prompts', 'Messages or questions for your guests'), q('Customization', 'Custom welcome screen?', yesNo), { key: 'Welcome Details', label: 'Welcome screen wording or logo details', type: 'textarea', when: { key: 'Customization', value: 'Yes' } }, q('Video Delivery', 'Video delivery preference', ['Digital videos', 'Not sure yet']), ...decor] },
];
export const bookingBackdrops = [
  { name: 'Black', image: black }, { name: 'Pink Sequin', image: pink }, { name: 'Black & Gold Geometric', image: geometric },
  { name: 'Black & Gold Marble', image: marble }, { name: 'Gold Sequin', image: gold }, { name: 'Pink & Purple Floral', image: floral },
  { name: 'Silver/Black Sequin', image: silver }, { name: 'Hedge', image: hedge }, { name: 'Teal & Gold Marble', image: teal },
  { name: 'Rainbow Ink Splash', image: rainbow }, { name: 'White Floral Wall', image: flowerWall },
];
export function canSelectBackdrop(id: string, answers: Record<string, string> = {}) {
  const experience = experiences.find(item => item.id === id);
  return Boolean(experience?.backdrop) && (id !== 'retro' || answers.Setup === 'Open setup with backdrop');
}
export function visibleQuestions(experience: Experience, answers: Record<string, string>) {
  return experience.questions.filter(question => !question.when || answers[question.when.key] === question.when.value)
    .filter(question => question.key !== 'Print Style' || experience.id !== 'selfie' && experience.id !== 'retro' || answers['Photo Delivery'] === 'Digital & printing');
}
export function serviceFields(selected: string[], answers: Record<string, Record<string, string>>): Record<string, string> {
  const fields: Record<string, string> = {};
  for (const experience of experiences.filter(item => selected.includes(item.id))) {
    const values = answers[experience.id] || {};
    for (const question of visibleQuestions(experience, values)) {
      if (values[question.key]) fields[`${experience.name}: ${question.key}`] = values[question.key];
    }
    if (canSelectBackdrop(experience.id, values) && values.Backdrop) fields[`${experience.name}: Backdrop`] = values.Backdrop;
  }
  return fields;
}