interface MeterProps {
  value: number;
  max: number;
  label?: string;
}

/** Blocky segment meter (`.sk-meter`). */
export function SegmentMeter({ value, max, label }: MeterProps) {
  return (
    <span className="sk-meter" role="img" aria-label={label ?? `${value} of ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <i key={i} className={i < value ? undefined : 'empty'} />
      ))}
    </span>
  );
}

/** Pixel HP row (`.sk-hearts`). */
export function Hearts({ value, max, label }: MeterProps) {
  return (
    <span className="sk-hearts" role="img" aria-label={label ?? `${value} of ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <i key={i} className={i < value ? undefined : 'empty'} />
      ))}
    </span>
  );
}
