import { describe, expect, it } from 'vitest';
import { emptyEventStyle, eventStyleFields, normalizeEventStyle, recommendBackdrops } from './event-style';
describe('shared optional event style', () => {
  it('allows all event style answers to remain empty', () => {
    expect(normalizeEventStyle(emptyEventStyle)).toEqual(emptyEventStyle);
    expect(recommendBackdrops(emptyEventStyle)).toEqual([]);
  });
  it('keeps flower details only for Yes', () => {
    const style = { ...emptyEventStyle, flowerColors: 'White', flowerTypes: 'Roses' };
    expect(normalizeEventStyle({ ...style, florals: 'Yes' }).flowerTypes).toBe('Roses');
    expect(normalizeEventStyle({ ...style, florals: 'No' }).flowerTypes).toBe('');
    expect(normalizeEventStyle({ ...style, florals: 'Not Sure Yet' }).flowerColors).toBe('');
  });
  it('reuses shared colors for coordinated backdrop recommendations', () => {
    expect(recommendBackdrops({ ...emptyEventStyle, linens: 'Ivory', decorations: 'sage green' })).toEqual(['White Floral Wall', 'Hedge']);
    expect(eventStyleFields({ ...emptyEventStyle, decorations: 'gold', florals: 'Not Sure Yet' })['Floral Decorations']).toBe('Not Sure Yet');
    expect(eventStyleFields({ ...emptyEventStyle, decorations: 'gold' })['Coordinated Backdrop Suggestions']).toBe('Gold Sequin, Black & Gold Marble');
  });
});