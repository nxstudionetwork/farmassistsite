import { createFileRoute } from '@tanstack/react-router';
import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { SectionTitle, ArrowLink } from '@/components/portal/site';
import { ContactVoices, ContactTeam } from '@/components/portal/contact-people';
import { portal } from '@/lib/portal-content';

export const Route = createFileRoute('/contact')({
  head: () => ({ meta: [
    { title: 'Contact Farm Assist — Voices, People & Enquiries' },
    { name: 'description', content: 'Contact Farm Assist, hear sample farmer and customer voices, meet illustrative team profiles, and prepare a message for the team.' },
    { property: 'og:title', content: 'Contact Farm Assist — Voices, People & Enquiries' },
    { property: 'og:description', content: 'Reach Farm Assist and explore farmer voices, customer voices and the people behind the idea.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Contact,
});

const purposes = ['General Enquiry', 'Pilot', 'Farmer Interest', 'Collaboration', 'Partnership', 'Farm Visit', 'Customer Interest', 'Other'] as const;
const schema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(100, 'Name must be under 100 characters.'),
  email: z.string().trim().min(1, 'Please enter your email.').email('Please enter a valid email address.').max(255, 'Email must be under 255 characters.'),
  purpose: z.enum(purposes, { errorMap: () => ({ message: 'Please select a purpose.' }) }),
  message: z.string().trim().min(1, 'Please enter your message.').max(2000, 'Message must be under 2000 characters.'),
});
type Values = { name: string; email: string; purpose: string; message: string };
const empty: Values = { name: '', email: '', purpose: '', message: '' };

function Contact() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [prepared, setPrepared] = useState('');
  const [status, setStatus] = useState<'idle' | 'preparing' | 'ready' | 'error'>('idle');

  function change(key: keyof Values, value: string) {
    setValues(v => ({ ...v, [key]: value }));
    setErrors(e => ({ ...e, [key]: undefined }));
    if (status === 'error') setStatus('idle');
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('preparing');
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof Values, string>> = {};
      parsed.error.issues.forEach(issue => { const key = issue.path[0] as keyof Values; if (!next[key]) next[key] = issue.message; });
      setErrors(next);
      setStatus('error');
      return;
    }
    const { name, email, purpose, message } = parsed.data;
    const subject = encodeURIComponent(`Farm Assist — ${purpose}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPurpose: ${purpose}\n\n${message}`);
    const href = `mailto:${portal.email}?subject=${subject}&body=${body}`;
    setPrepared(href);
    setValues(empty);
    setErrors({});
    setStatus('ready');
    window.location.href = href;
  }

  return <main>
    <section className="contact-top"><div className="container"><span className="eyebrow"><span className="eyebrow-line"/>06 / CONTACT</span><h1>LET'S CONNECT.</h1><span className="contact-top-label">EMAIL</span><a className="contact-email" href={`mailto:${portal.email}`}>{portal.email}</a><Button asChild variant="portalLight" size="portal"><a href={`mailto:${portal.email}`}>Mail Us <ArrowUpRight size={17}/></a></Button><div className="contact-top-details"><div><span>PHONE</span><a href={`tel:${portal.phone}`}>{portal.phone}</a></div><div><span>LOCATION</span><strong>{portal.location}</strong></div></div></div></section>
    <ContactVoices/>
    <ContactTeam/>
    <section className="section section-muted"><div className="container split contact-form-layout"><div><SectionTitle eyebrow="SEND A NOTE" title="Have something to say?" description="Interested in the pilot, working together or learning more? Start a message here."/><p className="body-copy">This form prepares an email in your own email app. Please review and send it there; this website does not deliver messages.</p></div><div>{status === 'ready' && <div className="form-confirmation" role="status"><h3>Your email is ready.</h3><p>Your email app should open with your message. Please send it from there; this website has not sent it.</p><Button asChild variant="portalOutline" size="portal"><a href={prepared}>Open prepared email <ArrowUpRight size={17}/></a></Button></div>}{status === 'error' && <p className="field-error" role="alert">Please check the highlighted fields and try again.</p>}
      <form onSubmit={submit} noValidate className="form-grid">
        <div className="field"><label htmlFor="contact-name">Name *</label><input id="contact-name" value={values.name} maxLength={100} onChange={e => change('name', e.target.value)} placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined}/>{errors.name && <span id="name-error" className="field-error">{errors.name}</span>}</div>
        <div className="field"><label htmlFor="contact-email">Email *</label><input id="contact-email" type="email" value={values.email} maxLength={255} onChange={e => change('email', e.target.value)} placeholder="you@example.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined}/>{errors.email && <span id="email-error" className="field-error">{errors.email}</span>}</div>
        <div className="field full"><label htmlFor="contact-purpose">Purpose *</label><select id="contact-purpose" value={values.purpose} onChange={e => change('purpose', e.target.value)} aria-invalid={!!errors.purpose} aria-describedby={errors.purpose ? 'purpose-error' : undefined}><option value="">Select a purpose</option>{purposes.map(p => <option key={p} value={p}>{p}</option>)}</select>{errors.purpose && <span id="purpose-error" className="field-error">{errors.purpose}</span>}</div>
        <div className="field full"><label htmlFor="contact-message">Message *</label><textarea id="contact-message" value={values.message} maxLength={2000} onChange={e => change('message', e.target.value)} placeholder="Tell us what's on your mind..." aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined}/>{errors.message && <span id="message-error" className="field-error">{errors.message}</span>}</div>
        <div className="field full"><Button type="submit" variant="portal" size="portal" disabled={status === 'preparing'}>{status === 'preparing' ? 'Preparing…' : 'Prepare Email'} <ArrowUpRight size={17}/></Button><span className="form-note">Your email app will open so you can review and send your message yourself.</span></div>
      </form></div></div></section>
    <section className="contact-final"><div className="container"><div className="contact-statement"><span className="eyebrow">FARM ASSIST / IFX GROUP</span><h2>A STARTUP FOR FARMERS, BY THE FARMER.</h2><blockquote>“Technology should not make farming complicated. It should make the farmer's journey simpler.”</blockquote></div></div><div className="contact-explore"><div className="container contact-explore-inner"><span className="small-label">EXPLORE FARM ASSIST</span><div><ArrowLink to="/demo" light>Demo</ArrowLink><ArrowLink to="/about" light>About</ArrowLink></div></div></div></section>
  </main>;
}