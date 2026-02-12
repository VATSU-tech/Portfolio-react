const Badge = ({ label }: { label: string }) => (
  <span className="badge badge-outline text-ink-muted border-stroke/60">
    {label}
  </span>
);

export default Badge;
