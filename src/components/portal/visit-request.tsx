import { useState, type FormEvent } from 'react';
import { ArrowUpRight, RotateCcw, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portal } from '@/lib/portal-content';

export function VisitRequest({initialPacks = []}: {initialPacks?: string[]}) {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('Day Visit');
  const [packs, setPacks] = useState<string[]>(initialPacks);
  const [error, setError] = useState('');
  const [prepared, setPrepared] = useState('');
  const organization = !!type && type !== 'Individual' && type !== 'Other';
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!packs.length) { setError('Choose at least one experience.'); return; }
    const data = new FormData(form);
    const start = String(data.get('Preferred date') || data.get('Start date') || '');
    const end = String(data.get('End date') || '');
    const today = new Date();
    const localToday = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
    if (start < localToday || (end && end < start)) { setError('Choose a future date and an end date on or after the start date.'); return; }
    const lines = Array.from(data.entries()).map(([key,value]) => `${key}: ${value}`).join('\n');
    setPrepared(`mailto:${portal.email}?subject=${encodeURIComponent('Farm Assist — Visit request')}&body=${encodeURIComponent(`${lines}\nDuration: ${duration}\nExperiences: ${packs.join(', ')}\n\nPlease review my request and let me know whether a suitable experience is available.`)}`);
    setError('');
  }
  return <form className="visit-form" onSubmit={submit} onChange={() => setPrepared('')}>
    <div className="form-grid">
      <div className="field full"><label htmlFor="visitor-type">01 / Visitor type *</label><select id="visitor-type" name="Visitor type" required value={type} onChange={e => {setType(e.target.value);setPrepared('');}}><option value="">Who is visiting?</option>{portal.explore.visitorTypes.map(t => <option key={t}>{t}</option>)}</select></div>
      {type && <>
        <div className="field"><label htmlFor="visit-name">{organization ? 'Organization name' : 'Your name'} *</label><input id="visit-name" name={organization ? 'Organization' : 'Name'} required maxLength={100} autoComplete={organization ? 'organization' : 'name'}/></div>
        {organization && <div className="field"><label htmlFor="visit-contact">Contact person *</label><input id="visit-contact" name="Contact person" required maxLength={100} autoComplete="name"/></div>}
        <div className="field"><label htmlFor="visit-email">Email *</label><input id="visit-email" type="email" name="Email" autoComplete="email" required maxLength={255}/></div>
        <div className="field"><label htmlFor="visit-phone">Phone *</label><input id="visit-phone" type="tel" name="Phone" autoComplete="tel" required pattern="[+0-9() .\-]{7,25}" maxLength={25} title="Enter 7–25 characters using digits, spaces, +, parentheses or hyphens."/></div>
        <div className="field"><label htmlFor="visit-count">Number of visitors *</label><input id="visit-count" name="Visitors" type="number" min="1" max="10000" step="1" required defaultValue="1"/></div>
        <div className="field"><label htmlFor="visit-location">Preferred location *</label><input id="visit-location" name="Preferred location" required maxLength={150} placeholder="City or region"/></div>
        <fieldset className="visit-fieldset full"><legend>02 / Choose duration *</legend><div className="visit-options">{portal.explore.durations.map(d => <label key={d} className="visit-option"><input type="radio" name="Duration choice" value={d} checked={duration === d} onChange={() => setDuration(d)}/>{d}</label>)}</div></fieldset>
        {duration === 'Custom' ? <><div className="field"><label htmlFor="visit-start">Start date *</label><input id="visit-start" type="date" name="Start date" required/></div><div className="field"><label htmlFor="visit-end">End date *</label><input id="visit-end" type="date" name="End date" required/></div></> : <div className="field full"><label htmlFor="visit-date">Preferred date *</label><input id="visit-date" name="Preferred date" type="date" required/></div>}
        <fieldset className="visit-fieldset full"><legend>03 / Choose your experience *</legend><div className="visit-options">{portal.explore.packs.map(p => <label key={p} className="visit-option"><input type="checkbox" checked={packs.includes(p)} onChange={() => {setPacks(current => current.includes(p) ? current.filter(x => x !== p) : [...current,p]);setError('');}}/>{p}</label>)}</div></fieldset>
        <div className="field full"><label htmlFor="visit-message">Message / requirements {packs.includes('Custom Experience') ? '*' : '(optional)'}</label><textarea id="visit-message" name="Requirements" maxLength={1500} required={packs.includes('Custom Experience')} placeholder="Learning interests, accessibility needs or custom experience…"/></div>
      </>}
      <div className="field full"><p className="form-note">Experiences and locations are not yet confirmed. This form prepares an email; send it from your email app. A visit is only arranged after the team confirms details.</p>{error && <p role="alert" className="field-error">{error}</p>}<div className="action-row"><Button variant="portal" size="portal" type="submit">Request a Visit <ArrowUpRight/></Button><Button variant="portalOutline" size="portal" type="reset" onClick={() => {setType('');setDuration('Day Visit');setPacks([]);setPrepared('');setError('');}}><RotateCcw/> Reset</Button></div></div>
    </div>
    {prepared && <div className="form-confirmation" role="status"><Check className="text-primary"/><h3>Your visit request is ready.</h3><p>Nothing has been sent yet. Open the prepared email, review it and send it to Farm Assist. The team can then review availability; this is not a booking confirmation.</p><Button asChild variant="portal" size="portal"><a href={prepared}>Open visit request email <ArrowUpRight/></a></Button></div>}
  </form>;
}