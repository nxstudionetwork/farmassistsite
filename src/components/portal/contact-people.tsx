import { useEffect, useRef, useState } from 'react';
import { Pause, Play, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { SectionTitle } from '@/components/portal/site';
import { portal } from '@/lib/portal-content';

type Voice = (typeof portal.farmerVoices)[number] | (typeof portal.customerVoices)[number];
type TeamMember = (typeof portal.team)[number];

function time(value: number) {
  if (!Number.isFinite(value)) return '00:00';
  return `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(Math.floor(value % 60)).padStart(2, '0')}`;
}

function VoiceCard({ voice, playing, onPlay, onEnd }: { voice: Voice; playing: boolean; onPlay: (audio: HTMLAudioElement) => Promise<void>; onEnd: () => void }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [error, setError] = useState(false);
  const seek = (value: number) => {
    if (audio.current && Number.isFinite(audio.current.duration)) audio.current.currentTime = value;
    setCurrent(value);
  };

  return <article className={`voice-card ${playing ? 'voice-card-active' : ''}`}>
    <div className="voice-person"><img src={voice.image} alt={`Demo portrait representing ${voice.name}`} loading="lazy" width={96} height={96}/><div><h4>{voice.name}</h4><span>{voice.designation}</span></div></div>
    <p className="voice-description">{voice.description}</p>
    <blockquote className="voice-quote">“{voice.quote}”</blockquote>
    <div className="voice-controls">
      <Button type="button" variant="social" size="icon" className="voice-play" title={playing ? `Pause ${voice.name}` : `Play ${voice.name}`} aria-label={playing ? `Pause ${voice.name}` : `Play ${voice.name}`} disabled={error} onClick={() => { if (audio.current) void onPlay(audio.current); }}>{playing ? <Pause size={19} fill="currentColor"/> : <Play size={19} fill="currentColor"/>}</Button>
      <span className="voice-time">{time(current)}</span>
      <input className="voice-progress" type="range" min="0" max={duration || 1} step="0.01" value={Math.min(current, duration || 1)} onChange={e => seek(Number(e.target.value))} aria-label={`Seek ${voice.name} recording`} style={{'--progress': `${duration ? (current / duration) * 100 : 0}%`} as React.CSSProperties}/>
      <span className="voice-time">{time(duration)}</span>
      <Button type="button" variant="social" size="icon" className="voice-volume" title={muted ? 'Unmute' : 'Mute'} aria-label={`${muted ? 'Unmute' : 'Mute'} ${voice.name}`} onClick={() => setMuted(v => !v)}>{muted ? <VolumeX size={17}/> : <Volume2 size={17}/>}</Button>
    </div>
    {error && <p className="field-error" role="alert">This demo recording could not be loaded.</p>}
    <audio ref={audio} src={voice.audio} preload="metadata" muted={muted} onTimeUpdate={e => setCurrent(e.currentTarget.currentTime)} onLoadedMetadata={e => setDuration(e.currentTarget.duration)} onDurationChange={e => setDuration(e.currentTarget.duration)} onError={() => setError(true)} onEnded={() => { setCurrent(0); if (audio.current) audio.current.currentTime = 0; onEnd(); }}/>
  </article>;
}

export function ContactVoices() {
  const [active, setActive] = useState<HTMLAudioElement | null>(null);
  const [playError, setPlayError] = useState('');
  const activeRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => () => { activeRef.current?.pause(); }, []);

  async function toggle(next: HTMLAudioElement) {
    setPlayError('');
    const previous = activeRef.current;
    if (previous === next && !next.paused) { next.pause(); activeRef.current = null; setActive(null); return; }
    if (previous && previous !== next) { previous.pause(); previous.currentTime = 0; }
    try { await next.play(); activeRef.current = next; setActive(next); }
    catch { activeRef.current = null; setActive(null); setPlayError('Playback could not start. Please try again.'); }
  }

  return <section className="section section-muted"><div className="container"><SectionTitle eyebrow="STORIES FROM BOTH SIDES" title="Farmer & customer voices." description="Four sample voice recordings illustrate how farmer and customer stories can be shared. Portraits, names and recordings are demo content."/>
    {playError && <p role="alert" className="field-error">{playError}</p>}
    <div className="voices-columns"><div className="voices-column"><div className="voices-column-head"><span className="small-label">01 / FROM THE FIELD</span><h3>Farmer voices</h3><p>Perspectives from the people who grow.</p></div>{portal.farmerVoices.map(v => <VoiceCard key={v.name} voice={v} playing={active?.src.endsWith(v.audio) && !active.paused || false} onPlay={toggle} onEnd={() => { activeRef.current = null; setActive(null); }}/>)}</div>
    <div className="voices-column"><div className="voices-column-head"><span className="small-label">02 / FROM THE TABLE</span><h3>Customer voices</h3><p>Perspectives from the people who buy.</p></div>{portal.customerVoices.map(v => <VoiceCard key={v.name} voice={v} playing={active?.src.endsWith(v.audio) && !active.paused || false} onPlay={toggle} onEnd={() => { activeRef.current = null; setActive(null); }}/>)}</div></div>
  </div></section>;
}

function TeamCard({person, onSelect}: {person: TeamMember; onSelect: (person: TeamMember) => void}) {
  return <Button type="button" variant="social" className="team-person" onClick={() => onSelect(person)} aria-label={`View ${person.name}, ${person.designation}`}>
    <span className="team-person-initials" aria-hidden="true">{person.name.slice(0, 2).toUpperCase()}</span>
    <span className="team-person-body"><span className="team-person-name">{person.name}<ArrowUpRight size={16} aria-hidden="true"/></span><span className="small-label">{person.designation}</span><span className="team-person-summary">{person.shortDescription}</span></span>
  </Button>;
}

function TeamModal({person, onClose}: {person: TeamMember | null; onClose: () => void}) {
  return <Dialog open={!!person} onOpenChange={open => { if (!open) onClose(); }}><DialogContent className="team-dialog" aria-describedby="team-dialog-description">
    {person && <div className="team-dialog-layout"><div className="team-dialog-copy"><span className="small-label">FARM ASSIST / SUPPORT CONTACT</span><DialogTitle>{person.name}</DialogTitle><span className="team-dialog-role">{person.designation}</span><DialogDescription id="team-dialog-description">{person.fullDescription}</DialogDescription></div></div>}
  </DialogContent></Dialog>;
}

export function ContactTeam() {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  return <section className="section"><div className="container"><SectionTitle eyebrow="PEOPLE & SUPPORT" title="The people behind Farm Assist." description="Review the support roles connected with Farm Assist. No profile photographs or unverified biographies are used."/><div className="team-people-grid">{portal.team.map(person => <TeamCard key={person.name} person={person} onSelect={setSelected}/>)}</div><TeamModal person={selected} onClose={() => setSelected(null)}/></div></section>;
}
