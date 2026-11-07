import { quests, type QuestState } from '../data/fleet';
import { SectionHeading } from './SectionHeading';

const ICON: Record<QuestState, string> = { done: '✓', active: '▶', locked: '▣' };

export function QuestLog() {
  return (
    <section aria-labelledby="quest-h" className="quest-log">
      <SectionHeading id="quest-h" title="QUEST LOG" meta="▸ CAMPAIGN: SKOGAI V1" />
      <div className="sk-quest-strip quest-log__strip">
        {quests.map((q) => (
          <div key={q.title} className={`sk-quest sk-quest-${q.state}`}>
            <div className="sk-quest-icon" aria-hidden="true">
              {ICON[q.state]}
            </div>
            <div>
              <div className="sk-quest-title">{q.title}</div>
              <div
                className="sk-quest-progress"
                role="progressbar"
                aria-label={q.title}
                aria-valuenow={q.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div style={{ width: `${q.progress}%` }} />
              </div>
              <div className="sk-quest-meta">{q.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
