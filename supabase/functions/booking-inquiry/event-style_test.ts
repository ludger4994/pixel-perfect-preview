import { EventStyleSchema } from '../_shared/event-style.ts';
Deno.test('all styling fields optional', () => {
  if (!EventStyleSchema.safeParse({}).success) throw new Error('Optional style rejected');
});
Deno.test('flower details only stored for Yes', () => {
  for (const florals of ['No', 'Not Sure Yet']) {
    const s = EventStyleSchema.parse({ florals, flowerColors: 'White', flowerTypes: 'Roses' });
    if (s.flowerColors !== '' || s.flowerTypes !== '') throw new Error('Hidden answers stored');
  }
  if (EventStyleSchema.parse({ florals: 'Yes', flowerColors: 'White' }).flowerColors !== 'White') throw new Error('Yes answers lost');
});
Deno.test('reject unsafe inspiration links', () => {
  if (EventStyleSchema.safeParse({ inspirationLink: 'javascript:alert(1)' }).success) throw new Error('Unsafe link accepted');
});