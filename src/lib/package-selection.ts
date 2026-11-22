import { experiences, type Experience } from './booking-experiences';

export function parseExperienceSelection(search: string): string[] {
  const requested = new URLSearchParams(search).get('experiences')?.split(',').map(id => id.trim()) || [];
  return [...new Set(requested)].filter(id => experiences.some(item => item.id === id));
}

export function bookingSelectionUrl(selected: string[]): string {
  const valid = [...new Set(selected)].filter(id => experiences.some(item => item.id === id));
  return valid.length ? `/booking?experiences=${valid.map(encodeURIComponent).join(',')}` : '/booking';
}

export function personalizationChips(experience: Experience): string[] {
  return experience.questions.filter(question => !question.when && question.options).map(question => {
    const options = (question.options || []).filter(option => !/^(not sure|help me|choose one|send pricing|custom|let us)/i.test(option));
    if (options.length && options.every(option => /^\d+$/.test(option))) {
      return `${question.key}: ${options[0]}–${options[options.length - 1]}`;
    }
    if (options.every(option => ['Yes', 'No', 'Pending', 'Already Selected'].includes(option))) return question.key;
    return `${question.key}: ${options.slice(0, 3).join(' · ')}${options.length > 3 ? ' + more' : ''}`;
  }).slice(0, 5);
}