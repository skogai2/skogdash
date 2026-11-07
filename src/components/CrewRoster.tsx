import { agents, type Agent, type AgentStatus } from '../data/fleet';
import { SegmentMeter } from './Meters';
import { SectionHeading } from './SectionHeading';

const STATUS: Record<AgentStatus, { className: string; label: string }> = {
  ok: { className: 'sk-badge sk-badge-success', label: '✓ OK' },
  run: { className: 'sk-badge sk-badge-warning', label: '⚡ RUN' },
  idle: { className: 'sk-badge sk-badge-muted', label: '▢ IDLE' },
  fail: { className: 'sk-badge sk-badge-danger', label: '✕ FAIL' },
};

function AgentCard({ agent }: { agent: Agent }) {
  const status = STATUS[agent.status];
  return (
    <article className="sk-card sk-card-default agent-card">
      <div className="agent-card__head">
        <div className="agent-card__id">
          <div className="sk-quest-icon icon-cabinet" aria-hidden="true">
            {agent.glyph}
          </div>
          <div className="agent-card__names">
            <h3 className="agent-card__name">{agent.name}</h3>
            <span className="sk-meta">{agent.role}</span>
          </div>
        </div>
        <span className={status.className}>{status.label}</span>
      </div>
      <p className="sk-card-body">{agent.note}</p>
      <code className="agent-card__task">{agent.task}</code>
      <div className="agent-card__foot">
        <span className="sk-stat-label">CONTEXT</span>
        <SegmentMeter value={agent.context} max={10} />
      </div>
    </article>
  );
}

export function CrewRoster() {
  return (
    <section aria-labelledby="roster-h" className="roster">
      <SectionHeading id="roster-h" title="CREW ROSTER" meta={`▸ ${agents.length} HANDS · SORTED BY ACTIVITY`} />
      <div className="roster__grid">
        {agents.map((a) => (
          <AgentCard key={a.name} agent={a} />
        ))}
      </div>
    </section>
  );
}
