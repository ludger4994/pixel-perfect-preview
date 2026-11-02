export type EventStyle = {
  linens: string; decorations: string; florals: '' | 'Yes' | 'No' | 'Not Sure Yet';
  flowerColors: string; flowerTypes: string; theme: string; inspirationLink: string;
  photos: { path: string; name: string }[];
};
export const emptyEventStyle: EventStyle = { linens: '', decorations: '', florals: '', flowerColors: '', flowerTypes: '', theme: '', inspirationLink: '', photos: [] };
export const normalizeEventStyle = (s: EventStyle): EventStyle => ({ ...s, flowerColors: s.florals === 'Yes' ? s.flowerColors : '', flowerTypes: s.florals === 'Yes' ? s.flowerTypes : '' });
export function recommendBackdrops(s: EventStyle): string[] {
  const colors = `${s.linens} ${s.decorations} ${s.florals === 'Yes' ? s.flowerColors : ''} ${s.theme}`.toLowerCase();
  const results: string[] = [];
  if (/white|ivory|champagne|bridal/.test(colors)) results.push('White Floral Wall');
  if (/gold|champagne/.test(colors)) results.push('Gold Sequin', 'Black & Gold Marble');
  if (/pink|blush|rose/.test(colors)) results.push('Pink Sequin');
  if (/green|sage|garden|botanical/.test(colors)) results.push('Hedge');
  if (/black/.test(colors)) results.push('Black');
  if (/silver/.test(colors)) results.push('Silver/Black Sequin');
  if (/teal/.test(colors)) results.push('Teal & Gold Marble');
  return [...new Set(results)].slice(0, 3);
}
export function eventStyleFields(style: EventStyle): Record<string, string> {
  const s = normalizeEventStyle(style);
  return { 'Linen Colors': s.linens, 'Decoration Colors': s.decorations, 'Floral Decorations': s.florals,
    'Flower Colors': s.flowerColors, 'Flower Types': s.flowerTypes, 'Event Theme': s.theme,
    'Inspiration Photos Link': s.inspirationLink, 'Coordinated Backdrop Suggestions': recommendBackdrops(s).join(', ') };
}