import { commander, diffLog, signals } from '../data/fleet';
import { SectionHeading } from './SectionHeading';

export function CommandPanel() {
  return (
    <aside className="command-panel">
      <div className="sk-frame sk-dialogue">
        <div className="sk-dialogue-portrait" aria-hidden="true">
          {commander.initial}
        </div>
        <div>
          <div className="sk-dialogue-name">{commander.name} · SIGNAL</div>
          {signals.map((s) => (
            <p key={s} className="sk-dialogue-text command-panel__signal">
              {s}
            </p>
          ))}
        </div>
      </div>

      <section aria-labelledby="log-h" className="command-panel__log">
        <SectionHeading id="log-h" title="DIFF LOG" meta="git log --oneline" variant="label" />
        <pre className="sk-terminal-block command-panel__terminal">{diffLog.join('\n')}</pre>
      </section>

      <div className="command-panel__actions">
        <button className="sk-btn sk-btn-outline" type="button">
          ▸ OPEN DIFF
        </button>
        <button className="sk-btn sk-btn-danger" type="button">
          ✕ RECALL POLECAT-07
        </button>
      </div>
    </aside>
  );
}
