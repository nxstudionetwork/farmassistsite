import { useEffect, useRef, useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, Expand, LoaderCircle, Play, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { portal, type DemoImage, type DemoVideo } from '@/lib/portal-content';

function pauseOthers(current?: HTMLVideoElement) {
  document.querySelectorAll<HTMLVideoElement>('video[data-demo-video]').forEach(video => {
    if (video !== current) video.pause();
  });
}

export function DemoPlayer({ media, startOnOpen = false }: { media: DemoVideo; startOnOpen?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(startOnOpen && Boolean(media.src));
  const [playing, setPlaying] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [ended, setEnded] = useState(false);
  const [error, setError] = useState(false);
  const [speed, setSpeed] = useState('1');
  async function play() {
    const video = ref.current;
    if (!video) { setLoaded(true); return; }
    pauseOthers(video);
    setWaiting(true);
    if (video.ended) video.currentTime = 0;
    try { await video.play(); } catch { setWaiting(false); }
  }
  useEffect(() => {
    const video = ref.current;
    if (!loaded || !video) return;
    video.src = media.src;
    pauseOthers(video);
    setWaiting(true);
    void video.play().catch(() => setWaiting(false));
    return () => { video.pause(); video.removeAttribute('src'); video.load(); };
  }, [loaded, media.src]);
  const youtubeUrl = media.youtubeId ? `https://www.youtube.com/watch?v=${media.youtubeId}` : undefined;
  return <div className="demo-player">
    <div className="demo-player-stage">
      {media.youtubeId ? <iframe src={`https://www.youtube.com/embed/${media.youtubeId}`} title={media.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : loaded && media.src && !error ? <video ref={ref} data-demo-video src={media.src} poster={media.poster} controls playsInline preload="none" aria-label={media.title}
        onPlay={() => { pauseOthers(ref.current ?? undefined); setPlaying(true); setEnded(false); }}
        onPlaying={() => setWaiting(false)} onWaiting={() => setWaiting(true)} onCanPlay={() => setWaiting(false)}
        onPause={() => {setPlaying(false);setWaiting(false);}} onEnded={() => {setEnded(true);setPlaying(false);}}
        onError={() => {setError(true);setWaiting(false);setPlaying(false);}}/> : <img src={media.poster} alt="Illustrative agricultural landscape" decoding="async"/>}
      {!media.youtubeId && !media.src ? <div className="demo-player-cover"><span className="demo-play-symbol"><Play aria-hidden="true"/></span><strong>Official demo coming soon</strong><span>Verified video pending</span></div>
        : !media.youtubeId && error ? <div className="demo-player-cover" role="alert"><strong>This video could not be loaded.</strong><Button variant="portalLight" onClick={() => {setError(false);setLoaded(false);setWaiting(false);}}>Try again <RotateCcw size={16}/></Button></div>
        : !media.youtubeId && (!loaded || ended) ? <div className="demo-player-cover"><Button variant="portalLight" size="icon" className="demo-play-button" aria-label={ended ? `Replay ${media.title}` : `Play ${media.title}`} onClick={() => void play()}>{ended ? <RotateCcw/> : <Play/>}</Button><strong>{ended ? 'Replay' : media.title}</strong>{media.duration && <span>{media.duration}</span>}</div> : !media.youtubeId && !playing && !waiting ? <Button variant="portalLight" size="icon" className="demo-play-button absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-label={`Resume ${media.title}`} onClick={() => void play()}><Play/></Button> : null}
      {waiting && !error && <span className="demo-loading" role="status"><LoaderCircle className="animate-spin" size={18}/> Loading video…</span>}
    </div>
    <div className="demo-player-info"><div><span className="small-label">{media.category}</span><strong>{media.title}</strong><p>{media.description}</p>{youtubeUrl && <a className="demo-video-fallback" href={youtubeUrl} target="_blank" rel="noopener noreferrer">Open on YouTube</a>}</div>{loaded && !error && <label className="demo-speed">Playback speed<select aria-label="Playback speed" value={speed} onChange={e => {setSpeed(e.target.value);if(ref.current) ref.current.playbackRate = Number(e.target.value);}}>{['0.5','0.75','1','1.25','1.5','2'].map(v=><option key={v} value={v}>{v}×</option>)}</select><span role="status">{ended ? 'Ended' : playing ? 'Playing' : 'Paused'}</span></label>}</div>
  </div>;
}

export function DemoVideoShowcase() {
  const [selected, setSelected] = useState<DemoVideo | null>(null);
  function open(media: DemoVideo) { if (!media.src) return; pauseOthers(); setSelected(media); }
  return <><div className="grid-cards demo-video-grid">{portal.demo.videos.map(media => <article className="demo-video-card" key={media.id}>
    <Button variant="ghost" className="demo-video-thumbnail" aria-label={media.src ? `Play ${media.title}` : `${media.title} coming soon`} disabled={!media.src} onClick={() => open(media)}><img src={media.poster} alt="Illustrative agricultural video thumbnail" loading="lazy" decoding="async" width={800} height={450}/><span className="demo-play-symbol"><Play size={22}/></span><span className="demo-media-badge">{media.src ? media.duration || 'Watch video' : 'Coming soon'}</span></Button>
    <div className="demo-card-copy"><span className="small-label">{media.category}</span><h3>{media.title}</h3><p>{media.description}</p>{media.date && <time>{media.date}</time>}</div>
  </article>)}</div><Dialog open={Boolean(selected)} onOpenChange={open => {if (!open) {pauseOthers();setSelected(null);}}}><DialogContent className="demo-media-dialog">{selected && <><DialogTitle className="sr-only">{selected.title}</DialogTitle><DialogDescription className="sr-only">{selected.description}</DialogDescription><DemoPlayer key={selected.id} media={selected} startOnOpen/></>}</DialogContent></Dialog></>;
}

export function DemoGallery() {
  const images: DemoImage[] = [...portal.demo.images, ...portal.screenshots.map(s => ({image:s.image, thumbnail:s.image,title:s.title,caption:`Official Farm Assist ${s.title} screen`,category:'App screen',alt:`${s.title} screen of Farm Assist`}))];
  const [index, setIndex] = useState<number | null>(null);
  const viewer = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const [imageError, setImageError] = useState(false);
  const [fullscreenError, setFullscreenError] = useState(false);
  const selected = index === null ? undefined : images[index];
  function move(delta: number) {setImageError(false);setIndex(i => i === null ? null : (i + delta + images.length) % images.length);}
  useEffect(() => {
    if (index === null) return;
    const key = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {event.preventDefault();setImageError(false);setIndex(i => i === null ? null : (i + (event.key === 'ArrowRight' ? 1 : -1) + images.length) % images.length);}
    };
    document.addEventListener('keydown',key);
    return () => document.removeEventListener('keydown',key);
  }, [index, images.length]);
  async function fullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (viewer.current?.requestFullscreen) await viewer.current.requestFullscreen();
      else setFullscreenError(true);
    } catch {setFullscreenError(true);}
  }
  return <><div className="demo-gallery-grid">{images.map((image,i) => <article className="demo-image-card" key={image.title}><Button variant="ghost" className="demo-gallery-image" onClick={() => {setImageError(false);setFullscreenError(false);setIndex(i);}} aria-label={`View ${image.title}`}><img src={image.thumbnail} alt={image.alt} loading="lazy" decoding="async" width={800} height={500}/><Expand size={20}/></Button><div className="demo-card-copy"><span className="small-label">{image.category}</span><h3>{image.title}</h3></div></article>)}</div>
    {!portal.screenshots.length && <div className="demo-screen-pending">{portal.demo.screenCategories.map(title => <div key={title}><Camera size={21}/><strong>{title}</strong><span>Official screens coming soon</span></div>)}</div>}
    <Dialog open={index !== null} onOpenChange={open => {if(!open){if(document.fullscreenElement) void document.exitFullscreen().catch(()=>{});setIndex(null);}}}><DialogContent className="demo-media-dialog demo-image-dialog" ref={viewer} onTouchStart={e => {touchX.current=e.changedTouches[0]?.clientX ?? null;}} onTouchEnd={e => {const x=e.changedTouches[0]?.clientX;if(x !== undefined && touchX.current !== null && Math.abs(x-touchX.current)>50) move(x<touchX.current ? 1 : -1);touchX.current=null;}}>{selected && <><DialogTitle>{selected.title}</DialogTitle><DialogDescription>{selected.caption}</DialogDescription>{imageError ? <p role="alert" className="demo-image-error">This image could not be loaded.</p> : <img className="demo-lightbox-image" src={selected.image} alt={selected.alt} onError={()=>setImageError(true)}/>}<div className="demo-viewer-controls"><Button variant="outline" size="icon" aria-label="Previous image" title="Previous image" onClick={()=>move(-1)}><ChevronLeft/></Button><span aria-live="polite">{(index ?? 0)+1} / {images.length}</span><Button variant="outline" size="icon" aria-label="Next image" title="Next image" onClick={()=>move(1)}><ChevronRight/></Button><Button variant="outline" size="icon" aria-label="Fullscreen image" title="Fullscreen image" onClick={()=>void fullscreen()}><Expand/></Button></div>{fullscreenError && <p role="status">Fullscreen is unavailable in this browser.</p>}</>}</DialogContent></Dialog>
  </>;
}
