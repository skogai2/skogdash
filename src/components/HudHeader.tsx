import { commander } from '../data/fleet';
import { Hearts, SegmentMeter } from './Meters';

export function HudHeader() {
  const c = commander;
  return (
    <header className="sk-frame hud-header">
      <div className="sk-hud-brand">
        SKOGAI FLEET<small>SUDO HERO · ADMIRALTY</small>
      </div>
      <div className="sk-hud-avatar" aria-hidden="true">
        {c.initial}
      </div>
      <div className="hud-header__who">
        <span className="hud-header__rank">
          {c.name} · {c.rank}
        </span>
        <span className="hud-header__summary">{c.summary}</span>
      </div>
      <div className="hud-header__stats">
        <div className="sk-stat">
          <span className="sk-stat-label">FLEET HP</span>
          <Hearts value={c.hp.value} max={c.hp.max} />
        </div>
        <div className="sk-stat">
          <span className="sk-stat-label">CONTEXT</span>
          <SegmentMeter value={c.context.value} max={c.context.max} />
        </div>
      </div>
      <div className="hud-header__actions">
        <button className="sk-btn sk-btn-ghost" type="button">
          ✕ ABORT
        </button>
        <button className="sk-btn btn-cabinet" type="button">
          ▶ DEPLOY
        </button>
      </div>
    </header>
  );
}
