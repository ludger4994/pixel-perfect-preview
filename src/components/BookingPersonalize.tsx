import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { bookingBackdrops, canSelectBackdrop, experiences, visibleQuestions } from '@/lib/booking-experiences';
type Props = { selected: string[]; answers: Record<string, Record<string, string>>; onChange: (id: string, key: string, value: string) => void };
export default function BookingPersonalize({ selected, answers, onChange }: Props) {
  return <div className="booking-questionnaires">{experiences.filter(item => selected.includes(item.id)).map(experience => {
    const values = answers[experience.id] || {};
    return <section className="booking-service-questionnaire" key={experience.id}>
      <div className="booking-section-title"><span className="booking-eyebrow">Your selected experience</span><h3>{experience.title}</h3></div>
      <div className="booking-fields">{visibleQuestions(experience, values).map(question => {
        const id = `${experience.id}-${question.key.replace(/ /g, '-')}`;
        return <div className={`booking-field${question.type === 'textarea' ? ' booking-field-wide' : ''}`} key={question.key}>
          <label htmlFor={id}>{question.label}</label>
          {question.multiple && question.options ? <div className="booking-feature-options" role="group" aria-label={question.label}>{question.options.map(option => <label key={option}><input type="checkbox" checked={(values[question.key] || '').split(', ').includes(option)} onChange={e => { const current = (values[question.key] || '').split(', ').filter(Boolean); onChange(experience.id, question.key, (e.target.checked ? [...current, option] : current.filter(value => value !== option)).join(', ')); }} />{option}</label>)}</div> : question.options ? <select id={id} value={values[question.key] || ''} onChange={e => onChange(experience.id, question.key, e.target.value)}><option value="">Select a preference</option>{question.options.map(option => <option key={option}>{option}</option>)}</select>
            : question.type === 'textarea' ? <textarea id={id} maxLength={2000} value={values[question.key] || ''} onChange={e => onChange(experience.id, question.key, e.target.value)} />
            : <input id={id} type={question.type || 'text'} min={question.type === 'number' ? 1 : undefined} maxLength={500} value={values[question.key] || ''} onChange={e => onChange(experience.id, question.key, e.target.value)} />}
        </div>;
      })}</div>
      {canSelectBackdrop(experience.id, values) && <div className="booking-backdrop-area"><h4>Choose Your Backdrop</h4><div className="booking-backdrops">{bookingBackdrops.map(backdrop => <Button type="button" variant="outline" aria-label={backdrop.name} key={backdrop.name} className={`booking-backdrop${values.Backdrop === backdrop.name ? ' is-selected' : ''}`} aria-pressed={values.Backdrop === backdrop.name} onClick={() => onChange(experience.id, 'Backdrop', values.Backdrop === backdrop.name ? '' : backdrop.name)}><img src={backdrop.image} alt={`${backdrop.name} backdrop`} loading="lazy" /><span>{backdrop.name}</span>{values.Backdrop === backdrop.name && <Check className="booking-selected-check" />}</Button>)}</div><Button type="button" variant="outline" aria-pressed={values.Backdrop === 'Help Me Choose'} onClick={() => onChange(experience.id, 'Backdrop', 'Help Me Choose')}>Help Me Choose</Button></div>}
      {experience.id === 'sparks' && <p className="booking-safety-note">Cold Sparks require venue approval and a safe, clear activation area. Our team will confirm placement and coordinate cues with your venue before the event.</p>}
    </section>;
  })}</div>;
}