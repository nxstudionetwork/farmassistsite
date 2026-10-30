import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Instagram, Youtube, Linkedin, Facebook, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portal } from "@/lib/portal-content";

const links = [
  { label: "About", to: "/about" },
  { label: "Pilot", to: "/pilot" },
  { label: "Platform", to: "/platform" },
  { label: "Journey", to: "/journey" },
  { label: "Demo", to: "/demo" },
  { label: "Explore", to: "/explore" },
  { label: "Contact", to: "/contact" },
] as const;
const socials = [
  { label: "Instagram", icon: Instagram },
  { label: "YouTube", icon: Youtube },
  { label: "X", icon: X },
  { label: "LinkedIn", icon: Linkedin },
  { label: "Facebook", icon: Facebook },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand-stack">
          <Link to="/" className="brand" aria-label="Farm Assist home">
            <span className="brand-mark">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copilot_20260623_145916%20%281%29-VUKK2JZkmoBpbq99RmxqHp8skYwTqx.png"
                alt=""
                width="44"
                height="44"
              />
            </span>
            <span className="brand-name">
              FARM<span className="brand-light">ASSIST</span>
              <small>AN INITIATIVE OF IFX GROUP</small>
            </span>
          </Link>
          {Object.values(portal.social).some(Boolean) && (
            <div className="social-row" aria-label="Social media">
              {socials.map(({ label, icon: Icon }) => {
                const url = portal.social[label];
                return url ? (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                  >
                    <Icon size={15} />
                  </a>
                ) : null;
              })}
              {notice && (
                <span className="social-notice" role="status">
                  {notice}
                </span>
              )}
            </div>
          )}
        </div>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeProps={{ className: "nav-active" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Button
          variant="menu"
          size="icon"
          className="mobile-menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "nav-active" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function ArrowLink({
  to,
  children,
  light = false,
}: {
  to: (typeof links)[number]["to"] | "/";
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Button asChild variant={light ? "portalLight" : "portal"} size="portal">
      <Link to={to}>
        {children}
        <ArrowUpRight size={17} />
      </Link>
    </Button>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <span className="eyebrow-line" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function PageIntro({
  number,
  eyebrow,
  title,
  description,
  image,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <section className="page-intro">
      <div className="container intro-grid">
        <div>
          <span className="eyebrow">
            <span className="eyebrow-line" />
            {number} / {eyebrow}
          </span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {image && <img src={image} alt="Indian agricultural landscape" width={1408} height={960} />}
      </div>
    </section>
  );
}

export function VideoPanel({
  title,
  description,
  src,
  poster,
  fallback = "Demo coming soon",
  compact = false,
}: {
  title: string;
  description?: string;
  src?: string;
  poster?: string;
  fallback?: string;
  compact?: boolean;
}) {
  const [error, setError] = useState(false);
  return (
    <div className={`video-panel ${compact ? "video-compact" : ""}`}>
      {src && !error ? (
        <video
          controls
          preload="metadata"
          poster={poster || undefined}
          aria-label={title}
          onError={() => setError(true)}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      ) : (
        <div className="video-empty">
          <span className="video-play" aria-hidden="true">
            ▶
          </span>
          <div>
            <span className="video-kicker">FARM ASSIST / VIDEO</span>
            <h3>{fallback}</h3>
            <p>
              {error
                ? "This video could not be loaded."
                : "A real video will appear here when it is available."}
            </p>
          </div>
        </div>
      )}
      <div className="video-caption">
        <strong>{title}</strong>
        {description && <span>{description}</span>}
      </div>
    </div>
  );
}

export function StepTimeline({ items, current }: { items: readonly string[]; current?: string }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <div className={`timeline-step ${item === current ? "timeline-current" : ""}`} key={item}>
          <span className="timeline-number">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3>{item}</h3>
            {item === current && <span className="status-tag">Current focus</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ClosingBand({
  title,
  description,
  links: actionLinks,
}: {
  title: string;
  description?: string;
  links: { label: string; to: (typeof links)[number]["to"] }[];
}) {
  return (
    <section className="closing-band">
      <div className="container closing-inner">
        <div>
          <span className="eyebrow">THE PATH FORWARD</span>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className="closing-actions">
          {actionLinks.map((l) => (
            <ArrowLink key={l.to} to={l.to} light>
              {l.label}
            </ArrowLink>
          ))}
        </div>
      </div>
    </section>
  );
}
