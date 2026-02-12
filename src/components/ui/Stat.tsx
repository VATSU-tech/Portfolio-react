const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="glass rounded-2xl px-5 py-4 hover-ring">
    <div className="text-2xl font-display text-ink">{value}</div>
    <div className="text-xs uppercase tracking-[0.3em] text-ink-muted">
      {label}
    </div>
  </div>
);

export default Stat;
