import selfie from '@/assets/selfie-booth.jpg';
import lux from '@/assets/lux-booth.jpg';
import booth360 from '@/assets/360-booth-main.jpg';
import sparks from '@/assets/cold-sparks.jpg';
import clouds from '@/assets/dancing-clouds.jpg';
import flowerWall from '@/assets/booking/backdrop-white-floral-wall.jpg';
import black from '@/assets/booking/backdrop-black.jpg';
import geometric from '@/assets/booking/backdrop-black-gold-geometric.jpg';
import gold from '@/assets/booking/backdrop-gold-sequin.jpg';
import silver from '@/assets/booking/backdrop-silver-black-sequin.jpg';
import white from '@/assets/backdrops/brilliant-white-original.jpg';
import blackGoldMarble from '@/assets/booking/backdrop-black-gold-marble.jpg';
import hedge from '@/assets/booking/backdrop-hedge.jpg';
import pinkFloral from '@/assets/booking/backdrop-pink-purple-floral.jpg';
import pinkSequin from '@/assets/booking/backdrop-pink-sequin.jpg';
import rainbow from '@/assets/booking/backdrop-rainbow-ink-splash.jpg';
import tealMarble from '@/assets/booking/backdrop-teal-gold-marble.jpg';

export type BookingQuestion = { key: string; label: string; type?: 'text' | 'number' | 'time' | 'textarea'; options?: string[]; multiple?: boolean; when?: { key: string; value: string } };
export type Experience = { id: string; name: string; title: string; category: string; description: string; image?: string; icon: 'camera' | 'key' | 'sparkles' | 'flower' | 'phone' | 'video'; backdrop?: boolean; questions: BookingQuestion[] };
export const experiences: Experience[] = [
  { id: "photo-keychain", name: "Photobooth Keychain Station", title: "Photobooth Keychain Station Customization", category: "Photo experiences", description: "Freshly captured photos, turned into keepsakes your guests can carry.", icon: "key", backdrop: true, questions: [{"key": "Quantity", "label": "How many custom keychains would you like?", "options": ["25", "50", "100", "150", "200", "Custom Quantity"]}, {"key": "Hours", "label": "How many hours do you need the experience?", "options": ["2", "3", "4", "5", "6", "Custom"]}, {"key": "Print Size", "label": "Which photo print size would you prefer?", "options": ["2×6 Strips", "4×6 Photos", "Not Sure"]}, {"key": "Straps", "label": "Which keychain strap styles do you like?", "options": ["Pearl", "Leather", "Both", "Help Me Choose"]}, {"key": "Charms", "label": "What charm styles would you prefer?", "options": ["Elegant", "Fun", "Themed", "Mixed"]}, {"key": "Backdrop Preference", "label": "Would you like to choose a backdrop?", "options": ["Yes", "Choose One for Me", "Not Sure"]}, {"key": "Custom Template", "label": "Would you like a customized print template?", "options": ["Yes", "No"]}, {"key": "Special Requests", "label": "Do you have any special keychain requests?", "type": "textarea"}, {"key": "Custom Quantity", "label": "Custom quantity", "type": "number", "when": {"key": "Quantity", "value": "Custom Quantity"}}, {"key": "Custom Hours", "label": "Custom hours", "type": "number", "when": {"key": "Hours", "value": "Custom"}}] },
  { id: "standalone-keychain", name: "Standalone Keychain Station", title: "Standalone Keychain Station Customization", category: "Keepsakes & guest books", description: "A dedicated station for personalized photo keychain favors.", icon: "key", questions: [{"key": "Quantity", "label": "How many custom keychains?", "options": ["25", "50", "100", "150", "200", "Custom"]}, {"key": "Hours", "label": "How many hours do you need the station?", "options": ["2", "3", "4", "5", "6", "Custom"]}, {"key": "Photo Source", "label": "How will the photos be provided?", "options": ["Guests Will Supply Photos", "I Will Provide Photos in Advance", "Help Me Decide"]}, {"key": "Straps", "label": "Which straps do you prefer?", "options": ["Pearl", "Leather", "Both"]}, {"key": "Charms", "label": "What charm styles do you prefer?", "options": ["Elegant", "Fun", "Themed", "Mixed"]}, {"key": "Keychain Theme", "label": "What event theme should the keychains match?"}, {"key": "Special Requests", "label": "Special Requests", "type": "textarea"}, {"key": "Custom Quantity", "label": "Custom quantity", "type": "number", "when": {"key": "Quantity", "value": "Custom"}}, {"key": "Custom Hours", "label": "Custom hours", "type": "number", "when": {"key": "Hours", "value": "Custom"}}] },
  { id: "selfie", name: "Selfie Booth", title: "Selfie Booth Customization", category: "Photo experiences", description: "Beautiful portraits and instant digital memories with your favorite people.", image: selfie, icon: "camera", backdrop: true, questions: [{"key": "Experience", "label": "What type of experience would you like?", "options": ["Digital Only", "Digital With Prints", "Not Sure"]}, {"key": "Hours", "label": "How many hours?", "options": ["2", "3", "4", "5", "All Day", "Custom"]}, {"key": "Features", "label": "Which features interest you?", "options": ["Photos", "Boomerangs", "GIFs", "Videos", "Glam Filter", "Fun Filters"], "multiple": true}, {"key": "Attendant", "label": "Would you like an attendant?", "options": ["Yes", "No, Drop-Off", "Help Me Decide"]}, {"key": "Backdrop Preference", "label": "Would you like a backdrop?", "options": ["Yes", "Choose One for Me", "Not Sure"]}, {"key": "Custom Template", "label": "Would you like a customized photo template?", "options": ["Yes", "No"]}, {"key": "Print Size", "label": "Preferred Print Size", "options": ["2×6", "4×6", "Both", "Not Sure"], "when": {"key": "Experience", "value": "Digital With Prints"}}, {"key": "Custom Hours", "label": "Custom hours", "type": "number", "when": {"key": "Hours", "value": "Custom"}}] },
  { id: "lux", name: "Lux Booth (DSLR Booth)", title: "Lux Booth Customization", category: "Photo experiences", description: "Studio-quality DSLR portraits with a polished, editorial finish.", image: lux, icon: "camera", backdrop: true, questions: [{"key": "Hours", "label": "How many hours?", "options": ["2", "3", "4", "5", "Custom"]}, {"key": "Print Size", "label": "Print Size", "options": ["2×6", "4×6", "Both"]}, {"key": "Photo Style", "label": "Photo Style", "options": ["Natural Color", "Black & White Glam", "Both"]}, {"key": "Custom Print Design", "label": "Would you like a custom print design?", "options": ["Yes", "No"]}, {"key": "Props Table", "label": "Would you like a props table?", "options": ["Yes", "No"]}, {"key": "Acrylic Frames", "label": "Interested in acrylic photo frames?", "options": ["Yes", "No", "Send Pricing"]}, {"key": "Keepsake Guest Book", "label": "Interested in a keepsake guest book?", "options": ["Yes", "No", "Send Pricing"]}, {"key": "Custom Hours", "label": "Custom hours", "type": "number", "when": {"key": "Hours", "value": "Custom"}}] },
  { id: "360", name: "360 Photo Booth", title: "360 Photo Booth Customization", category: "Photo experiences", description: "A full-circle video moment, made to relive and share.", image: booth360, icon: "video", questions: [{"key": "Hours", "label": "How many hours?", "options": ["2", "3", "4", "Custom"]}, {"key": "Music", "label": "Preferred Music", "options": ["Hip-Hop", "R&B", "Afrobeats", "Latin", "Pop", "Mixed", "Specific Song", "Let Us Choose"]}, {"key": "Custom Overlay", "label": "Would you like a custom video overlay?", "options": ["Yes", "No"]}, {"key": "Overlay Theme", "label": "What event theme or colors should the overlay match?"}, {"key": "Themed Props", "label": "Would you like themed props?", "options": ["Yes", "No"]}, {"key": "Floor Space", "label": "Is sufficient floor space available?", "options": ["Yes", "No", "Not Sure"]}, {"key": "Electrical Power", "label": "Is electrical power available nearby?", "options": ["Yes", "No", "Not Sure"]}, {"key": "Custom Hours", "label": "Custom hours", "type": "number", "when": {"key": "Hours", "value": "Custom"}}, {"key": "Song Request", "label": "Song request", "when": {"key": "Music", "value": "Specific Song"}}] },
  { id: "sparks", name: "Cold Sparks", title: "Cold Sparks Customization", category: "Special effects", description: "A spectacular sparkling entrance, first dance or grand finale.", image: sparks, icon: "sparkles", questions: [{"key": "Moment", "label": "What moment will the sparks be used for?", "options": ["Grand Entrance", "First Dance", "Cake Cutting", "Performance", "Send-Off", "Other"]}, {"key": "Activations", "label": "How many activation moments?", "options": ["1", "2", "3", "More Than 3", "Not Sure"]}, {"key": "Location", "label": "Indoor or Outdoor?", "options": ["Indoor", "Outdoor", "Not Sure"]}, {"key": "Venue Approval", "label": "Has the venue approved Cold Sparks?", "options": ["Yes", "No", "Pending"]}, {"key": "Coordinator Cue", "label": "Will a DJ or coordinator cue the effects?", "options": ["Yes", "No", "Not Sure"]}] },
  { id: "clouds", name: "Dancing on the Clouds", title: "Dancing on the Clouds Customization", category: "Special effects", description: "A romantic low-lying cloud for an unforgettable dance.", image: clouds, icon: "sparkles", questions: [{"key": "Moment", "label": "What moment is the effect for?", "options": ["First Dance", "Grand Entrance", "Performance", "Other"]}, {"key": "Effect Time", "label": "Approximately what time will the effect take place?", "type": "time"}, {"key": "Location", "label": "Indoor or Outdoor?", "options": ["Indoor", "Outdoor", "Not Sure"]}, {"key": "Venue Approval", "label": "Has your venue approved low-lying fog effects?", "options": ["Yes", "No", "Pending"]}, {"key": "Cold Sparks", "label": "Would you also like Cold Sparks?", "options": ["Yes", "No", "Already Selected"]}] },
  { id: "flower-wall", name: "Flower Wall \u2014 Standalone", title: "Flower Wall Customization", category: "Keepsakes & guest books", description: "A statement floral setting for your celebration.", image: flowerWall, icon: "flower", questions: [{"key": "Wall Style", "label": "Which flower wall style?", "options": ["White Flower Wall", "Other Available Styles", "Help Me Choose"]}, {"key": "Placement", "label": "Where will it be placed?", "options": ["Photo Area", "Sweetheart Table", "Entrance", "Dessert Table", "Other"]}, {"key": "Decorative Extras", "label": "Would you like decorative extras?", "options": ["Custom Sign", "LED Sign", "Decorative Lighting", "None"]}, {"key": "Space", "label": "Is approximately 8×8 feet of space available?", "options": ["Yes", "No", "Not Sure"]}, {"key": "Location", "label": "Indoor or Outdoor Placement?", "options": ["Indoors", "Outdoors", "Not Sure"]}] },
  { id: "retro", name: "Retro Photobooth \u2014 Standalone", title: "Retro Photobooth Customization", category: "Photo experiences", description: "A nostalgic photo experience with timeless character.", icon: "camera", backdrop: true, questions: [{"key": "Hours", "label": "How many hours?", "options": ["2", "3", "4", "5", "Custom"]}, {"key": "Experience", "label": "Preferred Experience", "options": ["Digital Only", "Prints Included", "Not Sure"]}, {"key": "Print Size", "label": "Preferred Print Size", "options": ["2×6", "4×6", "Not Sure"], "when": {"key": "Experience", "value": "Prints Included"}}, {"key": "Custom Template", "label": "Would you like a custom photo template?", "options": ["Yes", "No"]}, {"key": "Themed Props", "label": "Would you like themed props?", "options": ["Yes", "No"]}, {"key": "Backdrop Preference", "label": "Do you need a decorative backdrop?", "options": ["Yes", "No", "Not Sure"]}, {"key": "Custom Hours", "label": "Custom hours", "type": "number", "when": {"key": "Hours", "value": "Custom"}}] },
  { id: "telephone", name: "Telephone Audio Guest Book", title: "Telephone Audio Guest Book Customization", category: "Keepsakes & guest books", description: "Heartfelt messages, familiar voices and memories worth keeping.", icon: "phone", questions: [{"key": "Duration", "label": "How long would you like the telephone?", "options": ["Entire Event", "All Day", "Custom"]}, {"key": "Greeting", "label": "Would you like a personalized greeting?", "options": ["Yes", "No"]}, {"key": "Setup", "label": "Which setup do you prefer?", "options": ["Telephone Only", "Telephone With Decorative Table", "Telephone With Retro Telephone Booth Enclosure", "Telephone With Decorative White Panel Wall", "Help Me Choose"]}, {"key": "Placement", "label": "Preferred Placement", "options": ["Entrance", "Reception", "Guest Book Area", "Other"]}, {"key": "Quiet Area", "label": "Will the telephone be in a relatively quiet area?", "options": ["Yes", "No", "Not Sure"]}, {"key": "Greeting Text", "label": "Personalized greeting text", "type": "textarea", "when": {"key": "Greeting", "value": "Yes"}}] },
  { id: "video-guestbook", name: "Video Guest Book", title: "Video Guest Book Customization", category: "Keepsakes & guest books", description: "Personal wishes and on-camera stories from the people you love.", icon: "video", questions: [{"key": "Hours", "label": "How many hours?", "options": ["2", "3", "4", "Entire Event", "Custom"]}, {"key": "Messages", "label": "What types of messages?", "options": ["Birthday Wishes", "Wedding Messages", "Advice & Memories", "Corporate Testimonials", "Custom"]}, {"key": "Welcome Screen", "label": "Would you like a personalized welcome screen?", "options": ["Yes", "No"]}, {"key": "Custom Instructions", "label": "Would you like customized on-screen instructions?", "options": ["Yes", "No"]}, {"key": "Setup", "label": "Preferred Setup", "options": ["Standard", "Decorative White Panel Wall", "Floral Decor", "Help Me Choose"]}, {"key": "Electrical Power", "label": "Is electrical power available?", "options": ["Yes", "No", "Not Sure"]}, {"key": "Quiet Area", "label": "Is a quiet area available for recording?", "options": ["Yes", "No", "Not Sure"]}, {"key": "Custom Hours", "label": "Custom hours", "type": "number", "when": {"key": "Hours", "value": "Custom"}}] },
];
export const bookingBackdrops = [
  { name: 'White Flower Wall', image: flowerWall }, { name: 'Silver Shimmer Wall', image: silver },
  { name: 'Gold Sequin Wall', image: gold }, { name: 'Black Pillow Backdrop', image: black },
  { name: 'White Pillow Backdrop', image: white }, { name: 'Black & Gold Geometric Backdrop', image: geometric },
  { name: 'Black & Gold Marble', image: blackGoldMarble }, { name: 'Teal & Gold Marble', image: tealMarble },
  { name: 'Green Hedge Wall', image: hedge }, { name: 'Pink & Purple Floral Wall', image: pinkFloral },
  { name: 'Pink Sequin Wall', image: pinkSequin }, { name: 'Rainbow Ink Splash', image: rainbow },
];
export function canSelectBackdrop(id: string, answers: Record<string, string> = {}) {
  if (id === 'lux') return true;
  return ['selfie', 'photo-keychain', 'retro'].includes(id) && answers['Backdrop Preference'] === 'Yes';
}
export function visibleQuestions(experience: Experience, answers: Record<string, string>) {
  return experience.questions.filter(question => !question.when || answers[question.when.key] === question.when.value);
}
export function cleanAnswers(id: string, answers: Record<string, string>): Record<string, string> {
  const experience = experiences.find(item => item.id === id);
  if (!experience) return {};
  const clean: Record<string, string> = {};
  for (const question of visibleQuestions(experience, answers)) if (answers[question.key]) clean[question.key] = answers[question.key];
  if (canSelectBackdrop(id, answers) && answers.Backdrop) clean.Backdrop = answers.Backdrop;
  return clean;
}
export function serviceFields(selected: string[], answers: Record<string, Record<string, string>>): Record<string, string> {
  const fields: Record<string, string> = {};
  for (const experience of experiences.filter(item => selected.includes(item.id))) {
    for (const [key, value] of Object.entries(cleanAnswers(experience.id, answers[experience.id] || {}))) fields[`${experience.name}: ${key}`] = value;
  }
  return fields;
}
export function groupedServices(selected: string[], answers: Record<string, Record<string, string>>) {
  return experiences.filter(item => selected.includes(item.id)).map(item => ({ id: item.id, name: item.name, answers: cleanAnswers(item.id, answers[item.id] || {}) }));
}
export type BookingAddon = { id: string; name: string; service?: string };
const addonMap: Record<string, BookingAddon[]> = {
  telephone: [{ id: 'telephone-enclosure', name: 'Retro Telephone Booth Enclosure' }, { id: 'white-panel', name: 'Decorative White Panel Wall' }],
  'video-guestbook': [{ id: 'white-panel', name: 'Decorative White Panel Wall' }, { id: 'floral-decor', name: 'Floral Decor' }],
  selfie: [{ id: 'print-upgrades', name: 'Print Upgrades' }, { id: 'additional-hours', name: 'Additional Hours' }, { id: 'backdrop-upgrade', name: 'Compatible Backdrop Upgrades' }],
  lux: [{ id: 'acrylic-frames', name: 'Acrylic Frames' }, { id: 'keepsake-book', name: 'Keepsake Guest Book' }, { id: 'additional-hours', name: 'Additional Hours' }],
  'photo-keychain': [{ id: 'extra-keychains', name: 'Extra Keychains' }, { id: 'additional-hours', name: 'Additional Hours' }],
  'standalone-keychain': [{ id: 'extra-keychains', name: 'Extra Keychains' }, { id: 'additional-hours', name: 'Additional Hours' }],
  sparks: [{ id: 'clouds', name: 'Dancing on the Clouds', service: 'clouds' }],
  clouds: [{ id: 'sparks', name: 'Cold Sparks', service: 'sparks' }],
  'flower-wall': [{ id: 'signs-lighting', name: 'Decorative Signs and Lighting' }],
  retro: [{ id: 'retro-prints', name: 'Compatible Print Upgrades' }, { id: 'additional-hours', name: 'Additional Hours' }],
  '360': [{ id: 'additional-hours', name: 'Additional Hours' }, { id: 'video-enhancements', name: 'Custom Video Enhancements' }],
};
export function compatibleAddons(selected: string[]) {
  return [...new Map(selected.flatMap(id => addonMap[id] || []).map(addon => [addon.id, addon])).values()];
}
export function automaticAddons(selected: string[], answers: Record<string, Record<string, string>>) {
  const addons: string[] = [];
  if (selected.includes('telephone')) {
    if (answers.telephone?.Setup === 'Telephone With Retro Telephone Booth Enclosure') addons.push('telephone-enclosure');
    if (answers.telephone?.Setup === 'Telephone With Decorative White Panel Wall') addons.push('white-panel');
  }
  if (selected.includes('video-guestbook')) {
    if (answers['video-guestbook']?.Setup === 'Decorative White Panel Wall') addons.push('white-panel');
    if (answers['video-guestbook']?.Setup === 'Floral Decor') addons.push('floral-decor');
  }
  return [...new Set(addons)];
}
export function selectedAddons(selected: string[], answers: Record<string, Record<string, string>>, extras: string[]) {
  const wanted = new Set([...extras, ...automaticAddons(selected, answers)]);
  return compatibleAddons(selected).filter(addon => !addon.service && wanted.has(addon.id));
}
