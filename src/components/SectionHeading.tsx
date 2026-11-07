interface SectionHeadingProps {
  id: string;
  title: string;
  meta: string;
  /** `display` = Press Start headline, `label` = small UI label. */
  variant?: 'display' | 'label';
}

export function SectionHeading({ id, title, meta, variant = 'display' }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2 id={id} className={variant === 'display' ? 'sk-display section-heading__display' : 'sk-label section-heading__label'}>
        {title}
      </h2>
      <span className="sk-meta">{meta}</span>
    </div>
  );
}
