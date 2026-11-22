import { expect, it } from 'vitest';
import { togglePreviewCharm } from './keychain-preview';
it('allows up to five charms, as specified by the reference', () => {
  expect(togglePreviewCharm([0, 1, 2, 3], 4)).toEqual([0, 1, 2, 3, 4]);
  expect(togglePreviewCharm([0, 1, 2, 3, 4], 5)).toEqual([0, 1, 2, 3, 4]);
});
it('removes an already selected charm', () => {
  expect(togglePreviewCharm([0, 1, 2], 1)).toEqual([0, 2]);
});