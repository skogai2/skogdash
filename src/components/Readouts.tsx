import { readouts } from '../data/fleet';

export function Readouts() {
  return (
    <section aria-label="Fleet readouts" className="readouts">
      {readouts.map((r) => (
        <div
          key={r.label}
          className={r.tone === 'green' ? 'sk-plaque sk-plaque-green' : 'sk-plaque plaque-cabinet'}
        >
          <span className="sk-plaque-label">{r.label}</span>
          <span className="sk-plaque-value">{r.value}</span>
        </div>
      ))}
    </section>
  );
}
