export const MAX_PREVIEW_CHARMS = 5;
export function togglePreviewCharm(selected: number[], charm: number): number[] {
  if (selected.includes(charm)) return selected.filter(item => item !== charm);
  return selected.length < MAX_PREVIEW_CHARMS ? [...selected, charm] : selected;
}